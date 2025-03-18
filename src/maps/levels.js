import mapBrick from './moreLevels.js'
// import Character from "../maps/characters.js"
import smileImg from './smiles.png'

function runCanvas() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");  /// Store the 2D rendering context // context

  const characterRadius = 15
  class Character {
    constructor({ position, velocity }) {
      this.position = position
      this.velocity = velocity
      this.radius = 15
    }

    draw() {
      ctx.beginPath()
      ctx.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2,
      )
      ctx.fillStyle = 'yellow'
      ctx.fill()
      ctx.closePath()
    }

    move() {
      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
    }
  }

  const smiles = new Character({
    position: {
      x: 40 + characterRadius + characterRadius / 2,
      y: 40 + characterRadius + characterRadius / 2
    },
    velocity: {
      x: 0,
      y: 0
    }
  })

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

  let lastKeyPressed = ''

  // allows for fluid transition of directions when using keyboard
  const currentlyPressedKeys = {
    w: {
      pressed: false
    },
    a: {
      pressed: false
    },
    s: {
      pressed: false
    },
    d: {
      pressed: false
    },
    ArrowDown: {
      pressed: false
    },
    ArrowLeft: {
      pressed: false
    },
    ArrowUp: {
      pressed: false
    },
    ArrowRight: {
      pressed: false
    }
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

  let border = []
  let pellets = []

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

  mapBrick[0].forEach((row, i) => {
    row.forEach((column, j) => {

      // wall == *, in the array
      if (column === "*") {
        let testBrick = new Brick(brickSize * j, brickSize * i)
        border.push(testBrick)
      } else if (column === " ") {
        let testPellet = new Pellet(brickSize * j + (brickSize / 2) - 2.5, brickSize * i + (brickSize / 2) - 2.5) // 2.5: half the pellet sq size
        pellets.push(testPellet)
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
        if (characterMeetsBrick({ circle: { ...smiles, velocity: { x: 0, y: -5 } }, rectangle: brickPart })) {
          smiles.velocity.y = 0;
          break
        } else {
          smiles.velocity.y = -5
        }
      }
    } else if (currentlyPressedKeys.s.pressed && lastKeyPressed === 's' ||
      currentlyPressedKeys.ArrowDown.pressed && lastKeyPressed === 'ArrowDown'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...smiles, velocity: { x: 0, y: 5 } }, rectangle: brickPart })) {
          smiles.velocity.y = 0
          break
        } else {
          smiles.velocity.y = 5
        }
      }
    } else if (currentlyPressedKeys.a.pressed && lastKeyPressed === 'a' ||
      currentlyPressedKeys.ArrowLeft.pressed && lastKeyPressed === 'ArrowLeft'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...smiles, velocity: { x: -5, y: 0 } }, rectangle: brickPart })) {
          smiles.velocity.x = 0
          break
        } else {
          smiles.velocity.x = -5
        }
      }
    } else if (currentlyPressedKeys.d.pressed && lastKeyPressed === 'd' ||
      currentlyPressedKeys.ArrowRight.pressed && lastKeyPressed === 'ArrowRight'
    ) {
      for (let i = 0; i < border.length; i++) {
        const brickPart = border[i]
        if (characterMeetsBrick({ circle: { ...smiles, velocity: { x: 5, y: 0 } }, rectangle: brickPart })) {
          smiles.velocity.x = 0
          break
        } else {
          smiles.velocity.x = 5
        }
      }
    }

    // render for pellets
    pellets.forEach(pellet => {
      pellet.draw()

      // COLLISION DETECTION TEMPLATE
      // a^2 + b^2 = c^
      // subtract x's and y's to get distance
      if (Math.hypot(smiles.position.x - pellet.positionX, smiles.position.y - pellet.positionY) < 10) {
        pellets.splice(pellets.indexOf(pellet), 1)
      }

    })

    border.forEach(brick => {
      brick.drawBrick()

      // Check for collision based on movement direction
      if (
        (smiles.velocity.y < 0 && // moving up
          smiles.position.y - smiles.radius + smiles.velocity.y <= brick.y + brick.height &&
          smiles.position.y - smiles.radius + smiles.velocity.y > brick.y) ||
        (smiles.velocity.y > 0 && // moving down
          smiles.position.y + smiles.radius + smiles.velocity.y >= brick.y &&
          smiles.position.y + smiles.radius + smiles.velocity.y < brick.y + brick.height) ||
        (smiles.velocity.x < 0 && // moving left
          smiles.position.x - smiles.radius + smiles.velocity.x <= brick.x + brick.width &&
          smiles.position.x - smiles.radius + smiles.velocity.x > brick.x) ||
        (smiles.velocity.x > 0 && // moving right
          smiles.position.x + smiles.radius + smiles.velocity.x >= brick.x &&
          smiles.position.x + smiles.radius + smiles.velocity.x < brick.x + brick.width)
      ) {
        if (characterMeetsBrick({ circle: smiles, rectangle: brick })) {
          smiles.velocity.x = 0;
          smiles.velocity.y = 0;
        }
      }


    })
    smiles.move()

  }

  animate()
}

// Check if the character is about to collide with the brick from any direction
function characterMeetsBrick({ circle, rectangle }) {
  const padding = 2;
  return (
    circle.position.y - circle.radius + circle.velocity.y <= rectangle.y + rectangle.height + padding &&
    circle.position.x + circle.radius + circle.velocity.x >= rectangle.x - padding &&
    circle.position.y + circle.radius + circle.velocity.y >= rectangle.y - padding &&
    circle.position.x - circle.radius + circle.velocity.x <= rectangle.x + rectangle.width + padding
  )
}



export default runCanvas