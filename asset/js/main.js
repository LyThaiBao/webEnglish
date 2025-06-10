//======================================================== Box Search=========================================================
let btn = document.querySelector(".navbar__boxSearch button");
let boxSearch = document.querySelector(".box__search");
console.log(btn);

btn.addEventListener("click", function (e) {
  information.forEach((value) => {
    value.lastElementChild.classList.remove("display__content");
  });
  boxSearch.classList.toggle("width__boxsearch--active");
  boxSearch.firstElementChild.focus();
});
// ======================================================Introduce==========================================================
let information = document.querySelectorAll(".weare__item");
function addClass() {
  information.forEach((value) => {
    value.addEventListener("click", function () {
      for (let i of information) {
        i.lastElementChild.classList.remove("display__content");
      }
      value.lastElementChild.classList.add("display__content");
      for (let i of information) {
        i.firstElementChild.classList.remove("weare__focus");
      }
      value.firstElementChild.classList.add("weare__focus");
    });
  });
}
function hadleClass() {
  addClass();
}
hadleClass();
