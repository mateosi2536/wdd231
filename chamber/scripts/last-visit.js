const now = Date.now();

const lastVisit = localStorage.getItem('lastVisit');

const messageContainer = document.getElementById('visit-message');

if (!lastVisit) {
    messageContainer.textContent = "Welcome! If you have any questions, let us know.";
} else {
    const diffMs = now - parseInt(lastVisit, 10);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        messageContainer.textContent = "Back so soon? Awesome!";
    } else if (diffDays === 1) {
        messageContainer.textContent = "Your last visit was 1 day ago.";
    } else {
        messageContainer.textContent = `Your last visit was ${diffDays} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);