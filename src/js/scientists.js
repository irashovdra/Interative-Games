// const scientists = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10,
//   },
//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11,
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12,
//   },
// ];

const albertName = document.querySelector(".albert-name");
const albertAge = document.querySelector(".albert-age");
const isaacName = document.querySelector(".isaac-name");
const isaacAge = document.querySelector(".isaac-age");
const galileoName = document.querySelector(".galileo-name");
const galileoAge = document.querySelector(".galileo-age");
const marieName = document.querySelector(".marie-name");
const marieAge = document.querySelector(".marie-age");
const johannesName = document.querySelector(".johannes-name");
const johannesAge = document.querySelector(".johannes-age");
const nicolausName = document.querySelector(".nicolaus-name");
const nicolausAge = document.querySelector(".nicolaus-age");
const maxName = document.querySelector(".max-name");
const maxAge = document.querySelector(".max-age");
const kateName = document.querySelector(".kate-name");
const kateAge = document.querySelector(".kate-age");
const adaName = document.querySelector(".ada-name");
const adaAge = document.querySelector(".ada-age");
const sarahName = document.querySelector(".sarah-name");
const sarahAge = document.querySelector(".sarah-age");
const liseName = document.querySelector(".lise-name");
const liseAge = document.querySelector(".lise-age");
const hannaName = document.querySelector(".hanna-name");
const hannaAge = document.querySelector(".hanna-age");

const btnBorn19Century = document.querySelector(".born19century");

btnBorn19Century.addEventListener("click", () => {
  albertName.style.opacity = 1;
  albertAge.style.opacity = 1;
  marieName.style.opacity = 1;
  marieAge.style.opacity = 1;
  maxName.style.opacity = 1;
  maxAge.style.opacity = 1;
  kateName.style.opacity = 1;
  kateAge.style.opacity = 1;
  adaName.style.opacity = 1;
  adaAge.style.opacity = 1;
  sarahName.style.opacity = 1;
  sarahAge.style.opacity = 1;
  liseName.style.opacity = 1;
  liseAge.style.opacity = 1;
  hannaName.style.opacity = 1;
  hannaAge.style.opacity = 1;
});

const findAlbertAge = document.querySelector(".find-albert-age");

findAlbertAge.addEventListener("click", () => {
  albertName.style.opacity = 1;
  albertAge.style.opacity = 1;
});

const findCSurnames = document.querySelector(".find-c-surnames");

findCSurnames.addEventListener("click", () => {
  marieName.style.opacity = 1;
  marieAge.style.opacity = 1;
  nicolausName.style.opacity = 1;
  nicolausAge.style.opacity = 1;
});

const deleteASurnames = document.querySelector(".delete-a-names");

deleteASurnames.addEventListener("click", () => {
  albertName.style.opacity = 0;
  albertAge.style.opacity = 0;
  adaName.style.opacity = 0;
  adaAge.style.opacity = 0;
});

const longestAndShortestLives = document.querySelector(
  ".longest-shortest-lives"
);

longestAndShortestLives.addEventListener("click", () => {
  adaName.style.opacity = 1;
  adaAge.style.opacity = 1;
  // найкоротше ада
  liseName.style.opacity = 1;
  liseAge.style.opacity = 1;
  // найдовше ліс
});
