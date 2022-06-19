export function setPixel(buffer: Uint8ClampedArray, x: number, y: number, r: number, g: number, b: number) {
  let index = (x + y * 800) * 4;
  buffer[index] = r;
  buffer[index + 1] = g;
  buffer[index + 2] = b;
  buffer[index + 3] = 255;
}

export function clearFrameBuffer(buffer: Uint8ClampedArray, width: number, height: number) {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let index = (j + i * 800) * 4;
      buffer[index] = 56;
      buffer[index + 1] = 56;
      buffer[index + 2] = 80;
      buffer[index + 3] = 255;
    }
  }
}

export function clearZBuffer(buffer: Uint8ClampedArray, width: number, height: number) {
  const length = width * height;
  for (let i = 0; i < length; i++) {
    buffer[i] = Number.MAX_VALUE;
  }
}

function barycentric() {

}
