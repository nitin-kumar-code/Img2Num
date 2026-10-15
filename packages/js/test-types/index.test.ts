import { invert_image, threshold_image } from "../src/index.js";

const pixels = new Uint8ClampedArray(4);

const invertedPixels: Promise<Uint8ClampedArray> = invert_image({ pixels, width: 1, height: 1 });
const thresholdedPixels: Promise<Uint8ClampedArray> = threshold_image({
  pixels,
  width: 1,
  height: 1,
  num_thresholds: 4,
});

void invertedPixels;
void thresholdedPixels;
