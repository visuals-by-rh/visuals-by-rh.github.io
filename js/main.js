(function () {
  'use strict';

  /* ---------- category carousel ---------- */
  var cards = Array.prototype.slice.call(document.querySelectorAll('.fan-card'));
  var nameEl = document.getElementById('active-name');
  var descEl = document.getElementById('active-desc');
  var linkEl = document.getElementById('active-link');
  var slots = { '-2': 'slot-m2', '-1': 'slot-m1', '0': 'slot-0', '1': 'slot-p1', '2': 'slot-p2' };
  var n = cards.length;
  var active = 2;
  var labels = { show: 'Show {name}', selected: '{name} (selected)' };

  function fill(template, name) {
    return template.replace('{name}', name);
  }

  function render() {
    cards.forEach(function (card, i) {
      var off = ((i - active + n + 2) % n) - 2;
      card.className = 'fan-card ' + slots[String(off)];
      var name = card.querySelector('.card-name').textContent;
      card.setAttribute('aria-label', fill(off === 0 ? labels.selected : labels.show, name));
      if (off === 0) {
        nameEl.textContent = name;
        descEl.textContent = card.querySelector('.card-desc').textContent;
        linkEl.setAttribute('href', card.dataset.href);
      }
    });
  }

  function go(i) {
    active = (i + n) % n;
    render();
  }

  cards.forEach(function (card, i) {
    card.addEventListener('click', function () { go(i); });
  });
  document.getElementById('prev').addEventListener('click', function () { go(active - 1); });
  document.getElementById('next').addEventListener('click', function () { go(active + 1); });

  /* ---------- EN/DE language toggle ---------- */
  var de = {
    navLabel: 'Hauptnavigation', langLabel: 'Sprache',
    graphic: 'Grafik', digital: 'Digital', photo: 'Foto', video: 'Video', diverse: 'Diverses', about: 'Über mich',
    dGraphic: 'Identität, Print, Editorial', dDigital: 'Web, UI, Interaktion', dPhoto: 'Porträt, Produkt, Orte',
    dVideo: 'Motion, Kurzfilm, Schnitt', dDiverse: 'Experimente, Nebenprojekte und alles dazwischen',
    thumb: '[Vorschaubild]', viewProjects: 'Projekte ansehen', prev: 'Vorherige Kategorie', next: 'Nächste Kategorie',
    show: '{name} anzeigen', selected: '{name} (ausgewählt)',
    selectedWork: 'Ausgewählte Arbeiten', workSub: 'Jedes Projekt auf einer ruhigen, weissen Bühne',
    projectImage: '[Projektbild]', videoStill: '[Videostill]', projectTitle: '[Projekttitel]', year: '[Jahr]',
    viewAll: 'Alle Projekte ansehen', aboutMe: 'Über mich', portrait: '[Porträtfoto]',
    aboutHeading: '[Ein Satz darüber, wie du arbeitest.]',
    aboutText: '[Platzhalter: ein kurzer Absatz über deinen Hintergrund, was du am liebsten gestaltest und mit wem du gerne zusammenarbeitest. Zwei bis vier Sätze reichen.]',
    contact: 'Kontakt aufnehmen', cv: 'Lebenslauf herunterladen'
  };

  // English comes from the HTML itself, captured before any swap.
  var en = { show: labels.show, selected: labels.selected };
  var textEls = document.querySelectorAll('[data-i18n]');
  var ariaEls = document.querySelectorAll('[data-i18n-aria]');
  Array.prototype.forEach.call(textEls, function (el) { en[el.dataset.i18n] = el.textContent; });
  Array.prototype.forEach.call(ariaEls, function (el) { en[el.dataset.i18nAria] = el.getAttribute('aria-label'); });

  var langButtons = document.querySelectorAll('.lang button');

  function setLang(lang, remember) {
    var dict = lang === 'de' ? de : en;
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(textEls, function (el) { el.textContent = dict[el.dataset.i18n]; });
    Array.prototype.forEach.call(ariaEls, function (el) { el.setAttribute('aria-label', dict[el.dataset.i18nAria]); });
    Array.prototype.forEach.call(langButtons, function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    labels = { show: dict.show, selected: dict.selected };
    render();
    if (remember) {
      try { localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ }
    }
  }

  Array.prototype.forEach.call(langButtons, function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang, true); });
  });

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* storage blocked */ }
  var browserDe = (navigator.language || '').toLowerCase().indexOf('de') === 0;
  setLang(saved === 'de' || saved === 'en' ? saved : (browserDe ? 'de' : 'en'));
})();
