$(document).ready(function () {

  /* ============================================================
     HOME PAGE BANNER (the big sliding images at the top)
     Using the Owl Carousel plugin to handle the actual sliding,
     I'm just setting it up here with the options I want.
     ============================================================ */
  const $slider = $('.banner-slider');

  $slider.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    smartSpeed: 800,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
    ]
  });

  // Every time the slide changes, I want the text card on top of the
  // image to fade in and slide up a little instead of just popping in.
  function animateOverlay() {
    $('.overlay-card').css({ opacity: 0, transform: 'translateY(20px)' });
    setTimeout(function () {
      $('.overlay-card').css({
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: 1,
        transform: 'translateY(0)'
      });
    }, 100);
  }

  animateOverlay(); // run once for the first slide on page load
  $slider.on('translated.owl.carousel', animateOverlay); // and again every time it moves to a new slide


  /* ============================================================
     VISION / MISSION TABS
     Simple toggle - clicking one button shows its text and
     marks itself active, the other one goes back to normal.
     ============================================================ */
  const visionBtn  = document.getElementById('visionBtn');
  const missionBtn = document.getElementById('missionBtn');
  const visionContent  = document.getElementById('visionContent');
  const missionContent = document.getElementById('missionContent');

  visionBtn.addEventListener('click', () => {
    visionBtn.classList.add('active');
    missionBtn.classList.remove('active');

    visionContent.classList.add('active');
    missionContent.classList.remove('active');
  });

  missionBtn.addEventListener('click', () => {
    missionBtn.classList.add('active');
    visionBtn.classList.remove('active');

    missionContent.classList.add('active');
    visionContent.classList.remove('active');
  });


  /* ============================================================
     SERVICES PANEL
     Instead of writing separate code for every single service
     button, I'm keeping all the service info (image, title,
     description, the two feature blocks) in one object below.
     When a button is clicked I just look up its info here and
     drop it into the page.
     ============================================================ */
  const servicesInfo = {
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

  const serviceButtons = document.querySelectorAll('.service-btn');

  serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
      // first turn off "active" look on every button and hide their icons
      serviceButtons.forEach(btn => {
        btn.classList.remove('active');
        const icon = btn.querySelector('i');
        if (icon) icon.style.opacity = '0';
      });

      // then turn it back on just for the one that was clicked
      button.classList.add('active');
      const activeIcon = button.querySelector('i');
      if (activeIcon) activeIcon.style.opacity = '1';

      // grab this button's info from the object above using its data-service attribute
      const selected = servicesInfo[button.dataset.service];
      if (!selected) return; // just in case the attribute doesn't match anything

      // swap the image, title, description and the two feature blocks on the page
      document.getElementById('serviceImage').src          = selected.img;
      document.getElementById('serviceTitle').textContent  = selected.title;
      document.getElementById('serviceDesc').textContent   = selected.desc;
      document.getElementById('feature1Title').textContent = selected.f1title;
      document.getElementById('feature1Text').textContent  = selected.f1text;
      document.getElementById('feature2Title').textContent = selected.f2title;
      document.getElementById('feature2Text').textContent  = selected.f2text;

      // and update the two little feature icons to match
      const featureIcons = document.querySelectorAll('.feature-icon i');
      if (featureIcons[0]) featureIcons[0].className = selected.f1icon;
      if (featureIcons[1]) featureIcons[1].className = selected.f2icon;
    });
  });

  // make sure the icon on whichever button starts as "active" is visible right away
  const firstActiveIcon = document.querySelector('.service-btn.active i');
  if (firstActiveIcon) firstActiveIcon.style.opacity = '1';


  /* ============================================================
     RECENT WORK CAROUSEL
     This one needed a bit of a trick to loop forever. A normal
     slider runs out of cards at the end, so what I did is clone
     all the cards and stick a full copy before and after the
     real ones. That way there's always something to slide to.
     When the user scrolls into one of the cloned copies, I jump
     back to the matching spot in the real cards without any
     animation, so it looks like it just keeps going forever.
     ============================================================ */
  const workTrack = document.getElementById('workTrack');
  const workPrev  = document.getElementById('workPrev');
  const workNext  = document.getElementById('workNext');

  if (workTrack && workPrev && workNext) {
    const realCards = Array.from(workTrack.children);
    const realCardCount = realCards.length;

    // copy the real cards and add them to the end
    realCards.forEach(card => {
      workTrack.appendChild(card.cloneNode(true));
    });
    // and copy them again, reversed, adding them to the start
    [...realCards].reverse().forEach(card => {
      workTrack.insertBefore(card.cloneNode(true), workTrack.firstChild);
    });

    const allCards = () => Array.from(workTrack.children);
    let currentIndex = realCardCount; // start on the first real card, after the cloned ones at the start
    let isAnimating = false;

    workTrack.style.transition = 'none';

    function getCardWidth() {
      return allCards()[0].getBoundingClientRect().width + 26; // card width plus the gap between cards
    }

    function moveTo(index, withAnimation) {
      workTrack.style.transition = withAnimation
        ? 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        : 'none';
      workTrack.style.transform = `translateX(-${index * getCardWidth()}px)`;
    }

    // put it in the right starting spot before anything is shown on screen
    requestAnimationFrame(() => moveTo(currentIndex, false));

    workTrack.addEventListener('transitionend', () => {
      // gone too far into the cloned cards at the end? snap back to the matching real card
      if (currentIndex >= realCardCount + realCardCount) {
        currentIndex = realCardCount;
        moveTo(currentIndex, false);
      }
      // gone too far back into the cloned cards at the start? snap to the matching real card at the end
      if (currentIndex < realCardCount) {
        currentIndex = realCardCount + realCardCount - 1;
        moveTo(currentIndex, false);
      }
      isAnimating = false;
    });

    function showNextCard() {
      if (isAnimating) return; // ignore clicks while it's still sliding
      isAnimating = true;
      currentIndex++;
      moveTo(currentIndex, true);
    }

    function showPrevCard() {
      if (isAnimating) return;
      isAnimating = true;
      currentIndex--;
      moveTo(currentIndex, true);
    }

    workNext.addEventListener('click', showNextCard);
    workPrev.addEventListener('click', showPrevCard);
    window.addEventListener('resize', () => moveTo(currentIndex, false));

    // slide to the next card automatically every 3.5 seconds
    let workAutoplay = setInterval(showNextCard, 3500);

    // stop the auto-slide while the mouse is over it, start again once it leaves
    workTrack.parentElement.addEventListener('mouseenter', () => clearInterval(workAutoplay));
    workTrack.parentElement.addEventListener('mouseleave', () => {
      workAutoplay = setInterval(showNextCard, 3500);
    });
  }


  /* ============================================================
     NEWS & EVENTS SLIDER
     Same general idea as the work carousel but simpler - this one
     only needs to loop in one direction (forward), so I only clone
     the very first card and stick it at the end. Once we slide past
     the real cards onto that one clone, jump back to the start.
     ============================================================ */
  const newsTrack = document.getElementById('newsTrack');

  if (newsTrack) {
    const newsWrapper  = newsTrack.parentElement;
    const realNewsCards = Array.from(newsTrack.children);
    const firstCardClone = realNewsCards[0].cloneNode(true);
    newsTrack.appendChild(firstCardClone);

    let newsIndex = 0;
    const realNewsCount = realNewsCards.length;
    let isResetting = false;

    function getNewsCardStep() {
      const cardWidth = newsTrack.children[0].getBoundingClientRect().width;
      return cardWidth + 26;
    }

    function moveToNewsCard(index, withAnimation = true) {
      newsTrack.style.transition = withAnimation ? 'transform 0.7s ease' : 'none';
      newsTrack.style.transform  = `translateX(-${index * getNewsCardStep()}px)`;
    }

    function showNextNewsCard() {
      if (isResetting) return;
      newsIndex++;
      moveToNewsCard(newsIndex);

      // once we've slid onto the cloned first card, snap back to the real first card (no animation, so it's invisible)
      if (newsIndex === realNewsCount) {
        isResetting = true;
        newsTrack.addEventListener('transitionend', function resetPosition() {
          newsTrack.removeEventListener('transitionend', resetPosition);
          newsIndex = 0;
          moveToNewsCard(newsIndex, false);
          isResetting = false;
        });
      }
    }

    let newsAutoplay = setInterval(showNextNewsCard, 3200);

    if (newsWrapper) {
      newsWrapper.addEventListener('mouseenter', () => clearInterval(newsAutoplay));
      newsWrapper.addEventListener('mouseleave', () => {
        newsAutoplay = setInterval(showNextNewsCard, 3200);
      });
    }

    window.addEventListener('resize', () => moveToNewsCard(newsIndex, false));
  }


  /* ============================================================
     COUNTING NUMBER ANIMATION
     For the stats on the page (like "25k+ clients") I don't want
     the number to just appear - I want it to count up from 0.
     I'm using IntersectionObserver here so the counting only
     starts once the number actually scrolls into view, instead
     of running the moment the page loads while it's off-screen.
     ============================================================ */
  function countUp(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000; // total time for the count to finish, in ms
    const step = Math.ceil(target / (duration / 16)); // how much to add every frame (roughly 60fps)
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

  const countUpElements = document.querySelectorAll('.count-up');
  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // only run the count once per element, even if you scroll past it again
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        countUp(entry.target);
      }
    });
  }, { threshold: 0.4 });

  countUpElements.forEach(el => countUpObserver.observe(el));


  /* ============================================================
     FADE-IN SECTIONS ON SCROLL
     Same IntersectionObserver idea, but simpler - any section
     with the "section-anim" class just gets a "visible" class
     added once it scrolls into view, and the actual fade/slide
     animation is handled in the CSS.
     ============================================================ */
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.section-anim').forEach(el => fadeInObserver.observe(el));


  /* ============================================================
     SCROLL-TO-TOP BUTTON
     Show the little floating button only after scrolling down a
     bit, hide it again near the top, and scroll smoothly to the
     top when it's clicked.
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
     MOBILE MENU (hamburger icon)
     Clicking the hamburger opens the nav menu and a dark overlay
     behind it, and locks the page so it can't scroll underneath.
     Clicking the overlay, or any link in the menu, closes it again.
     ============================================================ */
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function openMobileNav() {
    navLinks.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // stop background scroll while menu is open
  }

  function closeMobileNav() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileNav);
  navOverlay.addEventListener('click', closeMobileNav);

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });


  /* ============================================================
     HEADER BEHAVIOUR ON SCROLL
     The top bar (phone number / email) and the navbar react to
     scroll direction:
       - right at the top of the page: show everything normally
       - scrolling down: hide the top bar and slide the navbar up
       - scrolling up: keep the navbar visible but still hide the top bar
     I'm comparing the current scroll position to the last one
     I saved to figure out which direction the user just scrolled.
     ============================================================ */
  let lastScroll = 0;
  const topBar = document.querySelector('.top-bar');
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // back at the very top of the page - reset everything to normal
    if (currentScroll <= 20) {
      topBar.classList.remove('hide');
      navbar.classList.remove('hide');
      navbar.classList.remove('move-up');
      lastScroll = currentScroll;
      return;
    }

    if (currentScroll > lastScroll) {
      // scrolling down
      topBar.classList.add('hide');
      navbar.classList.add('move-up');
      navbar.classList.add('hide');
    } else {
      // scrolling up
      topBar.classList.add('hide');
      navbar.classList.remove('hide');
      navbar.classList.add('move-up');
    }

    lastScroll = currentScroll;
  });

});