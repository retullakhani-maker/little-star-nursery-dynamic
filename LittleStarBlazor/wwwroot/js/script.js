/* ============================================
   LITTLE STAR NURSERY – SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sticky header ---- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });


  /* ---- Mobile hamburger ---- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });


  /* ---- Active nav link ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' }).observe && sections.forEach(s =>
    new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      });
    }, { rootMargin: '-40% 0px -40% 0px' }).observe(s)
  );


  /* ---- Scroll reveal ---- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.getAttribute('data-aos-delay') || 0);
      setTimeout(() => entry.target.classList.add('aos-animate'), delay);
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => revealObs.observe(el));


  /* ---- Counter animation ---- */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target  = parseInt(el.getAttribute('data-target') || 0);
      const suffix  = el.getAttribute('data-suffix') || '';
      if (!target) return;

      const duration = 1800, steps = 60;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        el.textContent = Math.round((target * step) / steps) + suffix;
        if (step >= steps) { el.textContent = target + suffix; clearInterval(timer); }
      }, duration / steps);

      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));


  /* ---- Scroll to top ---- */
  const fabTop = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    fabTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


  /* ---- Smooth anchor scrolling ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ---- Contact form ---- */
  const form  = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit-form');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        form.reset();
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
      }, 1400);
    });
  }


  /* ---- Gallery lightbox ---- */
  document.querySelectorAll('.gm-item').forEach(item => {
    item.addEventListener('click', () => {
      const img   = item.querySelector('img');
      const title = item.querySelector('.gmo-content h4')?.textContent || '';
      const desc  = item.querySelector('.gmo-content p')?.textContent  || '';

      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position:fixed;inset:0;z-index:9999;
        background:rgba(0,0,0,.88);display:flex;
        align-items:center;justify-content:center;padding:24px;
        cursor:zoom-out;animation:lbFadeIn .25s ease;
      `;

      const box = document.createElement('div');
      box.style.cssText = `
        background:white;border-radius:20px;overflow:hidden;
        max-width:700px;width:100%;box-shadow:0 40px 120px rgba(0,0,0,.4);
        animation:lbScaleIn .3s cubic-bezier(.34,1.56,.64,1);cursor:default;
      `;
      box.innerHTML = `
        <img src="${img.src}" alt="${img.alt}" style="width:100%;max-height:440px;object-fit:cover;display:block;" />
        <div style="padding:24px;">
          <h3 style="font-family:'Fredoka',sans-serif;font-size:1.3rem;margin-bottom:6px;color:#333;">${title}</h3>
          <p style="color:#666;font-size:.9rem;margin:0 0 16px;">${desc}</p>
          <button style="
            padding:10px 24px;background:#FF8C42;color:white;border:none;
            border-radius:100px;font-family:'Nunito',sans-serif;font-weight:700;
            cursor:pointer;font-size:.9rem;" onclick="this.closest('[data-overlay]').remove();document.body.style.overflow='';">
            Close ✕
          </button>
        </div>
      `;

      overlay.setAttribute('data-overlay','');
      overlay.appendChild(box);
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';

      const close = () => {
        overlay.style.animation = 'lbFadeOut .2s ease forwards';
        setTimeout(() => { overlay.remove(); document.body.style.overflow = ''; }, 200);
      };
      overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
      const esc = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } };
      document.addEventListener('keydown', esc);
    });
  });


  /* ---- Swiper testimonials ---- */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: {
        640:  { slidesPerView: 1 },
        768:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }


  /* ---- Card hover tilt on desktop ---- */
  if (window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.prog-card, .safety-card, .branch-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - .5) * 8;
        const y = ((e.clientY - r.top)  / r.height - .5) * -8;
        card.style.transform = `translateY(-10px) perspective(600px) rotateX(${y}deg) rotateY(${x}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }


  /* ---- Inject lightbox keyframes ---- */
  const style = document.createElement('style');
  style.textContent = `
    @keyframes lbFadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes lbFadeOut { from{opacity:1} to{opacity:0} }
    @keyframes lbScaleIn { from{transform:scale(.8);opacity:0} to{transform:scale(1);opacity:1} }
  `;
  document.head.appendChild(style);

});
