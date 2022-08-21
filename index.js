
const navToggle = () => {
  const toggleBtn = document.querySelector(".toggle-btn")
  const exitBtn = document.querySelector(".close-btn")
  const navLinksContainer = document.querySelector(".navbar-links-container")
  
  const toggler = (element) => {
    element.addEventListener("click", () => {
      exitBtn.classList.toggle("show")
      toggleBtn.classList.toggle("hide")
      navLinksContainer.classList.toggle("nav-slide")
    })
  }

  toggler(toggleBtn)
  toggler(exitBtn)
}

navToggle()
