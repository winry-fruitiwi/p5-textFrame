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

// the starting position of my quadrant. I translate to this position later.
// The reason why I chose (20, 20) is because I want to have a margin at the
// top.
let startingPos

// the side lengths of the 45-45-90 degree triangle in the large diagonal.
let r

// the width of this entire quadrant.
let quadrantWidth

// the height of this entire quadrant.
let quadrantHeight

// frame is our finished text frame!
let pg, textFrameQuadrant, frame

function preload() {
    // font = loadFont('data/meiryo.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    startingPos = new p5.Vector(20, 20)

    // the PGraphics object. TODO don't forget the pg.'s!
    pg = createGraphics(width, height)

    // the text frame's graphics initialization
    frame = createGraphics(width, height)

    pg.colorMode(HSB, 360, 100, 100, 100)

    // makes my shapes more crisp
    noSmooth()

    textFrameQuadrant = displayFrameQuadrant()

    r = 4
    quadrantWidth = width/2 - startingPos.x
    quadrantHeight = height/6 - startingPos.y

    // TODO remove minus sign? You can't have a negative distance.
    let gapBetweenFrameHalves = -200

    // attempts to display the text frame quadrant
    // image(textFrameQuadrant, 0, 0, width, height)
    // image(textFrameQuadrant, 0, 0, -width, height)
    // image(textFrameQuadrant, 0, 0, width, -height)
    // image(textFrameQuadrant, 0, 0, -width, -height)

    frame.colorMode(HSB, 360, 100, 100, 100)

    frame.translate(0, height/2 - startingPos.y)

    // this displays the rectangle that hides behind the four quadrants. I
    // need to figure out how to bevel the edges.
    frame.fill(234, 84, 14, 30)
    frame.noStroke()
    frame.strokeJoin(BEVEL)
    frame.push()
    frame.translate(startingPos)
    frame.rect(
        r/2 - 2, r/2 - 2,
        quadrantWidth * 2 - 4,
        -gapBetweenFrameHalves - quadrantHeight - 7
    )

    frame.pop()

    // top left quadrant. Does not need a rotation
    frame.push()
    frame.image(textFrameQuadrant, 0, 0)

    // top right
    frame.scale(-1, 1)
    frame.image(textFrameQuadrant, -width, 0)

    // bottom left. The scale effects multiply with each other
    frame.scale(-1, -1)
    frame.image(textFrameQuadrant, 0, gapBetweenFrameHalves)

    // bottom right
    frame.scale(-1, 1)
    frame.image(textFrameQuadrant, -width, gapBetweenFrameHalves)
    frame.pop()

    save(frame, "textFrame.png")
}

// displays a quadrant of the textFrame.
function displayFrameQuadrant() {
    // the starting position of my quadrant. I translate to this position later.
    // You can adjust this position to get different x and y margins.
    startingPos = new p5.Vector(50, 20)

    // the side lengths of the 45-45-90 degree triangle in the large diagonal.
    r = 4

    // the number of pixels to shift the diagonal line coordinates so that
    // it's thicker.
    const cornerShift = 1.1

    // the number of pixels to shift the long horizontal (topmost) line down.
    const thickBorderShift = cornerShift * sqrt(2)

    // the width of this entire quadrant
    quadrantWidth = width / 2 - startingPos.x

    // the length of the line that makes the long horizontal line thicker.
    // The reason why I'm dividing by 5 in particular is because the ratio
    // in the picture I have is around a fifth.
    const thickLineWidth = quadrantWidth / 5

    // the height of this entire quadrant.
    quadrantHeight = height / 10 - startingPos.y

    // the gap closer for the diagonal line
    const gapCloser = 1

    pg.noFill()
    pg.stroke(187, 20, 98)
    pg.strokeWeight(3)
    pg.strokeCap(SQUARE)
    pg.strokeJoin(MITER)

    // we need to translate to our starting position! We treat that as 0, 0.
    pg.translate(startingPos)

    /**
     *
     */
    pg.beginShape()

    // we start at the bottom of the quadrant and work our way up. This is
    // the bottommost point.
    pg.vertex(0, quadrantHeight)

    // draw the start of the bevel that connects the bottom and top lines
    pg.vertex(0, r)

    // draw the end of the last bevel.
    pg.vertex(r, 0)

    // draw the end of the long horizontal line.
    pg.vertex(quadrantWidth, 0)

    pg.endShape()

    pg.stroke(187, 20, 98)

    /**
     * this shape makes adjustments to the original text frame quadrant such
     * that there are certain parts that are larger.
     */
    

    // it's actually best to make a bunch of lines
    // draw the shifted bevel
    pg.line(
        cornerShift - gapCloser, r + cornerShift + gapCloser,
        r + cornerShift + gapCloser, cornerShift - gapCloser
    )

    // set the strokeCap to ROUND for the shifted horizontal line
    pg.strokeCap(ROUND)

    // draw the shifted horizontal line
    pg.line(
        r + cornerShift + gapCloser, thickBorderShift - gapCloser,
        thickLineWidth, thickBorderShift - gapCloser
    )
    // return our PGraphics as a PImage
    return pg
}

function draw() {
    background(234, 34, 24)

    // TODO remove minus sign? You can't have a negative distance.
    let gapBetweenFrameHalves = -140

    // attempts to display the text frame quadrant
    // image(textFrameQuadrant, 0, 0, width, height)
    // image(textFrameQuadrant, 0, 0, -width, height)
    // image(textFrameQuadrant, 0, 0, width, -height)
    // image(textFrameQuadrant, 0, 0, -width, -height)

    // this displays the rectangle that hides behind the four quadrants. I
    // need to figure out how to bevel the edges.
    fill(234, 84, 14, 30)
    noStroke()
    strokeJoin(BEVEL)
    push()
    translate(startingPos)
    rect(
        r/2 - 2, r/2 - 2,
        quadrantWidth * 2,
        -gapBetweenFrameHalves - quadrantHeight - 7
        )

    pop()

    // top left quadrant. Does not need a rotation
    push()
    image(textFrameQuadrant, 0, 0)

    // top right
    scale(-1, 1)
    image(textFrameQuadrant, -width, 0)

    // bottom left. The scale effects multiply with each other
    scale(-1, -1)
    image(textFrameQuadrant, 0, gapBetweenFrameHalves)

    // bottom right
    scale(-1, 1)
    image(textFrameQuadrant, -width, gapBetweenFrameHalves)
    pop()
}

// prevent the context menu from showing up :3 nya~
document.oncontextmenu = function () {
    return false;
}
