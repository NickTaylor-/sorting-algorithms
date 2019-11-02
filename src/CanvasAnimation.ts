import { SortingAlgorithm } from "./SortingAlgorithm";

export class CanvasAnimation {
  private readonly context: CanvasRenderingContext2D;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext('2d');
  }

  draw(algorithm: SortingAlgorithm) {
    // Clear canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Zero line
    // TODO: Make this match the size of the canvas
    this.context.beginPath();
    this.context.moveTo(0, this.canvas.height / 2);
    this.context.lineTo(this.canvas.width, this.canvas.height / 2);
    this.context.stroke();

    // Draw array
    // TODO: Make this match the size of the canvas
    // TODO: Extract out width's (maybe link that to the size of the canvas?)
    algorithm.array.forEach((value, index) => {
      this.context.beginPath();
      this.context.rect(index * 25, this.canvas.height / 2, 20, -value * 20);
      if (index == algorithm.index && !algorithm.sorted()) {
        this.context.fillStyle = "#FF0000"
      } else if (index >= algorithm.sortedIndex) {
        this.context.fillStyle = "#888888"
      } else if (index == algorithm.activeIndex && !algorithm.sorted()) {
        this.context.fillStyle = "#ff9900"
      } else {
        this.context.fillStyle = "#000000"
      }
      this.context.fill();
    });
  }
}