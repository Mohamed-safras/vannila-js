import menu from "./data.js";

let num = 0;

console.log(--num);
console.log(num);
console.log(num++);
console.log(num);
console.log(num++);

console.log(++num);
console.log(num);
console.log(num--);
console.log(num);
const pigIt = (str) => {
  let data = str.split(" ");
  let b = [];
  for (let i = 0; i < data.length; i++) {
    let d = data[i].split("");

    d.push(d[0]);
    d.shift([0]);
    d.push("ay");

    let a = d.join("");
    b.push(a);
  }

  console.log(b.join(" "));
};
pigIt("Hello world !");
console.log(num);
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");

// window.addEventListener("DOMContentLoaded", () => {
//   displayMenu(menu);
//   menuBtn();
// });

// const displayMenu = (menuItem) => {
//   sectionCenter.innerHTML = menuItem
//     .map((item) => {
//       return `<article class="menu-item ">
//     <img
//       src=${item.img}
//       alt=${item.title}
//       class="photo"
//     />
//     <div class="item-info">
//       <header>
//         <h4 class="details-header">${item.title}</h4>
//         <h4 class="price">$${item.price}</h4>
//       </header>
//       <p class="item-text">
//         ${item.desc}
//       </p>
//     </div>
//   </article>`;
//     })
//     .join("");
// };

// const menuBtn = () => {
//   const menuBtns = menu.reduce(
//     (value, item) => {
//       if (!value.includes(item.category)) {
//         value.push(item.category);
//       }
//       return value;
//     },
//     ["all"]
//   );

//   btnContainer.innerHTML = menuBtns
//     .map((item, index) => {
//       return `<button data-id=${index} class="filter-btn" type="button">
//         ${item}
//       </button>`;
//     })
//     .join("");
//   const filterBtn = document.querySelectorAll(".filter-btn");
//   filterBtn.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const targetBtn = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter((item) => {
//         if (item.category === targetBtn) {
//           return item;
//         }
//       });
//       if (targetBtn === "all") {
//         displayMenu(menu);
//       } else {
//         displayMenu(menuCategory);
//       }
//     });
//   });
// };
/*
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-containe");

const displayMenu = (items) => {
  sectionCenter.innerHTML = items
    .map((item) => {
      const { id, title, price, img, desc } = item;
      return `<article class="menu-item">
      <img
       src=${img}
      alt=${title}
      class="photo"
     />
     <div class="item-info">
       <header>
       <h4 class="details-header">${title}</h4>
        <h4 class="price">$${price}</h4>
       </header>
       <p class="item-text">
         ${desc}
       </p>
    </div>
      </article>`;
    })
    .join("");
};
const displaybtn = () => {
  const menuBtn = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  btnContainer.innerHTML = menuBtn
    .map((item) => {
      return `<button data-id=${item} class="filter-btn" type="button">
           ${item}
         </button>`;
    })
    .join("");
  const btn = btnContainer.querySelectorAll(".filter-btn");
  btn.forEach((e) => {
    const targetBtn = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((item) => {
      if (item.category === targetBtn) {
        return item;
      }
    });
    if (targetBtn === "all") {
      displayMenu(menu);
    } else {
      displayMenu(menuCategory);
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displaybtn();
});
*/

function sumAll(arr) {
  let tot = arr.reduce((sum, item) => sum + item);

  let sum = 0;
  if (arr[0] < arr[arr.length - 1]) {
    for (let i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
      sum += i;
    }
    return sum + tot;
  } else if (arr[0] > arr[arr.length - 1]) {
    for (let i = arr[0] - 1; i > arr[arr.length - 1]; i--) {
      console.log(i);
      sum += i;
    }
    return sum + tot;
  } else {
    return tot;
  }
}

console.log(sumAll([10, 5]));
