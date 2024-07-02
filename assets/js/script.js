// Define the rooms and their properties
var rooms = {
    'living-room': {
        correctAnswer: 'Gryffindor',
        nextRoom: 'library',
        backgroundImage: 'assets/images/livingroom.jpg',
    },
    'library': {
        correctAnswer: 'B',
        nextRoom: 'dining-hall',
        backgroundImage: 'assets/images/library.jpg',
    },
    'dining-hall': {
        correctAnswer: '17',
        nextRoom: 'gallery',
        backgroundImage: 'assets/images/diningroom.jpg',
    },
    'gallery': {
        correctAnswer: 'Starry Night',
        nextRoom: 'study',
        backgroundImage: 'assets/images/gallery.jpg',
    },
    'study': {
        correctAnswer: 'Oxygen',
        nextRoom: 'observatory',
        backgroundImage: 'assets/images/study.jpg',
    },
    'observatory': {
        correctAnswer: 'Mars',
        nextRoom: 'kitchen',
        backgroundImage: 'assets/images/observatory.jpg',
    },
    'kitchen': {
        correctAnswer: 'Fermentation',
        nextRoom: 'final-room',
        backgroundImage: 'assets/images/kitchen.jpg',
    },
    'final-room': {
        backgroundImage: 'assets/images/final-room.jpg',
    },
};

// Function to start the game
function startGame() {
    hideElement('intro');
    showElement('living-room');
    playBackgroundSound();
}

// Function to check the answer
function checkAnswer(room, answer) {
    var feedback = document.querySelector('#' + room + ' .feedback');
    var currentRoom = rooms[room];
    if (answer === currentRoom.correctAnswer) {
        feedback.textContent = 'Correct! A secret door opens, leading to the next room.';
        feedback.style.color = 'green';
        playCorrectAnswerSound();
        setTimeout(function() {
            transitionToNextRoom(room, currentRoom.nextRoom);
        }, 2000);
    } else {
        feedback.textContent = 'Wrong answer. Start again!';
        feedback.style.color = 'red';
        playNextRoomSound();
        setTimeout(function() {
            alert('Wrong answer! You will be redirected to the start page.');
            resetGame(room);
        }, 2000);
    }
}

// Helper function to transition to the next room
function transitionToNextRoom(currentRoom, nextRoom) {
    hideElement(currentRoom);
    showElement(nextRoom);
    changeBackgroundImage(rooms[nextRoom].backgroundImage);
    playNextRoomSound();
    if (nextRoom === 'final-room') {
        stopBackgroundSound();
    }
}

// Helper function to reset the game
function resetGame(room) {
    hideElement(room);
    showElement('intro');
    document.querySelector('#' + room + ' .feedback').textContent = '';
    stopBackgroundSound();
}

// Helper function to show an element by ID
function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
}

// Helper function to hide an element by ID
function hideElement(id) {
    document.getElementById(id).classList.remove('active');
    document.getElementById(id).classList.add('hidden');
}

// Function to play background sound
function playBackgroundSound() {
    var backgroundSound = document.getElementById('background-sound');
    backgroundSound.play();
}

// Function to stop background sound
function stopBackgroundSound() {
    var backgroundSound = document.getElementById('background-sound');
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
}

// Function to play correct answer sound
function playCorrectAnswerSound() {
    var correctAnswerSound = document.getElementById('correct-answer-sound');
    correctAnswerSound.play();
}

// Function to play next room sound
function playNextRoomSound() {
    var nextRoomSound = document.getElementById('next-room-sound');
    nextRoomSound.play();
}

// Function to change the background image
function changeBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
}
