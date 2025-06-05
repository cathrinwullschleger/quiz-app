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

  newCard.append(newQuestion); // die drei Inhalte werden zur Section (also der neuen Karte) hinzugefügt
  newCard.append(newAnswer);
  newCard.append(newTag);

  cardContainer.append(newCard); // jetzt wird Section in den sichtbaren Bereich der Website eingefügt (an der Stelle, an der section im HTML eingefügt ist)
});

function setupCharCountAll() {
  // Die Funktion setupCharCountAll sorgt dafür, dass bei mehreren Eingabefeldern (question und answer) jeweils die verbleibende Zeichenanzahl angezeigt wird.

  const inputs = document.querySelectorAll('[data-js="text-input"]'); // Alle Eingabefelder (z. B. <textarea>) mit dem Attribut data-js="text-input" auswählen.
  const counters = document.querySelectorAll('[data-js="char-count"]'); //  Alle Zähler-Elemente (z. B. <p>) mit dem Attribut data-js="char-count" auswählen.

  inputs.forEach((input, index) => {
    //Durch jedes Eingabefeld gehen (input -> aktuelle textarea -> text-input / inputs, alle textareas mit data-js="text-input") – und parallel den passenden Zähler holen. index stellt sicher, dass das passende Zähler-Element verwendet wird.
    const counter = counters[index]; //Nimm den Zähler, der zur gleichen Position gehört wie das Eingabefeld. (weil es mherer textareas und counter gibt)
    input.addEventListener("input", () => {
      // Wenn in ein Feld etwas eingegeben wird, passiert folgendes:
      const maxLength = input.maxLength; // Maximale Zeichenanzahl aus dem HTML (maxlength="150")
      const currentLength = input.value.length; // Aktuelle Anzahl der eingegebenen Zeichen
      counter.textContent = `${maxLength - currentLength} characters left`; //Text im Zähler-Element aktualisieren: " X characters left"
    });
  });
}

setupCharCountAll(); // Die Funktion aufrufen, damit alles beim Laden der Seite funktioniert.

/* -----------------------------------------------------------------------------------------------
 1. try counting of characters:


const questionInput = document.querySelector('[data-js="text-input-question"]');
const questionCharCount = document.querySelector('[data-js="char-count-question"]');

questionInput.addEventListener("input", (event) => {
  const maxLength = questionInput.maxLength;
  const currentLength = event.target.value.length;
  questionCharCount.textContent = `${maxLength - currentLength} characters left`;
});

const answerInput = document.querySelector('[data-js="text-input-answer"]');
const answerCharCount = document.querySelector('[data-js="char-count-answer"]');

answerInput.addEventListener("input", (event) => {
  const maxLength = answerInput.maxLength;
  const currentLength = event.target.value.length;
  answerCharCount.textContent = `${maxLength - currentLength} characters left`;
});


*/
