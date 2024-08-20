import { ReactiveDict } from 'meteor/reactive-dict';

AppUtil = {
  temp: new ReactiveDict(null, {}),
  refreshTokens: new ReactiveDict(null, {}),
};

Template.registerHelper("appUtil", function () {
  return AppUtil;
});
