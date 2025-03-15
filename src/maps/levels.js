import mapBrick from './moreLevels.js'
// import Character from "../maps/characters.js"
import smileImg from './smiles.png'

function runCanvas() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");  /// Store the 2D rendering context // context

  const mainCharacter = new Image()
  mainCharacter.src = smileImg

  class Character {
    constructor({ position, velocity }) {
      this.position = position
      this.velocity = velocity
      this.width = 40
    }

    draw() {
      if (mainCharacter.complete) {
        ctx.drawImage(mainCharacter, this.position.x, this.position.y, 40, 40)
      }
    }

    move() {
      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
    }
  }

  const smiles = new Character({
    position: {
      x: 40,
      y: 40
    },
    velocity: {
      x: 0,
      y: 0
    }
  })

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
    console.log(key)
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

  let newMap = []

  function animate() {

    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    newMap.forEach(b => {
      b.drawBrick()
    })
    smiles.move()

    // loop will always make character stop!
    smiles.velocity.x = 0
    smiles.velocity.y = 0

    if (currentlyPressedKeys.w.pressed && lastKeyPressed === 'w') {
      smiles.velocity.y = -5
    } else if (currentlyPressedKeys.s.pressed && lastKeyPressed === 's') {
      smiles.velocity.y = 5
    } else if (currentlyPressedKeys.a.pressed && lastKeyPressed === 'a') {
      smiles.velocity.x = -5
    } else if (currentlyPressedKeys.d.pressed && lastKeyPressed === 'd') {
      smiles.velocity.x = 5
    } else if (currentlyPressedKeys.ArrowUp.pressed && lastKeyPressed === 'ArrowUp') {
      smiles.velocity.y = -5
    } else if (currentlyPressedKeys.ArrowDown.pressed && lastKeyPressed === 'ArrowDown') {
      smiles.velocity.y = 5
    } else if (currentlyPressedKeys.ArrowLeft.pressed && lastKeyPressed === 'ArrowLeft') {
      smiles.velocity.x = -5
    } else if (currentlyPressedKeys.ArrowRight.pressed && lastKeyPressed === 'ArrowRight') {
      smiles.velocity.x = 5
    }


  }

  animate()


  let brickSize = 40
  class Brick {
    constructor(x, y) {
      this.height = brickSize; // pixels
      this.width = brickSize;
      this.x = x;
      this.y = y;
    }

    drawBrick() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height); //need to add the this. because theyre tied to the class
      ctx.fillStyle = "lightgreen";  // Set fill color for bricks
      ctx.fill();
      ctx.closePath();
    }
  }



  mapBrick[0].forEach((row, i) => {
    row.forEach((column, j) => {

      // wall
      if (column == "*") {
        let testBrick = new Brick(brickSize * j, brickSize * i)
        newMap.push(testBrick)
      }
    })
  })


}




export default runCanvas