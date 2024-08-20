import { Template } from 'meteor/templating';

Template.InputButton.events({
  'click #brd-button-search'(event, templateInstance) {
    const inputValue = templateInstance.$('#brd-input').val();
    AppUtil.temp.set('inputText', inputValue);
    console.log(inputValue)
  },
  
  'keypress #brd-input'(event, templateInstance) {
    if (event.which === 13) { 
      const inputValue = templateInstance.$('#brd-input').val();
      AppUtil.temp.set('inputText', inputValue);
    }
  }
});

Template.InputButton.helpers({
  inputText() {
    return AppUtil.temp.get('inputText');
  }
});
