// Clean Navigation & UI Interaction Controller Model
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        // Toggle the mobile contextual popover menu
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
            
            // Modern micro-interaction lines transformation sequence loops
            const barLines = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                barLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                barLines[1].style.opacity = '0';
                barLines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                barLines[0].style.transform = 'none';
                barLines[1].style.opacity = '1';
                barLines[2].style.transform = 'none';
            }
        });

        // Auto collapse navigation tray on selection items trigger actions
        document.querySelectorAll('.nav-item').forEach(linkItem => {
            linkItem.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const barLines = menuToggle.querySelectorAll('span');
                barLines[0].style.transform = 'none';
                barLines[1].style.opacity = '1';
                barLines[2].style.transform = 'none';
            });
        });
    }

    // Modern reveal-on-scroll trigger pattern for design components
    const targetCards = document.querySelectorAll('.project-card, .skill-category');
    const visualObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, visualObserverOptions);

    targetCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        cardObserver.observe(card);
    });
});