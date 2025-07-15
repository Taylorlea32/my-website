document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const scoreDisplay = document.getElementById("score");
    let score = 0;
  
    // Function to move the ball to a random position
    function moveBall() {
        const gameArea = document.getElementById("gameArea");
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
  
    // Hamburger menu toggle
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
  });
  
 