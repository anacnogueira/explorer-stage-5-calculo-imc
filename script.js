// variaveis
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const modalWrapper = document.querySelector(".modal-wrapper");
const buttonClose = document.querySelector(".close");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = calculateIMC(weight, height);
  modalWrapper.querySelector(".title").innerText = `Seu IMC é de ${result}`;

  modalWrapper.classList.add("open");
};

buttonClose.onclick = () => modalWrapper.classList.remove("open");

function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
