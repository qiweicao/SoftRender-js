
export function draw(buffer: Uint8ClampedArray, canvas: HTMLCanvasElement) {
  const imageDate = new ImageData(buffer, 800, 600);
  canvas.getContext('2d')!.putImageData(imageDate, 0, 0);
}