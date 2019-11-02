export abstract class SortingAlgorithm {
  array: number[]
  index: number
  sortedIndex: number
  copies: number
  comparisons: number
  activeIndex: number

  constructor(array: number[]) {
    this.array = array.slice();
    this.index = 0;
    this.sortedIndex = array.length;
    this.copies = 0;
    this.comparisons = 0;
  }

  abstract sorted() : boolean;
  abstract step() : void;
}