document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            link.appendChild(ripple);
 
            // Remove ripple effect after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });



    // Contact Form Validation
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        }
    });

    // Parallax Scrolling and Gradient Animation
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('#hero');
        const scrollPosition = window.scrollY;
        hero.style.background = `linear-gradient(120deg, rgba(190, 154, 233, ${1 - scrollPosition / 1000}), rgba(190, 154, 233, ${1 - scrollPosition / 1000})), url('hero-bg.jpg') no-repeat center center/cover`;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Fade-in and Reveal Animations
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    // Hover Effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseout', () => {
            cursor.classList.remove('hover');
        });
    });
});


// Star rating function
function displayStarRating(skillName, rating) {
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('skill');

    const skillNameElement = document.createElement('div');
    skillNameElement.classList.add('skill-name');
    skillNameElement.textContent = skillName;

    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        if (i <= rating) {
            star.classList.add('filled-star');
        } else {
            star.classList.add('empty-star');
        }
        starContainer.appendChild(star);
    }

    skillContainer.appendChild(skillNameElement);
    skillContainer.appendChild(starContainer);

    document.getElementById('skills-container').appendChild(skillContainer);
}

// Example usage
displayStarRating('Java', 5);
displayStarRating('SpringBoot', 4);
displayStarRating('PostgreSQL', 3);
displayStarRating('GenAI', 4);
displayStarRating('HTML', 3);
displayStarRating('CSS', 3);
displayStarRating('JavaScript', 3);
displayStarRating('Github', 3);
displayStarRating('Python', 3);
displayStarRating('Jenkins', 4);

window.addEventListener('scroll', function() {
    const welcomeContent = document.querySelector('.welcome-content');
    if (window.scrollY > 50) {
        welcomeContent.classList.add('fade-out');
    } else {
        welcomeContent.classList.remove('fade-out');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
