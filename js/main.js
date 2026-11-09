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

  render();
})();
