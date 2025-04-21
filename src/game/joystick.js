import { currentlyPressedKeys } from "./eventListeners"

function joystick() {
    const container = document.getElementById("joystick-container")
    const joystick = document.getElementById("joystick")

    // direction character is moving from joystick
    let moveCharacter = ""

    // reference point for all calulations when joystick is moving
    // parent div is 200px x 200px
    const centerX = 100 // center of container
    const centerY = 100

    let dragging = false

    function movejoystick(e) {

        // continually grabs the relational space for the joystick within its parent element
        const rect = container.getBoundingClientRect()

        // clientX & clientY: x & y locations of where the figure touches the screen
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const dx = x - centerX
        const dy = y - centerY
        const dist = Math.min(Math.sqrt(dx * dx + dy * dy), 60) // limit radius

        const angle = Math.atan2(dy, dx)

        const moveX = centerX + dist * Math.cos(angle) - 40 // offset for joystick radius
        const moveY = centerY + dist * Math.sin(angle) - 40

        joystick.style.left = `${moveX}px`
        joystick.style.top = `${moveY}px`

        switch (getDirection(angle)) {
            case 'north':
                currentlyPressedKeys.ArrowUp.pressed = true
                currentlyPressedKeys.ArrowDown.pressed = false
                currentlyPressedKeys.ArrowLeft.pressed = false
                currentlyPressedKeys.ArrowRight.pressed = false
                lastKeyPressed = 'ArrowUp'
                break
            case 'south':
                currentlyPressedKeys.ArrowUp.pressed = false
                currentlyPressedKeys.ArrowDown.pressed = true
                currentlyPressedKeys.ArrowLeft.pressed = false
                currentlyPressedKeys.ArrowRight.pressed = false
                lastKeyPressed = 'ArrowDown'
                break
            case 'east':
                currentlyPressedKeys.ArrowUp.pressed = false
                currentlyPressedKeys.ArrowDown.pressed = false
                currentlyPressedKeys.ArrowLeft.pressed = false
                currentlyPressedKeys.ArrowRight.pressed = true
                lastKeyPressed = 'ArrowRight'
                break
            case 'west':
                currentlyPressedKeys.ArrowUp.pressed = false
                currentlyPressedKeys.ArrowDown.pressed = false
                currentlyPressedKeys.ArrowLeft.pressed = false
                currentlyPressedKeys.ArrowRight.pressed = false
                lastKeyPressed = 'ArrowLeft'
                break

        }
    }

    // finger touches screen
    container.addEventListener("pointerdown", (e) => {
        dragging = true
        movejoystick(e)
    })

    // finger moves on screen
    window.addEventListener("pointermove", (e) => {
        if (dragging) {
            movejoystick(e)
        }
    })

    // finger lifts off of screen
    window.addEventListener("pointerup", () => {
        dragging = false

        // reset to center
        joystick.style.left = "60px"
        joystick.style.top = "60px"
    })

    function getDirection(angle) {

        // circle of fifths
        const deg = angle * (180 / Math.PI)
        if (deg >= -22.5 && deg < 22.5) {
            return "east"
        }
        if (deg >= 22.5 && deg < 67.5) {
            return "southeast"
        }
        if (deg >= 67.5 && deg < 112.5) {
            return "south"
        }
        if (deg >= 112.5 && deg < 157.5) {
            return "southwest"
        }
        if (deg >= 157.5 || deg < -157.5) {
            return "west"
        }
        if (deg >= -157.5 && deg < -112.5) {
            return "northwest"
        }
        if (deg >= -112.5 && deg < -67.5) {
            return "north"
        }
        if (deg >= -67.5 && deg < -22.5) {
            return "northeast"
        }
        return "Center"
    }

    console.log(moveCharacter)
    return moveCharacter
}

export default joystick