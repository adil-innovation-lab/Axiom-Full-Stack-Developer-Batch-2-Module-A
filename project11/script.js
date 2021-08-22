// Get DOM Elements
const newsFeedContainer = document.getElementById('news-feed-container');
const loader = document.getElementById('loader');
const filter = document.getElementById('filter');

// Global variables for API
let limit = 5;
let page = 1;

// Function to fetch posts from API
async function fetchPosts() {
    // Fetch posts from the jsonplaceholder api
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const data = await res.json();
    return data;
};

// Function to render Posts in DOM
async function renderPosts() {
    // Fetch post data
    const posts = await fetchPosts();
    // Iterate over each post
    posts.forEach( post => {
        // Create a div element for the post
        const postDiv = document.createElement('div');
        // Add class for styling
        postDiv.classList.add('post');
        // Add post content
        postDiv.innerHTML = `
            <div class="post-id">${post.id}</div>
            <div class="post-content">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        // Add in the DOM as part of the newsFeedContainer
        newsFeedContainer.appendChild(postDiv);
    });
};

// Function to show the loader
function loading() {
    // Add the show class to the loader element
    loader.classList.add('show');
    // Increment page global variable by 1
    page++;
    // Render the next set of posts
    renderPosts();
    // Remove the loader
    loader.classList.remove('show');
};

// Function to filter posts in the news feed
function filterPosts(e) {
    // Save the filter string as uppercase value
    const filterStr = e.target.value.toUpperCase();
    // Get all the posts displayed on the page
    const posts = document.querySelectorAll('.post');
    console.log(posts);
    // Iterate over all the posts and get the title and body
    posts.forEach( post => {
        // Get the title and body for the post
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();
        // Check if the filterStr is in the title or the body
        if ( title.indexOf(filterStr) > -1 || body.indexOf(filterStr) > -1 ) {
            // If yes, display that post
            post.style.display = 'flex';
        } else {
            // If no, hide that post
            post.style.display = 'none';
        }
    })
};

// Event Listeners
// 1. Listen for a scroll event on the page
window.addEventListener('scroll', () => {
    // Destructure from DOM to get scroll and height values
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // Check to see if user has scrolled to bottom of page
    if ( scrollTop + clientHeight >= scrollHeight - 10 ) {
        // If user has scrolled to the bottom, show the loader
        loading();
    }
});

// 2. Listen for input event in the filter input field
filter.addEventListener('input', filterPosts);

renderPosts();