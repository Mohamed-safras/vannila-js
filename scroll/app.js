const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const date = document.querySelector("#date");
const nav = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

navToggle.addEventListener("click", function () {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

date.innerHTML = new Date().getFullYear();

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = btn.getAttribute("href").slice(1);
    const element = document.getElementById(target);
    const navHeight = nav.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    const fixedNav = nav.classList.contains("fixed-nav");
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += linksContainerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

const faq = document.querySelector(".questions");

const faqs = [
  {
    title: "do you accept all major credit cards?",
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint modi natus ut voluptate? Nulla deleniti porro illum, dolorem obcaecati fugit!",
  },
  {
    title: "How can I book a tour?",
    question:
      "You can book our tour offers right from the website and reserve them there. If you wish a tailor-made tour, you can send us an email and we will be happy to create an itinerary for you.",
  },
  {
    title: "What languages do you offer tours in?",
    question:
      "Generally we started Lviv Buddy Tours with a focus on high-quality tours in English and German. However, almost all our guides speak fluent Ukrainian and Russian as well, of course. Usually we will update our website with our exact offers as soon as possible, but if you need another language, you can always ask. In the long term we plan to add Polish and some other languages to our offers. And we would love to offer tours in Lithuanian, but there are not many people who speak it and could be a guide here. If you know a good guide with great language skills who is looking for a job, we are always happy about a tip!",
  },
  {
    title: "How many people are typically on your tours?",
    question:
      "Our private tours are only for the people you book for. If you are alone, it will just be you and your guide. If you are a couple, just the two of you and your guide, and so on. We believe this is the best type of tour, so that it can be personalised to you, go at your own pace, and so that you can have the full attention of your guide for the duration of the tour. ",
  },
];

faq.innerHTML = faqs
  .map((item, index) => {
    const { title, question } = item;
    return `<article class="question" id=${index}>
  <div class="question-header">
    <p>${title}</p>
    <button type="button" class="question-btn">
      <span class="plus-icon">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </span>
      <span class="minus-icon"
        ><i class="fa fa-minus" aria-hidden="true"></i
      ></span>
    </button>
  </div>
  <div class="question-text">
    <p>
      ${question}
    </p>
  </div>
</article>`;
  })
  .join("");

const questionBtn = document.querySelectorAll(".question-btn");

questionBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.parentElement.parentElement;
    target.classList.toggle("show-text");
  });
});

// function firstNonRepeatingLetter(s) {
//   let word = s.split("");
// }

function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "";
}

//console.log(firstNotRepeatingCharacter("ssssaaa"));

const tourdate = document.querySelector(".date");
const time = document.querySelectorAll(".time h3");
const deadline = document.querySelector(".remaing-time");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const featureDate = new Date(2021, 7, 5, 0, 0, 0);

tourdate.textContent = `${weekday[featureDate.getDay()]},${
  month[featureDate.getMonth()]
} ${featureDate.getDate()},${featureDate.getFullYear()}`;

function getTime() {
  const currentTime = new Date().getTime();
  const remaingTime = (featureDate.getTime() - currentTime) / 1000;

  const oneDay = 24 * 3600;
  const oneHour = 3600;
  const oneMinute = 60;

  let days = Math.floor(remaingTime / oneDay);
  let hours = Math.floor((remaingTime % oneDay) / oneHour);
  let minutes = Math.floor((remaingTime % oneHour) / oneMinute);
  let seconds = Math.floor(remaingTime % oneMinute);

  const value = [days, hours, minutes, seconds];

  function format(time) {
    return time < 10 ? `0${time}` : time;
  }

  time.forEach((item, i) => {
    item.innerHTML = format(value[i]);
  });

  if (remaingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>sorry this event has ended</h4>`;
  }
}

let countdown = setInterval(() => {
  getTime();
}, 1000);

const promo = document.querySelector(".promo");
const closed = document.querySelector(".close");
const input = document.querySelector(".input");
const bottom = document.querySelector(".bottom");
promo.addEventListener("click", toggle);
closed.addEventListener("click", toggle);

function toggle() {
  closed.classList.toggle("show-promo-code");
  input.classList.toggle("show-promo-code");
  bottom.classList.toggle("show-promo-code");
}
const removePromo = document.querySelector("#remove");
const submitPromo = document.querySelector("#submit");
input.addEventListener("keyup", (e) => {
  const target = e.currentTarget.value;
  submitPromo.disabled = false;
  if (target === "") {
    submitPromo.disabled = true;
  }
});

removePromo.addEventListener("click", () => {
  input.value = "";
  submitPromo.disabled = true;
});

const code = document.querySelector(".code");

submitPromo.addEventListener("click", () => {
  code.textContent = input.value;
  input.value = "";
  submitPromo.disabled = true;
});
/*
const about = document.querySelector("#about");
const title = document.querySelector(".title");

const children = title.remove("h1");

const newTitle = document.createElement("div");
newTitle.innerHTML = `<h1>about <span>us</span></h1>`;
newTitle.classList.add("title");
about.appendChild(newTitle);

console.log(newTitle);*/

/*
const div = document.createElement("div");
about.appendChild(div);

div.setAttribute("class", "title");

const title = document.createElement("h1");
title.textContent = "Title";
title.setAttribute("class", "title");

div.appendChild(title);
*/

const groceryList = document.querySelector(".grocery-list");
const grocery = document.querySelector(".grocery");
const groceryItem = document.querySelector(".grocery-item");

const addItem = (e) => {
  e.preventDefault();
  const value = groceryItem.value;
  const id = new Date().getTime.toString();

  const item = document.createElement("article");
  const attr = document.createAttribute("data-id");
  item.value = id;
  item.setAttributeNode(attr);
  item.classList.add("grocery-item");
  item.innerHTML = `<p>${value}</p>`;

  groceryList.appendChild(item);
};

grocery.addEventListener("submit", addItem);
/*
function cakes(recipes, available) {
  let makeCake;
  for (let recipe in recipes) {
    if (available[recipe]) {
      const possibleCakes = Math.floor(
        available[recipe] / recipes[recipe] || 0
      );
      if (!makeCake || possibleCakes < makeCake) {
        makeCake = possibleCakes;
      }
    } else {
      return 0;
    }
  }
  return makeCake;
}

console.log(
  cakes({ flour: 500, sugar: 200 }, { flour: 1200, sugar: 1200, milk: 200 })
);

let a = 1;

do {
  console.log(a++);
} while (a < 10);

function widthrow(widthrowAmount, balance) {
  let atmCharge = 0.5;
  if (widthrowAmount < balance + atmCharge && widthrowAmount % 5 == 0) {
    balance = balance - (widthrowAmount + atmCharge);
    return balance;
  } else if (widthrowAmount % 5 == 0) {
    return balance;
  } else {
    return balance;
  }
}

console.log(widthrow(120, 120.0));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let size = array.length - 1;

function binarySearch(array, high, low, value) {
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else if (array[mid] > value) {
      low = mid - 1;
    } else {
      return mid;
    }
  }
}

console.log(binarySearch(array, size, 0, 8));
*/

const loading = document.querySelector("#loading");
const progressBar = document.querySelector("#bar");

let barWidth = 0;

const animation = () => {
  barWidth++;
  progressBar.style.width = `${barWidth}%`;

  setTimeout(() => {
    loading.innerHTML = `${barWidth}% complete`;
  }, 10100);
};

setTimeout(() => {
  let interval = setInterval(() => {
    if (barWidth === 100) {
      clearInterval(interval);
    } else {
      animation();
    }
  }, 100);
}, 2000);
