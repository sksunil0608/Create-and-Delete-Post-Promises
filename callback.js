const posts = [
    { title: "Post One", body: "This is my first Post", createdAt: new Date().getTime() },
    { title: "Post two", body: "This is my Second Post", createdAt: new Date().getTime() }
];

let intervalId = 0;
function getPost() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body} - 
            Last Updated ${(new Date().getTime() - post.createdAt) / 1000} seconds Ago</li>`
            document.body.innerHTML = output;
            })
        }, 1000)

    }, 1000)

}


// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post);
//     },2000);
// }

// createPost({title:"Third Post", body:"This is my third Post"})

// // I am not getting the third post as timeout of this is later. so we use call back
// getPost();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000);
}
function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        callback();
    }, 2000);
}

createPost({ title: "Third Post", body: "This is my third Post" }, getPost);
create4thPost({ title: "Fourth Post", body: "This is my Fourth Post" }, getPost);