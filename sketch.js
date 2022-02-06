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
let font

function preload() {
    font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    noFill()
    stroke(187, 20, 98)
    strokeWeight(10)
    strokeCap(SQUARE)
    strokeJoin(MITER)
}

// displays a corner of the textFrame.
function displayCornerOfFrame() {
    // before I use a PGraphics object, I'll draw my frame corner on a blank
    // background.
    noFill()
    stroke(187, 20, 98)
    strokeWeight(10)
    strokeCap(SQUARE)
    strokeJoin(MITER)

    beginShape()
    let firstStrokeStart = new p5.Vector(20, 90)
    vertex(firstStrokeStart.x, firstStrokeStart.y)

    let diagonalStart = new p5.Vector(20, 50)
    vertex(diagonalStart.x, diagonalStart.y)

    let diagonalEnd = new p5.Vector(50, 30)
    vertex(diagonalEnd.x, diagonalEnd.y)

    let thickHorizontalEnd = new p5.Vector(width/4, 30)
    vertex(thickHorizontalEnd.x, thickHorizontalEnd.y)

    strokeWeight(7)
    let horizontalEnd = new p5.Vector(width/2, 30)
    vertex(horizontalEnd.x, horizontalEnd.y)

    endShape()
}

function draw() {
    background(234, 34, 24)

    displayCornerOfFrame()
}

// prevent the context menu from showing up :3 nya~
document.oncontextmenu = function () {
    return false;
}
