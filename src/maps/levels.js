import mapBrick from './moreLevels.js'
import score from './score.js'
// import Character from "../maps/characters.js"
import paperImg from './Paper0.png'
import rockImg from './Rock0.png'
import scissorsImg from './Scissors0.png'

function runCanvas(level) {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");  /// Store the 2D rendering context // context

  const characterRadius = 15
  class Character {
    constructor({ position, velocity, imageSrc }) {
      this.position = position
      this.velocity = velocity
      this.radius = 15
      this.image = new Image()
      this.image.src = imageSrc
      this.angle = 0;

      this.prevCollisions = [] // for badguy's AI
    }

    draw() {
      ctx.save();
      ctx.translate(this.position.x, this.position.y);
      ctx.rotate(this.angle);
      ctx.drawImage(
        this.image,
        - this.radius,
        - this.radius,
        this.radius * 2,
        this.radius * 2
      );
      ctx.restore();
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
  }

  const paper = new Character({
    position: {
      x: 40 + 15 + 15 / 2,
      y: 40 + 15 + 15 / 2
    },
    velocity: {
      x: 0,
      y: 0
    },
    imageSrc: paperImg
  })
  let userSpeedLimit = 5

  const rock = new Character({
    position: {
      x: 520 + 15 + 15 / 2,
      y: 40 + 15 + 15 / 2
    },
    velocity: {
      x: -1,
      y: 0
    },
    imageSrc: rockImg
  })

  // const scissors = new Character({
  //   position: {
  //     x: 520 + 15 + 15 / 2,
  //     y: 520 + 15 + 15 / 2
  //   },
  //   velocity: {
  //     x: -1,
  //     y: 0
  //   },
  //   imageSrc: scissorsImg
  // })

  let badGuySpeed = 1
  const badGuys = [rock]

  const pelletRadius = 15
  class Pellet {
    constructor(positionX, positionY) {
      this.positionX = positionX
      this.positionY = positionY
      this.width = 5
      this.height = 5
    }

    draw() {
      ctx.beginPath()
      ctx.rect(this.positionX, this.positionY, this.width, this.height) //need to add the this. because theyre tied to the class
      ctx.fillStyle = "white";  // Set fill color for bricks
      ctx.fill()
      ctx.closePath()
    }


  }

  class PowerUp {
    constructor(positionX, positionY) {
      this.positionX = positionX
      this.positionY = positionY
      this.width = 25
      this.height = 25
    }

    draw() {
      ctx.beginPath()
      ctx.rect(this.positionX, this.positionY, this.width, this.height)
      ctx.fillStyle = "coral";  // Set fill color for powerup
      ctx.fill()
      ctx.closePath()
    }
  }

  let lastKeyPressed = ''

  // allows for fluid transition of directions when using keyboard
  const currentlyPressedKeys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
    ArrowDown: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowUp: { pressed: false },
    ArrowRight: { pressed: false }
  }

  addEventListener('keydown', ({ key }) => {
    if (key === 'w') {
      currentlyPressedKeys.w.pressed = true
      lastKeyPressed = 'w'
    } else if (key === 's') {
      currentlyPressedKeys.s.pressed = true
      lastKeyPressed = 's'
    } else if (key === 'a') {
      currentlyPressedKeys.a.pressed = true
      lastKeyPressed = 'a'
    } else if (key === 'd') {
      currentlyPressedKeys.d.pressed = true
      lastKeyPressed = 'd'
    } else if (key === 'ArrowDown') {
      currentlyPressedKeys.ArrowDown.pressed = true
      lastKeyPressed = 'ArrowDown'
    } else if (key === 'ArrowUp') {
      currentlyPressedKeys.ArrowUp.pressed = true
      lastKeyPressed = 'ArrowUp'
    } else if (key === 'ArrowLeft') {
      currentlyPressedKeys.ArrowLeft.pressed = true
      lastKeyPressed = 'ArrowLeft'
    } else if (key === 'ArrowRight') {
      currentlyPressedKeys.ArrowRight.pressed = true
      lastKeyPressed = 'ArrowRight'
    }
  })

  addEventListener('keyup', ({ key }) => {
    if (key === 'w') {
      currentlyPressedKeys.w.pressed = false
    } else if (key === 's') {
      currentlyPressedKeys.s.pressed = false
    } else if (key === 'a') {
      currentlyPressedKeys.a.pressed = false
    } else if (key === 'd') {
      currentlyPressedKeys.d.pressed = false
    } else if (key === 'ArrowDown') {
      currentlyPressedKeys.ArrowDown.pressed = false
    } else if (key === 'ArrowUp') {
      currentlyPressedKeys.ArrowUp.pressed = false
    } else if (key === 'ArrowLeft') {
      currentlyPressedKeys.ArrowLeft.pressed = false
    } else if (key === 'ArrowRight') {
      currentlyPressedKeys.ArrowRight.pressed = false
    }
  })

  // add everthing here, then try to put in into other file
  // add in button press for touchscreen here!
  // just plug in the keys for when a touch event occurs
  const up = document.getElementById('move-up')
  const down = document.getElementById('move-down')
  const left = document.getElementById('move-left')
  const right = document.getElementById('move-right')

  up.addEventListener('touchstart', () => {
    currentlyPressedKeys.ArrowUp.pressed = true
    lastKeyPressed = 'ArrowUp'
  })
  down.addEventListener('touchstart', () => {
    currentlyPressedKeys.ArrowDown.pressed = true
    lastKeyPressed = 'ArrowDown'
  })
  left.addEventListener('touchstart', () => {
    currentlyPressedKeys.ArrowLeft.pressed = true
    lastKeyPressed = 'ArrowLeft'
  })
  right.addEventListener('touchstart', () => {
    currentlyPressedKeys.ArrowRight.pressed = true
    lastKeyPressed = 'ArrowRight'
  })

  up.addEventListener('touchend', () => {
    currentlyPressedKeys.ArrowUp.pressed = false
  })
  down.addEventListener('touchend', () => {
    currentlyPressedKeys.ArrowDown.pressed = false
  })
  left.addEventListener('touchend', () => {
    currentlyPressedKeys.ArrowLeft.pressed = false
  })
  right.addEventListener('touchend', () => {
    currentlyPressedKeys.ArrowRight.pressed = false
  })

  let border = []
  let pellets = []
  let powerUps = []

  // creates each brick, or wall, for the map
  let brickSize = 40
  class Brick {
    constructor(x, y) {
      this.height = brickSize // pixels
      this.width = brickSize
      this.x = x
      this.y = y
    }

    drawBrick() {
      ctx.beginPath()
      ctx.rect(this.x, this.y, this.width, this.height) //need to add the this. because theyre tied to the class
      ctx.fillStyle = "lightgreen";  // Set fill color for bricks
      ctx.fill()
      ctx.closePath()
    }
  }

  mapBrick[level].forEach((row, i) => {
    row.forEach((column, j) => {

      // wall == *, in the array
      if (column === "*") {
        let testBrick = new Brick(brickSize * j, brickSize * i)
        border.push(testBrick)
      } else if (column === " ") {
        let testPellet = new Pellet(brickSize * j + (brickSize / 2) - 2.5, brickSize * i + (brickSize / 2) - 2.5) // 2.5: half the pellet sq size
        pellets.push(testPellet)

        // Power up - lowercase 'p'
      } else if (column === "p") {
        let testPowerUp = new PowerUp(brickSize * j + (brickSize / 2) - 12.5, brickSize * i + (brickSize / 2) - 12.5) // 12.5: half the powerup sq size
        powerUps.push(testPowerUp)
      }

    })
  })

  function animate() {

    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // makes character move depending on the key that is pressed
    if (currentlyPressedKeys.w.pressed && lastKeyPressed === 'w' ||
      currentlyPressedKeys.ArrowUp.pressed && lastKeyPressed === 'ArrowUp'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...paper, velocity: { x: 0, y: -5 } }, rectangle: brickPart })) {
          paper.velocity.y = 0;
          break
        } else {
          paper.velocity.y = -userSpeedLimit
        }
      }
    } else if (currentlyPressedKeys.s.pressed && lastKeyPressed === 's' ||
      currentlyPressedKeys.ArrowDown.pressed && lastKeyPressed === 'ArrowDown'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...paper, velocity: { x: 0, y: 5 } }, rectangle: brickPart })) {
          paper.velocity.y = 0
          break
        } else {
          paper.velocity.y = userSpeedLimit
        }
      }
    } else if (currentlyPressedKeys.a.pressed && lastKeyPressed === 'a' ||
      currentlyPressedKeys.ArrowLeft.pressed && lastKeyPressed === 'ArrowLeft'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...paper, velocity: { x: -5, y: 0 } }, rectangle: brickPart })) {
          paper.velocity.x = 0
          break
        } else {
          paper.velocity.x = -userSpeedLimit
        }
      }
    } else if (currentlyPressedKeys.d.pressed && lastKeyPressed === 'd' ||
      currentlyPressedKeys.ArrowRight.pressed && lastKeyPressed === 'ArrowRight'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...paper, velocity: { x: 5, y: 0 } }, rectangle: brickPart })) {
          paper.velocity.x = 0
          break
        } else {
          paper.velocity.x = userSpeedLimit
        }
      }
    }

    // render powerups
    powerUps.forEach(powerup => {
      powerup.draw()

      if (Math.hypot(paper.position.x - powerup.positionX, paper.position.y - powerup.positionY) < 20) {
        powerUps.splice(powerUps.indexOf(powerup), 1)

        userSpeedLimit = 7.5

        // testing speed powerup
        setTimeout(function () {


          // return to standard speed
          userSpeedLimit = 5
        }, 10000);
      }

    })



    // render pellets
    pellets.forEach(pellet => {
      pellet.draw()

      // COLLISION DETECTION TEMPLATE
      // a^2 + b^2 = c^
      // subtract x's and y's to get distance
      if (Math.hypot(paper.position.x - pellet.positionX, paper.position.y - pellet.positionY) < 10) {
        pellets.splice(pellets.indexOf(pellet), 1)
        // score gets updated here
        score(10)
      }

      // triggers next level if you collect all the pellets
      if (pellets.length === 0) {
        console.log('no more pellets!')
        runCanvas(level + 1)
      }

    })

    border.forEach(brick => {
      brick.drawBrick()

      // Check for collision based on movement direction
      if (
        (paper.velocity.y < 0 && // moving up
          paper.position.y - paper.radius + paper.velocity.y <= brick.y + brick.height &&
          paper.position.y - paper.radius + paper.velocity.y > brick.y) ||
        (paper.velocity.y > 0 && // moving down
          paper.position.y + paper.radius + paper.velocity.y >= brick.y &&
          paper.position.y + paper.radius + paper.velocity.y < brick.y + brick.height) ||
        (paper.velocity.x < 0 && // moving left
          paper.position.x - paper.radius + paper.velocity.x <= brick.x + brick.width &&
          paper.position.x - paper.radius + paper.velocity.x > brick.x) ||
        (paper.velocity.x > 0 && // moving right
          paper.position.x + paper.radius + paper.velocity.x >= brick.x &&
          paper.position.x + paper.radius + paper.velocity.x < brick.x + brick.width)
      ) {
        if (characterMeetsBrick({ circle: paper, rectangle: brick })) {
          paper.velocity.x = 0;
          paper.velocity.y = 0;
        }
      }
    })
    paper.move()
    // rock.move()
    // scissors.move()

    // Badguy AI
    // how do you make the AI characters move?
    // collision detection: track bad guy collisions at any point in time
    badGuys.forEach(dude => {
      dude.move()

      const collisions = []
      border.forEach(wall => {

        // keeps track of the direction character is moving in and what it can possibly collisde with
        if (!collisions.includes('right') && characterMeetsBrick({ circle: { ...dude, velocity: { x: badGuySpeed, y: 0 } }, rectangle: wall })) {
          collisions.push('right')

          console.log('hit right')
        }
        if (!collisions.includes('left') && characterMeetsBrick({ circle: { ...dude, velocity: { x: -1 * badGuySpeed, y: 0 } }, rectangle: wall })) {
          collisions.push('left')

          console.log('hit left')
        }
        if (!collisions.includes('up') && characterMeetsBrick({ circle: { ...dude, velocity: { x: 0, y: -1 * badGuySpeed } }, rectangle: wall })) {
          collisions.push('up')

          console.log('hit top')
        }
        if (!collisions.includes('down') && characterMeetsBrick({ circle: { ...dude, velocity: { x: 0, y: badGuySpeed } }, rectangle: wall })) {
          collisions.push('down')

          console.log('hit bottom')
        }
      })

      if (collisions.length > dude.prevCollisions.length) {
        dude.prevCollisions = [...collisions]
      }



      // console.log(collisions)
      if (JSON.stringify(collisions) !== JSON.stringify(dude.prevCollisions)) {


        if (dude.velocity.x > 0)
          dude.prevCollisions.push('right')
        else if (dude.velocity.x < 0)
          dude.prevCollisions.push('left')
        else if (dude.velocity.y > 0)
          dude.prevCollisions.push('down')
        else if (dude.velocity.y < 0)
          dude.prevCollisions.push('up')

        // finds the path that is open
        const pathways = dude.prevCollisions.filter(collision => !collisions.includes(collision))

        // algorithm that chooses which direction for the bad guys to go
        const direction = pathways[Math.floor(Math.random() * pathways.length)]

        switch (direction) {
          case 'down':
            dude.velocity.x = 0
            dude.velocity.y = badGuySpeed
            break
          case 'up':
            dude.velocity.x = 0
            dude.velocity.y = -1 * badGuySpeed
            break
          case 'right':
            dude.velocity.x = badGuySpeed
            dude.velocity.y = 0
            break
          case 'left':
            dude.velocity.x = -1 * badGuySpeed
            dude.velocity.y = 0
            break
        }

        dude.prevCollisions = []
      }
    })

  }

  animate()
}

