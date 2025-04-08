const bulb = document.getElementById("bulb");
const toggleCheckbox = document.querySelector("#toggleBtn input");
const body = document.body;

toggleCheckbox.addEventListener("change", function () {
  if (toggleCheckbox.checked) {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    bulb.classList.add("glow");
    body.classList.add("light-mode");
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    bulb.classList.remove("glow");
    body.classList.remove("light-mode");
  }
});