// Get DOM Elements
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const generateBtn = document.getElementById('generate-btn');
const resultsHeading = document.getElementById('results-heading');
const mealsElement = document.getElementById('meals');
const selectedMealElement = document.getElementById('selected-meal');

// Function to find meals based on search input
function findMeals(e) {
    // Stop the page submit
    e.preventDefault();
    // Clear previous details for selected meal
    selectedMealElement.innerHTML = '';
    // Get the search text
    const searchText = search.value;
    // Check if search has text
    if( searchText.trim() ) {
        // If search text exists, then call the search API
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then( res => res.json() )
            .then( data => {
                console.log(data);
                // Display the search result heading
                resultsHeading.innerHTML = `<h2>Search results for ${searchText}</h2>`;
                // Check to see if any data has returned
                if( data.meals === null ) {
                    // If there are no results, show a message saying no results
                    resultsHeading.innerHTML = `<h2>There are no results for ${searchText}</h2>`;
                } else {
                    // If there are results, loop thru the results and render in DOM
                    mealsElement.innerHTML = data.meals.map( meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `)
                    .join('')
                };
                // Clear search text after search
                search.value = '';
            })
    } else {
        // If search text does not exist, raise an alert asking user to enter text
        alert('Please provide text for search');
    };
};

// Function to get the full details of a meal using it's ID
function getFullDetails(mealID) {
    // Use Fetch API to get the meal details
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then( res => res.json() )
        .then( data => {
            // Save the meal data
            const meal = data.meals[0];
            console.log(meal);
            // Add the meal to the DOM
            renderMeal(meal);
        })
};

// Function to render the selected meal in the DOM
function renderMeal(meal) {
    // Hide the search results heading
    resultsHeading.innerHTML = '';
    // Hide the search results
    mealsElement.innerHTML = '';
    // Initialize array for ingredients
    const ingredients = [];
    // Loop over the 20 ingredients
    for ( let i = 1; i <= 20; i++ ) {
        // Check if ingredient exists
        if (meal[`strIngredient${i}`]) {
            // If ingredient exists, push the ingredient and measurement to the ingredients array
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            // If ingredient does not exist, exit the loop
            break;
        }
    };
    // Add the data to the DOM
    selectedMealElement.innerHTML = `
        <div class="selected-meal-details">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="selected-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
            </div>
            <div class="selected-meal-instructions">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map( ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
};

// Event Listeners
// 1. Listen for click on the submit button
submit.addEventListener('submit', findMeals);

// 2. Listen for click on the meals element
mealsElement.addEventListener('click', e => {
    // Get all items clicked
    const mealInfo = e.path.find( item => {
        // Get only the element with class = meal-info
        if ( item.classList ) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    });
    // Check if mealInfo has data
    if ( mealInfo ) {
        // Get the value from the data-mealID attribute
        const mealID = mealInfo.getAttribute('data-mealID');
        // Use the mealID to get the full details of the meal
        getFullDetails(mealID);
    }
})