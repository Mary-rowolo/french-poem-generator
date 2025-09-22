function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Roses are red",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}
let poemFormElement = document.querySelector("poem-form");
poemFormElement.addEventListener("submit", generatePoem);
