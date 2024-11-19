import platformSrc from '../img/platform.png'
import backgroundSrc from '../img/background.png'
import astronautSrc from '../img/astronaut.gif'
import sunsetGifSrc from '../img/red_middle_animated.gif' 

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 1.5
let levelCompleted = false
let levelAnnouncement = true
let animationId
let isPaused = false
let gameStarted = false

// Load the sunset GIF as a background
const sunsetGif = new Image()
sunsetGif.src = sunsetGifSrc

class Player {
    constructor() {
        this.position = { x: 100, y: 100 }
        this.velocity = { x: 0, y: 1 }
        this.width = 50
        this.height = 50
        this.image = new Image()
        this.image.src = astronautSrc
    }
    
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y 

        if (this.position.y + this.height + this.velocity.y <= canvas.height) 
            this.velocity.y += gravity
        else 
            this.velocity.y = 0
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = { x, y }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class GenericObject {
    constructor({ x, y, image }) {
        this.position = { x, y }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

const platformImage = createImage(platformSrc)
const backgroundImage = createImage(backgroundSrc)

let player, platforms, genericObjects, scrollOffset

function initializeGame() {
    player = new Player()
    scrollOffset = 0
    levelCompleted = false
    levelAnnouncement = true

    // Platforms aligned across the bottom of the canvas
    platforms = [
        new Platform({ x: -1, y: canvas.height - platformImage.height, image: platformImage }),
        new Platform({ x: platformImage.width - 3, y: canvas.height - platformImage.height, image: platformImage }),
        new Platform({ x: platformImage.width * 2 - 6, y: canvas.height - platformImage.height, image: platformImage }),
        new Platform({ x: platformImage.width * 3 - 9, y: canvas.height - platformImage.height, image: platformImage }),
        new Platform({ x: platformImage.width * 4 - 12, y: canvas.height - platformImage.height, image: platformImage }),
        new Platform({ x: platformImage.width * 5 - 15, y: canvas.height - platformImage.height, image: platformImage })
    ]

    genericObjects = [ 
        new GenericObject({ x: 0, y: 0, image: backgroundImage })
    ]
}

const keys = {
    right: { pressed: false },
    left: { pressed: false }
}

function animate() {
    animationId = requestAnimationFrame(animate)
    
    // Draw the sunset GIF as the background
    c.drawImage(sunsetGif, 0, 0, canvas.width, canvas.height)
    
    // Clear any previous drawings
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    // Draw other background objects and platforms
    genericObjects.forEach(genericObject => genericObject.draw())
    platforms.forEach(platform => platform.draw())
    
    player.update()
    
    if (levelAnnouncement) {
        c.font = '30px Arial'
        c.fillStyle = 'black'
        c.fillText('Level 1', canvas.width / 2 - 50, 50)
        setTimeout(() => levelAnnouncement = false, 2000)
    }

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach(platform => platform.position.x -= 5)
            genericObjects.forEach(genericObject => genericObject.position.x -= 2)
        } else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach(platform => platform.position.x += 5)
            genericObjects.forEach(genericObject => genericObject.position.x += 2)
        }
    }

    platforms.forEach(platform => {
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    })

    if (scrollOffset > 2000 && !levelCompleted) {
        levelCompleted = true
    }

    if (levelCompleted) {
        c.font = '30px Arial'
        c.fillStyle = 'green'
        c.fillText('Level 1 Completed!', canvas.width / 2 - 100, 100)
    }
}

function startGame() {
    if (!gameStarted) {
        initializeGame()
        animate()
        gameStarted = true
        isPaused = false
    } else if (isPaused) {
        isPaused = false
        animate()
    }
}

function pauseGame() {
    if (!isPaused) {
        isPaused = true
        cancelAnimationFrame(animationId)
    }
}

function resetGame() {
    cancelAnimationFrame(animationId)
    initializeGame()
    gameStarted = false
    isPaused = false
    animate()
}

// Initialize game state on page load
initializeGame()

// Event listeners for controls
document.getElementById('startButton').addEventListener('click', startGame)
document.getElementById('pauseButton').addEventListener('click', pauseGame)
document.getElementById('resetButton').addEventListener('click', resetGame)

addEventListener('keydown', (event) => {
    if (!isPaused) {
        switch (event.key) {
            case 'a':
                keys.left.pressed = true
                break
            case 'd':
                keys.right.pressed = true
                break
            case 'w':
                if (player.velocity.y === 0) { // Only jump if on a platform
                    player.velocity.y -= 20
                }
                break
        }
    }
})

addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.left.pressed = false
            break
        case 'd':
            keys.right.pressed = false
            break
    }
})
