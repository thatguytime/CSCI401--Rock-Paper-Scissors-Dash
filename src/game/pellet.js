class Pellet {
    constructor(positionX, positionY, ctx) {
        this.positionX = positionX
        this.positionY = positionY
        this.width = 5
        this.height = 5
        this.ctx = ctx
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.positionX, this.positionY, this.width, this.height) //need to add the this. because theyre tied to the class
        this.ctx.fillStyle = "white";  // Set fill color for bricks
        this.ctx.fill()
        this.ctx.closePath()
    }
}

export default Pellet