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

// "let" is not scoped into the function

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const getSectionNames = () => {
  let sectionNames = [];

  sectionElements.forEach((element) => {
    const dataNavText = element.getAttribute("data-nav");
    sectionNames.push(dataNavText);
  });

  return sectionNames;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const buildNavigationMenuLinks = () => {
  sectionElements.forEach((element) => {
    const sectionId = element.getAttribute("id");
    const sectionTitle = element.getAttribute("data-nav");
    const navListElement = `<li><a href="#${sectionId}">${sectionTitle}</a></li>`;
  });
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  sectionElements = document.querySelectorAll("section");
  navBarList = document.querySelector("#navbar-list");

  const sectionNames = getSectionNames();

  // Build menu
  buildNavigationMenuLinks();

  // Scroll to section on link click
  // ...

  // Set sections as active
  // ...
});
