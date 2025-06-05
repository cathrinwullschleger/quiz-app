const form = document.querySelector('[data-js="form"]'); //Variable form erstellen um Zugriff auf <form> aus html zu haben
const cardContainer = document.querySelector('[data-js="card-container"]'); // Zugriff auf die Section in html, die ermöglicht die neue Karte zu erstellen

form.addEventListener("submit", (event) => {
  event.preventDefault(); // nicht vergessen, das verhindert das Neuladen der Seite(würde der Browser selbst machen)

  const formData = new FormData(form); // Alle Werte aus dem Formular ziehen (hier würde vielleicht auch event.target gehen)
  const data = Object.fromEntries(formData); // FormData muss in ein Javascript-Objekt umgewandelt werden

  const newCard = document.createElement("section"); // Section erstellen (für die neue Quiz-Karte)
  newCard.classList.add("new-question-card"); // Styling der Karte (angepasst damit es schöner auf der Seite aussieht, aber Stil, wie die von der Startseite)

  const newQuestion = document.createElement("p"); // Erstellt ein neues p Element und fügt den Text aus question ein
  newQuestion.textContent = data.question;

  const newAnswer = document.createElement("p"); // Erstellt ein neues p Element und fügt den Text aus answer ein
  newAnswer.textContent = data.answer;

  const newTag = document.createElement("div"); // Erstellt ein div Element, fügt Text aus tag hinzu und gibt Klasse an, für CSS
  newTag.classList.add("tag");
  newTag.textContent = data.tag;

  newCard.append(newQuestion); // die drrei Inhalte werden zur Section (also der neuen Karte) hinzugefügt
  newCard.append(newAnswer);
  newCard.append(newTag);

  cardContainer.append(newCard); // jetzt wird Section in den sichtbaren Bereich der Website eingefügt (an der Stelle, an der section im HTML eingefügt ist)
});
