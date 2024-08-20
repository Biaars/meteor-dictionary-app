import { Template } from "meteor/templating";
import axios from "axios";

Template.pagesMeaning.onCreated(function () {
  this.meaning = new ReactiveVar([]);
});

Template.pagesMeaning.onRendered(function () {
  const self = this;
  this.autorun(function () {
    const inputText = AppUtil.temp.get("inputText");
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
      .then((response) => {
        const data = response.data;

        if (Array.isArray(data)) {
          const meanings = data.map((entry) => {
            const partOfSpeech = entry.meanings[0].partOfSpeech;
            const definitions = entry.meanings[0].definitions.map(
              (def) => def.definition
            );

            return { partOfSpeech, definitions };
          });

          self.meaning.set(meanings);
        } else {
          self.meaning.set([]);
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
        self.meaning.set([]);
      });
  });
});

Template.pagesMeaning.helpers({
  meaning() {
    return Template.instance().meaning.get();
  },
  hasNounMeanings() {
    const meanings = Template.instance().meaning.get();
    return meanings.some((meaning) => meaning.partOfSpeech === "noun");
  },
  hasVerbMeanings() {
    const meanings = Template.instance().meaning.get();
    return meanings.some((meaning) => meaning.partOfSpeech === "verb");
  },
});
