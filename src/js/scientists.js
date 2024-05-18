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
const scientistsItems = document.querySelectorAll(".scientists-list__item");

const btnBorn19Century = document.querySelector(".born19century");

btnBorn19Century.addEventListener("click", () => {
  resetOpacity();
  setActive([
    albertName,
    albertAge,
    marieName,
    marieAge,
    maxName,
    maxAge,
    kateName,
    kateAge,
    adaName,
    adaAge,
    sarahName,
    sarahAge,
    liseName,
    liseAge,
    hannaName,
    hannaAge,
  ]);
});

const findAlbertAge = document.querySelector(".find-albert-age");

findAlbertAge.addEventListener("click", () => {
  resetOpacity();
  setActive([albertName, albertAge]);
});

const findCSurnames = document.querySelector(".find-c-surnames");

findCSurnames.addEventListener("click", () => {
  resetOpacity();
  setActive([marieName, marieAge, nicolausName, nicolausAge]);
});

const deleteANames = document.querySelector(".delete-a-names");

deleteANames.addEventListener("click", () => {
  resetOpacity();
  deleteActive([albertName, albertAge, adaName, adaAge]);
});

const longestAndShortestLives = document.querySelector(
  ".longest-shortest-lives"
);

longestAndShortestLives.addEventListener("click", () => {
  resetOpacity();
  setActive([
    liseName,
    liseAge, // найдовше
    adaName,
    adaAge, // найкоротше
  ]);
});

const sortByAlphabet = document.querySelector(".scientists-alphabet");

sortByAlphabet.addEventListener("click", () => {
  resetOpacity();
  sortScientists((a, b) => {
    const nameA = a
      .querySelector(".scientists-list__name")
      .textContent.toLowerCase();
    const nameB = b
      .querySelector(".scientists-list__name")
      .textContent.toLowerCase();
    return nameA.localeCompare(nameB);
  });
});

const sortByAge = document.querySelector(".scientists-sort-by-age");

sortByAge.addEventListener("click", () => {
  resetOpacity();
  sortScientists((a, b) => {
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
});

const bornLatest = document.querySelector(".born-latest");

bornLatest.addEventListener("click", () => {
  resetOpacity();
  setActive([kateName, kateAge]);
});

const matchingInitials = document.querySelector(".matching-initials");

matchingInitials.addEventListener("click", () => {
  resetOpacity();
  setActive([hannaName, hannaAge, galileoName, galileoAge]);
});

function resetOpacity() {
  scientistsNames.forEach((scientistName) => {
    scientistName.style.opacity = 0;
    scientistName.classList.remove("fadeIn");
  });
  scientistsAges.forEach((scientistAge) => {
    scientistAge.style.opacity = 0;
    scientistAge.classList.remove("fadeIn");
  });
  scientistsItems.forEach((item) => {
    item.classList.remove("active");
  });
}

function setActive(elements) {
  elements.forEach((element) => {
    element.style.opacity = 1;
    element.classList.add("fadeIn");
    element.closest(".scientists-list__item").classList.add("active");
  });
}

function deleteActive(elements) {
  elements.forEach((element) => {
    element.style.opacity = 0;
    element.classList.remove("fadeIn");
    element.closest(".scientists-list__item").classList.remove("active");
  });
}

function sortScientists(compareFunction) {
  const scientistsList = document.querySelector(".scientists-list");
  const scientists = Array.from(
    scientistsList.querySelectorAll(".scientists-list__item")
  );

  scientists.sort(compareFunction);

  scientists.forEach((scientist, index) => {
    const name = scientist.querySelector(".scientists-list__name");
    const age = scientist.querySelector(".scientists-list__age");
    setTimeout(() => {
      scientistsList.appendChild(scientist);
      setTimeout(() => {
        name.style.opacity = 1;
        age.style.opacity = 1;
      }, 50); // Add a slight delay for smoother transition start
      scientist.classList.add("active");
    }, index * 100); // Adjust the delay as needed for smoother animation
  });
}
