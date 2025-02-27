// Quick actions
const quickActions = [
  { title: "Report an Issue", icon: "ticket", link: "tickets.html" },
  { title: "Billing", icon: "credit-card", link: "billing.html" },
  { title: "Check Schedules", icon: "calendar", link: "schedules.html" },
  { title: "Security Information", icon: "shield", link: "security.html" },
  { title: "Admin Portal", icon: "user", link: "admin.html" },
  { title: "Information Board", icon: "info", link: "info.html" },
]

const quickActionsGrid = document.querySelector(".quick-actions-grid")

quickActions.forEach((action) => {
  const button = document.createElement("a")
  button.href = action.link
  button.className = "quick-action-button"
  button.innerHTML = `
        <i data-lucide="${action.icon}" class="mb-2"></i>
        <span>${action.title}</span>
    `
  quickActionsGrid.appendChild(button)
})

// Re-initialize Lucide icons after adding new elements
import * as lucide from "lucide"
lucide.createIcons()

