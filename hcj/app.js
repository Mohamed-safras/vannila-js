const calcTip = (bill) => {
  return bill >= 1100 && bill <= 2100 ? bill * 0.3 : bill * 0.1;
};

const bill = [20, 30, 50, 100, 5000, 10000, 100];
const tip = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
  const tips = calcTip(bill[i]);
  tip.push(tips);
  total.push(tips + bill[i]);
}
let totals = 0;
let avg = 0;
for (let i = 0; i < total.length; i++) {
  totals += total[i];
}
console.log(total);

avg = totals / total.length;
console.log(totals, avg);

// const reverse = document.querySelector(".reverse");

// reverse.addEventListener("click", function () {
//   revers();
// });

let word = "hello";
function revers() {
  let reverse = "";
  let array = [word.length];
  let letter = 0;
  for (let i = word.length - 1; i >= 0; i--) {
    array[letter] = word[i];
    letter++;
  }

  for (let i = 0; i < word.length; i++) {
    reverse += array[i];
  }
  console.log(`This user entered sentence : ${word}`);
  console.log(`This reverse sentence : ${reverse}`);

  if (word === reverse) {
    console.log("This is same in reverse");
  } else {
    console.log("This is not same in reverse");
  }
}

revers();
// let result = word.slice(0, 10);
let result = word.substr(1, 4);
console.log(result);

let value = word.replace("a", "w");
console.log(value);

const string = new String("   hello world ");
console.log(string.trim());

import people from "./data.js";

const container = document.querySelector(".slide-container");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

container.innerHTML = people
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
    alt="${name}"
    class="img"
  />
  <div class="title">${name}</div>
  <h4 class="">${job}</h4>
  <div class="text">
    ${text}
  </div>
  
</article>`;
  })
  .join("");

const slider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prve") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  slider();
});

prevBtn.addEventListener("click", () => {
  slider("prve");
  console.log(slider);
});

const user = {
  firstName: "Mohamed",
  lastName: "Safras",
  age: 22,
  sayName: function () {
    console.log(`my name is ${this.firstName}`);
    const fullName = () => {
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    };
    fullName();
  },
};

user.sayName();

const longest = (str) => {
  const long = str.split("");
  console.log(long);
  console.log(str);
};

longest("my name is Safars");

const sentence = (size) => {
  let sizes = size.substr(0, 100);

  console.log(size.length >= 100 ? sizes + "..." : sizes);
};

sentence(
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis perspiciatis voluptas debitis excepturi voluptatibus  "
);

function Replace(word, first_word, second_word) {
  let names = word.split(" ");
  for (let i = 0; i < names.length; i++) {
    if (names[i] === first_word) {
      second_word = second_word[0] + second_word.slice(1);
    }
  }
  console.log(word.replace(first_word, second_word));
}

Replace(
  "The Department of Information and Communication Technology",
  "and",
  "or"
);

function searchReplace(str, word, newWord) {
  if (word[0] === word[0]) {
    newWord = newWord[0] + newWord.slice(1);
  }
  return str.replace(word, newWord);
}

console.log(
  searchReplace(
    "The Faculty of Information and Communication Technology",
    "Faculty",
    "Department"
  )
);

const cart = [
  {
    title: "iphone 12",
    price: 1000.763,
    amout: 5,
  },
  {
    title: "iphone 11",
    price: 850.7834,
    amout: 3,
  },
  {
    title: "galaxy 12",
    price: 300.62234,
    amout: 2,
  },
  {
    title: "iphone se",
    price: 750.2842,
    amout: 10,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amout, price } = cartItem;

    total.cartTotal += amout;
    total.totalItems += amout * price;
    return total;
  },
  {
    cartTotal: 0,
    totalItems: 0,
  }
);

totalItems = parseFloat(totalItems.toFixed(2));

console.log(totalItems, cartTotal);

const splited = (str) => {
  return str
    .split("")
    .splice(3, str.length - 2)
    .join(" ");
};
console.log(splited("my name is safras"));

const array = ["safars", 20, "sss"];

console.log(array.splice(2, 2));
console.log(array);

console.log(array.slice(1, 2));

const count = (string) =>
  string.split("").reduce((acc, el) => {
    if (acc.hasOwnProperty(el)) acc[el]++;
    else acc[el] = 1;
    return acc;
  }, {});

console.log(count("my name is is safras"));
/*
const moring = () => {
  return `moring`;
};

const evening = () => {
  return `evening`;
};
const night = () => {
  return `night`;
};

const greet = (callback) => {
  const myName = "safras";
};

console.log(greet(moring));
greet(evening);
greet(night);*/

const radius = [3, 1, 2, 4];

//higher order function
const calculate = (callback, output) => {
  const outputArray = [];
  for (let i = 0; i < radius.length; i++) {
    outputArray.push(callback(radius[i]));
  }
  console.log(`${output} is :`);
  return outputArray;
};

//callback function for calculate function
const calculateCircumference = (rad) => {
  return 2 * Math.PI * rad;
};

//callback function for calculate function
const calculateDiameter = (rad) => {
  return 2 * rad;
};

//callback function for calculate function
const calculateArea = (rad) => {
  return Math.PI * rad * rad;
};

console.log(calculate(calculateCircumference, "circumferences"));
console.log(calculate(calculateDiameter, "diameters"));
console.log(calculate(calculateArea, "areas"));

const search = people
  .filter((item) => {
    if (item.job.includes("developer")) {
      return item;
    }
  })
  .map((item) => item.name);

console.log(search);
