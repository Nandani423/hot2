let navItems = document.querySelectorAll(".nav");
let container = document.querySelector(".container");

let url = "partials/partial-1.html";

function changePage(e) {
  e.preventDefault();
  url = e.target.getAttribute("href");
  handleAjax();
}

for (let navItem of navItems) {
  navItem.addEventListener("click", changePage);
}

function handleAjax() {
  fetch(url)
    .then(function (rsp) {
      return rsp.text();
    })
    .then(function (data) {
      container.innerHTML = data;
    });
}

handleAjax();
