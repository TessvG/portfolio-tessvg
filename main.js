/**
 * PORTFOLIO TESS VAN GURP - JAVASCRIPT
 * 1. Typewriter animatie (Nederlands, wisselt elke 2-3 sec)
 * 2. Roterende product showcase (elke 7 sec, pauzeert op hover)
 * 3. Filterbalk op de werk-pagina
 * 4. Pop-up Modal voor 'bekijk werk' met side-by-side layout:
 *    Plaatje aan de ene kant en uitleg aan de andere kant (conform information/)
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initProductShowcase();
  initWorksFilters();
  initProjectModals();
});

/* ==========================================================================
   PROJECT DATA UIT DE 'INFORMATION' MAP
   Elk project heeft side-by-side story blokken: beeld aan de ene kant,
   en de toelichtende tekst aan de andere kant.
   ========================================================================== */
const projectData = {
  'arcade-box': {
    title: 'Arcade Box: Custom Game Controller',
    category: 'Physical Computing',
    stories: [
      {
        type: 'image',
        src: 'images/images arcade box/outside.jpg',
        alt: 'Voltooide Arcade Box met gegraveerde katten op acryl',
        badge: '✦ Inspiratie & Ontwerp',
        title: 'Monster Energy & Gegraveerde Katten',
        paragraphs: [
          'Mijn Arcade Box is gebaseerd op het witte Monster Energy blikje. Naast dat het een van mijn favoriete smaken is, vind ik het design van het blikje ook supermooi. Op het vinyl aan de bovenkant heb ik twee katten laten graveren die Monster Energy aan het drinken zijn. Ik kwam dit een keer tegen op Pinterest en aangezien ik van katten en Monster Energy houd, besloot ik dit te graveren.'
        ],
        quote: '“De \'ULTRA\' aan de achterkant heb ik daar gezet omdat dat ook op het blikje te zien is.”'
      },
      {
        type: 'image',
        src: 'images/images arcade box/wires.jpg',
        alt: 'Interne bedrading en soldeerwerk in de houten behuizing',
        badge: '✦ Werkplaats & Materiaal',
        title: 'Lasersnijden, Kleuren & Soldeerwerk',
        paragraphs: [
          'Ik vind dat ik de Arcade Box goed in elkaar heb gezet. Echter bij het graveren van het vinyl ging het even fout: ik was vergeten om op vinyl te drukken en de lasersnijder stond nog ingesteld op hout, dus heb ik het aan de andere kant opnieuw gedaan.',
          'De blauwe randen aan de bovenkant heb ik zo gekozen omdat het woord \'Energy\' op het blikje blauw is. Hierdoor is de blauwe kleur mooi erin verwerkt. Ook is aan beide kanten het herkenbare Monster-logo te zien.'
        ]
      },
      {
        type: 'video',
        src: 'images/images arcade box/Game Controller.mp4',
        poster: 'images/images arcade box/outside.jpg',
        alt: 'Speelbare arcade controller in werking',
        badge: '✦ Besturing & Gameplay',
        title: '3D Joystick & Speelbare Kast',
        paragraphs: [
          'Voor de besturing is een rode joystick ontworpen en 3D-geprint. Gecombineerd met robuuste arcade-drukknoppen en zorgvuldig aangesloten elektronica functioneert de controller als een volwaardige gamecontroller.',
          'In de video is te zien hoe de controller aangesloten is in de grote houten arcadekast en live bespeeld wordt.'
        ]
      }
    ]
  },

  'nature-fights-back': {
    title: 'Forma Natura',
    category: 'Speculatief Design',
    stories: [
      {
        type: 'image',
        src: 'images/images nature fights back/Subjective Mapping - Spoorpark, Tilburg - Tess van Gurp-1.png',
        alt: 'Subjective Mapping veldonderzoek Spoorpark Tilburg door Tess van Gurp',
        badge: '✦ Veldonderzoek in Tilburg',
        title: 'Subjective Mapping in het Spoorpark',
        paragraphs: [
          'Nadat we veldonderzoek hebben gedaan in Tilburg heb ik een subjective map gemaakt, specifiek gericht op de Spoorzone waar we ons project wilden plaatsen. Deze map gaf mij een helder inzicht in de omgeving en de doelgroep: gezinnen komen hier graag samen, er zijn veel jonge boompjes maar de gazons ogen kaal en stenig.'
        ],
        quote: '“Door herkenbare objecten te combineren met natuurlijke elementen die terugvechten, wordt de doelgroep uitgenodigd om na te denken over de verstening in Tilburg.”'
      },
      {
        type: 'image',
        src: 'images/images nature fights back/Crazy 8-1.png',
        alt: 'Crazy 8 schetsen van lantaarnpaal met wortels en natuur',
        badge: '✦ Conceptvorming',
        title: 'Crazy-8 & Het Concept \'Ferox Natura\'',
        paragraphs: [
          'Om snel veel ideeën op te doen heb ik een Crazy-8 brainstormsessie gedaan. Hieruit ontstond het idee van de natuur die letterlijk terugvecht tegen stadselementen: wortels die om een lantaarnpaal heen groeien en het licht breken.',
          'Geïnspireerd op Vincent van Gogh\'s levendige blik op het Nederlandse landschap ontwikkelden we een interactieve installatie waarbij de natuur ingemengd raakt in straatmeubilair om bewustwording te creëren over het verdwijnen van groen.'
        ]
      },
      {
        type: 'image',
        src: 'images/images nature fights back/Interactie-1.png',
        alt: 'Interactie schema met foam blaadje en sensor',
        badge: '✦ Maken & Prototyperen',
        title: 'Foam Blad met LED & Afstandssensor',
        paragraphs: [
          'Aangezien de fysieke interactie essentieel is om ons concept te ervaren, heb ik een werkend prototype nagemaakt. Ik heb een organisch blaadje van foam gevormd en voorzien van ingebouwde LED-verlichting, aangesloten op een Arduino en een infrarood afstandssensor.'
        ],
        quote: '“Als je dichterbij de sensor komt, gaat het lichtje feller branden. Daardoor wist ik dat licht en nabijheid al voldoende zijn om directe nieuwsgierigheid op te wekken.”'
      },
      {
        type: 'image',
        src: 'images/images nature fights back/Ideaal-eindbeeld-2.png',
        alt: 'Ideaal eindbeeld prototype met zwarte behuizing en sensor',
        badge: '✦ Eindresultaat & Expositie',
        title: 'Presentatie aan Van Gogh Homeland',
        paragraphs: [
          'Het tastbare eindprototype combineert een strakke zwarte laser-gesneden kubus met het oplichtende mos/blad-object erbovenop. Tijdens de expositie in Tilburg hebben we ons eindresultaat gepresenteerd aan docenten, medestudenten en de opdrachtgevers van Van Gogh Homeland.',
          'De interactie nodigt toeschouwers uit om voorzichtig toenadering te zoeken tot iets dat er in eerste instantie onheilspellend uitziet, om vervolgens de schoonheid en kwetsbaarheid van het groen te ontdekken.',
          '(De schets aan de rechterzijde zou het uiteindelijke product moeten worden)'
        ]
      }
    ]
  },

  'talk-to-the-hand': {
    title: 'Talk to the Hand',
    category: 'Experience Design',
    stories: [
      {
        type: 'image',
        src: 'images/images talk to the hand/WhatsApp Image 2026-03-04 at 3.57.54 PM (1).jpeg',
        alt: 'Notities en brainstorm over verbindende communicatie',
        badge: '✦ Onderzoek & Framing',
        title: 'Verbindend Communiceren bij Ploegendienst',
        paragraphs: [
          'Aan het begin van dit collectief onderzochten we wat er nodig is voor verbindende communicatie: naar elkaar luisteren, elkaar laten uitpraten en openstaan voor emoties. We kozen voor de ziekenhuiscasus: de hectische en vermoeiende overdracht tussen verpleegkundigen na een nachtdienst.'
        ],
        quote: '“Ons frame werd: \'Het object eist complete aandacht en tijd voor de emotie van de boodschap, wat zorgt voor verbindende communicatie.\'”'
      },
      {
        type: 'image',
        src: 'images/images talk to the hand/WhatsApp Image 2026-03-20 at 4.45.32 PM (1).jpeg',
        alt: 'Testen van kijkers voor geforceerd oogcontact en embodiment',
        badge: '✦ Experimenteren & Embodiment',
        title: 'Frictie, Oogcontact & Tactiliteit',
        paragraphs: [
          'Voor emotie & embodiment hebben we geëxperimenteerd met objecten die reacties oproepen. We bouwden een kokerbeker waardoor mensen elkaar recht in de ogen moesten aankijken tijdens het praten. Ook maakten we handschoenen van visnet en een afsluitende helm.',
          'Hieruit bleek dat het fysiek vasthouden van elkaars aandacht en het afsluiten van afleiding cruciaal zijn om de luisteraar écht te laten focussen op het verhaal van de ander.'
        ]
      },
      {
        type: 'image',
        src: 'images/images talk to the hand/DSCF7166.jpg',
        alt: 'Interactief paneel met scherm, blauwe handschoen en storyboard',
        badge: '✦ Concept & Storyboard',
        title: 'User Journey & De Tactiele Handschoen',
        paragraphs: [
          'We ontwierpen een interactief paneel voor in een speciale cabine. Om de video-overdracht te starten moet de verpleegkundige de hand vastpakken. We kozen voor een houten hand met een officiële blauwe ziekenhuishandschoen om de ervaring authentiek en herkenbaar te maken.',
          'Een scherm toont expressieve ogen voor non-verbale emotie, een koptelefoon biedt gerichte audio en een ingebouwde printer drukt automatisch de belangrijkste medische punten af. Het getekende storyboard \'Gebruikers Scenario\' licht de interactie stap voor stap toe.'
        ]
      },
      {
        type: 'image',
        src: 'images/images talk to the hand/DSCF7151.jpg',
        alt: 'Ontwerpteam met Tess van Gurp en de voltooide omkleedcabine',
        badge: '✦ Eindontwerp & Testen',
        title: 'De Levensgrote Privacycabine',
        paragraphs: [
          'Voor het eindontwerp bouwden we een levensgrote cabine in de vorm van een rustgevende omkleedruimte met een geluiddempend privacygordijn. Hierdoor kan een verpleegkundige zich even afzonderen van de hectiek van de afdeling zonder zich opgesloten te voelen.',
          'Feedback van zorgprofessionals bevestigde dat de fysieke handdruk en de auditieve focus zorgen voor een moment van vertraging, reflectie en oprechte aandacht tussen zorgteams.'
        ]
      }
    ]
  }
};