function iDontKnow(entity, wall) {
  return ((entity.velocity.y < 0 && // moving up
    entity.position.y - entity.radius + entity.velocity.y <= wall.y + wall.height &&
    entity.position.y - entity.radius + entity.velocity.y > wall.y) ||
    (entity.velocity.y > 0 && // moving down
      entity.position.y + entity.radius + entity.velocity.y >= wall.y &&
      entity.position.y + entity.radius + entity.velocity.y < wall.y + wall.height) ||
    (entity.velocity.x < 0 && // moving left
      entity.position.x - entity.radius + entity.velocity.x <= wall.x + wall.width &&
      entity.position.x - entity.radius + entity.velocity.x > wall.x) ||
    (entity.velocity.x > 0 && // moving right
      entity.position.x + entity.radius + entity.velocity.x >= wall.x &&
      entity.position.x + entity.radius + entity.velocity.x < wall.x + wall.width))
}

// Check if the character is about to collide with the brick from any direction
function characterMeetsBrick({ circle, rectangle }) {
  const padding = 1;
  return (
    circle.position.y - circle.radius + circle.velocity.y <= rectangle.y + rectangle.height + padding &&
    circle.position.x + circle.radius + circle.velocity.x >= rectangle.x - padding &&
    circle.position.y + circle.radius + circle.velocity.y >= rectangle.y - padding &&
    circle.position.x - circle.radius + circle.velocity.x <= rectangle.x + rectangle.width + padding
  )
}

export default runCanvas