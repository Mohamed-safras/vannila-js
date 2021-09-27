const project = [
  {
    title: "javascript",
    owner: "safras",
    date: new Date("06/25/2021").toDateString(),
    img: "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
  },
  {
    title: "java",
    owner: "Mohamed Safras",
    date: new Date("06/10/2021").toDateString(),
    img: "https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg",
  },
  {
    title: "react",
    owner: "safras",
    date: new Date("05/19/2021").toDateString(),
    img: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png",
  },
  {
    title: "python",
    owner: "safras",
    date: new Date("06/5/2021").toDateString(),
    img: "https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png",
  },
  {
    title: "Node JS",
    owner: "safras",
    date: new Date("06/21/2021").toDateString(),
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  {
    title: "MongoDB",
    owner: "safras",
    date: new Date("06/19/2021").toDateString(),
    img: "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775",
  },
  {
    title: "Machine Learning",
    owner: "safras",
    date: new Date("06/19/2021").toDateString(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh4KtG1Shw0GQU6-XeQ5fl24NuT4kuQczAOmRieLA9myCjP3-6nsR_9VDYTXK_J6-PN0&usqp=CAU",
  },
];

const continer = document.querySelector(".project_continer");
window.addEventListener("DOMContentLoaded", continer);

continer.innerHTML = project
  .map((item, index) => {
    const { title, owner, date, img } = item;
    return `<div id=${index} class="project">
    <div class="detail"> <img
        src=${img}
        alt=${title}
        
      /></div>
      <div class="details">
        <h4 class="title">${title}</h4>
        <p class="owner">by ${owner}</p>
        <p class="post_date">${date}</p>
      </div>
    </div>`;
  })
  .join("");
const projects = document.querySelector(".projects");
window.addEventListener("DOMContentLoaded", function () {
  projects.innerHTML = `${new Date().getUTCFullYear().toString()}
`;
});

const element = document.createElement("article");
element.classList.add("post");
element.innerHTML = `<p class="title">0</p>
<div class="btn">
  <button class="edit">edit</button>
  <button class="delete">delete</button>
</div>`;
const btn = element.querySelector(".delete");
const p = element.querySelector(".title");
let count = 0;
btn.addEventListener("click", () => {
  let title = count++;
  p.innerHTML = title;
});
document.body.appendChild(element);
