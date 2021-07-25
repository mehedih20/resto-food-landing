const checkbox = document.querySelector(".checkbox");
const navList = document.querySelector(".nav-list");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    navList.classList.add("toogle");
  } else {
    navList.classList.remove("toogle");
  }
});
