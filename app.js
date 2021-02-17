// make navbar sticky

window.onscroll = function () {
  stickyNavbar();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const contentContainer = document.getElementById("content-container");
const navbarList = document.getElementById("navbar-list");

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    contentContainer.style.marginTop = "60px";
  } else {
    navbar.classList.remove("sticky");
    contentContainer.style.marginTop = "10px";
  }
}

// set navbar content on loading the page depending to the screenwidth

function runOnStart() {
  const rect = document.querySelector(".main-container");
  const screenWidth = rect.getBoundingClientRect().width;

  if (screenWidth <= 800) {
    document.getElementById(
      "navbar-list"
    ).innerHTML = `<li><a href="tel:+4917629418662"><img src="./vector/phone1.png" alt="" class="icon"><p id="number">Anrufen</p></a></li><li><a href="whatsapp://send?text=Hallo! ich bin ein behinderter text der in einem whatsapp button programmiert ist auf peters website!&phone=+4917629418662"><img src="./vector/icons8-whatsapp.svg" alt="" class="icon"><p>WhatsApp</p></a></li>`;
  } else {
    document.getElementById(
      "navbar-list"
    ).innerHTML = `<li><a class="link" href="#home">Home</a></li><li><a class="link" href="#konzept">Konzept</a></li><li><a class="link" href="#faecher">Fächer</a></li><li><a class="link" href="#contact">Kontakt</a></li>`;
  }
}
if (document.readyState !== "loading") {
  runOnStart();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    runOnStart();
  });
}

// change navbar depending to the screenwidth

window.addEventListener("resize", function () {
  const rect = document.querySelector(".main-container");
  const screenWidth = rect.getBoundingClientRect().width;

  if (screenWidth <= 800) {
    document.getElementById(
      "navbar-list"
    ).innerHTML = `<li><a href="tel:+4917629418662"><img src="./vector/phone1.png" alt="" class="icon"><p id="number">Anrufen</p></a></li><li><a href="whatsapp://send?text=Hallo! ich bin ein behinderter text der in einem whatsapp button programmiert ist auf peters website!&phone=+4917629418662"><img src="./vector/icons8-whatsapp.svg" alt="" class="icon"><p>WhatsApp</p></a></li>`;
  } else {
    document.getElementById(
      "navbar-list"
    ).innerHTML = `<li><a class="link" href="#home">Home</a></li><li><a class="link" href="#faecher">Fächer</a></li><li><a class="link" href="#konzept">Konzept</a></li><li><a class="link" href="#contact">Kontakt</a></li>`;
  }
});

// sliding quotes

const reviews = [
  {
    id: 1,
    name: "Elsa",
    text: " Mathe 10 Punkte 🤩",
    img: "<img class='item-img' src='./images/feedback_elsa.jpg'>",
  },
  {
    id: 2,
    name: "Schüler 2",
    text: " Ohne Webcam ist das voll cool! ",
  },
  {
    id: 3,
    name: "Schüler 3",
    text: " Von einer 5 auf eine 3! ",
  },
];

const author = document.querySelector(".author");
const text = document.querySelector(".text");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentItem = 0;

// show initial person

function reviewOnStart() {
  const item = reviews[currentItem];
  author.textContent = item.name;
  text.textContent = item.text;

  if (item.hasOwnProperty("img")) {
    document.querySelector(".review-img").innerHTML = item.img;
  } else {
    document.querySelector(".review-img").innerHTML = "";
  }
}
if (document.readyState !== "loading") {
  reviewOnStart();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    reviewOnStart();
  });
}

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  author.textContent = item.name;
  text.textContent = item.text;

  if (item.hasOwnProperty("img")) {
    document.querySelector(".review-img").innerHTML = item.img;
  } else {
    document.querySelector(".review-img").innerHTML = "";
  }
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// faecher-menue

const faecher = document.querySelectorAll(".fach");

faecher.forEach(function (fach) {
  const btn = fach.querySelector(".toggle-btn");
  btn.addEventListener("click", function () {
    faecher.forEach(function (item) {
      if (item !== fach) {
        item.classList.remove("show-txt");
      }
    });

    fach.classList.toggle("show-txt");
  });
});

// impressum link

const linkImpressum = document.getElementById("link-impressum");
const impressumElement = document.querySelector(".impressum");

linkImpressum.addEventListener("click", function () {
  impressumElement.classList.add("show");
});

const closeImpBtn = document.querySelector(".close-impressum");

closeImpBtn.addEventListener("click", function () {
  impressumElement.classList.remove("show");
});

// FAQ link

const linkFaqs = document.getElementById("link-faq");
const faqElement = document.querySelector(".faq");

linkFaqs.addEventListener("click", function () {
  faqElement.classList.add("show");
});

const closeFaqBtn = document.querySelector(".close-faq");

closeFaqBtn.addEventListener("click", function () {
  faqElement.classList.remove("show");
});

// ingo link

const ingoLink = document.getElementById("link-ingo");
const ingoElement = document.querySelector(".ingo");

ingoLink.addEventListener("click", function () {
  ingoElement.classList.add("show");
});

const closeIngoBtn = document.querySelector(".close-ingo");

closeIngoBtn.addEventListener("click", function () {
  ingoElement.classList.remove("show");
});
