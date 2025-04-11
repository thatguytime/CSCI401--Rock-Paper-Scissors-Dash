export function checkCharacterDirection(entity, wall) {
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
export function characterMeetsBrick({ circle, rectangle }) {
    const padding = 1;
    return (
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.y + rectangle.height + padding &&
        circle.position.x + circle.radius + circle.velocity.x >= rectangle.x - padding &&
        circle.position.y + circle.radius + circle.velocity.y >= rectangle.y - padding &&
        circle.position.x - circle.radius + circle.velocity.x <= rectangle.x + rectangle.width + padding
    )
}