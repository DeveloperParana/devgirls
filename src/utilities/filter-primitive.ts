import { clamp, map } from "./math";

export type PrimitiveType = 'blur' | 'distortion'

export class FilterPrimitive {
  DOM: {
    el: SVGElement | null
  }
  constructor(public type: PrimitiveType, id: string) {
    this.type = type;
    this.DOM = { el: document.querySelector(`${id} > ${this.getPrimitiveType(this.type)}`) };
  }

  getPrimitiveType(type: PrimitiveType) {
    const types = {
      'blur': 'feGaussianBlur',
      'distortion': 'feDisplacementMap'
    };
    return types[type];
  }

  update(distance: number) {
    const element = this.DOM.el

    const numbers = {

    }

    if (element) {
      const { minDeviation = 0, maxDeviation = 10, minScale = 0, maxScale = 100 } = element?.dataset

      const blur = clamp(map(distance, 0, 400, +minDeviation, +maxDeviation), +minDeviation, +maxDeviation)

      const distortion = clamp(map(distance, 0, 200, +minScale, +maxScale), +minScale, +maxScale)

      const types = {
        // The blur stdDeviation will be 0 when the distance equals 0 and 10 when the distance equals 400
        'blur': () => blur,
        // The displacementMap scale will be 0 when the distance equals 0 and 100 when the distance equals 200
        'distortion': () => (element as any).scale.baseVal = distortion
      };

      return types[this.type]();
    }
  }
}