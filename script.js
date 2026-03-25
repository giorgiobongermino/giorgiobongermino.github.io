const activityIdeas = [
  "Read the latest activities on the Projects page.",
  "Visit the Research page for key scientific interests.",
  "Check the Teaching page for courses and supervision.",
  "Browse Publications for papers and working papers.",
  "Visit Presentations to access protected slides."
];

const tipButton = document.getElementById("new-tip-btn");
const tipBox = document.getElementById("activity-tip");

if (tipButton && tipBox) {
  tipButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * activityIdeas.length);
    tipBox.textContent = activityIdeas[randomIndex];
  });
}

const slidesPasswordInput = document.getElementById("slides-password-input");
const slidesUnlockBtn = document.getElementById("slides-unlock-btn");
const slidesPrivateArea = document.getElementById("slides-private-area");
const slidesAccessMsg = document.getElementById("slides-access-msg");

// Replace this with your private password before publishing.
const slidesPassword = "change-this-password";

if (slidesUnlockBtn && slidesPasswordInput && slidesPrivateArea && slidesAccessMsg) {
  slidesUnlockBtn.addEventListener("click", () => {
    if (slidesPasswordInput.value === slidesPassword) {
      slidesPrivateArea.classList.remove("hidden");
      slidesAccessMsg.textContent = "Access granted. You can now view private slides.";
    } else {
      slidesPrivateArea.classList.add("hidden");
      slidesAccessMsg.textContent = "Wrong password. Please try again.";
    }
  });
}
