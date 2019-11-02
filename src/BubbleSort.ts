import { SortingAlgorithm } from "./SortingAlgorithm"

export class BubbleSort extends SortingAlgorithm  {
  sorted(): boolean {
    return this.sortedIndex == 0;
  }

  step() {
    this.comparisons++;
    if (this.sorted()) {
      return
    }

    this.comparisons++;
    this.activeIndex = this.index;
    if (this.array[this.index] < this.array[this.index - 1]) {
      const temp = this.array[this.index];
      this.copies++;
      this.array[this.index] = this.array[this.index - 1];
      this.copies++;
      this.array[this.index - 1] = temp;
      this.copies++;
    }

    this.index++;
    this.comparisons++;
    if (this.index == this.sortedIndex) {
      this.index = 0;
      this.sortedIndex--;
    }
  }
}