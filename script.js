let btn = document.getElementById("btn");
let postBtn = document.getElementById("postBtn");

function getUsers() {
  let userApi = "https://jsonplaceholder.typicode.com/users";
  fetch(userApi).then(function (response) {
    if (response.ok) {
      response.json().then(function (user) {
        displayUser(user);
        console.log(user);
      });
    } else {
      console.log("issue fetching user at this time");
    }
  });
}

function getPost() {
  let postApi = "https://jsonplaceholder.typicode.com/posts";
  fetch(postApi).then(function (response) {
    if (response.ok) {
      response.json().then(function (post) {
          displayPost(post);
        console.log(post);
      });
    } else {
      console.log("issue fetching posts at this time");
    }
  });
}

function displayUser(user) {
 for(let i = 0; i < user.length; i++ ) {
    let primaryUserDiv = document.createElement('div')
    let userName = document.createElement('h3')
    userName.textContent = `${user[i].name}`

    primaryUserDiv.append(userName);
    document.querySelector("#displayUsers").append(primaryUserDiv)
 }
}

function displayPost(post) {
   for(let i = 0; i < post.length; i++ ) {
    let primaryPostDiv = document.createElement('div')

    let postTitle = document.createElement('h2')
    postTitle.textContent =`${post[i].title}`;

    let postBody = document.createElement('p')
    postBody.textContent = `${post[i].body}`

    primaryPostDiv.append(postTitle, postBody)
    document.querySelector("#displayPost").append(primaryPostDiv)
 }
}

btn.addEventListener("click", getUsers);
postBtn.addEventListener("click", getPost);
