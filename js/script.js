import { Modal } from "./modal.js";

// variaveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = calculateIMC(weight, height);
  Modal.message.innerText = `Seu IMC é de ${result}`;

  Modal.open();
};

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
