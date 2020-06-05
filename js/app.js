/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let sectionElements;
let navBarList;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// 1. Build the nav

const buildNavigationMenuLinks = () => {
  sectionElements.forEach((element) => {
    const sectionId = element.getAttribute("id");
    const sectionName = element.getAttribute("data-nav");
    const navListElement = `<li><a href="#${sectionId}">${sectionName}</a></li>`;
    navBarList.insertAdjacentHTML("beforeend", navListElement);
  });
};

// 2. Scroll to anchor ID using scrollTO event

const addScrollToLinks = () => {
  const links = navBarList.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  });
};

// Add class 'active' to section when near top of viewport

const addActiveWhenInViewport = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry && entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-150px",
    }
  );

  sectionElements.forEach((section) => {
    observer.observe(section);
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

document.addEventListener("DOMContentLoaded", (event) => {
  // DOM fully loaded and parsed

  sectionElements = document.querySelectorAll("section");
  navBarList = document.querySelector("#navbar-list");

  // Build menu
  buildNavigationMenuLinks();

  // Scroll to section on link click
  addScrollToLinks();

  // Set sections as active
  addActiveWhenInViewport();
});
