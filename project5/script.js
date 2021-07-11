// Get DOM Elements
const addUserBtn = document.getElementById('add-user');
const doubleWealthBtn = document.getElementById('double-wealth');
const filterWealthBtn = document.getElementById('filter-wealth');
const sortWealthBtn = document.getElementById('sort-wealth');
const sumWealthBtn = document.getElementById('sum-wealth');
const main = document.getElementById('main');

// This is the array to store user data to display in DOM
let userArray = [];

// Function to fetch a random user and assign random wealth
async function generateRandomUser() {
    // Use Fetch to get random user data from randomuser.me/api
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    // Save the user data
    const user = data.results[0];
    // Create new user object with random user name and wealth info
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        wealth: Math.floor(Math.random() * 1000000)
    };
    // Add newUser object to userArray
    addUserData(newUser);
};

// Function to add new user to the userArray
function addUserData(user) {
    // Push user object to the userArray
    userArray.push(user);
    // Upate the DOM with new data in userArray
    updateDOM();
};

// Function to update the DOM with new user data from userArray
function updateDOM(userData = userArray) {
    // Wipe away content from main element
    main.innerHTML = '<h2><strong>User</strong> Wealth</h2>'
    // Loop over userData array and display users in the DOM
    userData.forEach( user => {
        // Create a new div element for the user
        const divElement = document.createElement('div');
        // Assign a class to the new div
        divElement.classList.add('user');
        // Add content to the new div element
        divElement.innerHTML = `<strong>${user.name}</strong> $${formatWealth(user.wealth)}`;
        // Display the new divElement in the DOM
        main.appendChild(divElement);
    })
};

// Format wealth number as dollar
function formatWealth(wealth) {
    return wealth.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

};

// Function to double wealth of all users
function doubleWealth() {
    // User map method to create a new array with double wealth for each user
    userArray = userArray.map( user => {
        return { ...user, wealth: user.wealth * 2 }
    });
    // Update the DOM after wealth is doubled
    updateDOM();
};

// Function to filter and display only users with wealth > $1,000,000
function filterWealth() {
    // Run the filter method to filter and show only users with wealth > $1,000,000
    userArray = userArray.filter( user => user.wealth > 1000000 );
    // Update the DOM after users are filtered
    updateDOM();
};

// Function to sort the users by wealth
function sortUsers() {
    // Use a compare function to sort users based on wealth in descending order
    userArray.sort( (a, b) => b.wealth - a.wealth );
    // Update the DOM after users are sorted
    updateDOM();
};

// Function to sum all the wealth from all users
function calculateNetWealth() {
    // User reduce method to calculate sum of all wealth
    const netWealth = userArray.reduce( (acc, user) => 
        (acc += user.wealth), 0
    );
    // Create a new div element
    const totalWealthDiv = document.createElement('div');
    // Create content for totalWealthDiv
    totalWealthDiv.innerHTML = `<h3>Net Wealth: <strong>$${formatWealth(netWealth)}</strong></h3>`;
    // Append the new totalWealthDiv into the DOM
    main.appendChild(totalWealthDiv);
};

// Event Listeners
// 1. Listen for click on Add User Button
addUserBtn.addEventListener('click', generateRandomUser);

// 2. Listen for click on the Double Wealth Button
doubleWealthBtn.addEventListener('click', doubleWealth);

// 3. Listen for click on the Show Millionaires Button
filterWealthBtn.addEventListener('click', filterWealth);

// 4. Listen for click on the Sort Users Button
sortWealthBtn.addEventListener('click', sortUsers);

// 5. Listen for click on the Calculate Net Wealth Button
sumWealthBtn.addEventListener('click', calculateNetWealth);

// Generate some users on initial page load
generateRandomUser();
generateRandomUser();
generateRandomUser();