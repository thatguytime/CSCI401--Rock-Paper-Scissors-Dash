///////////////////////// K E Y B O A R D | C O N T R O L S /////////////////////////

export let lastKeyPressed = ''

// allows for fluid transition of directions when using keyboard
export const currentlyPressedKeys = {
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

/////////////////////////// M O B I L E | C O N T R O L S ///////////////////////////
// add in button press for touchscreen here!
// just plug in the keys for when a touch event occurs
let up, down, left, right


export function mobileControls() {
    up = document.getElementById('move-up')
    down = document.getElementById('move-down')
    left = document.getElementById('move-left')
    right = document.getElementById('move-right')

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

    return { up, down, left, right }
}