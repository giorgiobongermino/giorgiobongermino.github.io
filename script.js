const activityIdeas = [
  "Read the latest activities on the Projects page.",
  "Visit the Research page for key scientific interests.",
  "Check the Teaching page for courses and supervision.",
  "Browse Publications for papers and working papers.",
  "Use the external links for ORCID, UniBo, and GitHub."
];

const tipButton = document.getElementById("new-tip-btn");
const tipBox = document.getElementById("activity-tip");
const cvInput = document.getElementById("cv-link-input");
const cvSaveBtn = document.getElementById("save-cv-btn");
const cvClearBtn = document.getElementById("clear-cv-btn");
const cvAnchor = document.getElementById("cv-link-anchor");
const cvStorageKey = "giorgio_cv_onedrive_link";

function setCvLink(url) {
  if (!cvAnchor) {
    return;
  }

  if (url) {
    cvAnchor.href = url;
    cvAnchor.textContent = "Open CV";
  } else {
    cvAnchor.href = "#";
    cvAnchor.textContent = "Not set yet";
  }
}

if (tipButton && tipBox) {
  tipButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * activityIdeas.length);
    tipBox.textContent = activityIdeas[randomIndex];
  });
}

if (cvAnchor) {
  const savedLink = localStorage.getItem(cvStorageKey) || "";
  setCvLink(savedLink);
  if (cvInput) {
    cvInput.value = savedLink;
  }
}

if (cvSaveBtn && cvInput) {
  cvSaveBtn.addEventListener("click", () => {
    const trimmed = cvInput.value.trim();
    localStorage.setItem(cvStorageKey, trimmed);
    setCvLink(trimmed);
  });
}

if (cvClearBtn && cvInput) {
  cvClearBtn.addEventListener("click", () => {
    cvInput.value = "";
    localStorage.removeItem(cvStorageKey);
    setCvLink("");
  });
}
