// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Dark Mode Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Check for saved user preference, else system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.setAttribute('data-lucide', 'moon');
    }

    // Re-render icon
    lucide.createIcons();

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
            themeIcon.setAttribute('data-lucide', 'sun');
        } else {
            localStorage.theme = 'light';
            themeIcon.setAttribute('data-lucide', 'moon');
        }

        // Re-render icon after swap
        lucide.createIcons();
    });

    // 3. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const targetSec = document.querySelector(targetId);
            if (targetSec) {
                // Offset for fixed navbar
                const navHeight = document.querySelector('nav').offsetHeight;
                window.scrollTo({
                    top: targetSec.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Hero Buttons Click Events
    const exploreBtn = document.getElementById('btn-explore');
    const agmBtn = document.getElementById('btn-agm');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const activitiesSec = document.getElementById('activities');
            if (activitiesSec) {
                const navHeight = document.querySelector('nav').offsetHeight;
                window.scrollTo({
                    top: activitiesSec.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    if (agmBtn) {
        agmBtn.addEventListener('click', () => {
            alert('Redirecting to AGM 2026 Portal...');
        });
    }

    // 5. Scroll Reveal Interactivity
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // pixels from bottom to trigger

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // 6. Navbar Scrolled State
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            if (document.documentElement.classList.contains('dark')) {
                navbar.style.background = 'rgba(15, 23, 42, 0.9)'; // Dark bg
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.9)'; // Light bg
            }
        } else {
            navbar.classList.remove('shadow-md');
            if (document.documentElement.classList.contains('dark')) {
                navbar.style.background = 'rgba(30, 41, 59, 0.7)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.7)';
            }
        }
    });

    // Handle Form Submission
    const regForm = document.getElementById('join-form');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = regForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Processing...`;
            lucide.createIcons();

            // Simulate processing
            setTimeout(() => {
                btn.innerHTML = `<i data-lucide="check-circle" class="text-green-300"></i> Registered Successfully`;
                btn.classList.remove('blue-gradient');
                btn.classList.add('bg-green-600');
                lucide.createIcons();
                regForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.add('blue-gradient');
                    btn.classList.remove('bg-green-600');
                }, 3000);
            }, 1500);
        });
    }
});
