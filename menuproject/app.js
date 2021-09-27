const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img:
      "https://www.simplejoy.com/wp-content/uploads/2017/12/the_best_buttermilk_pancakes_picture-500x500.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://www.dennys.ca/wp-content/uploads/2019/10/images-1.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://uproxx.com/wp-content/uploads/2019/07/grid_milkshake.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/36/d8/8e/hill-country-delight.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://static.toiimg.com/photo/74845076.cms",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img:
      "https://www.365daysofbakingandmore.com/wp-content/uploads/2014/05/Oreo-Pudding-Dream-Bars-FEATURE.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "noodles",
    category: "breakfast",
    price: 8.99,
    img:
      "https://plantd.co/wp-content/uploads/2019/08/Whole-Wheat-Noodles-in-Coconut-Milk-and-Peanut-Sauce.png",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img:
      "https://ethnicfoodsrus.com/wp-content/uploads/2014/12/Classic-American-Side-Dishes-Photo-Attributed-to-Author-Jennifer-Woodard-Maderazo.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Kottu",
    category: "dinner",
    price: 16.99,
    img:
      "https://lp-cms-production.imgix.net/2020-11/shutterstock_1050903170.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "biriyani",
    category: "lunch",
    price: 22.99,
    img:
      "https://vaya.in/recipes/wp-content/uploads/2018/03/Ambur-Chicken-Biriyani.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Zucchini slice",
    category: "dinner",
    price: 32.99,
    img:
      "https://img.taste.com.au/WDTI88v1/w720-h480-cfill-q80/taste/2016/11/zucchini-slice-10160-1.jpeg",
    desc: `The humble zucchini slice is by far taste.com.au's most popular recipe. Find out why!`,
  },
  {
    id: 12,
    title: "Butter chicken",
    category: "dinner",
    price: 22.99,
    img:
      "https://img.taste.com.au/ZLg6vu22/w720-h480-cfill-q80/taste/2016/11/easy-butter-chicken-74432-1.jpeg",
    desc: `This classic Indian dish is a favourite in Aussie households. Re-create it at home in a flash.`,
  },
  {
    id: 13,
    title: "Fried rice",
    category: "dinner",
    price: 20.99,
    img:
      "https://img.taste.com.au/lM3V_jdk/w720-h480-cfill-q80/taste/2016/11/easy-fried-rice-118371-2.jpg",
    desc: `Even kids will love this quick and easy fried rice, perfect for a weeknight meal. See notes section for Low FODMAP diet tip.`,
  },
  {
    id: 14,
    title: "Shaved Carrot and Radish Salad",
    category: "lunch",
    price: 10.59,
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-salads-spring-carrot-salad-recipe-1580519240.png?crop=0.9984732824427481xw:1xh;center,top&resize=980:*",
    desc: `Who says salads need lettuce? The carrot ribbons and thinly sliced radishes in this recipe are an amazing and unexpected substitute`,
  },
  {
    id: 15,
    title: "Vegan Caesar Salad",
    category: "lunch",
    price: 15.96,
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegan-caesar-salad-1615995581.jpg?crop=1xw:1xh;center,top&resize=980:*",
    desc: `This is a crowd-pleasing lunch that anyone can enjoy, no matter their dietary preferences (meat lovers, you’ll love this too!).`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContiner = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  menuBtn();
});

const displayMenu = (menuItem) => {
  let items = menuItem
    .map((item) => {
      return `<article class="menu-item">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="item-info">
      <header>
        <h4 class="product_title">${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
    })
    .join("");

  sectionCenter.innerHTML = items;
};

const menuBtn = () => {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button data-id=${category} class="filter-btn" type="button">
    ${category}
  </button>`;
    })
    .join("");
  btnContiner.innerHTML = categoryBtns;
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((item) => {
        if (item.category === category) {
          return item;
        }
      });
      if (category === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    });
  });
};
