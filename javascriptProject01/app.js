const menu = document.querySelector(".nav-toggle");
const section = document.querySelector(".links");
const overLey = document.querySelector(".overley");
const romoveTogle = document.querySelector(".romove-togle");

menu.addEventListener("click", () => {
  toggle();
});

overLey.addEventListener("click", () => {
  toggle();
});
romoveTogle.addEventListener("click", () => {
  toggle();
});

function toggle() {
  if (section.classList.contains("show-links")) {
    section.classList.remove("show-links");
  } else {
    section.classList.add("show-links");
  }
  if (overLey.classList.contains("show-overlay")) {
    overLey.classList.remove("show-overlay");
  } else {
    overLey.classList.add("show-overlay");
  }
}

function morning(name) {
  return `good morning ${name}`;
}

function greet(name, callback) {
  const myName = "peter";
  console.log(`${callback(name)} I am ${myName}`);
}

greet("safars", morning);
