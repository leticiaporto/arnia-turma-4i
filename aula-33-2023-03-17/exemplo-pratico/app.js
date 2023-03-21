const modal = document.getElementById("modal")
const closeButton = document.getElementById("closeButton")

function openModal() {
  modal.style.display = "block"
}

function closeModal() {
  modal.style.display = "none"
}

closeButton.addEventListener("click", closeModal)

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
})