// Ondersteun zowel forma-natura als nature-fights-back
projectData['forma-natura'] = projectData['nature-fights-back'];

/* ==========================================================================
   1. TYPEWRITER ANIMATIE (NEDERLANDS)
   ========================================================================== */
function initTypewriter() {
  const typewriterElem = document.getElementById('typewriter-text');
  if (!typewriterElem) return;

  const words = [
    'interaction designer',
    'creative technologist',
    'experimenteel ontwerper',
    'object- & productontwerper',
    'conceptontwerper',
    'experience designer'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseDuration = 2400; // 2.4s pauze conform wens 2-3s

  function typeStep() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex <= 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeStep, 350);
        return;
      }
      setTimeout(typeStep, deletingSpeed);
    } else {
      typewriterElem.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeStep, pauseDuration);
        return;
      }
      setTimeout(typeStep, typingSpeed);
    }
  }

  typeStep();
}

/* ==========================================================================
   2. ROTERENDE PRODUCT SHOWCASE (HOMEPAGE)
   ========================================================================== */
function initProductShowcase() {
  const showcaseContainer = document.querySelector('.product-showcase-card');
  if (!showcaseContainer) return;

  const slides = showcaseContainer.querySelectorAll('.showcase-slide');
  const dots = showcaseContainer.querySelectorAll('.dot-btn');
  const learnMoreBtn = showcaseContainer.querySelector('#showcase-learn-more-btn');

  if (!slides.length) return;

  const projectIds = ['arcade-box', 'nature-fights-back', 'talk-to-the-hand'];
  const slideDuration = 7000; // 7s (conform wens 5-10s)
  let currentIndex = 0;
  let intervalId = null;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    if (learnMoreBtn) {
      learnMoreBtn.setAttribute('data-open-project', projectIds[currentIndex]);
    }
  }

  function startRotation() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      showSlide(currentIndex + 1);
    }, slideDuration);
  }

  function stopRotation() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Klikbare stippen
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startRotation();
    });
  });

  // Klikbare slides openen het project in pop-up modal
  slides.forEach((slide, i) => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => {
      openProjectModal(projectIds[i]);
    });
  });

  // Pauzeren op hover
  showcaseContainer.addEventListener('mouseenter', stopRotation);
  showcaseContainer.addEventListener('mouseleave', startRotation);

  // Initialiseren
  showSlide(0);
  startRotation();
}

