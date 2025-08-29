document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const gameContent = document.getElementById('game-content');
    const statusContainer = document.getElementById('status-container');
    const loadingText = document.getElementById('loading');
    const errorText = document.getElementById('error');
    const questionEl = document.getElementById('question');
    const wordDisplayEl = document.getElementById('word-display');
    const keyboardEl = document.getElementById('keyboard');
    const livesEl = document.getElementById('lives').querySelector('span');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const playAgainBtn = document.getElementById('play-again-btn');

    // Game State
    let questions = [];
    let currentQuestion = '';
    let currentAnswer = '';
    let guessedWord = [];
    let lives = 6;
    let lettersRemaining = 0;

    const API_URL = 'https://codeapi.net.cws18.my-hosting-panel.com/hangman.php';

    // Fetch questions from the API
    async function fetchQuestions() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            questions = await response.json();
            if (questions.length > 0) {
                startGame();
            } else {
                showError("No questions found.");
            }
        } catch (e) {
            console.error("Failed to fetch questions:", e);
            showError("Could not load the game. Please try again later.");
        }
    }

    // Start a new game
    function startGame() {
        // Hide status messages and show the game content
        statusContainer.classList.add('hidden');
        gameContent.classList.remove('hidden');
        modal.classList.add('hidden');

        // Reset game state
        lives = 6;
        
        // Select a random question from the fetched data
        const randomIndex = Math.floor(Math.random() * questions.length);
        const gameData = questions[randomIndex];
        currentQuestion = gameData.Question;
        currentAnswer = gameData.Answer.toUpperCase();

        // Initialize the displayed word with underscores
        guessedWord = currentAnswer.split('').map(char => (char.match(/[A-Z]/) ? '_' : char));
        // Count unique letters to determine when the game is won
        lettersRemaining = new Set(currentAnswer.match(/[A-Z]/g)).size;

        render();
    }

    // Render the current game state to the UI
    function render() {
        questionEl.textContent = currentQuestion;
        
        // Display the word with guessed letters and underscores
        wordDisplayEl.innerHTML = guessedWord.map(char => `
            <span class="letter-placeholder w-8 h-10 md:w-12 md:h-14 flex items-center justify-center border-b-4 ${char === '_' ? 'border-gray-500' : 'border-cyan-400'}">
                ${char !== '_' ? char : ''}
            </span>
        `).join('');

        renderKeyboard();
        livesEl.textContent = lives;
    }

    // Generate the on-screen keyboard
    function renderKeyboard() {
        keyboardEl.innerHTML = '';
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.classList.add('letter-btn', 'bg-gray-700', 'hover:bg-gray-600', 'text-white', 'font-bold', 'py-3', 'px-4', 'rounded-lg');
            button.addEventListener('click', () => handleGuess(letter));
            keyboardEl.appendChild(button);
        });
    }

    // Handle a player's letter guess
    function handleGuess(letter) {
        const upperCaseLetter = letter.toUpperCase();
        
        // Disable the clicked button to prevent re-guessing
        const buttons = keyboardEl.getElementsByTagName('button');
        for (let btn of buttons) {
            if (btn.textContent === upperCaseLetter) {
                btn.disabled = true;
            }
        }
        
        if (currentAnswer.includes(upperCaseLetter)) {
            // Correct guess: reveal the letter(s)
            let changed = false;
            for (let i = 0; i < currentAnswer.length; i++) {
                if (currentAnswer[i] === upperCaseLetter && guessedWord[i] === '_') {
                    guessedWord[i] = upperCaseLetter;
                    changed = true;
                }
            }
            if (changed) {
                lettersRemaining--;
            }
        } else {
            // Incorrect guess: lose a life
            lives--;
        }

        render();
        checkGameOver();
    }

    // Check if the game has been won or lost
    function checkGameOver() {
        if (lettersRemaining === 0) {
            showModal(true); // Player wins
        } else if (lives <= 0) {
            showModal(false); // Player loses
        }
    }

    // Display an error message if the API fails
    function showError(message) {
        loadingText.classList.add('hidden');
        errorText.textContent = message;
        errorText.classList.remove('hidden');
    }

    // Show the final win/loss modal
    function showModal(isWin) {
        if (isWin) {
            modalTitle.textContent = "You Won!";
            modalTitle.classList.remove('text-red-500');
            modalTitle.classList.add('text-green-400');
            modalText.textContent = "Congratulations, you've guessed the word correctly.";
        } else {
            modalTitle.textContent = "Game Over!";
            modalTitle.classList.remove('text-green-400');
            modalTitle.classList.add('text-red-500');
            modalText.textContent = `The correct word was: ${currentAnswer}`;
        }
        modal.classList.remove('hidden');
    }

    // Event Listeners
    playAgainBtn.addEventListener('click', startGame);

    // Initial fetch to start the game
    fetchQuestions();
});
