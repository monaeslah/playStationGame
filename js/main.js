class Player {
  constructor () {
    this.width = 20
    this.heigth = 10
    this.positionX = 0
    this.positionY = 0
    this.domElment = null
    this.createDomeElement()
  }
  createDomeElement () {
    //step 1 :create an element
    this.domElment = document.createElement('div')

    //step 2 content or modify
    this.domElment.id = 'player'
    this.domElment.style.width = this.width + 'vw'
    this.domElment.style.height = this.heigth + 'vh'
    this.domElment.style.bottom = this.positionX + 'vw'
    this.domElment.style.left = this.positionY + 'vh'

    //step 3 append to the dom: `parentElm.appendChild()`
    const board = document.getElementById('board')
    board.appendChild(this.domElment)
  }
  moveRight () {
    this.positionX++
    this.domElment.style.left = this.positionX + 'vw'
  }
  moveLeft () {
    this.positionX--
    this.domElment.style.left = this.positionY + 'vw'
  }
}
class Obstacle {
  constructor () {
    this.width = 30
    this.heigth = 15
    this.positionX = 70 - this.width / 2
    this.positionY = 100
    this.domElment = null
    this.createDomeElement()
  }
  createDomeElement () {
    this.domElment = document.createElement('div')

    this.domElment.className = 'obstacle'
    this.domElment.style.width = this.width + 'vw'
    this.domElment.style.height = this.heigth + 'vh'
    this.domElment.style.left = this.positionX + 'vw'
    this.domElment.style.bottom = this.positionY + 'vh'

    //step 3 append to the dom: `parentElm.appendChild()`
    const board = document.getElementById('board')
    board.appendChild(this.domElment)
  }
  moveDown () {
    this.positionY--
    this.domElment.style.bottom = this.positionY + 'vh'
  }
}
const player = new Player()
let obstacle1 = null
setInterval(() => {
  obstacle1 = new Obstacle()
  console.log(obstacle1)
}, 2000)

setInterval(() => {
  if (obstacle1 !== null) {
    obstacle1.moveDown()
  }
}, 100)

document.addEventListener('keydown', e => {
  console.log(e.code)
  if (e.code === 'ArrowLeft') {
    player.moveLeft()
  } else if (e.code === 'ArrowRight') {
    player.moveRight()
  }
})
