// Get DOM Elements
const toggleBtn = document.getElementById('toggle');
const customTextContainer = document.getElementById('custom-text');
const closeBtn = document.getElementById('close');
const voicesDropdown = document.getElementById('voices');
const customText= document.getElementById('text');
const readBtn = document.getElementById('read');
const main = document.getElementById('main');

const data = [
    {
        image: './img/angry.jpg',
        text: "I'm angry"
    },
    {
        image: './img/drink.jpg',
        text: "I'm thirsty"
    },
    {
        image: './img/food.jpg',
        text: "I'm hungry"
    },
    {
        image: './img/grandma.jpg',
        text: "I miss grandma"
    },
    {
        image: './img/happy.jpg',
        text: "I'm happy"
    },
    {
        image: './img/home.jpg',
        text: "I'm home"
    },
    {
        image: './img/hurt.jpg',
        text: "I'm hurt"
    },
    {
        image: './img/outside.jpg',
        text: "I'm outside"
    },
    {
        image: './img/sad.jpg',
        text: "I'm sad"
    },
    {
        image: './img/scared.jpg',
        text: "I'm scared"
    },
    {
        image: './img/school.jpg',
        text: "I'm at school"
    },
    {
        image: './img/tired.jpg',
        text: "I'm tired"
    },
];

// Array to save Web Speech API Voices
let voicesArray = [];

// Get Speech Synthesis
const speech = window.speechSynthesis;

// Function to fetch voices from the Web Speech API
function fetchVoices() {
    if ( speech.onvoiceschanged !== undefined ) {
        speech.onvoiceschanged = () => renderVoices();
    }
};

// Function to display the voices from Web Speech API
function renderVoices() {
    // get the voices from speech synthesis
    const voices = speech.getVoices();
    // save in voices array
    voicesArray = voices;
    // display voices in dropdown
    voicesArray.forEach( voice => {
        // Create the option DOM element
        let option = document.createElement('option');
        // Add content for option
        option.textContent = `${voice.name} ${voice.lang}`;
        // note which is default voice
        if ( voice.default ) {
            // if default voice, modify textContent for option
            option.textContent += ' (DEFAULT VOICE)';
        }
        // add custom html5 attributes for options
        option.setAttribute('data-name', voice.name);
        option.setAttribute('data-lang', voice.lang);
        // Render in the DOM
        voicesDropdown.appendChild(option);
    });
};

// Function to add pre-defined img and text into DOM
function createUIElement(predefinedObject) {
    // Destructuring from predefinedObject
    const { image, text } = predefinedObject;
    // Create DOM Element
    const div = document.createElement('div');
    // Apply CSS
    div.classList.add('box');
    // Create HTML content for the div
    div.innerHTML = `
        <img src="${image}" alt"${text}"/>
        <p class="imageInfo">${text}</p>
    `;
    // listen for click on div
    div.addEventListener('click', () => {
        // set text for speech to read
        setText(text);
        // read the set text
        speakText();
    })
    // Add into the DOM
    main.appendChild(div);
};

// Initialize speech synthesis utterance
const message = new SpeechSynthesisUtterance();

// Function to set text for speech
function setText(text) {
    message.text = text;
};

// Function to make speak the text
function speakText() {
    speechSynthesis.speak(message);
};

fetchVoices();

// Event Listener
// 1. Listen for click on the toggle button
toggleBtn.addEventListener('click', () => {
    // Show / hide the custom text container
    customTextContainer.classList.toggle('show');
});

// 2. Listen for click on the close button
closeBtn.addEventListener('click', () => {
    // Hide the custom text container
    customTextContainer.classList.remove('show');
});

// 3. Listen for voicheschanged on the speech synthesis
speechSynthesis.addEventListener('voiceschanged', fetchVoices);

// 4. Listen for click on read button
readBtn.addEventListener('click', () => {
    setText(customText.value);
    speakText();
});

// Create a UI Element for each object in data array
data.forEach(createUIElement);