const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post Two', body: 'This is post two body'}
];

function getPosts() {
    setTimeout( () => {
        myPosts.forEach( (post) => {
            console.log(post.title);
        })
}, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            myPosts.push(post);
            const error = true;
            if(!error) {
                resolve();
            } else {
                reject("Error something went wrong");
            }
        }, 2000);
    });
}

async function init() {
    try {
        await createPost({title: 'Post Three', body: 'This is post three body'});
        getPosts();
    } catch (err) {
        console.log(err)
    }
}
init();

// getPosts();
// createPost({title: 'Post Three', body: 'This is post three body'}).then(getPosts).catch( (e) => {
//     console.log(e);
// });
// getPosts();