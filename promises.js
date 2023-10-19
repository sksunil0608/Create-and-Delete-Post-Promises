
const posts = [
    { title: "Post One", body: "This is my first Post"},
    { title: "Post two", body: "This is my Second Post"}
];
const user ={
    username: "Sunil",
    lastactivityAt: new Date()

}
console.log(`Before Creating post 3 Last Activity Time: ${user.lastactivityAt}`)

let adminPanel = async ()=>{

    const getPost = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(posts)    
            }, 1000)
        })

    const createPost =(post)=> new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(!post){
                reject("Empty Post")
            }
            else{
                posts.push(post);
                resolve(`Post Created: ${post.title}`);
            }
            
        }, 1000);
    })

    const deletePost = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                item_deletd = posts.pop()
                resolve(item_deletd)
            }
            else{
                reject("ERROR")
            }
            
        },1000)
    })

    const updateLastUserActivityTime = ()=> new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.lastactivityAt = new Date()
            resolve(user.lastactivityAt);
            },2000)
        })

    let [create,update_time] = await Promise.all([createPost
        ({ title: "Third Post", body: "This is my third Post" }),updateLastUserActivityTime()])
    console.log(create)
    console.log(`Last Activity Time :${update_time}`)

    let show = await getPost;
    show.forEach(post => {
        console.log(post.title,":", post.body)
    });
    console.log(`Last Activity Time :${update_time}`)

    let [del,delete_time] = await Promise.all([deletePost,updateLastUserActivityTime()]);
    console.log(`Post Deleted: ${del.title}`)
    console.log(`Last Activity Time :${delete_time}`)
}

adminPanel();
