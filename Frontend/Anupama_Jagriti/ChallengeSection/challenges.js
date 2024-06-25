document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('start-button');
    const quizForm = document.querySelector('form');
    const timerDisplay = document.getElementById('time');
    
    startButton.addEventListener('click', startQuiz);
    
    function startQuiz() {
        quizForm.style.display = 'block'; // Show the form
        startButton.style.display = 'none'; // Hide the start button
        
        let timeLeft = 30; // Set the initial time
        
        const countdown = setInterval(function() {
            timeLeft--; // Decrease the time remaining
            timerDisplay.textContent = timeLeft; // Update the timer display
            
            if (timeLeft <= 0) {
                clearInterval(countdown); // Stop the countdown
                quizForm.style.display = 'none'; // Hide the form
                // Optionally, you can disable form submission here
            }
        }, 1000); // Update the timer every second
    }
  });
  function calculateScore() {
    let score = 0;
    const quizForm = document.getElementById('quizForm');
    const formData = new FormData(quizForm);
    
    if (formData.get('q1') === '2') score++;
    if (formData.get('q2') === '1') score++;
    if (formData.get('q3') === '2') score++;
    if (formData.get('q4') === '1') score++;
    
    document.getElementById('score').textContent = score;
    document.querySelector('.result').textContent = score;
    document.querySelector('.result').style.display = 'block';
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateScore();
});