import { Template } from 'meteor/templating';
import './resultList.html';

Template.resultList.helpers({
  meaning() {
    return Template.instance().data.meaning;
  },
  synonyms() {
    return Template.instance().data.synonyms;
  },
  antonyms() {
    return Template.instance().data.antonyms;
  }
});
