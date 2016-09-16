Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {return Posts.findOne(this.params._id); } 
});

Router.route('/submit', {name: 'postSubmit'});
//returns 404 page (notFound) on null
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

