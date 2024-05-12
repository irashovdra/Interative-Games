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
const scientistsNames = document.querySelectorAll(".scientists-list__name");
const scientistsAges = document.querySelectorAll(".scientists-list__age");

const btnBorn19Century = document.querySelector(".born19century");

btnBorn19Century.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  albertName.style.opacity = 1;
  albertAge.style.opacity = 1;
  albertName.classList.add("fadeIn");
  albertAge.classList.add("fadeIn");
  // if (albertName.parentNode.classList.contains("albert")) {
  //   albertName.parentNode.firstElementChild.classList.add(
  //     "scientists-list__img-active"
  //   );
  // }
  marieName.style.opacity = 1;
  marieAge.style.opacity = 1;
  marieName.classList.add("fadeIn");
  marieAge.classList.add("fadeIn");
  maxName.style.opacity = 1;
  maxAge.style.opacity = 1;
  maxName.classList.add("fadeIn");
  maxAge.classList.add("fadeIn");
  kateName.style.opacity = 1;
  kateAge.style.opacity = 1;
  kateName.classList.add("fadeIn");
  kateAge.classList.add("fadeIn");
  adaName.style.opacity = 1;
  adaAge.style.opacity = 1;
  adaName.classList.add("fadeIn");
  adaAge.classList.add("fadeIn");
  sarahName.style.opacity = 1;
  sarahAge.style.opacity = 1;
  sarahName.classList.add("fadeIn");
  sarahAge.classList.add("fadeIn");
  liseName.style.opacity = 1;
  liseAge.style.opacity = 1;
  liseName.classList.add("fadeIn");
  liseAge.classList.add("fadeIn");
  hannaName.style.opacity = 1;
  hannaAge.style.opacity = 1;
  hannaName.classList.add("fadeIn");
  hannaAge.classList.add("fadeIn");
});

const findAlbertAge = document.querySelector(".find-albert-age");

findAlbertAge.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  albertName.style.opacity = 1;
  albertAge.style.opacity = 1;
  albertName.classList.add("fadeIn");
  albertAge.classList.add("fadeIn");
});

const findCSurnames = document.querySelector(".find-c-surnames");

findCSurnames.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  marieName.style.opacity = 1;
  marieAge.style.opacity = 1;
  marieName.classList.add("fadeIn");
  marieAge.classList.add("fadeIn");
  nicolausName.style.opacity = 1;
  nicolausAge.style.opacity = 1;
  nicolausName.classList.add("fadeIn");
  nicolausAge.classList.add("fadeIn");
});

const deleteASurnames = document.querySelector(".delete-a-names");

deleteASurnames.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  albertName.style.opacity = 0;
  albertAge.style.opacity = 0;
  albertName.classList.add("fadeIn");
  albertAge.classList.add("fadeIn");
  adaName.style.opacity = 0;
  adaAge.style.opacity = 0;
  adaName.classList.add("fadeIn");
  adaAge.classList.add("fadeIn");
});

const longestAndShortestLives = document.querySelector(
  ".longest-shortest-lives"
);

longestAndShortestLives.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  adaName.style.opacity = 1;
  adaAge.style.opacity = 1;
  adaName.classList.add("fadeIn");
  adaAge.classList.add("fadeIn");
  // найкоротше ада
  liseName.style.opacity = 1;
  liseAge.style.opacity = 1;
  liseName.classList.add("fadeIn");
  liseAge.classList.add("fadeIn");
  // найдовше ліс
});

const sortByAlphabet = document.querySelector(".scientists-alphabet");
const scientistsList = document.querySelector(".scientists-list");

sortByAlphabet.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  const scientistsList = document.querySelector(".scientists-list");
  const scientists = Array.from(
    scientistsList.querySelectorAll(".scientists-list__item")
  );

  scientists.sort((a, b) => {
    const nameA = a
      .querySelector(".scientists-list__name")
      .textContent.toLowerCase();
    const nameB = b
      .querySelector(".scientists-list__name")
      .textContent.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  scientists.forEach((scientist, index) => {
    scientistsList.appendChild(scientist);
    scientist.querySelector(".scientists-list__name").style.opacity = 1;
    scientist.querySelector(".scientists-list__age").style.opacity = 1;
  });
});

const sortByAge = document.querySelector(".scientists-sort-by-age");

sortByAge.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  const scientistsList = document.querySelector(".scientists-list");
  const scientists = Array.from(
    scientistsList.querySelectorAll(".scientists-list__item")
  );

  scientists.sort((a, b) => {
    const yearsA = a
      .querySelector(".scientists-list__age")
      .textContent.split("-")
      .map(Number);
    const yearsB = b
      .querySelector(".scientists-list__age")
      .textContent.split("-")
      .map(Number);
    const lifespanA = yearsA[1] - yearsA[0];
    const lifespanB = yearsB[1] - yearsB[0];

    return lifespanA - lifespanB;
  });

  scientists.forEach((scientist, index) => {
    scientistsList.appendChild(scientist);
    scientist.querySelector(".scientists-list__name").style.opacity = 1;
    scientist.querySelector(".scientists-list__age").style.opacity = 1;
  });
});

const bornLatest = document.querySelector(".born-latest");
bornLatest.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  kateName.style.opacity = 1;
  kateAge.style.opacity = 1;
  kateName.classList.add("fadeIn");
  kateAge.classList.add("fadeIn");
});

const matchingInitials = document.querySelector(".matching-initials");
matchingInitials.addEventListener("click", () => {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  hannaName.style.opacity = 1;
  hannaAge.style.opacity = 1;
  hannaName.classList.add("fadeIn");
  hannaAge.classList.add("fadeIn");
  galileoName.style.opacity = 1;
  galileoAge.style.opacity = 1;
  galileoName.classList.add("fadeIn");
  galileoAge.classList.add("fadeIn");
});
