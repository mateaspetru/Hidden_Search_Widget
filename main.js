const $ = (selector) => document.querySelector(selector);
const container = $(".container");
const input = $(".input");
const btn = $(".btn");

btn.addEventListener("click", () => {
  container.classList.toggle("active");
  input.classList.toggle("active");
});
