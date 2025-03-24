import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber } from "./imc.js";

// variaveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  displayResultMessage(calculateIMC(weight, height));
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;

  Modal.open();
}
