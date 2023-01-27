import chalk from "chalk";
import { SVG, registerWindow } from "@svgdotjs/svg.js";
import { createSVGWindow } from "svgdom";

// setup
// TODO figure out reasonable defaults (and learn about units of measure in SVG / svg.js)
// TODO allow to override the defaults

/** Size of one square on the grid. */
const squareSize = 50;

/** Height of the base plate of the dungeon tiles. */
const baseHeight = 5;

/** Size of a glue flap */
const flapSize = 10;

/** Stroke data used to draw grid lines */
const gridStroke = { color: "gray", width: 2 };

/** Stroke data used to draw the border of things */
const borderStroke = { color: "black", width: 1.5 };

// pretend we are in a browser
const window = createSVGWindow();
const document = window.document;
registerWindow(window, document);

// draw a picture
const picture = SVG();

// 2x2 base
picture
  .rect(2 * squareSize, 2 * squareSize)
  .move(-squareSize, -squareSize)
  .fill("silver");

// grid
picture.line(0, -squareSize, 0, squareSize).stroke(gridStroke);
picture.line(-squareSize, 0, squareSize, 0).stroke(gridStroke);

// northern edge
picture
  .rect(2 * squareSize, baseHeight)
  .move(-squareSize, -squareSize - baseHeight)
  .fill("silver");
picture
  .polygon([
    -squareSize,
    -squareSize - baseHeight,
    -squareSize + flapSize,
    -squareSize - baseHeight - flapSize,
    squareSize - flapSize,
    -squareSize - baseHeight - flapSize,
    squareSize,
    -squareSize - baseHeight,
  ])
  .fill("red");

// eastern edge
picture
  .rect(baseHeight, 2 * squareSize)
  .move(squareSize, -squareSize)
  .fill("silver");
picture
  .polygon([
    squareSize + baseHeight,
    -squareSize,
    squareSize + baseHeight + flapSize,
    -squareSize + flapSize,
    squareSize + baseHeight + flapSize,
    squareSize - flapSize,
    squareSize + baseHeight,
    squareSize,
  ])
  .fill("red");

// southern edge
picture
  .rect(2 * squareSize, baseHeight)
  .move(-squareSize, squareSize)
  .fill("silver");
picture
  .polygon([
    squareSize,
    squareSize + baseHeight,
    squareSize - flapSize,
    squareSize + baseHeight + flapSize,
    -squareSize + flapSize,
    squareSize + baseHeight + flapSize,
    -squareSize,
    squareSize + baseHeight,
  ])
  .fill("red");

// eastern edge
picture
  .rect(baseHeight, 2 * squareSize)
  .move(-squareSize - baseHeight, -squareSize)
  .fill("silver");
picture
  .polygon([
    -squareSize - baseHeight,
    squareSize,
    -squareSize - baseHeight - flapSize,
    squareSize - flapSize,
    -squareSize - baseHeight - flapSize,
    -squareSize + flapSize,
    -squareSize - baseHeight,
    -squareSize,
  ])
  .fill("red");

// border of 2x2 base
picture
  .rect(
    2 * squareSize - borderStroke.width,
    2 * squareSize - borderStroke.width
  )
  .move(
    -squareSize + borderStroke.width / 2,
    -squareSize + borderStroke.width / 2
  )
  .fill("none")
  .stroke(borderStroke);

// set viewbox
const half = squareSize + baseHeight + flapSize;
picture.viewbox(-half, -half, 2 * half, 2 * half);

// show the world
console.error(chalk.red("Generating ..."));
console.log(picture.svg());
console.error(chalk.green("... done!"));
