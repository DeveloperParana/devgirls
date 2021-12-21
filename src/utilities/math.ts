// Map number x from range [a, b] to [c, d]
function map(x: number, a: number, b: number, c: number, d: number) {
  return ((x - a) * (d - c)) / (b - a) + c
}

// Linear interpolation
function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b
}

// Clamp val within min and max
function clamp(val: number, min: number, max: number) {
  return Math.max(Math.min(val, max), min)
}

export { map, lerp, clamp }
