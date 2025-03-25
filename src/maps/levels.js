import mapBrick from './moreLevels.js'
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
	}

    draw() {
		ctx.drawImage(
		       this.image,
		       this.position.x - this.radius, 
		       this.position.y - this.radius,
		       this.radius * 2,
		       this.radius * 2
		     );
    }

    move() {
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

  const rock = new Character({
    position: {
      x: 520 + 15 + 15 / 2,
      y: 40 + 15 + 15 / 2
    },
    velocity: {
      x: 0,
      y: 0
  },
  imageSrc: rockImg
  })

  const scissors = new Character({
    position: {
      x: 520 + 15 + 15 / 2,
      y: 520 + 15 + 15 / 2
    },
    velocity: {
      x: 0,
      y: 0
  }, 
  imageSrc: scissorsImg
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
    console.log('unpress up')
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
          paper.velocity.y = -5
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
          paper.velocity.y = 5
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
          paper.velocity.x = -5
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
          paper.velocity.x = 5
        }
      }
    }

    // render for pellets
    pellets.forEach(pellet => {
      pellet.draw()

      // COLLISION DETECTION TEMPLATE
      // a^2 + b^2 = c^
      // subtract x's and y's to get distance
      if (Math.hypot(paper.position.x - pellet.positionX, paper.position.y - pellet.positionY) < 10) {
        pellets.splice(pellets.indexOf(pellet), 1)
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
    rock.move()
    scissors.move()

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