// Get DOM Elements
const addCardBtn = document.getElementById('add-card');
const clearCardsBtn = document.getElementById('clear-cards');
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentCard = document.getElementById('current-card');
const addCardContainer = document.getElementById('add-card-container');
const cancelBtn = document.getElementById('cancel-btn');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addCardSubmitBtn = document.getElementById('add-card-btn');

// Index of current card
let currentCardNum = 0;

// Array of card DOM elements
const cardElements = [];

// Card Data
const cardsData = getCardsData();

// const cardsData = [
//     {
//         question: "What is React?",
//         answer: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
//     },
//     {
//         question: "What is Express JS?",
//         answer: "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
//     }
// ];

// Function to set cards data in local storage
function setData(cardsData) {
    localStorage.setItem('cards', JSON.stringify(cardsData));
    window.location.reload();
};

// Function to get cards from local storage if they are there
function getCardsData() {
    // get data from local storage
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
};

// Function to update the current card number
function updateCurrentCardNum() {
    currentCard.innerText = `${currentCardNum + 1} / ${cardElements.length}`;
};

// Function to create all the cards
function createCards() {
    // call the createCard function for each object in cardsData array
    cardsData.forEach( (cardData, index) => createCard(cardData, index) );
};

// Function to create a single card
function createCard(cardData, index) {
    // create a div DOM element
    const card = document.createElement('div');
    // style the div
    card.classList.add('card');
    // make the first card active
    if ( index === 0 ) {
        card.classList.add('active')
    }
    // add card content
    card.innerHTML = `
        <div class="inside-card">
            <div class="card-front">
                <p>${cardData.question}</p>
            </div>
            <div class="card-back">
                <p>${cardData.answer}</p>
            </div>
        </div>
    `;
    // Listen for click on the card
    card.addEventListener('click', () => card.classList.toggle('show-answer'))
    // Add card DOM element to the cardElements array
    cardElements.push(card);
    // Render the card in the UI
    cardsContainer.appendChild(card);
    // Display count info for current card
    updateCurrentCardNum();
};

// Event Listeners
// 1. Listen for click on the previous button
prevBtn.addEventListener('click', () => {
    // Remove active class from current card
    cardElements[currentCardNum].className = 'card';
    // Decrement current card num by 1
    currentCardNum--;
    // Check if index is less than 0
    if ( currentCardNum < 0 ) {
        // if yes, change index to last card in array
        currentCardNum = cardElements.length-1
    }
    // make the new card active
    cardElements[currentCardNum].className = 'card active';
    // Display count info for current card
    updateCurrentCardNum();
});

// 2. Listen for click on the next button
nextBtn.addEventListener('click', () => {
    // Remove active class from current card
    cardElements[currentCardNum].className = 'card';
    // Increment current card num by 1
    currentCardNum++;
    // Check if index is higher than max card count
    if ( currentCardNum > cardElements.length-1 ) {
        // if yes, change index to first card in array
        currentCardNum = 0
    }
    // make the new card active
    cardElements[currentCardNum].className = 'card active';
    // Display count info for current card
    updateCurrentCardNum();
});

// 3. listen for click on the addCardBtn
addCardBtn.addEventListener('click', () => addCardContainer.classList.add('active'));

// 4. listen for click on the cancelBtn
cancelBtn.addEventListener('click', () => addCardContainer.classList.remove('active'));

// 5. listen for click on the form submit button
addCardSubmitBtn.addEventListener('click', () => {
    // get values for q & a
    const question = questionInput.value;
    const answer = answerInput.value;
    // check if valid data in both q & a
    if ( question.trim() && answer.trim() ) {
        // create a new card object
        const newCard = { question, answer };
        // create a new card using this object
        createCard(newCard);
        // now empty the form fields
        questionInput.value = '';
        answerInput.value = '';
        // hide the form
        addCardContainer.classList.remove('active');
        // push newCard obj into the cardsData array
        cardsData.push(newCard);
        // update localstorage with new cardsData array
        setData(cardsData);
    }
});

// 6. listen to click on the clearCardsBtn
clearCardsBtn.addEventListener('click', () => {
    // clear data in local storage
    localStorage.clear();
    // clear data in cardsContainer
    cardsContainer.innerHTML = '';
    // reload the window
    window.location.reload();
});

// Initialize app by creating all the cards
createCards();