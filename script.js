"use strict";

window.addEventListener("DOMContentLoaded", start);

let mainText;
let charactersArray;

function start() {
  // Get the entire text from the HTML
  mainText = document.querySelector("#coolText").textContent;

  //Remove the existing text
  document.querySelector("#coolText").textContent = "";

  // Split text into characters inside a span tag
  charactersArray = Array.from(mainText);
  //   console.log("text", charactersArray);

  // For each character in the text:
  charactersArray.forEach((character) => {
    // create a <span> element
    let spanCreated = document.createElement("span");
    // put the character inside that element
    spanCreated.textContent = character;
    // and append the element to the HTML
    document.querySelector("#coolText").appendChild(spanCreated);
  });

  // TODO: Somehow make each character animate different from the previous
  document.querySelectorAll("#coolText span").forEach((character, iterator) => {
    character.classList.add("animation");
    character.style.animationDelay = `${iterator / 60}s`;
  });
}
