let db = {
    users: [
        {
            userId: 'dfvus54bvvh56unb5se2',
            email: 'user@gmail.com',
            handle: 'user',
            createdAt: '2020-03-15T10:59:52.798Z',
            imageUrl: 'image/sdfhueifh/wegruwhyfsdbv',
            bio: 'heelllloooo',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-04-28T21:50:50.989Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: '3254whg844tfd',
            body: 'nice one',
            createdAt: '2020-04-28T21:50:50.989Z'
        }
    ]
};

const userDetails = {
    // Redux
    credentials: {
            userId: 'dfvus54bvvh56unb5se2',
            email: 'user@gmail.com',
            handle: 'user',
            createdAt: '2020-03-15T10:59:52.798Z',
            imageUrl: 'image/sdfhueifh/wegruwhyfsdbv',
            bio: 'heelllloooo',
            website: 'https://user.com',
            location: 'London, UK'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'ht5ot67075giuyh5ukkrg'
        },
        {
            userHandle: 'user',
            screamId: 'ht5ot67075giuyh5ukkrg'
        }
    ]
};