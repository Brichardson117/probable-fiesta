let users = document.getElementById("user");
let btn = document.getElementById("btn");

function getUsers() {
  let userApi = "https://jsonplaceholder.typicode.com/users";
  fetch(userApi).then(function (response) {
    if (response.ok) {
      response.json().then(function (user) {
        // displayUser(user);
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
        //   displayPost(post);
          console.log(post);
        });
      } else {
        console.log("issue fetching posts at this time");
      }
    });
}




btn.addEventListener('click', getPost);