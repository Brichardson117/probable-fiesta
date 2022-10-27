let btn = document.getElementById("btn");
let postBtn = document.getElementById("postBtn");


//function to get users from API
function getUsers() {
  let userApi = "https://jsonplaceholder.typicode.com/users";
  fetch(userApi).then(function (response) {
    if (response.ok) {
      response.json().then(function (user) {
        displayUser(user);
      });
    } else {
      console.log("issue fetching user at this time");
    }
  });
}

//display user
function displayUser(user) {
  for (let i = 0; i < user.length; i++) {
    let primaryUserDiv = document.createElement("div");
    primaryUserDiv.classList = "card";

    let personName = document.createElement('h2');
    personName.textContent = `${user[i].name}`;

    let userName = document.createElement("h3");
    userName.textContent = `User Name: ${user[i].username}`;

    let profilePic = document.createElement("img");
    profilePic.src = `./images/image${i}.jpg`;

    let postButton = document.createElement('button')
    postButton.textContent = `Display ${user[i].name}'s post`

    primaryUserDiv.append(profilePic, personName, userName, postButton);
    document.querySelector("#displayUsers").append(primaryUserDiv);

    postButton.addEventListener('click', getPost(user[i].id));
  }
}

//get post
function getPost(id) {
  let postApi = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
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

// display post
function displayPost(post, id) {
for(let i = 0; i < post.length; i++) {
    // console.log(post[i].userId[id])
}
}

getUsers();


