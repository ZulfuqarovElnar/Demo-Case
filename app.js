// * Get the menu and menu-ul elements
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

// * Watchlist Scroll

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

// * WatchList ClickBtn

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

    watchCloseBtn.addEventListener("click", function () {
        const parentCard = watchCloseBtn.closest(".nav-watch-card");
        if (parentCard) {
            parentCard.remove();
        }
    });

    const xmarkIcons = document.querySelectorAll(".close");
    xmarkIcons.forEach(function (xmarkIcon) {
        xmarkIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            const parentCard = xmarkIcon.closest(".nav-watch-card");
            if (parentCard) {
                parentCard.remove();
            }
        });
    });
});

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

// * Main-Card Prev and Next

    document.addEventListener('DOMContentLoaded', function () {
        var prevButton = document.getElementById('prevButton');
        var nextButton = document.getElementById('nextButton');
        var slider = document.getElementById('slider');
        var cardWidth = 289 ;
        var visibleCards = Math.floor(slider.offsetWidth / cardWidth);
        var currentSlide = 0;

        function moveSliderLeft() {
            if (currentSlide > 0) {
                currentSlide--;
                var translateXValue = -currentSlide * cardWidth;
                slider.style.transition = 'transform 0.7s ease';
                slider.style.transform = `translateX(${translateXValue}px)`;
            }
        }

        function moveSliderRight() {
            var totalSlides = slider.children.length;
            if (currentSlide < totalSlides - visibleCards) {
                currentSlide++;
                var translateXValue = -currentSlide * cardWidth;
                slider.style.transition = 'transform 0.7s ease';
                slider.style.transform = `translateX(${translateXValue}px)`;
            }
        }

        prevButton.addEventListener('click', moveSliderLeft);
        nextButton.addEventListener('click', moveSliderRight);

        slider.addEventListener('transitionend', function () {
            slider.style.transition = 'none';
        });
    });

// * Main Slider Two

    document.addEventListener('DOMContentLoaded', function () {
        var prevButton = document.getElementById('prevButtonOne');
        var nextButton = document.getElementById('nextButtonOne');
        var slider = document.getElementById('sliderOne');
        var cardWidth = 289;
        var visibleCards = Math.floor(slider.offsetWidth / cardWidth);
        var currentSlide = 0;


        function moveSliderLeft() {
            if (currentSlide > 0) {
                currentSlide--;
                var translateXValue = -currentSlide * cardWidth;
                slider.style.transition = 'transform 0.7s ease';
                slider.style.transform = `translateX(${translateXValue}px)`;
            }
        }

        function moveSliderRight() {
            var totalSlides = slider.children.length;
            if (currentSlide < totalSlides - visibleCards) {
                currentSlide++;
                var translateXValue = -currentSlide * cardWidth;
                slider.style.transition = 'transform 0.7s ease';
                slider.style.transform = `translateX(${translateXValue}px)`;
            }
        }

        prevButton.addEventListener('click', moveSliderLeft);
        nextButton.addEventListener('click', moveSliderRight);

        slider.addEventListener('transitionend', function () {
            slider.style.transition = 'none';
        });
    });

// * JavaScript to toggle the hamburger menu

function toggleMenu() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var hamburgerIcon = document.getElementById('hamburger-icon');
  
    if (hamburgerMenu.classList.contains('open')) {
      hamburgerMenu.classList.remove('open');
      hamburgerIcon.style.transform = 'rotate(0deg)';
    } else {
      hamburgerMenu.classList.add('open');
      hamburgerIcon.style.transform = 'rotate(180deg)';
    }
  }
  
  function toggleSubMenu() {
    var submenu = document.querySelector('.submenu');
    var icon = document.getElementById('hamburger-icon');
  
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  }
  
  function changeMenuText(element) {
    var hamburgerText = document.querySelector('.hamburger-ul a');
    var selectedText = element.textContent;
    hamburgerText.textContent = selectedText;
  }

function toggleSubMenu() {
    var submenu = document.querySelector('.submenu');
    var icon = document.getElementById('hamburger-icon');
    
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      submenu.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  }
  
  function changeMenuText(element) {
    var hamburgerText = document.querySelector('.hamburger-ul a');
    var selectedText = element.textContent;
    hamburgerText.textContent = selectedText;
  }