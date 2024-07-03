// Define the rooms and their properties
var rooms = {

    'living-room': {

        questions: [

            {

                question: 'Which house does Harry Potter belong to?',

                correctAnswer: 'Gryffindor',

                choices: ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

            },

            {

                question: 'Who is the headmaster of Hogwarts?',

                correctAnswer: 'Dumbledore',

                choices: ['Dumbledore', 'Snape', 'McGonagall', 'Hagrid']

            },

            {

                question: 'What position does Harry Potter play in Quidditch?',

                correctAnswer: 'Seeker',

                choices: ['Chaser', 'Keeper', 'Beater', 'Seeker']

            },

            {

                question: 'What is the name of Harry Potter\'s owl?',

                correctAnswer: 'Hedwig',

                choices: ['Hedwig', 'Crookshanks', 'Scabbers', 'Fang']

            },

            {

                question: 'What spell is used to disarm an opponent?',

                correctAnswer: 'Expelliarmus',

                choices: ['Expelliarmus', 'Avada Kedavra', 'Alohomora', 'Wingardium Leviosa']

            }

        ],
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
        backgroundImage: 'assets/images/finalroom.jpg',
    },
};

// Function to start the game
function startGame() {
    // Reset feedback messages
    document.querySelectorAll('.feedback').forEach(function(feedback) {
        feedback.textContent = '';
    });
    
    // Hide all rooms
    document.querySelectorAll('.room').forEach(function(room) {
        room.classList.add('hidden');
        room.classList.remove('active');
    });
    
    // Show the first room
    showElement('living-room');
    playBackgroundSound();
}
// Function to set a random question for a room

function setQuestion(room) {
    var currentRoom = rooms[room];
    var questionData = currentRoom.questions[Math.floor(Math.random() * currentRoom.questions.length)];
    currentRoom.currentQuestion = questionData;  // Store the current question
    var roomElement = document.getElementById(room);

// Set the question text

    roomElement.querySelector('h2').textContent = currentRoom.name;
    roomElement.querySelector('p').textContent = questionData.question;

    // Set the choices

    var buttons = roomElement.querySelectorAll('button');
    questionData.choices.forEach((choice, index) => {
    buttons[index].textContent = choice;
    buttons[index].setAttribute('onclick', `checkAnswer('${room}', '${choice}')`);
     });
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
            showWrongAnswerPage();
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

// Function to show the wrong answer page
function showWrongAnswerPage() {
    document.querySelectorAll('.room').forEach(function(room) {
        room.classList.add('hidden');
        room.classList.remove('active');
    });
    document.getElementById('wrong-answer').classList.remove('hidden');
    document.getElementById('wrong-answer').classList.add('active');
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
