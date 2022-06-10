import { Shader } from "./PipeLine";
export class SoftRenderer {
  #canvas: HTMLCanvasElement;
  #buffer: Uint8ClampedArray;
  constructor(canvas) {
    this.#canvas = canvas;
    this.#buffer = new Uint8ClampedArray(this.#canvas.width * this.#canvas.height * 4);
  }

  init() {
    console.log('init');
    Shader.setPoint(this.#buffer, 0, 0, 255, 0, 0);
    Shader.setPoint(this.#buffer, 399, 299, 255, 0, 0);
    this.render()
  }

  render() {
    window.requestAnimationFrame(this.render.bind(this));
    Shader.draw(this.#buffer, this.#canvas);
  }

}
