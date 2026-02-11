// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 120,
    easing: 'ease-out-cubic'
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// GSAP Animasi Halus saat Load
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from(".logo", {
        y: -20,
        opacity: 0,
        duration: 0.8
    })
    .from(".nav-links li", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
    }, "-=0.5");
});

// Smooth Scroll untuk Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});