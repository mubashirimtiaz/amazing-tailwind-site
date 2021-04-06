const toggleBtn = document.querySelectorAll(".toggleBtn");
const menu = document.querySelector(".menu");
toggleBtn.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    !menu.classList.contains("hidden")
      ? menu.classList.add("hidden")
      : menu.classList.remove("hidden");
  });
});
