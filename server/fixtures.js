if (Posts.find().count() === 0) {
    
    Posts.insert({
        title: 'Learn to Code',
        url: 'http://theironyard.com' 
    });

    Posts.insert ({
        title: 'Waste some time',
        url: 'http://reddit.com'
    });

    Posts.insert ({
        title: 'Cool Post',
        url: 'http://google.com'
    });
}
