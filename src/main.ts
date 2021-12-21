import { TextOnPath } from './animations/text-on-path';
import { Accordion } from './elements/accordion';
import { Details } from './elements/details'

const details = document.querySelectorAll('details')

const detailsList = Array.from(details).map((el) => new Details(el));
const accordion = new Accordion(detailsList);

const svgTexts = document.querySelectorAll<SVGElement>('svg.svgtext')
svgTexts.forEach((el) => new TextOnPath(el))

const textPath = document.querySelector("#text-path");



const h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  console.log(textPath);
  
  let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
  textPath?.setAttribute("start-offset", ((-percent * 40) + 1200) + '')
});