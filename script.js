const nav = document.querySelector("nav"),
  ham = document.querySelector(".hamburguer"),
  xIcon = document.querySelector(".hamburguer__close"),
  menuIcon = document.querySelector(".hamburguer__open"),
  listItem = document.querySelectorAll(".nav__list__item")

ham.addEventListener("click", toggleMenu)

// iterate trought the node list to add the event listener to each li
for (let li of listItem) {
  li.addEventListener("click", toggleMenu)
}

// show/hide the menu and change the icons
function toggleMenu() {
  if (nav.classList.contains("showMenu")) {
    nav.classList.remove("showMenu")
    xIcon.style.display = "none"
    menuIcon.style.display = "initial"
  } else {
    nav.classList.add("showMenu")
    xIcon.style.display = "initial"
    menuIcon.style.display = "none"
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  toggleHeaderSticky()
}

const header = document.querySelector("header")

// Get the offset position of the navbar
const sticky = header.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function toggleHeaderSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
}
