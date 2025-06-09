let btn = document.querySelector(".navbar__boxSearch button");
let boxSearch = document.querySelector(".box__search");
console.log(btn);

btn.addEventListener("click", function (e) {
  boxSearch.classList.toggle("width__boxsearch--active");
  boxSearch.firstElementChild.focus();
});
