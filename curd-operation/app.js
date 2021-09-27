const onSubmit = document.querySelector("#onsubmit");
let emp = document.querySelector("#emp");
const value = document.querySelector(".value");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let address = document.getElementById("address");
let selectedRow = null;
onSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validate(firstName, id1) &&
    validate(lastName, id2) &&
    validate(age, id3) &&
    validate(address, id4)
  ) {
    let data = getData();
    if (selectedRow === null) {
      insertNewRecord(data);
    } else {
      updateData(data);
    }
    removeField();
  }
});

function getData() {
  return {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    address: address.value,
  };
}

function insertNewRecord(data) {
  const table = document.querySelector("#emp").getElementsByTagName("tbody")[0];
  let newrow = table.insertRow(table.length);
  cell1 = newrow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newrow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newrow.insertCell(2);
  cell3.innerHTML = data.age;
  cell4 = newrow.insertCell(3);
  cell4.innerHTML = data.address;
  cell4 = newrow.insertCell(4);
  cell4.innerHTML = `<a href="#" onclick="editData(this)">edit</a> <a onclick="onDelete(this)"  href="#">delete</a>`;
}

function removeField() {
  firstName.value = "";
  lastName.value = "";
  age.value = "";
  address.value = "";
  selectedRow = null;
}

function editData(data) {
  selectedRow = data.parentElement.parentElement;
  firstName.value = selectedRow.cells[0].innerHTML;
  lastName.value = selectedRow.cells[1].innerHTML;
  age.value = selectedRow.cells[2].innerHTML;
  address.value = selectedRow.cells[3].innerHTML;
}

function updateData(data) {
  selectedRow.cells[0].innerHTML = data.firstName;
  selectedRow.cells[1].innerHTML = data.lastName;
  selectedRow.cells[2].innerHTML = data.age;
  selectedRow.cells[3].innerHTML = data.address;
}

function onDelete(data) {
  if (confirm("Are you sure you want to delete this row?")) {
    let row = data.parentElement.parentElement;
    document.querySelector("#emp").deleteRow(row.rowIndex);
  }
}

let isValid = true;
const id1 = document.querySelector("#first");
const id2 = document.querySelector("#second");
const id3 = document.querySelector("#third");
const id4 = document.querySelector("#fourth");
function validate(filed, id) {
  if (filed.value === "") {
    isValid = false;
    id.classList.add("show");
  } else {
    isValid = true;
    if (id.classList.contains("show")) {
      id.classList.remove("show");
    }
  }
  return isValid;
}

const posts = [
  {
    title: "post one",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam!",
  },
  {
    title: "post two",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam!",
  },
];

const showPost = () => {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = new Error("something went wrong");
      if (error) {
        resolve();
      } else {
        reject(error);
      }
    }, 3000);
  });
}

createPost({ title: "post three", des: "dvdsshj" })
  .then(() => {
    showPost();
  })
  .catch((error) => {
    confirm(error.message);
  });

const stocks = {
  fruits: ["strawberry", "grapes", "apple", "orange"],
  liquid: ["water", "ice"],
  holdings: ["cone", "cup", "stick"],
  topping: ["chocolate", "peanut"],
};

/*
  const order = (callback)=>{
    setTimeout(()=>{
      
      console.log("Order placed")
      callback()
    },2000)

  }

//callback hell
  const production =()=>{
    console.log("production has been started");
    setTimeout(()=>{
      console.log(`${stocks.fruits[0]} and ${stocks.fruits[1]} was added`)
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        setTimeout(()=>{
          console.log("machine was started")
          setTimeout(()=>{
            console.log(`ice cream was put in the ${stocks.holdings[1]}`)
            setTimeout(()=>{
              console.log(`${stocks.topping[0]} and ${stocks.topping[1]} was added`)
              setTimeout(()=>{
                console.log("ice cream was served")
              },2000)
            },3000)
          },2000)
        },1000);
      },1000)
    },2000)
  }

  order(production)

*/

let is_shopIsOpen = true;

const newOrder = (work, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_shopIsOpen) {
        return resolve(work());
      }
      return reject(new Error("something went wrong"));
    }, time);
  });
};

newOrder(() => {
  console.log("Order placed");
  console.log("production has been started");
}, 2000)
  .then(() => {
    return newOrder(() => {
      console.log(`${stocks.fruits[0]} and ${stocks.fruits[1]} was added`);
    }, 4000)
      .then(() => {
        return newOrder(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        }, 3000);
      })
      .then(() => {
        return newOrder(() => {
          console.log("machine was started");
        }, 3000);
      })
      .then(() => {
        return newOrder(() => {
          console.log(`ice cream was put in the ${stocks.holdings[1]}`);
        }, 2000);
      })
      .then(() => {
        return newOrder(() => {
          console.log(
            `${stocks.topping[0]} and ${stocks.topping[1]} was added`
          );
        }, 3000);
      })
      .then(() => {
        return newOrder(() => {
          console.log("ice cream was served");
        }, 2000);
      });
  })
  .catch((error) => alert(error.message));
