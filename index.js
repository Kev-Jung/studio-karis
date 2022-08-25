
// Opens and closes the nav on mobile screen size
const navToggle = () => {
  const toggleBtn = document.querySelector(".toggle-btn")
  const exitBtn = document.querySelector(".close-btn")
  const navLinksContainer = document.querySelector(".navbar-links-container")
  
  const toggler = (element) => {
    element.addEventListener("click", () => {
      exitBtn.classList.toggle("show")
      toggleBtn.classList.toggle("hide")
      document.querySelector("main").classList.toggle("no-visibility")
      navLinksContainer.classList.toggle("nav-slide")
    })
  }

  toggler(toggleBtn)
  toggler(exitBtn)
}

// Changes the background color of the nav when user scrolls the page.
const scrollNav = () => {
  const navbar = document.querySelector(".navbar-container")
  window.addEventListener("scroll", () => {
    let scrollPosition = document.documentElement.scrollTop
    if (scrollPosition > 50) {
      navbar.classList.add("nav-scroll")
    } else {
      navbar.classList.remove("nav-scroll")
    }
  })
}

scrollNav()
navToggle()
