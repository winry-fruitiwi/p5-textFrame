/**
 * @author
 * @date 2022.02.5
 *
 * Coding plan:
 *     create first corner of textFrame
 *     make the transparent rectangle
 *     method 1: save the corners and translate/rotate them
 *         save the corners using a PGraphics object
 *         translate the corners and rotate them
 *     optional method 2: use reflect()
 *         best shot: try to reflect every single vector after translating!
 */

function preload() {
    // font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    noFill()
    stroke(187, 20, 98)
    strokeWeight(7)
    strokeCap(SQUARE)
    strokeJoin(MITER)
}

// displays a quadrant of the textFrame.
function displayFrameQuadrant() {
    // before I use a PGraphics object, I'll draw my frame corner on a blank
    // background.

    // the starting position of my quadrant. I translate to this position later.
    // The reason why I chose (20, 20) is because I want to have a margin at the
    // top.
    const startingPos = new p5.Vector(20, 20)

    // the side lengths of the 45-45-90 degree triangle in the large diagonal.
    const r = 10

    // the number of pixels to shift the diagonal line coordinates so that
    // it's thicker.
    const cornerShift = 2

    // the number of pixels to shift the long horizontal line, or the
    // topmost line, down.
    const thickBorderShift = cornerShift * sqrt(2)

    // the width of this entire quadrant
    const quadrantWidth = width / 2 - startingPos.x

    // the length of the line that makes the long horizontal line thicker.
    // The reason why I'm dividing by 5 in particular is because the ratio
    // in the picture I have is around a fifth.
    const thickLineWidth = quadrantWidth / 5

    // the height of this entire quadrant.
    const quadrantHeight = height / 6 - startingPos.y


}

function draw() {
    background(234, 34, 24)

    displayFrameQuadrant()
}

// prevent the context menu from showing up :3 nya~
document.oncontextmenu = function () {
    return false;
}
