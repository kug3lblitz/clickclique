//fixture data

if (Posts.find().count() === 0) {
    var now = new Date().getTime();
// create two users
    var patId = Meteor.users.insert({ 
      profile: { name: 'Patrick W' }
    });

    var pat = Meteor.users.findOne(patId); 
    
    var katId = Meteor.users.insert({
      profile: { name: 'Katie F' }
    });

    var kat = Meteor.users.findOne(katId);

    var interestingPostId = Posts.insert({
      title: 'Pinterest',
      userId: kat._id,
      author: kat.profile.name,
      url: 'http://pinterest.com/', submitted: new Date(now - 7 * 3600 * 1000)
    });
    
    Comments.insert({
      postId: interestingPostId,
      userId: pat._id,
      author: pat.profile.name,
      submitted: new Date(now - 5 * 3600 * 1000),
      body: 'Testing, testing, 1,2,3.'
    });

    Comments.insert({
      postId: interestingPostId,
      userId: kat._id,
      author: kat.profile.name,
      submitted: new Date(now - 3 * 3600 * 1000), 
      body: '10-4 Ghost Rider'
    });

    Posts.insert({
      title: 'Oh, look a cool post!',
      userId: pat._id,
      author: pat.profile.name,
      url: 'http://finance.google.com',
      submitted: new Date(now - 10 * 3600 * 1000)
    });

    Posts.insert({
      title: 'More stuff that\'s fun',
      userId: pat._id,
      author: pat.profile.name,
      url: 'http://distrowatch.com',
      submitted: new Date(now - 12 * 3600 * 1000)
    }); 
}
