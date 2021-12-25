const arguments = process.argv.slice(2);
let posts = [
    {author: "Ahmet", title: "Javascript"},
    {author: "Mehmet", title: "Python"},
    {author: "Ali", title: "C"},
];

function addPost(author,title){
    return new Promise((resolve,reject)=>{
        console.log("Adding post");
        resolve(posts.push({author : author, title : title}));

        reject(console.log("Could not add the post"));
    })
}

function listPosts(){
    console.log(posts);
}

function addAndShow(arg1,arg2)
{
    addPost(arg1,arg2);
    listPosts();
}

addAndShow(arguments[0],arguments[1]);