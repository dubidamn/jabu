// Menu functionality
const menuToggle = document.getElementById("menuToggle")
const menuModal = document.getElementById("menuModal")
const closeButton = menuModal.querySelector(".close-button")

menuToggle.addEventListener("click", () => {
  menuModal.classList.add("active")
})

closeButton.addEventListener("click", () => {
  menuModal.classList.remove("active")
})

// Close menu when clicking outside
menuModal.addEventListener("click", (e) => {
  if (e.target === menuModal) {
    menuModal.classList.remove("active")
  }
})

