import { BubbleSort } from './BubbleSort';
import { InsertionSort } from './InsertionSort';
import { CanvasAnimation } from './CanvasAnimation';
import { randomIntegerArray, randomInteger } from './util';
import { SortingAlgorithm } from './SortingAlgorithm';

const canvas = <HTMLCanvasElement>document.getElementById('visualization');
const animation = new CanvasAnimation(canvas);
let array = randomIntegerArray(20, -10, 10, false);
let algorithm = newAlgorithm(array);
let intervalHandle: NodeJS.Timeout  = null;

window.requestAnimationFrame(() => animation.draw(algorithm));

const stepBtn = document.getElementById('step');
stepBtn.addEventListener("click", () => {
  algorithm.step();
  window.requestAnimationFrame(() => animation.draw(algorithm));
});
const speedInput = <HTMLFormElement>document.getElementById("speed");
const sortBtn = document.getElementById('sort');
sortBtn.addEventListener("click", () => {
  intervalHandle = setInterval(() => {
    algorithm.step();
    window.requestAnimationFrame(() => animation.draw(algorithm));
  }, parseInt(speedInput.options[speedInput.selectedIndex].value))
})


function reset() {
  clearInterval(intervalHandle);
  algorithm = newAlgorithm(array);
  window.requestAnimationFrame(() => animation.draw(algorithm));
}

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(intervalHandle);
});

document.getElementById('reset').addEventListener('click', () => reset());
document.getElementById('newArray').addEventListener('click', () => {
  array = randomIntegerArray(20, -10, 10, false);
  reset();
});

function newAlgorithm(array: number[]) : SortingAlgorithm {
  let form = <HTMLFormElement>document.getElementById("algorithm");
  switch(form.options[form.selectedIndex].value) {
    case "BubbleSort":
      return new BubbleSort(array);
    case "InsertionSort":
      return new InsertionSort(array);
    default:
      alert("Invalid algorithm.")
  }
}