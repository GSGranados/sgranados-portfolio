"use-strict";
//Selectors
const navMenu = document.querySelector(".nav__list");
const navBtn = document.querySelector(".btn-portfolio");
const icons = document.querySelector(".section-about__icons");
const aboutTexts = document.querySelector(".section-about__text");
const footerNav = document.querySelector(".footer__list");
const portfolioProjects = document.querySelector(".portfolio__projects");
const overlays = document.querySelector(".overlays");
const overlay = document.querySelector(".overlay");
const navigation = document.querySelector(".navigation");
const navigationList = document.querySelector(".navigation__list");
//Listeners and actions

//Nav Menu scrolling into sections effect
navMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target.closest(".nav__item");
  if (!link) return;
  const linkValue = link.querySelector(".nav__link").getAttribute("href");
  document.querySelector(linkValue).scrollIntoView({ behavior: "smooth" });
});

//Scroll into portfolio section
navBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const link = navBtn.getAttribute("href");
  document.querySelector(link).scrollIntoView({ behavior: "smooth" });
});

//Changing text based on the icon selected
icons.addEventListener("click", function (e) {
  e.preventDefault();
  const icon = e.target.closest(".section-about__icon");
  if (!icon) return;
  //obtaining all siblings
  icons.querySelectorAll(".section-about__icon").forEach((i) => {
    i.classList.remove("section-about__icon--active");
  });
  aboutTexts.querySelectorAll(".section-about__detail").forEach((t) => {
    t.classList.remove("section-about__detail--active");
  });
  icon.classList.add("section-about__icon--active");
  document
    .querySelector(
      `.section-about__detail--${icon.getAttribute("data-content")}`
    )
    .classList.add("section-about__detail--active");
});

//handle hover for the project Cards
const handleHover = function (e) {
  const project = e.target.closest(".portfolio__card");
  if (!project) return;
  //getting all  the siblings
  portfolioProjects.querySelectorAll(".portfolio__card").forEach((p) => {
    if (project !== p) {
      p.style.opacity = this;
    }
  });
};

portfolioProjects.addEventListener("mouseover", handleHover.bind(0.5));
portfolioProjects.addEventListener("mouseout", handleHover.bind(1));

//Open Modals
portfolioProjects.addEventListener("click", function (e) {
  e.preventDefault();
  const detailsBtn = e.target.closest(".portfolio__btn");
  if (!detailsBtn) return;
  const portfolioCard = detailsBtn
    .closest(".portfolio__card")
    .getAttribute("data-project");
  const projectModal = document.querySelector(`.overlay--${portfolioCard}`);
  navigation.style.opacity = 0;
  projectModal.classList.toggle("overlay--hidden");
});

//Close Modals
overlays.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".modal__close")) {
    const xButton = e.target.getAttribute("data-modal");
    const modal = document.querySelector(`.overlay--${xButton}`);
    navigation.style.opacity = 1;
    modal.classList.toggle("overlay--hidden");
  }
});

//Handling the navigation events to close the menu on a selected option
navigationList.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target.closest(".navigation__link");
  if (!link) return;
  const ref = link.getAttribute("href");
  document.querySelector(ref).scrollIntoView({ behavior: "smooth" });
  const checkbox = navigation.querySelector(".navigation__checkbox");
  if (checkbox.checked) checkbox.checked = false;
});
