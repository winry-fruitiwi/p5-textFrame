/**
 * @author
 * @date 2022.02.5
 *
 * Coding plan:
 *     figure out exact coordinates
 *     create the vertical stroke, including the extra weight
 *     create the diagonal stroke, including the extra weight
 *     create the horizontal stroke, with and without the extra weight
 *     make the transparent rectangle
 *     reflect the corners
 */
let font

function preload() {
    font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
    background(234, 34, 24)
}

// prevent the context menu from showing up :3 nya~
document.oncontextmenu = function () {
    return false;
}
