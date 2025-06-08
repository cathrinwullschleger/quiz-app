// Zugriff auf das Formular-Element über das data-js Attribut
const form = document.querySelector('[data-js="form"]');

// Zugriff auf das Container-Element, in dem neue Karten angezeigt werden sollen
const cardContainer = document.querySelector('[data-js="card-container"]');

// Event Listener auf das Formular: Wenn es abgeschickt wird, folgende Funktion ausführen
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite beim Abschicken

  // Erstellt ein FormData-Objekt mit den Eingaben des Formulars
  const formData = new FormData(form);
  // Wandelt FormData in ein einfaches JavaScript-Objekt um
  const data = Object.fromEntries(formData);

  // Erstellt ein neues <li>-Element für die Quizkarte
  const newCard = document.createElement("li");
  // Fügt dem <li> die CSS-Klasse "card" hinzu
  newCard.classList.add("card");

  // h2 erstellen
  const newHeading = document.createElement("h2");
  newHeading.textContent = "Your Question";

  // Erstellt ein neues <p>-Element für die Frage
  const newQuestion = document.createElement("p");
  // Fügt den Fragetext aus dem Formular ins <p> ein
  newQuestion.textContent = data.question;
  // Erstellt ein neues <p>-Element für die Antwort
  const newAnswer = document.createElement("p");
  // Fügt den Antworttext aus dem Formular ins <p> ein
  newAnswer.textContent = `Solution: ${data.answer}`;

  // Tag-Section, damit ich das Css anwensen kann
  const tagSection = document.createElement("section");
  tagSection.classList.add("tags");
  // Erstellt ein neues <div>-Element für den Tag
  const newTag = document.createElement("div");
  // Fügt dem <div> die CSS-Klasse "tag" hinzu
  newTag.classList.add("tag");
  // Fügt den Tag-Text aus dem Formular ins <div> ein
  newTag.textContent = data.tag;

  tagSection.append(newTag);

  //Show Answer/Hidde Answer
  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("button-design");
  showAnswerButton.textContent = "Show Answer";

  newAnswer.classList.add("answer", "hidden");

  showAnswerButton.addEventListener("click", () => {
    const isHidden = newAnswer.classList.toggle("hidden");
    showAnswerButton.textContent = isHidden ? "Show Answer" : "Hide Answer";
  });

  //Bookmark erstellen (Button)
  const newBookmark = document.createElement("button");
  newBookmark.classList.add("bookmark-button");
  newBookmark.setAttribute("data-js", "bookmark");
  newBookmark.setAttribute("type", "button");
  newBookmark.setAttribute("aria-label", "add bookmark");
  //Bookmarkicon erstellen
  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.classList.add("bookmark-button");
  bookmarkIcon.setAttribute("src", "./assets/bookmark.svg");
  bookmarkIcon.setAttribute("alt", "unmarked bookmark");

  newBookmark.append(bookmarkIcon);

  //toggle funktion definieren
  const toggleBookmark = () => {
    const isBookmarked = newBookmark.classList.toggle("is-bookmarked");

    bookmarkIcon.src = isBookmarked
      ? "./assets/bookmark-marked.svg"
      : "./assets/bookmark.svg";

    bookmarkIcon.alt = isBookmarked ? "marked bookmark" : "unmarked bookmark";
    newBookmark.setAttribute(
      "aria-label",
      isBookmarked ? "remove bookmark" : "add bookmark"
    );
  };
  newBookmark.addEventListener("click", toggleBookmark);

  newCard.append(newHeading);
  newCard.append(tagSection);
  newCard.append(newQuestion); // die drei Inhalte werden zur li (also der neuen Karte) hinzugefügt
  newCard.append(newAnswer);

  newCard.append(newBookmark);
  newCard.append(showAnswerButton);
  cardContainer.append(newCard); // jetzt wird li in den sichtbaren Bereich der Website eingefügt (an der Stelle, an der ul im HTML eingefügt ist)

  // Setzt das Formular zurück, leert alle Felder
  form.reset();
  // Setzt alle Zeichen-Zähler zurück (zählt wieder von max runter)
  resetCharCounters();
});

// Funktion zur Zeichenanzahl-Anzeige bei text-input
function setupCharCountAll() {
  // Wählt alle Textfelder mit dem passenden data-js Attribut aus
  const inputs = document.querySelectorAll('[data-js="text-input"]');
  // Wählt alle Zähler-Elemente mit dem passenden data-js Attribut aus
  const counters = document.querySelectorAll('[data-js="char-count"]');

  // // Geht jedes Eingabefeld durch (z. B. Frage, Antwort) und merkt sich den Index (Position in der Liste)
  inputs.forEach((input, index) => {
    // Holt das passende Zähler-Element für das aktuelle Eingabefeld (z. B. <p data-js="char-count">),
    // indem der gleiche Index in der Zählerliste (counters) verwendet wird (in einem Array: text-area 0 mit char counter 0)
    const counter = counters[index];

    // Funktion, die bei jeder Eingabe im Feld die verbleibenden Zeichen berechnet
    function updateCounter() {
      const maxLength = input.maxLength; // Maximale Zeichenanzahl aus dem HTML (maxlength="150")
      const currentLength = input.value.length; // Ermittelt aktuelle Anzahl der eingegebenen Zeichen
      counter.textContent = `${maxLength - currentLength} characters left`; // Zeigt die verbleibenden Zeichen an + characters left
    }
    // Führt die Funktion bei jeder Eingabe aus
    input.addEventListener("input", updateCounter);
    updateCounter();
  });
}
// Ruft die Funktion auf, damit alle Zeichen-Zähler funktionieren
setupCharCountAll();

// Funktion, die alle Zeichen-Zähler neu berechnet (z. B. nach einem Reset)
function resetCharCounters() {
  // Holt alle Eingabefelder
  const inputs = document.querySelectorAll('[data-js="text-input"]');

  // Geht durch jedes Eingabefeld
  inputs.forEach((input) => {
    // Löst ein künstliches "input"-Event aus, um den Zeichen-Zähler zu aktualisieren. mit der dispatchEvent funktion
    input.dispatchEvent(new Event("input"));
  });
}

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
