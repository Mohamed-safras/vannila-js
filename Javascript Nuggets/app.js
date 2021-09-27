const menu = [
  {
    name: "pizza",
    catageory: "dinner",
  },
  {
    name: "berger",
    catageory: "lunch",
  },
  {
    name: "bread",
    catageory: "breakfast",
  },
  {
    name: "rich&curry",
    catageory: "dinner",
  },
  {
    name: "noodles",
    catageory: "breakfast",
  },
];

const catagories = ["all", ...new Set(menu.map((item) => item.catageory))];
console.log(catagories);

const result = document.querySelector(".result");

result.innerHTML = catagories
  .map((value) => {
    return `<button>${value}</button>`;
  })
  .join("");

const dinner = menu
  .filter((e) => e.catageory === "breakfast")
  .map((e) => e.name);

console.log(dinner);

let s = "";
const stringArray = ["batman", "spiderman", "ionman", "superman", "gray man"];
for (let i = 0; i < stringArray.length; i++) {
  s += stringArray[i];
}
console.log(s);

// /console.log(stringArray[stringArray.length -1]);

const allNames = ["hulk", "tony"];

//console.log(stringArray.concat(allNames));
//console.log(stringArray.reverse());

const firstName = ["batman", "spiderman", "ionman", "superman", "gray man"];
const lastName = ["tony", "hulk", "captainAmerica", "natasha", "thor"];
const fullName = [];

for (let i = 0; i < firstName.length || i < lastName.length; i++) {
  fullName.push(
    `HI ${firstName[i].toUpperCase().trim()} ${lastName[i].toUpperCase()}`
  );
}
console.log(fullName);

// calculate total

const gas = [100, 78];
const vegtable = [4, 50, 50];

const calculateTotale = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`whoa ! you are spending too much`);
    return total;
  } else {
    console.log(`you are goog total is less then 100`);
  }
  return total;
};

const gasTotal = calculateTotale(gas);
const vegtableTotale = calculateTotale(vegtable);

const homeExpendture = {
  gas: gasTotal,
  vegtable: vegtableTotale,
};

console.log(homeExpendture);

const value = 10;

{
  !value ? console.log("false") : console.log("true");
}

const person = [
  {
    name: "Safras",
    age: 21,
    position: "student",
    department: "ICT",
  },
  {
    name: "Arafath",
    age: 21,
    position: "student",
    department: "ICT",
  },
  {
    name: "Rifnas",
    age: 21,
    position: "student",
    department: "EGT",
  },
  {
    name: "Kiflan",
    age: 21,
    position: "student",
    department: "EGT",
  },
  {
    name: "Dilakshan",
    age: 21,
    position: "student",
    department: "EGT",
  },
  {
    name: "Saranka",
    age: 21,
    position: "student",
    department: "ICT",
  },
  {
    name: "Vithushan",
    age: 21,
    position: "student",
    department: "ICT",
  },
  {
    name: "Riza",
    age: 21,
    position: "student",
    department: "BST",
  },
  {
    name: "Fareeha",
    age: 21,
    position: "student",
    department: "ICT",
  },
  {
    name: "Dhanusika",
    age: 21,
    position: "student",
    department: "ICT",
  },
  {
    name: "Siyam",
    age: 21,
    position: "student",
    department: "EGT",
  },
];

const ICT = person
  .filter((student) => {
    return student.department === "ICT";
  })
  .map((student) => {
    return `${student.name.toLocaleUpperCase()} - ${student.department}`;
  });

const EGT = person
  .filter((student) => {
    return student.department === "EGT";
  })
  .map((student) => {
    return `${student.name.toLocaleUpperCase()} - ${student.department}`;
  });

const BST = person
  .filter((student) => {
    return student.department === "BST";
  })
  .map((student) => {
    return `${student.name.toLocaleUpperCase()} - ${student.department}`;
  });

console.log(ICT);
console.log(EGT);
console.log(BST);
document.body.innerHTML = `<h4>${ICT.join("")
  .fontcolor("darkslateblue")
  .trim()}</h4>`;

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return `cannot find the factorial of a negetive integer`;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(9));

let n = 5;
let fact = n;
while (n > 1) {
  n--;
  fact = fact * n;
}
console.log(fact);

const convertToRupee = (doller) => {
  if (typeof doller === "number") {
    return doller * 1200;
  } else {
    throw new Error("Cannot convert toRupee");
  }
};

try {
  const rupee = convertToRupee("5");
  console.log(rupee);
} catch (error) {
  console.dir(error);
}
