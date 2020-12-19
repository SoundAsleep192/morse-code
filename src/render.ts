import { convertToMC, convertFromMC } from './morse.service';

const inputElement = <HTMLTextAreaElement>document.getElementById('input');
const outputElement = <HTMLTextAreaElement>document.getElementById('output');
const launchButtonElement = <HTMLButtonElement>document.getElementById('launch-button');

launchButtonElement.addEventListener('click', () => {
  const inputText = inputElement.value;

  if (inputText.split('').some(char => !/[.-\s]/.test(char))) {
    outputElement.value = convertToMC(inputText);
  } else {
    outputElement.value = convertFromMC(inputText);
  }
});
