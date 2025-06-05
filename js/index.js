const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
  const icon = bookmarkButton.querySelector("img");

  const isNowBookmarked = bookmarkButton.classList.toggle("is-bookmarked");

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

showAnswerButton.addEventListener("click", () => {
  const card = showAnswerButton.closest(".card");
  const answer = card.querySelector(".answer");
  const isHidden = answer.classList.toggle("hidden");

  showAnswerButton.textContent = isHidden ? "Show Answer" : "Hide Answer";
});
