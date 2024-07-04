
# Mystery Mansion Escape Room Quiz Game!
  
  Welcome to the Mystery Mansion Escape Room Quiz Game! This is an interactive game where players navigate through different rooms of a haunted mansion by answering trivia questions correctly. If you answer a question wrong, you'll be shown a message and given the option to start over.
 
 <img src="assets/images/responsive.png" alt="image of landing page" width="600px" height="400px">
 
 ## Table of Contents
- [Introduction](#introduction)
- [Wireframes](#wireframes)
- [Demo](#demo)
- [Features](#features)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Technology Used](#techology-used)
- [Bugs](#Bugs)
- [Credits](#credits)
- [Contact](#contact)


## Introduction
 The Mystery Mansion Escape Room Quiz Game! This is an engaging and interactive game where players are challenged to navigate through different rooms of a haunted mansion by answering trivia questions correctly. Each room presents a unique question, and only the right answer will unlock the door to the next room. But beware, if you answer a question incorrectly, you'll be shown a message with the option to start over from the beginning.

The game is designed to be both fun and educational, providing players with a series of thought-provoking questions. It also features immersive background sounds and visually appealing images to enhance the gaming experience. Discover hidden keys and clues as you move from room to room, and see if you can make it to the final room of the mansion. Are you ready to take on the challenge and uncover the mysteries of the mansion?

## Wireframes
Before starting the project, we created a couple of basic wireframes to get an idea of what our final product would look like. We made both a mobile wireframe and a desktop wireframe.

<img src="assets/images/wireframe.png" alt="wireframe" width="600px" height="400px">
<img src="assets/images/wireframe1.png" alt="wireframe" width="600px" height="400px">
<img src="assets/images/wireframe2.png" alt="wireframe" width="600px" height="400px">
<img src="assets/images/wireframe3.png" alt="wireframe" width="600px" height="400px">

## Demo
    [You can try our website here](https://henrybennett94.github.io/Quiz-Game/)
## Features

- Navigate through various themed rooms.
<img src="assets/images/website-image.png" alt="image of landing page" width="600px" height="400px">

- Answer trivia questions to proceed to the next room.
<img src="assets/images/questions.png" alt="question page" width="600px" height="400px">

- Visual feedback for correct answers.
<img src="assets/images/visual-feedback.png" alt="visual feedback text" width="600px" height="400px">

- Visual feedback for incorrect answers.
<img src="assets/images/wrong-answer1.png" alt="text for wrong answer" width="600px" height="400px">

- Background sounds for an immersive experience.
//add audio file here

- Replay the Mystery Mansion Escape Room Game.
<img src="assets/images/website-image.png" alt="image of landing page" width="600px" height="400px">

- Rules Page
<img src="assets/images/rules.png" alt="rules page" width="600px" height="400px">

- Supoort Page
<img src="assets/images/support.png" alt="rules page" width="600px" height="400px">

- Hidden key discovery

<img src="assets/images/hidden-key.png" alt="hidden key when you win" width="300px" height="300px">

- Navbar and Footer
<img src="assets/images/nav.png" alt="navbar" width="600px" height="75px">
<img src="assets/images/footer.png" alt="footer" width="600px" height="50px">

## How to Play

1. Click on the "Start Game" button on the intro screen.
2. Answer the question presented in each room.
3. If the answer is correct, you proceed to the next room.
4. If the answer is incorrect, a message will be displayed, and you can choose to start again.
5. Explore all the rooms and enjoy the mystery!

## Project Structure

mystery-mansion-escape-room
### index.html 
- The main HTML file 
### styles.css
- The main CSS file 
### rules.html 
- The Rules page HTML file 
### support.html
- The support page HTML file
### script.js 
- The main JavaScript file 
### assets/images/ 
- Images used in the game 
### assets/audio/ 
-audio files used in the game
### Adding/Modifying Questions
- To add or modify questions, update the rooms object in script.js:

var rooms = {
    
    'living-room': {
        correctAnswer: 'Gryffindor',
        nextRoom: 'library',
        backgroundImage: 'assets/images/livingroom.jpg',
    },
    // Add or modify rooms here
};

### Changing Background Images
- Update the 'backgroundImage' property for each room in the rooms object.
### Adding Rules content
- Modify the rules.html and style.css files to customize the Rule page content and styling respectively.

## Technology Used
The Mystery Mansion Escapr Room Quiz Game leverages several modern web development technologies to create an engaging and interactive user experience. Here are the key technologies used:
### HTML
HTML (HyperText Markup Language) is the standard markup language used to create the structure of the web pages in this game. It provides the skeleton for the game's interface, defining elements such as buttons, images, and text content.
### CSS
CSS (Cascading Style Sheets) is used for styling the HTML elements. It enhances the visual presentation of the game by controlling the layout, colors, fonts, and overall look and feel. The game uses custom CSS as well as Bootstrap for responsive design.
### JavaScript
JavaScript is the programming language used to implement the game’s logic. It handles user interactions, such as checking answers, transitioning between rooms, and playing sounds. JavaScript makes the game dynamic and interactive.
### BootStrap
Bootstrap is a popular CSS framework used to simplify the design and layout of the game. Version 5.3.3 of Bootstrap is used in this project to ensure a responsive design that works well on various devices and screen sizes. It provides pre-styled components and utilities, which help in creating a cohesive and modern interface quickly.

By combining these technologies, the Mystery Mansion Escape Room Quiz Game provides a seamless and engaging experience for players. HTML lays the foundation, CSS and Bootstrap ensure a visually appealing design, and JavaScript brings the game to life with interactivity and logic.
## Bugs

- We need to add a mute button for the sound that activates when you play the game we have currently disabled the sound as it would not be a good user experience without the mute button implemented.
- We would like to add an exit button so users can return to the main page from the game not the navbar.
- There is still some responive issues to resolve the css needs refactoring to streamline the code.
- The countdown needs to disappear on the first question on additional play throughs.

## Credits

- Icons were taken from [Font Awesome](https://fontawesome.com/icons)
- For coding questions we used [w3schools.com](https://www.w3schools.com/) and the slack community.
 Media
- Color Palette was generatad using [Coolers](https://coolors.co/).
- Images were takent from [Pexels](https://www.pexels.com/) and [Freepik](https://www.freepik.com/).
- Audio files were taken from[Pixabay](https://pixabay.com/)

## Contact
- For any questions or feedback, please contact:
For any questions or inquiries, please contact us at [contact@mysterymansionwebsite.com](abcd:contact@mysterymansionwebsite.com). 

    --- Thank you for visiting our Mystery Mansion Escape Room Quiz Game website!



    
    


