// Toggle the navigation menu on mobile
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Function to expand the story
function readMore(storyNumber) {
    var fullStory = document.getElementById('story-' + storyNumber);
    fullStory.style.display = 'block';
}

// Function to close the full story
function closeStory(storyNumber) {
    var fullStory = document.getElementById('story-' + storyNumber);
    fullStory.style.display = 'none';
}