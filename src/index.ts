import { draw } from "./Platform";
import { setPixel,clearFrameBuffer } from "./PipeLine"
export class SoftRenderer {
  #container: HTMLDivElement;
  #buffer: Uint8ClampedArray;
  #canvas: HTMLCanvasElement;
  constructor(container) {
    this.#container = container;
  }

  createWindow(width: number, height: number) {

    this.#canvas = document.createElement('canvas');
    this.#canvas.width = width;
    this.#canvas.height = height;
    this.#canvas.style.width = this.#container.clientWidth + 'px';
    this.#canvas.style.height = this.#container.clientHeight + 'px';

    this.#container.append(this.#canvas);

    this.#buffer = new Uint8ClampedArray(this.#canvas.width * this.#canvas.height * 4);

  }

  init() {
    console.log('init');
    clearFrameBuffer(this.#buffer, this.#canvas.width, this.#canvas.height);
    setPixel(this.#buffer, 0, 0, 255, 0, 0);
    setPixel(this.#buffer, 399, 299, 255, 0, 0);
    this.render()
  }

  render() {
    window.requestAnimationFrame(this.render.bind(this));
    draw(this.#buffer, this.#canvas);
  }

}
