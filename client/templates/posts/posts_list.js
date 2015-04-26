var postsData = [ {
    title: 'Funny',
    url: 'http://lolcats.com/'
  },
  {
    title: 'Reddit',
    url: 'http://reddit.com'
}, {
    title: 'MeteorJS',
    url: 'http://meteor.com'
  },
  {
    title: 'Job Searches',
    url: 'http://indeed.com'
} 
];
Template.postsList.helpers({
  posts: postsData
});
