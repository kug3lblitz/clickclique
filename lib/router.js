Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('posts'), Meteor.subscribe('comments')]; 
  }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); } 
});

Router.route('posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() { if (! Meteor.user()) {
  if (Meteor.loggingIn()) { 
    this.render(this.loadingTemplate);
    } else { 
      this.render('accessDenied');
    }
    } else {
      this.next(); 
   }
}

//returns 404 page (notFound) on null
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(requireLogin, {only: 'postEdit'});
