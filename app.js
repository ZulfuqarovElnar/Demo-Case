// Get the menu and menu-ul elements
const menuThree = document.querySelector('.menu-three');
const menuThreeUl = document.querySelector('.menu-three-ul');

const activeIcon = document.querySelector('.menu-three i');

menuThree.addEventListener('click', function() {
    menuThreeUl.classList.toggle('active');
    activeIcon.classList.toggle('active-icon');
});
document.addEventListener("DOMContentLoaded", function() {

    const menuThree = document.querySelector('.menu-three');
    const menuThreeUl = document.querySelector('.menu-three-ul');

    menuThreeUl.addEventListener('click', function(event) {
        event.preventDefault(); 

        const clickedItem = event.target.closest('li');
        const value = clickedItem.textContent.trim();

        menuThree.querySelector('a').textContent = value;
    });
});

// Watchlist Scroll
const scrollContainer = document.querySelector('.nav-watch-list');
const scrollIndicator = document.getElementById('scroll-icon');

scrollContainer.addEventListener('scroll', updateScrollIndicator);

function updateScrollIndicator() {
    const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const percentageScrolled = (scrollContainer.scrollTop / maxScroll) * 100;
    const maxIndicatorScroll = 175 - scrollIndicator.clientHeight; 
    const indicatorScroll = (percentageScrolled * maxIndicatorScroll) / 100 + 20;
    scrollIndicator.style.top = `${indicatorScroll}px`;
}

// WatchList ClickBtn
const watchListEl = document.querySelector('.nav-watch')
const navWatchListEl = document.querySelector('.nav-watch-lists')
const watchCloseEl = document.querySelector('.watch-close-btn')

watchListEl.addEventListener ('click', () => {
    navWatchListEl.classList.add('active-watch')
})
watchCloseEl.addEventListener ('click', (event) => {
    event.stopPropagation();
    navWatchListEl.classList.remove('active-watch')
});

document.addEventListener("DOMContentLoaded", function () {
    const watchCloseBtn = document.querySelector(".watch-close-btn");
    const navWatchCards = document.querySelectorAll(".nav-watch-card");

    // Click event listener for the watch close button
    watchCloseBtn.addEventListener("click", function () {
        // Loop through each nav-watch-card element and remove them
        navWatchCards.forEach(function (card) {
            card.remove();
        });
    });

    // Click event listeners for each fa-xmark icon inside nav-watch-card elements
    navWatchCards.forEach(function (card) {
        const xmarkIcon = card.querySelector(".fa-xmark");
        xmarkIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            card.remove();
        });
    });
})

// * Sign In Click
document.addEventListener('DOMContentLoaded', function() {
    const navSign = document.querySelector('.nav-sign');
    const navSignBody = document.querySelector('.nav-sign-body');
    const signClose = document.querySelector('.sign-close-btn');

    navSign.addEventListener('click', function() {
        navSignBody.classList.add('active-sign');
    });
    signClose.addEventListener ('click', (event) => {
        event.stopPropagation();
        navSignBody.classList.remove('active-sign')
    });
});



