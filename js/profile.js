const darkmodeToggle = document.querySelector('[data-js="darkmode-toggle"]'); // aus HTML wird das Element mit Attribut data-js:darkmode-toggle gesucht
darkmodeToggle.addEventListener("change", () => {
  //change ist das an und abwählen der checkbox, das wie ein slider gestylt ist
  document.body.classList.toggle("dark-mode", darkmodeToggle.checked); //docuemnt.boddy ist der <body> auf den die klasse dark-mode hinzugefügt oder wieder entwernt wird.
});
