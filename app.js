//content to be changed
const picture = document.querySelector("#image");
const person_name = document.querySelector("#name");
const job_title = document.querySelector("#job_title");
const description = document.querySelector("#description");
//Buttons to change content
const leftBTN = document.querySelector("#left");
const rightBTN = document.querySelector("#right");
const subscribeBTn = document.querySelector("#subscribeBTn");

//pass the new person into and array and object type
const people = [
  {
    id: 1,
    image: "../third project/images/apiipakar_one.jpg",
    name: "Apiipakar",
    job: "designer",
    text: "i would like to work for you because i think you welling someone todesign your brand, as all we know every success project is willing tohave great and awesome discriminated design.",
  },
  {
    id: 2,
    image: "../third project/images/apipakar2.jpg",
    name: "abuubakar",
    job: "sofware Engineer",
    text: "i would like to work for your software as ican implement, analys and develop your software in needs, so i am available any time to join your army.",
  },
  {
    id: 3,
    image: "../third project/images/apiipakar3.jpg",
    name: "apuukar",
    job: "web developer",
    text: "if you need quality and more effeciencly website i am here to work for you, as my skills is to develop and turn any dream into working dynamic website.",
  },
  {
    id: 4,
    image: "../third project/images/person_one.jpg",
    name: "person_one",
    job: "Entartainer",
    text: "Just subme if you need good entertainer to make your day you and your childs so i am here for server.",
  },
];

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

//make fuction who holds changes
function showPerson(person) {
  const item = people[person];
  picture.src = item.image;
  person_name.innerHTML = item.name;
  job_title.innerHTML = item.job;
  description.innerHTML = item.text;
}

rightBTN.addEventListener("click", () => {
  currentItem++;
  if (currentItem > people.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
leftBTN.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = people.length - 1;
  }
  showPerson(currentItem);
});
subscribeBTn.addEventListener("click", () => {
  document.querySelector(".full_container ").style.display = "none";
  document.querySelector(".done").style.display = "flex";
});
