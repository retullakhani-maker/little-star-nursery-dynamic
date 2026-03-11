/* =========================================
   LITTLE STAR NURSERY — SCRIPTS
   ========================================= */

// ===== SWIPER TESTIMONIALS =====
const testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
    },
});

document.addEventListener('DOMContentLoaded', () => {

    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const target = document.getElementById(href.substring(1));
                if (target) {
                    const offset = 80;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });

                    // Close mobile menu if open
                    closeMobileMenu();
                }
            }
        });
    });

    // ===== HEADER SCROLL SHADOW =====
    const header = document.getElementById('header');
    function handleHeaderScroll() {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 4px 25px rgba(0,0,0,0.1)';
            header.style.padding = '5px 0';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.06)';
            header.style.padding = '8px 0';
        }
    }

    // ===== SCROLL-TO-TOP BUTTON =====
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    function handleScrollTop() {
        if (window.scrollY > 350) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== STATS COUNTER ANIMATION =====
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    let countersStarted = false;

    function animateCounters() {
        if (countersStarted) return;
        const statsBar = document.querySelector('.stats-bar');
        if (!statsBar) return;

        const rect = statsBar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            countersStarted = true;
            statNums.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'), 10);
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 1800;
                const step = Math.ceil(duration / target);
                let current = 0;

                const timer = setInterval(() => {
                    current += Math.ceil(target / 60);
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current + suffix;
                }, step);
            });
        }
    }

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    const animatedEls = document.querySelectorAll('[data-animate]');
    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(el => animObserver.observe(el));

    // Combined scroll handler
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        handleScrollTop();
        animateCounters();
    }, { passive: true });

    // Run once on load
    handleHeaderScroll();
    handleScrollTop();
    animateCounters();

    // ===== MOBILE MENU =====
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('mobile-nav-overlay');

    function openMobileMenu() {
        navLinks.classList.add('mobile-open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        mobileToggle.innerHTML = '<i class="fas fa-times"></i>';
        setTimeout(() => navLinks.classList.add('show'), 10);
    }

    function closeMobileMenu() {
        if (!navLinks.classList.contains('mobile-open')) return;
        navLinks.classList.remove('show');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        setTimeout(() => navLinks.classList.remove('mobile-open'), 400);
    }

    mobileToggle.addEventListener('click', () => {
        if (navLinks.classList.contains('mobile-open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    overlay.addEventListener('click', closeMobileMenu);

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit-form');
            const original = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-check-circle"></i> Sent Successfully!';
            btn.style.background = 'linear-gradient(135deg, #22C55E, #16A34A)';
            btn.disabled = true;

            setTimeout(() => {
                contactForm.reset();
                btn.innerHTML = original;
                btn.style.background = '';
                btn.disabled = false;
            }, 3500);
        });
    }

    // ===== GALLERY ITEM — keyboard accessibility =====
    document.querySelectorAll('.gm-item').forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'img');
    });

});
