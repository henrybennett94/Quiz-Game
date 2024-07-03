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
        backgroundImage: 'assets/images/livingroom.jpg'
    },
    'library': {
        questions: [
            {
                question: 'Which of these famous authors wrote "Dracula"?',
                correctAnswer: 'Bram Stoker',
                choices: ['Mary Shelley', 'Bram Stoker', 'Edgar Allan Poe', 'H.P. Lovecraft']
            },
            {
                question: 'Who wrote "Pride and Prejudice"?',
                correctAnswer: 'Jane Austen',
                choices: ['Charlotte Bronte', 'Emily Bronte', 'Jane Austen', 'George Eliot']
            },
            {
                question: 'Which author created Sherlock Holmes?',
                correctAnswer: 'Arthur Conan Doyle',
                choices: ['Arthur Conan Doyle', 'Agatha Christie', 'Ian Fleming', 'J.K. Rowling']
            },
            {
                question: 'Who wrote "1984"?',
                correctAnswer: 'George Orwell',
                choices: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Philip K. Dick']
            },
            {
                question: 'Which of these books is not written by J.R.R. Tolkien?',
                correctAnswer: 'The Chronicles of Narnia',
                choices: ['The Hobbit', 'The Lord of the Rings', 'The Silmarillion', 'The Chronicles of Narnia']
            }
        ],
        nextRoom: 'dining-hall',
        backgroundImage: 'assets/images/library.jpg'
    },
    'dining-hall': {
        questions: [
            {
                question: 'What is the sum of the prime numbers less than 10?',
                correctAnswer: '17',
                choices: ['17', '18', '16', '19']
            },
            {
                question: 'What is 8 + 9?',
                correctAnswer: '17',
                choices: ['15', '16', '17', '18']
            },
            {
                question: 'What is 10 + 7?',
                correctAnswer: '17',
                choices: ['16', '17', '18', '19']
            },
            {
                question: 'What is 20 - 3?',
                correctAnswer: '17',
                choices: ['17', '18', '16', '19']
            },
            {
                question: 'What is 34 / 2?',
                correctAnswer: '17',
                choices: ['16', '17', '18', '19']
            }
        ],
        nextRoom: 'gallery',
        backgroundImage: 'assets/images/diningroom.jpg'
    },
    'gallery': {
        questions: [
            {
                question: 'Which of these paintings is by Vincent van Gogh?',
                correctAnswer: 'Starry Night',
                choices: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Girl with a Pearl Earring']
            },
            {
                question: 'Who painted the "The Last Supper"?',
                correctAnswer: 'Leonardo da Vinci',
                choices: ['Van Gogh', 'Leonardo da Vinci', 'Michelangelo', 'Raphael']
            },
            {
                question: 'Who painted the "Mona Lisa"?',
                correctAnswer: 'Leonardo da Vinci',
                choices: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello']
            },
            {
                question: 'Which artist cut off his own ear?',
                correctAnswer: 'Vincent van Gogh',
                choices: ['Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Salvador Dali']
            },
            {
                question: 'Name the artist that painted The Creation of Adam"?',
                correctAnswer: 'Michelangelo',
                choices: ['Claude Monet', 'Michelangelo', 'Damien Hirst', 'Salvador Dali']
            }
        ],
        nextRoom: 'study',
        backgroundImage: 'assets/images/gallery.jpg'
    },
    'study': {
        questions: [
            {
                question: 'Which element is necessary for the process of photosynthesis?',
                correctAnswer: 'Oxygen',
                choices: ['Carbon Dioxide', 'Oxygen', 'Hydrogen', 'Nitrogen']
            },
            {
                question: 'What is the chemical symbol for water?',
                correctAnswer: 'H2O',
                choices: ['H2O', 'O2', 'CO2', 'HO']
            },
            {
                question: 'What is the periodic table symbol for gold?',
                correctAnswer: 'Au',
                choices: ['Ag', 'Au', 'Pb', 'Pt']
            },
            {
                question: 'Which gas is most abundant in the Earth\'s atmosphere?',
                correctAnswer: 'Nitrogen',
                choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen']
            },
            {
                question: 'What is the pH level of pure water?',
                correctAnswer: '7',
                choices: ['7', '6', '5', '8']
            }
        ],
        nextRoom: 'observatory',
        backgroundImage: 'assets/images/study.jpg'
    },
    'observatory': {
        questions: [
            {
                question: 'Which planet is known as the Red Planet?',
                correctAnswer: 'Mars',
                choices: ['Mars', 'Venus', 'Jupiter', 'Saturn']
            },
            {
                question: 'Which is the largest planet in our solar system?',
                correctAnswer: 'Jupiter',
                choices: ['Earth', 'Mars', 'Jupiter', 'Saturn']
            },
            {
                question: 'Which planet is closest to the Sun?',
                correctAnswer: 'Mercury',
                choices: ['Mercury', 'Venus', 'Earth', 'Mars']
            },
            {
                question: 'Which planet is known for its rings?',
                correctAnswer: 'Saturn',
                choices: ['Mars', 'Saturn', 'Jupiter', 'Uranus']
            },
            {
                question: 'Which planet is known as the Morning Star or Evening Star?',
                correctAnswer: 'Venus',
                choices: ['Venus', 'Mars', 'Mercury', 'Jupiter']
            }
        ],
        nextRoom: 'kitchen',
        backgroundImage: 'assets/images/observatory.jpg'
    },
    'kitchen': {
        questions: [
            {
                question: 'What is the process called that converts sugars into alcohol?',
                correctAnswer: 'Fermentation',
                choices: ['Distillation', 'Fermentation', 'Pasteurization', 'Evaporation']
            },
            {
                question: 'What is the main ingredient in bread?',
                correctAnswer: 'Flour',
                choices: ['Sugar', 'Salt', 'Flour', 'Yeast']
            },
            {
                question: 'What is the primary ingredient in a tomato soup?',
                correctAnswer: 'Tomatoes',
                choices: ['Tomatoes', 'Carrots', 'Beef', 'Chicken']
            },
            {
                question: 'What is the main ingredient in guacamole?',
                correctAnswer: 'Avocado',
                choices: ['Avocado', 'Tomato', 'Onion', 'Garlic']
            },
            {
                question: 'Which nutrient is most abundant in eggs?',
                correctAnswer: 'Protein',
                choices: ['Carbohydrates', 'Protein', 'Fat', 'Vitamins']
            }
        ],
        nextRoom: 'final-room',
        backgroundImage: 'assets/images/kitchen.jpg'
    },
    'final-room': {
        backgroundImage: 'assets/images/finalroom.jpg'
    }
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
    setQuestion('living-room');
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
    if (answer === currentRoom.currentQuestion.correctAnswer) {
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
    setQuestion(nextRoom);  // Set a new question for the next room
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
    document.getElementById('intro').classList.remove('hidden');
    document.getElementById('intro').classList.add('active');
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
