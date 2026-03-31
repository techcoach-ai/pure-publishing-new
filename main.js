/* ============================================================
   Pure Publishing — Shared JavaScript
   Null-safe, shared across all pages. No console errors on
   pages that don't have every element.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     Add js-ready class immediately — enables CSS scroll
     animations and hides .reveal elements until observed
     ---------------------------------------------------------- */
  document.body.classList.add('js-ready');


  /* ==========================================================
     1. NAVIGATION SCROLL BEHAVIOUR
     ========================================================== */
  const siteNav = document.querySelector('nav.site-nav');

  function handleNavScroll() {
    if (!siteNav) return;
    if (window.scrollY > 50) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }

  if (siteNav) {
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // run on load in case page is already scrolled

    // Mark active nav link based on current pathname
    const navLinks = siteNav.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = href.replace(/\/$/, '') || '/';
      if (
        linkPath === currentPath ||
        (linkPath !== '/' && currentPath.startsWith(linkPath))
      ) {
        link.classList.add('active');
      }
    });
  }


  /* ==========================================================
     2. MOBILE NAV TOGGLE
     ========================================================== */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  function openMobileNav() {
    document.body.classList.add('nav-open');
    if (hamburger) hamburger.classList.add('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMobileNav() {
    document.body.classList.remove('nav-open');
    if (hamburger) hamburger.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Toggle navigation');

    hamburger.addEventListener('click', () => {
      const isOpen = document.body.classList.contains('nav-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      closeMobileNav();
    }
  });


  /* ==========================================================
     3. INTERSECTION OBSERVER — SCROLL ANIMATIONS
     ========================================================== */
  const revealSelectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
  const revealElements = document.querySelectorAll(revealSelectors.join(', '));

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (!el) return;
        el.classList.add('visible');
        observer.unobserve(el);
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
      if (el) revealObserver.observe(el);
    });
  } else {
    // Fallback: make all visible immediately if IntersectionObserver not supported
    revealElements.forEach(el => {
      if (el) el.classList.add('visible');
    });
  }


  /* ==========================================================
     4. STAGGER CHILDREN
     ========================================================== */
  const staggerContainers = document.querySelectorAll('.stagger-children');

  staggerContainers.forEach(container => {
    if (!container) return;
    const children = Array.from(container.children).slice(0, 6);
    children.forEach((child, i) => {
      if (!child) return;
      child.style.transitionDelay = `${i * 100}ms`;
    });
  });


  /* ==========================================================
     5. STAT COUNTER ANIMATION
     ========================================================== */
  const statElements = document.querySelectorAll('[data-count]');

  if (statElements.length > 0 && 'IntersectionObserver' in window) {
    function easeOutQuad(t) {
      return t * (2 - t);
    }

    function animateCounter(el) {
      if (!el) return;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      if (isNaN(target)) return;

      const duration = 1500;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const current = Math.round(easedProgress * target);
        el.textContent = current.toLocaleString() + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString() + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (!el) return;
        animateCounter(el);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.5
    });

    statElements.forEach(el => {
      if (el) counterObserver.observe(el);
    });
  }


  /* ==========================================================
     6. CUSTOM CURSOR FOLLOWER
     ========================================================== */
  if (window.matchMedia('(hover: hover)').matches) {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-follower');
    document.body.appendChild(cursor);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId = null;
    let isVisible = false;

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function animateCursor() {
      currentX = lerp(currentX, mouseX, 0.15);
      currentY = lerp(currentY, mouseY, 0.15);
      cursor.style.left = currentX + 'px';
      cursor.style.top = currentY + 'px';
      rafId = requestAnimationFrame(animateCursor);
    }

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.classList.add('visible');
        if (!rafId) animateCursor();
      }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      isVisible = false;
      cursor.classList.remove('visible');
    });

    window.addEventListener('mouseenter', () => {
      isVisible = true;
      cursor.classList.add('visible');
    });
  }


  /* ==========================================================
     7. FAQ ACCORDION
     ========================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      if (!item) return;
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!question || !answer) return;

      // Initialise closed state
      answer.style.maxHeight = '0';

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all other open items
        faqItems.forEach(otherItem => {
          if (!otherItem || otherItem === item) return;
          if (otherItem.classList.contains('open')) {
            otherItem.classList.remove('open');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = '0';
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('open');
          answer.style.maxHeight = '0';
        } else {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }


  /* ==========================================================
     8. PROJECT FILTER
     ========================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      if (!btn) return;

      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => { if (b) b.classList.remove('active'); });
        btn.classList.add('active');

        const filter = btn.dataset.filter || 'all';

        projectCards.forEach(card => {
          if (!card) return;
          const category = card.dataset.category || '';
          const shouldShow = filter === 'all' || category === filter;

          if (shouldShow) {
            // Show: set display first, then animate in
            card.style.display = 'block';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
              });
            });
          } else {
            // Hide: animate out, then set display none
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              // Only set display none if still filtered out
              const currentFilter = document.querySelector('.filter-btn.active');
              const currentFilterValue = currentFilter ? (currentFilter.dataset.filter || 'all') : 'all';
              if (currentFilterValue !== 'all' && category !== currentFilterValue) {
                card.style.display = 'none';
              }
            }, 300);
          }
        });
      });
    });
  }


  /* ==========================================================
     9. CONTACT FORM AJAX SUBMIT
     ========================================================== */
  const contactForm = document.querySelector('form#contact-form');

  if (contactForm) {
    const submitBtn = contactForm.querySelector('[type="submit"]');
    const formSuccess = document.querySelector('.form-success');
    const formError = document.querySelector('.form-error');

    contactForm.addEventListener('submit', async e => {
      e.preventDefault();

      if (!contactForm.action) return;

      // Loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending\u2026';
      }

      // Hide any previous feedback
      if (formSuccess) formSuccess.style.display = 'none';
      if (formError) formError.style.display = 'none';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          // Success
          contactForm.style.display = 'none';
          if (formSuccess) {
            formSuccess.style.display = 'block';
            formSuccess.textContent = "Thanks for getting in touch! We'll be back with you very soon.";
          }
        } else {
          throw new Error('Server responded with ' + response.status);
        }
      } catch (err) {
        // Error
        if (formError) {
          formError.style.display = 'block';
          formError.textContent = "Something went wrong — please try again or email us directly.";
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.originalText || 'Send Message';
        }
      }
    });
  }


  /* ==========================================================
     10. STICKY SCROLL STEPS SECTION
     ========================================================== */
  const stickySection = document.querySelector('.sticky-steps');

  if (stickySection) {
    const stepItems = stickySection.querySelectorAll('.step-item');
    const stepCounter = stickySection.querySelector('.step-counter');

    if (stepItems.length === 0) return;

    function updateActiveStep() {
      const sectionTop = stickySection.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = stickySection.offsetHeight;
      const scrolled = window.scrollY - sectionTop;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));

      // Divide section into equal segments per step
      const stepCount = stepItems.length;
      const activeIndex = Math.min(
        Math.floor(progress * stepCount),
        stepCount - 1
      );

      stepItems.forEach((item, i) => {
        if (!item) return;
        if (i === activeIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      if (stepCounter) {
        stepCounter.textContent = (activeIndex + 1) + ' / ' + stepCount;
      }
    }

    window.addEventListener('scroll', updateActiveStep, { passive: true });
    updateActiveStep(); // run on load
  }

}); // end DOMContentLoaded
