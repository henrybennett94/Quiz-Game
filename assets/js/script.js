// Define the rooms and their properties
var rooms = {
    'living-room': {
        name: 'The Living Room',
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
            },
            {
                question: 'What is the name of the train that takes students to Hogwarts?',
                correctAnswer: 'Hogwarts Express',
                choices: ['Knight Bus', 'Hogwarts Express', 'Thestral Carriage', 'Nimbus 2000']
            },
            {
                question: 'Who is the Half-Blood Prince?',
                correctAnswer: 'Severus Snape',
                choices: ['Harry Potter', 'Sirius Black', 'Severus Snape', 'Tom Riddle']
            },
            {
                question: 'What is the name of Hermione Granger\'s cat?',
                correctAnswer: 'Crookshanks',
                choices: ['Fluffy', 'Crookshanks', 'Scabbers', 'Fang']
            },
            {
                question: 'What is the name of the Weasley family\'s magical house?',
                correctAnswer: 'The Burrow',
                choices: ['The Shrieking Shack', 'The Burrow', 'Grimmauld Place', 'Number 12']
            },
            {
                question: 'What is the primary ingredient in Polyjuice Potion?',
                correctAnswer: 'A piece of the person you want to become',
                choices: ['Boomslang Skin', 'A piece of the person you want to become', 'Dragon Blood', 'Mandrake Root']
            }
            
        ],
        nextRoom: 'library',
        backgroundImage: 'assets/images/livingroom.jpg'
    },
    'library': {
        name: 'The Library',
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
            },
            {
                question: 'Who wrote "To Kill a Mockingbird"?',
                correctAnswer: 'Harper Lee',
                choices: ['John Steinbeck', 'Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain']
            },
            {
                question: 'Which author wrote "The Catcher in the Rye"?',
                correctAnswer: 'J.D. Salinger',
                choices: ['J.D. Salinger', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'John Steinbeck']
            },
            {
                question: 'Who is the author of "The Great Gatsby"?',
                correctAnswer: 'F. Scott Fitzgerald',
                choices: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'J.D. Salinger']
            },
            {
                question: 'Which author wrote "War and Peace"?',
                correctAnswer: 'Leo Tolstoy',
                choices: ['Leo Tolstoy', 'Fyodor Dostoevsky', 'Anton Chekhov', 'Ivan Turgenev']
            },
            {
                question: 'Who wrote the book "The Three Body Problem"?',
                correctAnswer: 'Cixin Liu',
                choices: ['Pablo Neruda', 'Haruki Murakami', 'Cixin Liu', 'Agustina Bazterica']
            }
        ],
        nextRoom: 'dining-hall',
        backgroundImage: 'assets/images/library.jpg'
    },
    'dining-hall': {
        name: 'The Dining Hall',
        questions: [
            {
                question: 'What is 90 multipled by 6?',
                correctAnswer: '540',
                choices: ['450', '540', '630', '180']
            },
            {
                question: 'What is 8 plus 9?',
                correctAnswer: '17',
                choices: ['15', '16', '17', '18']
            },
            {
                question: 'What is 10 plus 7?',
                correctAnswer: '17',
                choices: ['16', '17', '18', '19']
            },
            {
                question: 'What is 20 minus 3?',
                correctAnswer: '17',
                choices: ['17', '18', '16', '19']
            },
            {
                question: 'What is 34 divided by 2?',
                correctAnswer: '17',
                choices: ['16', '17', '18', '19']
            },
            {
                question: 'What is 27 divided by 3?',
                correctAnswer: '9',
                choices: ['7', '9', '12', '6']
            },
            {
                question: 'What is 4 multiplied by 5?',
                correctAnswer: '20',
                choices: ['15', '18', '20', '22']
            },
            {
                question: 'What is 3 squared plus 4?',
                correctAnswer: '13',
                choices: ['7', '10', '13', '16']
            },
            {
                question: 'What is the sum of all interior angles of a triangle?',
                correctAnswer: '180 degrees',
                choices: ['120 degrees', '150 degrees', '180 degrees', '210 degrees']
            },
            {
                question: 'What is 15% of 240?',
                correctAnswer: '36',
                choices: ['24', '30', '36', '40']
            }
        ],
        nextRoom: 'gallery',
        backgroundImage: 'assets/images/diningroom.jpg'
    },
    'gallery': {
        name: 'The Gallery',
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
            },
            {
                question: 'Who painted "Guernica", a famous anti-war mural?',
                correctAnswer: 'Pablo Picasso',
                choices: ['Salvador Dali', 'Pablo Picasso', 'Joan Miro', 'Frida Kahlo']
            },
            {
                question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
                correctAnswer: 'Andy Warhol',
                choices: ['Roy Lichtenstein', 'Jackson Pollock', 'Andy Warhol', 'Keith Haring']
            },
            {
                question: 'Who created the sculpture "The Thinker"?',
                correctAnswer: 'Auguste Rodin',
                choices: ['Edgar Degas', 'Auguste Rodin', 'Constantin Brancusi', 'Henry Moore']
            },
            {
                question: 'Which artist painted "Les Demoiselles d\'Avignon", a pioneering work of Cubism?',
                correctAnswer: 'Pablo Picasso',
                choices: ['Henri Matisse', 'Paul Cezanne', 'Pablo Picasso', 'Georges Braque']
            },
            {
                question: 'Who painted "The Persistence of Memory", featuring melting clocks?',
                correctAnswer: 'Salvador Dali',
                choices: ['Rene Magritte', 'Salvador Dali', 'Joan Miro', 'Max Ernst']
            }
            
        ],
        nextRoom: 'study',
        backgroundImage: 'assets/images/gallery.jpg'
    },
    'study': {
        name: 'The Study',
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
            },
            {
                question: 'Which particle is found in the nucleus of an atom?',
                correctAnswer: 'Proton',
                choices: ['Electron', 'Neutron', 'Proton', 'Photon']
            },
            {
                question: 'What is the chemical formula for table salt?',
                correctAnswer: 'NaCl',
                choices: ['NaCl', 'H2O', 'CO2', 'CH4']
            },
            {
                question: 'What is the hardest natural substance on Earth?',
                correctAnswer: 'Diamond',
                choices: ['Gold', 'Diamond', 'Graphite', 'Quartz']
            },
            {
                question: 'What type of energy is stored in a battery?',
                correctAnswer: 'Chemical energy',
                choices: ['Electrical energy', 'Nuclear energy', 'Chemical energy', 'Solar energy']
            },
            {
                question: 'What is the most abundant element in the universe?',
                correctAnswer: 'Hydrogen',
                choices: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium']
            }
        ],
        nextRoom: 'observatory',
        backgroundImage: 'assets/images/study.jpg'
    },
    'observatory': {
        name: 'The Observatory',
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
            },
            {
                question: 'Which planet is nicknamed the "Blue Planet"?',
                correctAnswer: 'Earth',
                choices: ['Mercury', 'Venus', 'Earth', 'Mars']
            },
            {
                question: 'Which planet has the Great Red Spot, a persistent anticyclonic storm?',
                correctAnswer: 'Jupiter',
                choices: ['Jupiter', 'Saturn', 'Uranus', 'Neptune']
            },
            {
                question: 'Which planet has the highest mountain in the solar system, Olympus Mons?',
                correctAnswer: 'Mars',
                choices: ['Earth', 'Mars', 'Venus', 'Mercury']
            },
            {
                question: 'Which planet has the most moons in the solar system?',
                correctAnswer: 'Jupiter',
                choices: ['Saturn', 'Jupiter', 'Uranus', 'Neptune']
            },
            {
                question: 'Which planet is often referred to as the "Ice Giant"?',
                correctAnswer: 'Uranus',
                choices: ['Neptune', 'Uranus', 'Saturn', 'Jupiter']
            }
         ],
        nextRoom: 'kitchen',
        backgroundImage: 'assets/images/observatory.jpg'
    },
    'kitchen': {
        name: 'The Kitchen',
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
            },
            {
                question: 'What is the main ingredient in a traditional risotto?',
                correctAnswer: 'Arborio rice',
                choices: ['Spaghetti', 'Arborio rice', 'Quinoa', 'Barley']
            },
            {
                question: 'Which spice is made from the dried stigma of a flower?',
                correctAnswer: 'Saffron',
                choices: ['Cinnamon', 'Saffron', 'Turmeric', 'Paprika']
            },
            {
                question: 'Which fruit is known as the "king of fruits" and has a strong odor?',
                correctAnswer: 'Durian',
                choices: ['Mango', 'Pineapple', 'Durian', 'Lychee']
            },
            {
                question: 'What is the primary ingredient in Worcestershire sauce?',
                correctAnswer: 'Anchovies',
                choices: ['Tomatoes', 'Anchovies', 'Vinegar', 'Onions']
            },
            {
                question: 'Which alcoholic beverage is made from fermented honey and water?',
                correctAnswer: 'Mead',
                choices: ['Beer', 'Wine', 'Vodka', 'Mead']
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
    hideAllRooms();
    
    // Show the first room
    showElement('living-room');
    setQuestion('living-room');
    playBackgroundSound();

// Display the initial room name
var currentRoom = rooms['living-room'];
document.getElementById('current-room').textContent = 'Current Room: ' + currentRoom.name;
}

// Function to set a random question for a room
function setQuestion(room) {
    var currentRoom = rooms[room];
    var questionData = currentRoom.questions[Math.floor(Math.random() * currentRoom.questions.length)];
    currentRoom.currentQuestion = questionData;
    var roomElement = document.getElementById(room);

    // Set the room name
    roomElement.querySelector('h2').textContent = currentRoom.name;
    
    // Set the question text
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
            transitionToWrongAnswer();
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

// Function to transition to the wrong answer room

function transitionToWrongAnswer() {
    hideAllRooms();
    showElement('wrong-answer');
    changeBackgroundImage(rooms['wrong-answer'].backgroundImage);
    stopBackgroundSound();
}



// Helper function to hide all rooms

function hideAllRooms() 
{
    document.querySelectorAll('.room').forEach(function(room) {
        room.classList.add('hidden');
        room.classList.remove('active');
    });
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

