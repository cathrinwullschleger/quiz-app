const bookmarkButton = document.querySelector('[data-js="bookmark"]');

// Variable erstellen, Wwhlt das erste Element im Dokument aus, das das Attribut data-js="bookmark" hat

bookmarkButton.addEventListener("click", () => {
  // Fügt dem gefundenen Bookmark-Button einen "Klick"-Eventlistener hinzu.
  // Sobald der Button geklickt wird, wird die unten stehende Funktion ausgeführt.

  const icon = bookmarkButton.querySelector("img");

  // Sucht innerhalb des Buttons das <img>-Element (Bookmark-icon)

  const isNowBookmarked = bookmarkButton.classList.toggle("is-bookmarked");

  /*
   * Schaltet die Klasse "is-bookmarked" auf dem Button um:
   * Gibt true zurück, wenn die Klasse nach dem Umschalten vorhanden ist (also "gemerkt"),
   * andernfalls false (nicht gemerkt).
   */

  if (isNowBookmarked) {
    icon.alt = "marked bookmark";
    icon.src = "./assets/bookmark-marked.svg";
    bookmarkButton.setAttribute("aria-label", "remove bookmark");
  } else {
    icon.alt = "unmarked bookmark";
    icon.src = "./assets/bookmark.svg";
    bookmarkButton.setAttribute("aria-label", "add bookmark");
  }
});

const showAnswerButton = document.querySelector('[data-js="solution"]');

//  Variable `showAnswerButton`erstellen, die auf das erste <button>-Element mit dem Attribut data-js="solution" im HTML-Dokument zugreift.

showAnswerButton.addEventListener("click", () => {
  // Event hinzufügen, das beim Klicken auf den Button ausgelöst wird.

  const card = showAnswerButton.closest(".card");

  /*  Sucht das nächstgelegene (closet) Elternelement mit der Klasse .card. 
    So wird sichergestellt, dass nur die Antwort innerhalb dieser einen Karte (nicht alle Karten auf der Seite!) angesprochen wird.
*/
  const answer = card.querySelector(".answer");

  /*  Wählt das Element mit der Klasse .answer innerhalb der gefundenen Karte aus. 
    Dadurch wird nur die Antwort dieser spezifischen Karte angezeigt oder versteckt.
*/
  const isHidden = answer.classList.toggle("hidden");

  /*  Schaltet die Klasse "hidden" auf dem Antwort-Element um:
   * - Wenn "hidden" noch vorhanden ist, wird sie entfernt (Antwort wird sichtbar).
   * - Wenn "hidden" nicht vorhanden ist, wird sie hinzugefügt (Antwort wird versteckt).
   * Die Methode gibt true zurück, wenn die Klasse jetzt vorhanden ist (also Antwort versteckt),
   *und false, wenn sie entfernt wurde (Antwort sichtbar).
   */

  showAnswerButton.textContent = isHidden ? "Show Answer" : "Hide Answer";
});

/*  Ändert den Text des Buttons basierend auf dem aktuellen Zustand:
 * - Wenn die Antwort versteckt ist (isHidden === true), steht "Show Answer" auf dem Button.
 * - Wenn die Antwort sichtbar ist (isHidden === false), steht "Hide Answer" auf dem Button.
 */
