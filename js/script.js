$(document).ready(function () {

  /* ============================================================
     BANNER SLIDER (Owl Carousel)
     FIX #9 — proper nav, FIX #42 — per-slide overlay animation
     ============================================================ */
  const $slider = $('.banner-slider');

  $slider.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    smartSpeed: 800,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ]
  });

  // FIX #42 — animate overlay card content on each slide
  function animateOverlay() {
    $('.overlay-card').css({ opacity: 0, transform: 'translateY(20px)' });
    setTimeout(function () {
      $('.overlay-card').css({
        transition: 'opacity 0.9s ease, transform 0.9s ease',
        opacity: 1,
        transform: 'translateY(0)'
      });
    }, 100);
  }

  animateOverlay();
  $slider.on('translated.owl.carousel', animateOverlay);


  /* ============================================================
     VISION / MISSION TABS
     ============================================================ */
  const visionBtn  = document.getElementById('visionBtn');
  const missionBtn = document.getElementById('missionBtn');
  const visionContent =
    document.getElementById('visionContent');

    const missionContent =
    document.getElementById('missionContent');

  if (visionBtn && missionBtn && visionContent && missionContent) {


    visionBtn.addEventListener('click',()=>{

    visionBtn.classList.add('active');

    missionBtn.classList.remove('active');


    visionContent.classList.add('active');

    missionContent.classList.remove('active');

    });


    missionBtn.addEventListener('click',()=>{

    missionBtn.classList.add('active');

    visionBtn.classList.remove('active');


    missionContent.classList.add('active');

    visionContent.classList.remove('active');

    });
  }


  /* ============================================================
     SERVICES PANEL
     FIX #23 — all icons use green feature-icon
     ============================================================ */
  const data = {
    turnkey: {
      img: 'images/trunkey_solutions.png',
      title: 'Turnkey Solutions',
      desc: 'With over a decade of experience, HECS Turnkey Division specializes in end-to-end water and wastewater treatment solutions, having completed 120+ projects across India and Asia, while adopting the latest technologies to ensure full regulatory compliance.',
      f1icon: 'fa-solid fa-sliders',
      f1title: 'Customized Solutions',
      f1text: 'Offers tailored treatment systems and designs that are specifically aligned with client requirements and project specifications.',
      f2icon: 'fa-solid fa-microchip',
      f2title: 'Advanced Technology Adoption',
      f2text: 'HECS integrates the latest technologies to provide innovative, efficient, and sustainable treatment solutions.'
    },
    operations: {
      img: 'images/operation.jpeg',
      title: 'Operations & Maintenance',
      desc: 'With over a decade of experience, HECS Operation and Maintenance division is one of India\'s largest third-party providers, managing 60+ water and wastewater treatment plants, offering technical expertise, design consultation, and tailored O&M services for optimal plant performance.',
      f1icon: 'fa-solid fa-gears',
      f1title: 'Cutting-Edge Technology',
      f1text: 'Leverages years of experience and the latest technologies to improve processes and enhance economic performance at water and wastewater treatment plants.',
      f2icon: 'fa-solid fa-star',
      f2title: 'Extensive Experience',
      f2text: 'With over a decade in the O&M business, HECS is one of India\'s largest third-party providers of wastewater treatment plant services, ensuring trusted expertise and reliability.'
    },
    laboratory: {
      img: 'images/laboratory.png',
      title: 'Laboratory Division',
      desc: 'HECS operates NABL-accredited laboratory facilities providing comprehensive testing and analysis services for water, wastewater, soil, and air quality, supporting industries and municipalities in meeting regulatory compliance standards.',
      f1icon: 'fa-solid fa-flask',
      f1title: 'NABL Accredited Testing',
      f1text: 'Our laboratories carry NABL accreditation ensuring the highest standards of accuracy, reliability, and traceability in all analytical testing services.',
      f2icon: 'fa-solid fa-magnifying-glass-chart',
      f2title: 'Comprehensive Analysis',
      f2text: 'Wide-ranging testing capabilities covering water, wastewater, effluents, soil, and ambient air quality parameters for industrial and regulatory needs.'
    },
    consultancy: {
      img: 'images/consultance.jpeg',
      title: 'Consultancy Division',
      desc: 'We offer personalized consultancy services in environmental management, specializing in areas such as Environmental Impact Assessment (EIA), Environmental Management Plans (EMP), MOEF project clearance, state PCB liaisoning, wastewater feasibility studies, risk analysis, disaster management, HAZOP, and environmental modeling.',
      f1icon: 'fa-solid fa-briefcase',
      f1title: 'Comprehensive Expertise',
      f1text: 'Provides end-to-end consultancy services across a wide range of environmental management areas, from EIA to disaster management plans.',
      f2icon: 'fa-solid fa-scale-balanced',
      f2title: 'Regulatory Knowledge',
      f2text: 'Offers in-depth knowledge and experience in navigating complex regulatory frameworks, including MOEF project clearances and state PCB liaisoning.'
    },
    pstp: {
      img: 'images/pstp.jpeg',
      title: 'Packaged STPs / ETPs',
      desc: 'HECS designs and supplies compact, pre-engineered Packaged Sewage and Effluent Treatment Plants tailored for residential complexes, commercial buildings, hotels, hospitals, and small industries seeking reliable and space-efficient treatment solutions.',
      f1icon: 'fa-solid fa-boxes-stacked',
      f1title: 'Compact & Efficient Design',
      f1text: 'Factory-built modular systems that minimize on-site construction time, reduce footprint, and deliver consistent high-quality treated effluent.',
      f2icon: 'fa-solid fa-arrows-to-dot',
      f2title: 'Versatile Applications',
      f2text: 'Suitable for a wide range of applications including residential, hospitality, healthcare, and industrial sectors with customizable capacities.'
    },
    bimarketing: {
      img: 'images/BI_marketing.png',
      title: 'BI Marketing & Services',
      desc: 'BI Marketing is the leading provider of comprehensive pumping and wastewater treatment solutions across India, with over 130 professionals and partnerships with top global brands like Grundfos, Sandpiper, Viking, OBL, Pulsafeeder, Mitsubishi, Mann+Hummel, Fujimac, and Toyobo MC.',
      f1icon: 'fa-solid fa-handshake',
      f1title: 'Global Partnerships',
      f1text: 'As the authorized partner and system integrator for world-class international pump brands, we offer unmatched reliability and cutting-edge solutions.',
      f2icon: 'fa-solid fa-map-location-dot',
      f2title: 'Comprehensive Regional Reach',
      f2text: 'With a strong presence across all India and a dedicated team of over 130 professionals, we deliver personalized service and local expertise.'
    },
    training: {
      img: 'images/education-training.jpeg',
      title: 'Education & Training',
      desc: 'The Education and Training division of HECS offers comprehensive, industry-focused programs designed to enhance expertise in environmental management and promote sustainable practices for individuals and organizations.',
      f1icon: 'fa-solid fa-graduation-cap',
      f1title: 'Industry-Focused Expertise',
      f1text: 'Our Education and Training division delivers tailored programs designed to meet the specific needs of the client across environmental management domains.',
      f2icon: 'fa-solid fa-chalkboard-user',
      f2title: 'Expert Trainers with Industry Experience',
      f2text: 'Our programs are taught by experienced professionals with extensive expertise in environmental management ensuring practical, relevant learning.'
    }
  };

  const buttons = document.querySelectorAll('.service-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('active');
        const icon = btn.querySelector('i');
        if (icon) icon.style.opacity = '0';
      });
      button.classList.add('active');
      const activeIcon = button.querySelector('i');
      if (activeIcon) activeIcon.style.opacity = '1';

      const item = data[button.dataset.service];
      if (!item) return;

      document.getElementById('serviceImage').src     = item.img;
      document.getElementById('serviceTitle').textContent  = item.title;
      document.getElementById('serviceDesc').textContent   = item.desc;
      document.getElementById('feature1Title').textContent = item.f1title;
      document.getElementById('feature1Text').textContent  = item.f1text;
      document.getElementById('feature2Title').textContent = item.f2title;
      document.getElementById('feature2Text').textContent  = item.f2text;

      // Update icons
      const icons = document.querySelectorAll('.feature-icon i');
      if (icons[0]) icons[0].className = item.f1icon;
      if (icons[1]) icons[1].className = item.f2icon;
    });
  });

  // Init first button icon
  const firstBtn = document.querySelector('.service-btn.active i');
  if (firstBtn) firstBtn.style.opacity = '1';

    /* ============================================================
     COUNT-UP ANIMATION (IntersectionObserver)
     ============================================================ */
  function countUp(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString() + suffix;
    }, 16);
  }

  const countEls = document.querySelectorAll('.count-up');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        countUp(entry.target);
      }
    });
  }, { threshold: 0.4 });

  countEls.forEach(el => countObserver.observe(el));


  /* ============================================================
     RECENT WORK CAROUSEL — Infinite loop (clone-based)
     ============================================================ */
  const workTrack = document.getElementById('workTrack');
  const workPrev  = document.getElementById('workPrev');
  const workNext  = document.getElementById('workNext');

  if (workTrack && workPrev && workNext) {
    const originalCards = Array.from(workTrack.children);
    const totalOriginal = originalCards.length;

    // Clone all cards and append for seamless loop
    originalCards.forEach(card => {
      workTrack.appendChild(card.cloneNode(true));
    });
    // Also prepend clones at the beginning
    [...originalCards].reverse().forEach(card => {
      workTrack.insertBefore(card.cloneNode(true), workTrack.firstChild);
    });

    const allCards = () => Array.from(workTrack.children);
    let workIndex = totalOriginal; // Start at first real card (after prepended clones)
    let isTransitioning = false;

    workTrack.style.transition = 'none';

    function getCardWidth() {
      // On mobile (below 900px) cards are 100% width with no gap between them
      // On desktop cards are 1/3 width with a 26px gap
      const gap = window.innerWidth <= 900 ? 0 : 26;
      return allCards()[0].getBoundingClientRect().width + gap;
    }

    function jumpTo(index, animate) {
      if (!animate) {
        workTrack.style.transition = 'none';
      } else {
        workTrack.style.transition = 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      }
      workTrack.style.transform = `translateX(-${index * getCardWidth()}px)`;
    }

    // Initial position (no animation)
    requestAnimationFrame(() => jumpTo(workIndex, false));

    workTrack.addEventListener('transitionend', () => {
      const total = allCards().length;
      // If past the appended clones, jump back to real cards
      if (workIndex >= totalOriginal + totalOriginal) {
        workIndex = totalOriginal;
        jumpTo(workIndex, false);
      }
      // If before the prepended clones start, jump to real end
      if (workIndex < totalOriginal) {
        workIndex = totalOriginal + totalOriginal - 1;
        jumpTo(workIndex, false);
      }
      isTransitioning = false;
    });

    function workSlideNext() {
      if (isTransitioning) return;
      isTransitioning = true;
      workIndex++;
      jumpTo(workIndex, true);
    }

    function workSlidePrev() {
      if (isTransitioning) return;
      isTransitioning = true;
      workIndex--;
      jumpTo(workIndex, true);
    }

    workNext.addEventListener('click', workSlideNext);
    workPrev.addEventListener('click', workSlidePrev);
    window.addEventListener('resize', () => jumpTo(workIndex, false));

    // Auto-slide every 3.5s
    let workAutoplay = setInterval(workSlideNext, 3500);

    // Pause on hover
    workTrack.parentElement.addEventListener('mouseenter', () => clearInterval(workAutoplay));
    workTrack.parentElement.addEventListener('mouseleave', () => {
      workAutoplay = setInterval(workSlideNext, 3500);
    });
  }


  /* ============================================================
     NEWS & EVENTS AUTO-SLIDER
     ============================================================ */
  const newsTrack = document.getElementById('newsTrack');

  if (newsTrack) {
    const newsWrapper    = newsTrack.parentElement;
    const originalCards  = Array.from(newsTrack.children);
    const firstClone     = originalCards[0].cloneNode(true);
    newsTrack.appendChild(firstClone);

    let newsIndex = 0;
    const totalReal = originalCards.length;
    let isJumping   = false;

    function newsCardStep() {
      const cardWidth = newsTrack.children[0].getBoundingClientRect().width;
      return cardWidth + 26;
    }

    function goToNews(index, animate = true) {
      newsTrack.style.transition = animate ? 'transform 0.7s ease' : 'none';
      newsTrack.style.transform  = `translateX(-${index * newsCardStep()}px)`;
    }

    function slideNews() {
      if (isJumping) return;
      newsIndex++;
      goToNews(newsIndex);

      if (newsIndex === totalReal) {
        isJumping = true;
        newsTrack.addEventListener('transitionend', function reset() {
          newsTrack.removeEventListener('transitionend', reset);
          newsIndex = 0;
          goToNews(newsIndex, false);
          isJumping = false;
        });
      }
    }

    let newsInterval = setInterval(slideNews, 3200);

    if (newsWrapper) {
      newsWrapper.addEventListener('mouseenter', () => clearInterval(newsInterval));
      newsWrapper.addEventListener('mouseleave', () => {
        newsInterval = setInterval(slideNews, 3200);
      });
    }

    window.addEventListener('resize', () => goToNews(newsIndex, false));
  }





  /* ============================================================
     SCROLL-TRIGGERED SECTION FADE-IN
     ============================================================ */
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.section-anim').forEach(el => sectionObserver.observe(el));


  /* ============================================================
     FIX #37 — SCROLL-TO-TOP BUTTON
     ============================================================ */
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 320) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ============================================================
     FIX #47 — HAMBURGER MENU
     ============================================================ */
  const hamburger  = document.getElementById('hamburger');
  const navPanel   = document.getElementById('navPanel');
  const navLinks   = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const navClose   = document.getElementById('navClose');

  function closeAllDropdowns() {
    navLinks.querySelectorAll('.dropdown.mobile-open').forEach(item => {
      item.classList.remove('mobile-open');
    });
  }

  function openNav() {
    navPanel.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navPanel.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
    closeAllDropdowns();
  }

  hamburger.addEventListener('click', openNav);
  navOverlay.addEventListener('click', closeNav);
  if (navClose) navClose.addEventListener('click', closeNav);

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  navLinks.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.closest('.dropdown');
      const isOpen = item.classList.contains('mobile-open');

      closeAllDropdowns();

      if (!isOpen) {
        item.classList.add('mobile-open');
      }
    });
  });

  /* ==================================
HEADER BEHAVIOUR 
================================== */

let lastScroll = 0;

const topBar = document.querySelector(".top-bar");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  const current = window.pageYOffset;

  /* Back at top */

  if(current <= 20){

    topBar.classList.remove("hide");

    navbar.classList.remove("hide");

    navbar.classList.remove("move-up");

    lastScroll = current;

    return;

  }

  /* Scroll down */

  if(current > lastScroll){

    topBar.classList.add("hide");

    navbar.classList.add("move-up");

    navbar.classList.add("hide");

  }

  /* Scroll up */

  else{

    topBar.classList.add("hide");

    navbar.classList.remove("hide");

    navbar.classList.add("move-up");

  }

  lastScroll = current;

});

const scrollBtn =
document.getElementById("scrollTopBtn");

const border =
document.querySelector(".progress-border");

const totalLength = 240;

window.addEventListener("scroll",()=>{

const scrollTop =
window.pageYOffset;

const documentHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
scrollTop/documentHeight;

/* show button */

if(scrollTop>300){

scrollBtn.classList.add("visible");

}else{

scrollBtn.classList.remove("visible");

}

/* border animation */

const offset =
totalLength -
(progress * totalLength);

if (border) {
  border.style.strokeDashoffset =
  offset;
}

});

/* scroll to top */

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});