/* ==========================================================================
   3. CATEGORIE FILTERBALK OP WORKS.HTML
   ========================================================================== */
function initWorksFilters() {
  const filterBtns = document.querySelectorAll('.filter-bar .filter-btn');
  const projectRows = document.querySelectorAll('.works-list .work-row');

  if (!filterBtns.length || !projectRows.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectRows.forEach(row => {
        const cat = row.getAttribute('data-category');
        if (filter === 'all' || filter === cat) {
          row.style.display = 'grid';
          setTimeout(() => { row.style.opacity = '1'; }, 20);
        } else {
          row.style.opacity = '0';
          setTimeout(() => { row.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   4. POP-UP MODAL (CONFORM VERSIE 1 & SIDE-BY-SIDE UITLEG)
   ========================================================================== */
function initProjectModals() {
  const modalElem = document.getElementById('project-modal');
  if (!modalElem) return;

  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Sluiten bij klik op donkere achtergrond
  modalElem.addEventListener('click', (e) => {
    if (e.target === modalElem) {
      closeProjectModal();
    }
  });

  // Sluiten bij Escape toets
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalElem.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // Luister naar alle knoppen met [data-open-project]
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-project]');
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-open-project');
      openProjectModal(projectId);
    }
  });

  // Open automatisch als er een hash in de URL staat (bijv. works.html#arcade-box)
  if (window.location.hash) {
    const hashId = window.location.hash.replace('#', '').replace('project-', '');
    if (projectData[hashId]) {
      setTimeout(() => {
        openProjectModal(hashId);
      }, 150);
    }
  }
}

function openProjectModal(projectId) {
  const modalElem = document.getElementById('project-modal');
  if (!modalElem) {
    // Als de modal niet op deze pagina staat, navigeer naar works.html#projectId
    window.location.href = 'works.html#' + projectId;
    return;
  }

  const project = projectData[projectId];
  if (!project) return;

  const titleElem = document.getElementById('modal-title');
  const catElem = document.getElementById('modal-category');
  const bodyElem = document.getElementById('modal-body');

  if (titleElem) titleElem.textContent = project.title;
  if (catElem) catElem.textContent = project.category;

  if (bodyElem) {
    bodyElem.innerHTML = '';

    project.stories.forEach(story => {
      const row = document.createElement('article');
      row.className = 'modal-story-row';

      // Linkerkolom: Plaatje of Video
      const mediaCol = document.createElement('div');
      mediaCol.className = 'modal-story-media';

      if (story.type === 'video') {
        mediaCol.innerHTML = `
          <div class="modal-story-video">
            <video controls preload="metadata" poster="${story.poster}">
              <source src="${story.src}" type="video/mp4">
              Uw browser ondersteunt deze video niet.
            </video>
          </div>
        `;
      } else {
        mediaCol.innerHTML = `
          <img src="${story.src}" alt="${story.alt || story.title}" loading="lazy">
        `;
      }

      // Rechterkolom: Uitleg
      const textCol = document.createElement('div');
      textCol.className = 'modal-story-text';

      let paragraphsHtml = story.paragraphs.map(p => `<p class="modal-story-item-desc">${p}</p>`).join('');
      let quoteHtml = story.quote ? `<div class="modal-story-quote">${story.quote}</div>` : '';

      textCol.innerHTML = `
        <span class="modal-story-badge">${story.badge}</span>
        <h3 class="modal-story-item-title">${story.title}</h3>
        ${paragraphsHtml}
        ${quoteHtml}
      `;

      row.appendChild(mediaCol);
      row.appendChild(textCol);
      bodyElem.appendChild(row);
    });
  }

  modalElem.classList.add('open');
  modalElem.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // Focus modal voor toegankelijkheid
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeProjectModal() {
  const modalElem = document.getElementById('project-modal');
  if (!modalElem) return;

  modalElem.classList.remove('open');
  modalElem.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  // Pauzeer eventueel spelende video's
  const videos = modalElem.querySelectorAll('video');
  videos.forEach(v => v.pause());
}
