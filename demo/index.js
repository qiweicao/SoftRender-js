import { SoftRenderer } from '../dist/bundle.js'
export default class App {
  constructor(container) {
    this.softRenderer = new SoftRenderer(container);

  }
  init() {
    this.softRenderer.createWindow(800, 600);
    this.softRenderer.init();
  }
}
