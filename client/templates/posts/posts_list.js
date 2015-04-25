var postsData = [ {
    title: 'LOLCATS',
    url: 'http://lolcats.com/'
  },
  {
    title: 'Reddit',
    url: 'http://reddit.com'
}, {
    title: 'MeteorJS',
    url: 'http://meteor.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});
