document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const scoreDisplay = document.getElementById("score");
    let score = 0;
  
    // Only run game code if elements exist
    if (ball && scoreDisplay) {
      // Function to move the ball to a random position
      function moveBall() {
        const gameArea = document.getElementById("gameArea");
        if (!gameArea) return;
  
        const maxX = gameArea.clientWidth - ball.clientWidth;
        const maxY = gameArea.clientHeight - ball.clientHeight;
  
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
  
        ball.style.left = `${randomX}px`;
        ball.style.top = `${randomY}px`;
      }
  
      // Increase score and move ball when clicked
      ball.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        moveBall();
      });
  
      // Move the ball every second
      setInterval(() => {
        moveBall();
      }, 1000);
    }
  
    // Hamburger menu toggle - only if elements exist
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    if (toggleButton && navLinks) {
      toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  });
  