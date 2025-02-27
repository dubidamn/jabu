// Theme management
const themeToggle = document.getElementById("themeToggle")
const themeIcon = themeToggle.querySelector("i")

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", savedTheme)
updateThemeIcon(savedTheme)

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
})

function updateThemeIcon(theme) {
  themeIcon.setAttribute("data-lucide", theme === "light" ? "moon" : "sun")
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  } else {
    console.warn("lucide is not defined. Ensure it is properly imported or declared.")
  }
}

