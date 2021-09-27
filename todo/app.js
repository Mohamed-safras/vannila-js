const form = document.querySelector(".grocery-form");
const grocery = document.querySelector(".grocery");
const groceryAlert = document.querySelector(".alert");
const groceryContiner = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const submitbtn = document.querySelector(".grocery-btn");
const clearList = document.querySelector(".clear");

let editvalue = false;
let editelement;
let editId = "";

/* functions*/
const addItem = (e) => {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editvalue) {
    const article = document.createElement("article");
    article.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    article.setAttributeNode(attr);
    article.innerHTML = `<p class="title">${value}</p>
    <div class="btn">
      <button class="edit">edit</button>
      <button class="delete">delete</button>
    </div>`;
    const deletebtn = article.querySelector(".delete");
    const editbtn = article.querySelector(".edit");
    deletebtn.addEventListener("click", deleteItem);

    groceryList.appendChild(article);
    alterDisplay(`new item added - ${value}`, "success");
    groceryContiner.classList.add("show-item");
    disable();
  } else if (value && editvalue) {
    console.log("editing");
  } else {
    alterDisplay("please enter a value", "danger");
  }
};

function alterDisplay(text, action) {
  groceryAlert.textContent = text;
  groceryAlert.classList.add(action);
  setTimeout(() => {
    groceryAlert.textContent = "";
    groceryAlert.classList.remove(action);
  }, 1000);
}

function disable() {
  grocery.value = "";
  editvalue = false;
  editId = "";
  submitbtn.textContent = "submit";
}

function clear() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      groceryList.removeChild(item);
      console.log(item);
    });
    groceryContiner.classList.remove("show-item");
    alterDisplay("empty list", "success");
    disable();
  }
}

function deleteItem(e) {
  const items = e.currentTarget.parentElement.parentElement;

  groceryList.removeChild(items);
  if (groceryList.children.length === 0) {
    groceryContiner.classList.remove("show-item");
  }
  alterDisplay(`item successfully removed`, "success");
  disable();
}
// events
form.addEventListener("submit", addItem);
clearList.addEventListener("click", clear);

const itemList = document.getElementsByClassName("fruit");
const itemsTagName = document.getElementsByTagName("li");
const DisplayitemsTagName = [...itemsTagName];
console.log(DisplayitemsTagName);
DisplayitemsTagName.forEach(
  (item) => (item.innerHTML = "<p>cds</p>".toUpperCase())
);
const DisplayItem = [...itemList];

DisplayItem.forEach((item) => {
  item.style.color = "yellow";
});

const names = "safras";
console.log([...names]);

const friends = ["a", "b", "c", "d", 432];
const newFriends = [...friends, "sdgafh"];
newFriends[0] = "bsada";
newFriends[1] = "sa";
console.log(friends);
console.log(newFriends);
