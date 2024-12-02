const tv = document.querySelector('.tv')
const player = document.querySelector('.player')
const enemy = document.querySelector('.enemy')
const score = document.querySelector('.score')

let x = window.innerWidth;
let y = 90;
let enemySpeed = 5
let count = 0
let msg
let gameEnd = false;

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') { // Check if the pressed key is the "Up Arrow"
    const y = 100; // Adjust this value as needed to determine how high "player" moves
    player.style.bottom = `${y}px`; // Move the player up
    setTimeout(() => {
      player.style.bottom = `10px`; // Reset the player's position after 600ms
    }, 600);
  }
});

function run(){
  
  let playerCoord = player.getBoundingClientRect();
  let enemyCoord = enemy.getBoundingClientRect();
  
  if (!gameEnd) {
    x -= enemySpeed
  }
  
  
  if (x < -60) {
    count += 1
    x = window.innerWidth
  }
  
  score.innerText = `Score: ${count}`
  enemy.style.left = `${x}px`
  
  if (((enemyCoord.bottom <= playerCoord.bottom || (enemyCoord.bottom < (playerCoord.bottom + 70) && (enemyCoord.left >= (playerCoord.left)))) && (enemyCoord.left == (playerCoord.left + 50) || enemyCoord.left <= (playerCoord.left)))) {
    x = window.innerWidth + 400
    
    player.style.bottom = `10px`
    msg = confirm(`You lose !\n\n Your Score is ${count}`)
    count = 0
    gameEnd = true
    
    if (msg === true) {
      gameEnd = false
    }
  } 
  
  
  requestAnimationFrame(run)
}

run()
