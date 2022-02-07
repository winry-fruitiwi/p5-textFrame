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

    // the gap closer for the diagonal line
    const gapCloser = 1

    noFill()
    stroke(187, 20, 98)
    strokeWeight(7)
    strokeCap(SQUARE)
    strokeJoin(MITER)

    // we need to translate to our starting position! We treat that as 0, 0.
    translate(startingPos)

    /**
     *
     */
    beginShape()

    // we start at the bottom of the quadrant and work our way up. This is
    // the bottommost point.
    vertex(0, quadrantHeight)

    // draw the start of the bevel that connects the bottom and top lines
    vertex(0, r)

    // draw the end of the last bevel.
    vertex(r, 0)

    // draw the end of the long horizontal line.
    vertex(quadrantWidth, 0)

    endShape()

    stroke(187, 20, 98)
    strokeWeight(7)

    /**
     * this shape makes adjustments to the original text frame quadrant such
     * that there are certain parts that are larger.
     */
    // // we need a separate beginShape()-endShape() loop for this. If we
    // // don't, we'd have to go back to the start of the bevel line.
    // beginShape()
    //
    // // first we need to draw a shifted bevel. The coordinates are going to
    // // be the same except they are both shifted by cornerShift or cs.
    //
    // // draw the start of the shifted bevel. We have to decrease the x and y
    // // by a bit or else we'll have a triangle of the canvas in our shifted bevel
    // vertex(
    //     cornerShift - gapCloser,
    //     r + cornerShift + gapCloser
    // )
    //
    // // draw the end of the shifted bevel. Do the opposite operation as last time
    // vertex(r + cornerShift + gapCloser, cornerShift - gapCloser)
    //
    // // first, we need to switch the strokeCap to ROUND
    // strokeCap(ROUND)
    //
    // // without this extra line, the extra few pixels on the bottom of the
    // // textFrame won't show up. But there's also a spike now!
    // // vertex(r + cornerShift + gapCloser, cornerShift - gapCloser + 1)
    //
    // // now we can draw a vertex until it hits the thickLineWidth variable
    // // vertex(thickLineWidth, thickBorderShift)
    // // maybe it's supposed to use cornerShift
    // vertex(thickLineWidth, cornerShift)
    //
    // endShape()

    // it's actually best to make a bunch of lines
    // draw the shifted bevel
    line(
        cornerShift - gapCloser, r + cornerShift + gapCloser,
        r + cornerShift + gapCloser, cornerShift - gapCloser
    )

    // set the strokeCap to ROUND for the shifted horizontal line
    strokeCap(ROUND)

    // draw the shifted horizontal line
    line(
        r + cornerShift + gapCloser, cornerShift - gapCloser + 2,
        thickLineWidth, cornerShift - gapCloser + 2
    )
}

function draw() {
    background(234, 34, 24)

    displayFrameQuadrant()
}

// prevent the context menu from showing up :3 nya~
document.oncontextmenu = function () {
    return false;
}
