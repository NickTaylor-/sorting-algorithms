export function randomIntegerArray(size: number, min: number, max: number, allowZero: boolean) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(randomInteger(max, min, allowZero));
  }

  return array;
}

export function randomInteger(min: number, max: number, allowZero: boolean) {
  let number = Math.floor(Math.random() * (max - min)) + min;
  while (!allowZero && number == 0) {
    number = Math.floor(Math.random() * (max - min)) + min
  }
  return number;
}