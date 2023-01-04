const header = document.querySelector(".head");
const headerOne = document.querySelector(".head-primary");
const headerTwo = document.querySelector(".head-secondary");
const headerText = document.querySelector(".head-text");
const arrow = document.querySelector(".arrow");
const skills = document.querySelector(".skills-container");

// defer hero load
window.addEventListener("load", (e) => {
  console.log("the page has loaded");
  setTimeout(() => {
    header.classList.remove("hidden");
  }, "500");
  setTimeout(() => {
    arrow.classList.remove("hidden");
  }, "2000");
});

// click arrow to scroll to next element
arrow.addEventListener("click", (e) => {
  skills.scrollIntoView({ behavior: "smooth", block: "center" });
  arrow.classList.add("hidden");
});

// resets arrow when scroll to top
window.addEventListener("scroll", (e) => {
  if (window.scrollY === 0) {
    arrow.classList.remove("hidden");
  }
});
