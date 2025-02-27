// Announcements carousel
const announcements = [
  {
    id: 1,
    title: "Community Meeting",
    content: "Join us for our monthly community meeting on 15 May 2024 at 7 PM in the Community Hall.",
    date: "2024-05-10",
  },
  {
    id: 2,
    title: "Pool Maintenance",
    content:
      "The swimming pool will be closed for maintenance from 20 May 2024 to 22 May 2024. We apologize for any inconvenience.",
    date: "2024-05-18",
  },
  {
    id: 3,
    title: "New Recycling Program",
    content:
      "Starting 1 June 2024, we're implementing a new recycling program. Please check your email for details on proper waste segregation.",
    date: "2024-05-25",
  },
]

const announcementContent = document.querySelector(".announcement-content")
const indicatorsContainer = document.querySelector(".announcement-indicators")
let currentSlide = 0

// Create indicators
announcements.forEach((_, index) => {
  const indicator = document.createElement("button")
  indicator.className = `indicator ${index === 0 ? "active" : ""}`
  indicator.addEventListener("click", () => showSlide(index))
  indicatorsContainer.appendChild(indicator)
})

function showSlide(index) {
  const announcement = announcements[index]
  announcementContent.innerHTML = `
        <div class="text-sm text-muted-foreground mb-1">Announcement</div>
        <p class="text-base mb-1">${announcement.content}</p>
        <p class="text-xs text-muted-foreground">
            Posted on ${new Date(announcement.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
        </p>
    `

  // Update indicators
  document.querySelectorAll(".indicator").forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index)
  })

  currentSlide = index
}

// Auto-advance slides
setInterval(() => {
  showSlide((currentSlide + 1) % announcements.length)
}, 5000)

// Show initial slide
showSlide(0)

