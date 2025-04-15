class PowerUp {
    constructor(positionX, positionY, ctx) {
        this.positionX = positionX
        this.positionY = positionY
        this.width = 25
        this.height = 25
        this.ctx = ctx
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.positionX, this.positionY, this.width, this.height)
        this.ctx.fillStyle = "coral";  // Set fill color for powerup
        this.ctx.fill()
        this.ctx.closePath()
    }
}

export default PowerUp