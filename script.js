const activityIdeas = [
  "Leggi le ultime attività nella pagina Progetti.",
  "Visita la pagina Ricerca per i principali interessi scientifici.",
  "Controlla la pagina Didattica per corsi e supervisione.",
  "Usa i link esterni per ORCID e profilo UniBo."
];

const tipButton = document.getElementById("new-tip-btn");
const tipBox = document.getElementById("activity-tip");

if (tipButton && tipBox) {
  tipButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * activityIdeas.length);
    tipBox.textContent = activityIdeas[randomIndex];
  });
}
