import chalk from "chalk";
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { createSVGWindow } from 'svgdom';

// pretend we are in a browser
const window = createSVGWindow()
const document = window.document
registerWindow(window, document)

// draw a picture
const picture = SVG()
picture.rect(100, 100).fill('yellow').move(50,50)

// show the world
console.error(chalk.red("Generating ..."));
console.log(picture.svg());
console.error(chalk.green("... done!"));
