import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'public.home',
  action(params, queryParams) {
    this.render('publicLayoutsDefault', { page: 'pagesHome' });
  },
});
FlowRouter.route('/synonyms', {
  name: 'public.synonyms',
  action(params, queryParams) {
    this.render('publicLayoutsDefault', { page: 'pagesSynonyms' });
  },
});
// FlowRouter.route('/antonyms', {
//   name: 'public.antonyms',
//   action(params, queryParams) {
//     this.render('publicLayoutsDefault', { page: 'pagesAntonyms' });
//   },
// });
FlowRouter.route('/meaning', {
  name: 'public.meaning',
  action(params, queryParams) {
    this.render('publicLayoutsDefault', { page: 'pagesMeaning' });
  },
});

FlowRouter.route('*', {
  action() {
    this.render('notFound');
  },
});
