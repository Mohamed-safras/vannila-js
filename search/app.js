import { product } from "./data.js";

const searchProduct = document.querySelector(".search-product");
const searchInput = document.querySelector(".search-input");
const listItems = document.querySelector(".list-items");
const continer = document.querySelector(".continer");

searchProduct.addEventListener("submit", searchItem);

function searchItem(e) {
  e.preventDefault();
  const searchValue = searchInput.value;

  const searchList = product
    .filter((items) => {
      if (
        searchValue.includes(items.name) ||
        searchValue.includes(items.brand) ||
        searchValue.includes(items.category)
      ) {
        return items;
      }
    })
    .map((items, index) => {
      return `<article class="product" id="${index}">
      <img
        src=${items.img}
        alt=""
      />
      <h5 class="price">$${items.price}</h5>
      <h5 class="product-name">${items.name}</h5>
      <h5 class="brand">${items.brand}</h5>
    </article>`;
    })
    .join("");
  if (searchList) {
    listItems.innerHTML = searchList;
  } else {
    continer.innerHTML = `<h5 class="not-found">sorry item not found!</h5>`;
  }
}
