// Your code here

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
    let gameWidth = document.getElementById('game').offsetWidth;
    let dodgerWidth = dodger.offsetWidth;
  
    // Check if moving right won't exceed the right edge of the game field
    if (left + dodgerWidth < gameWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }