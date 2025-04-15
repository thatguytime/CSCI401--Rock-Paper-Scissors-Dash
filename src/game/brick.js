let brickSize = 40

class Brick {
    constructor(x, y, ctx) {
        this.height = brickSize // pixels
        this.width = brickSize
        this.x = x
        this.y = y
        this.ctx = ctx
    }

    drawBrick() {
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height) //need to add the this. because theyre tied to the class
        this.ctx.fillStyle = "lightgreen";  // Set fill color for bricks
        this.ctx.fill()
        this.ctx.closePath()
    }
}

export default Brick