export function checkCharacterDirection(entity, wall) {
    return (

        // moving up
        (entity.velocity.y < 0 &&
            entity.position.y - entity.radius + entity.velocity.y <= wall.y + wall.height &&
            entity.position.y - entity.radius + entity.velocity.y > wall.y) ||

        // moving down
        (entity.velocity.y > 0 &&
            entity.position.y + entity.radius + entity.velocity.y >= wall.y &&
            entity.position.y + entity.radius + entity.velocity.y < wall.y + wall.height) ||

        // moving left
        (entity.velocity.x < 0 &&
            entity.position.x - entity.radius + entity.velocity.x <= wall.x + wall.width &&
            entity.position.x - entity.radius + entity.velocity.x > wall.x) ||

        // moving right
        (entity.velocity.x > 0 &&
            entity.position.x + entity.radius + entity.velocity.x >= wall.x &&
            entity.position.x + entity.radius + entity.velocity.x < wall.x + wall.width)
    )
}

// Check if the character is about to collide with the brick from any direction
export function characterMeetsBrick({ circle, rectangle }) {
    const padding = 1;
    return (
        circle.position.y - circle.radius + circle.velocity.y < rectangle.y + rectangle.height &&
        circle.position.x + circle.radius + circle.velocity.x > rectangle.x &&
        circle.position.y + circle.radius + circle.velocity.y > rectangle.y &&
        circle.position.x - circle.radius + circle.velocity.x < rectangle.x + rectangle.width
    )
}