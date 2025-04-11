class Character {
    constructor({ position, velocity, imageSrc }, ctx) {
        this.position = position
        this.velocity = velocity
        this.radius = 15
        this.image = new Image()
        this.image.src = imageSrc
        this.angle = 0;
        this.ctx = ctx
        this.state = 'active'

        this.prevCollisions = [] // for badguy's AI
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.angle);
        this.ctx.drawImage(
            this.image,
            - this.radius,
            - this.radius,
            this.radius * 2,
            this.radius * 2
        );
        this.ctx.restore();
    }

    move() {
        if (this.velocity.x > 0) this.angle = 0; // Moving right
        if (this.velocity.x < 0) this.angle = Math.PI; // Moving left
        if (this.velocity.y > 0) this.angle = Math.PI / 2; // Moving down
        if (this.velocity.y < 0) this.angle = -Math.PI / 2; // Moving up
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

    // need to add collision detection between players first
    update() {

        switch (this.state) {
            case 'alive':
                break
            case 'bluntForceTrauma':
                break
            case 'firstDegreeMurder':
                this.state = 'death'
        }
    }
}

export default Character