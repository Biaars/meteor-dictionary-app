import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import axios from "axios";

Template.pagesSynonyms.onCreated(function () {
  this.synonyms = AppUtil.temp.get("synonyms") || new ReactiveVar([]);
  //null check synoms length kontrol
});
 Template.pagesSynonyms.onRendered(function () {
  const self = this
  this.autorun(function () {
    const inputText = AppUtil.temp.get('inputText')
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
      .then((response) => {
        const data = response.data;
        console.log(data);

        const synonyms = data[0]?.meanings[0]?.synonyms || [];
        AppUtil.temp.set("synonyms", synonyms);
      })
      .catch((error) => {
        console.error(error);
      });
  })
 })

Template.pagesSynonyms.helpers({
  synonyms() {
    return AppUtil.temp.get("synonyms");
  },
});
