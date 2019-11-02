import {SortingAlgorithm} from './SortingAlgorithm';

export class InsertionSort extends SortingAlgorithm {
  midsorting: boolean

  sorted() : boolean {
    return (this.index >= this.array.length);
  }

  step() {
    if (this.index >= this.array.length) {
      return;
    }

    if (!this.midsorting) {
      this.activeIndex = this.index;
    }

    if (this.array[this.activeIndex] < this.array[this.activeIndex  - 1] && this.activeIndex >= 0) {
      this.midsorting = true;

      let temp = this.array[this.activeIndex - 1];
      this.array[this.activeIndex - 1] = this.array[this.activeIndex];
      this.array[this.activeIndex] = temp;

      this.activeIndex--;
    } else {
      this.midsorting = false;
      this.index++;
    }
  }
}