export class Shader {
  static setPoint(buffer:Uint8ClampedArray, x:number, y:number, r:number, g:number, b:number) {
    buffer[(x + y * 800) * 4] = r;
    buffer[(x + y * 800) * 4 + 1] = g;
    buffer[(x + y * 800) * 4 + 2] = b;
    buffer[(x + y * 800) * 4 + 3] = 255;
  }
  static draw(buffer:Uint8ClampedArray, canvas:HTMLCanvasElement) {
    const imageDate = new ImageData(buffer, 800, 600);
    canvas.getContext('2d').putImageData(imageDate, 0, 0);
  }
}