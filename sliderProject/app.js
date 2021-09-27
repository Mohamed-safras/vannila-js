import people from "./data.js";

const continer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideRound = document.querySelector(".slide-round");
continer.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let posstion = "next";
    if (slideIndex === 0) {
      posstion = "active";
    }
    if (slideIndex === people.length - 1) {
      posstion = "last";
    }
    return `<article class="slide ${posstion}">
    <img
       src="${img}"
       class="img"
       alt="${name}"
    />
     <h4>${name}</h4>

    <p class="title">${job}</p>
     <p class="text">
      ${text}
     </p>
  </article>
   `;
  })
  .join("");

slideRound.innerHTML = people
  .map((person, slideIndex) => {
    let pos = "next";
    if (slideIndex === 0) {
      pos = "active";
    }
    if (slideIndex === people.length - 1) {
      pos = "last";
    }
    return `
    <div class="dot ${pos}">.</div>
   `;
  })
  .join("");

const slider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = continer.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prve") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = continer.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

const sliderRound = (type) => {
  console.log("d");
};
nextBtn.addEventListener("click", () => {
  slider();
  sliderRound();
});
prevBtn.addEventListener("click", () => {
  slider("prve");
  sliderRound();
});
