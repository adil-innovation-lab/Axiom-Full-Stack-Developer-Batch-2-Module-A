// Get DOM Elements
const container = document.getElementById('container');
const prevBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const trackTitle = document.getElementById('song-title');
const albumArt = document.getElementById('album-art');

// Available tracks
const tracks = ['Ertugrul', 'National Anthem'];

// Create a track index to track which track is currently playing
let trackIndex = 1;

// Function to initialize app with default track
function loadTrack(track) {
    // Update track title using track name
    trackTitle.innerText = track;
    // Update audio element with new source
    audio.src = `music/${track}.mp3`;
    // Update album art
    albumArt.src = `images/${track}.jpeg`
};

// Function to play the selected track
function playTrack() {
    // Add play class to the container
    container.classList.add('play');
    // Replace the play icon with the pause icon
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    // Begin playing the song in the audio element
    audio.play();
};

// Function to pause the playing track
function pauseTrack() {
    // Add play class to the container
    container.classList.remove('play');
    // Replace the pause icon with the play icon
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    // Pause playing the song in the audio element
    audio.pause();
};

// Function to switch to previous track
function prevTrack() {
    // Decrement 1 from the trackIndex
    trackIndex--;
    // If track index value is less than 0, go to the last track in the tracks array
    if ( trackIndex < 0 ) {
        trackIndex = tracks.length - 1
    };
    // Load the new track in the audio player
    loadTrack(tracks[trackIndex]);
    // Play the track
    playTrack();
};

// Function to switch to next track
function nextTrack() {
    // Increment 1 from the trackIndex
    trackIndex++;
    // If track index value is less than 0, go to the last track in the tracks array
    if ( trackIndex > tracks.length - 1 ) {
        trackIndex = 0
    };
    // Load the new track in the audio player
    loadTrack(tracks[trackIndex]);
    // Play the track
    playTrack();
};

// Function to update the progress bar
function updateProgressBar(e) {
    // Get the total duration and current time of audio playback
    const { duration, currentTime } = e.srcElement;
    const progress = currentTime / duration * 100;
    progressBar.style.width = `${progress}%`;
};

// Function to update the progress when clicked
function updateProgress(e) {
    const width = this.clientWidth;
    const progressX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (progressX / width * duration);
};

// Event Listeners
// 1. Listen for click on play button
playBtn.addEventListener('click', () => {
    // Check if the track is already playing
    const isTrackPlaying = container.classList.contains('play');
    // Check if track is playing
    if ( isTrackPlaying ) {
        // If track is playing, pause the track
        pauseTrack();
    } else {
        // If track is paused, play the track
        playTrack();
    };
});

// 2. Listen for click on Previous Button
prevBtn.addEventListener('click', prevTrack);

// 3. Listen for click on Next Button
nextBtn.addEventListener('click', nextTrack);

// 4. Listen for timeupdate on audio element
audio.addEventListener('timeupdate', updateProgressBar);

// 5. Listen for click on the progress container
progressContainer.addEventListener('click', updateProgress);

// 6. Listen for end of track
audio.addEventListener('ended', nextTrack);

// Call the loadTrack function
loadTrack(tracks[trackIndex]);