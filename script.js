const activityIdeas = [
  "Read the latest activities on the Projects page.",
  "Visit the Research page for key scientific interests.",
  "Check the Teaching page for courses and supervision.",
  "Browse Publications for papers and working papers.",
  "Visit Presentations for slides and talks."
];

const tipButton = document.getElementById("new-tip-btn");
const tipBox = document.getElementById("activity-tip");

if (tipButton && tipBox) {
  tipButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * activityIdeas.length);
    tipBox.textContent = activityIdeas[randomIndex];
  });
}
