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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const myList = document.getElementById("navbar__list");
const mySections = document.querySelectorAll("section");
const myFragment = document.createDocumentFragment();
/**
 * End Global Variables
 *
 */
// build the nav
function buildNavigationBar() {
  // loop over "section" to add a new section to the nav-bar
  mySections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    //add class, href, smooth scrolling, and title
    listLink.classList.add("menu__link");
    listLink.href = `#${sectionId}`;
    listLink.textContent = sectionTitle;
    listLink.addEventListener("click", (Event) => {
      Event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
    listItem.appendChild(listLink);
    myFragment.appendChild(listItem);
  });
  myList.appendChild(myFragment);
}
window.addEventListener("load", buildNavigationBar);

// Build menu
window.addEventListener("scroll", pageHighlight);
// Scroll to section on link click
const links = document.querySelectorAll("a.menu__link");
function pageHighlight() {
  mySections.forEach((section) => {
    const topSection = section.getBoundingClientRect().top;
    const sectionTitle = section.getAttribute("data-nav");
    if (topSection > 0 && topSection < 300) {
      // Add class 'active' to section when near top of viewport
      section.classList.add("your-active-class");
      links.forEach((link) => {
        if (link.textContent === sectionTitle) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
    } else {
      section.classList.remove("your-active-class");
    }
  });
}
