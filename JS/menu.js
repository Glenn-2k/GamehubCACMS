const checkbox = document.getElementById("menuCheck");
const elementToToggle = document.querySelector(".menubar");

export const checked = checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    elementToToggle.style.display = "block";
    console.log("is checked");
  } else {
    elementToToggle.style.display = "none";
    console.log("is not checked");
  }
});

if (event && !elementToToggle.contains(event.target) && menuCheck.checked) {
  menuCheck.checked = false;
}
