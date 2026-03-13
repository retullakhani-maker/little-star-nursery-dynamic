/* ============================================
   LITTLE STAR NURSERY – SCRIPT
   ============================================ */

window.registerScrollListener = (dotNetObj) => {
  window.addEventListener('scroll', () => {
    dotNetObj.invokeMethodAsync('OnScroll', window.scrollY);
  }, { passive: true });
};

window.initPageInteractivity = () => {
  console.log("Initializing page interactivity...");
  
  /* ---- Scroll reveal (AOS) ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    AOS.refresh();
  }

  /* ---- Counter animation ---- */
  const counterItems = document.querySelectorAll('[data-target]');
  if (counterItems.length > 0) {
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

    counterItems.forEach(el => counterObs.observe(el));
  }


  /* ---- Swiper testimonials ---- */
  if (typeof Swiper !== 'undefined') {
    const swiperEl = document.querySelector('.testimonial-swiper');
    if (swiperEl) {
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
  }


  /* ---- Card hover tilt on desktop ---- */
  if (window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.prog-card, .safety-card, .branch-card, .detailed-program-item').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width  - .5) * 8;
        const y = ((e.clientY - r.top)  / r.height - .5) * -8;
        card.style.transform = `translateY(-10px) perspective(600px) rotateX(${y}deg) rotateY(${x}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }


  /* ---- Smooth anchor scrolling ---- */
  document.querySelectorAll('a[href*="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '/#') return;
      
      const id = href.split('#')[1];
      const target = document.getElementById(id);
      
      if (target && (window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || href.startsWith('#'))) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });


  /* ---- Gallery lightbox ---- */
  document.querySelectorAll('.gm-item').forEach(item => {
    item.onclick = (e) => {
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
    };
  });
};

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header behaviors handled by Blazor ---- */


  /* ---- Sticky header handled by Blazor ---- */


  /* ---- Scroll to top ---- */
  const fabTop = document.getElementById('scroll-top-btn');
  if (fabTop) {
    window.addEventListener('scroll', () => {
      fabTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }


  /* ---- Contact form ---- */
  const form  = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit-form');
      if (!btn) return;
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        form.reset();
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 4000);
        }
      }, 1400);
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

  // Initial call
  window.initPageInteractivity();

  // Handle fragment scroll on initial load
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 500);
  }
});
