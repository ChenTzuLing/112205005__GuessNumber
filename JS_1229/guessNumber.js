// Global variables
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
document.getElementById('userGuess').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      checkGuess();
    }
  });
// Function to check the user's guess
function checkGuess() {
    // Local variable
    let userGuess = document.getElementById("userGuess").value;
    var mediaArea = document.getElementById("mediaArea");

    // If the user input is not empty and is a valid number
    if (userGuess !== "" && !isNaN(userGuess)) {
        userGuess = parseInt(userGuess);

        // If the guess is correct
        if (userGuess === secretNumber) {
            showImageAndPlaySound("picture2.jpeg", "music2.mp3");
            // Generate a new random number for the next round
            secretNumber = generateRandomNumber();
        } else {
            // If the guess is wrong
            showImageAndPlaySound("picture1.jpeg", "music1.mp3");
        }
    } else {
        // If the user input is empty or not a valid number
        // Handle this case if needed
    }

    // Clear the input field for the next guess
    document.getElementById("userGuess").value = "";
}


// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
    let resultContainer = document.getElementById("result");
  
    // Create an img element and set its attributes
    let imageElement = document.createElement("img");
    imageElement.src = imageSource;
    imageElement.alt = "Result Image";
  
    // Create an audio element and set its attributes
    let soundElement = document.createElement("audio");
    soundElement.src = soundSource;
    soundElement.autoplay = true;
  
    // Clear the result container and append the img and audio elements
    resultContainer.innerHTML = "";
    resultContainer.appendChild(imageElement);
    resultContainer.appendChild(soundElement);
  
}
