(function () {
  var buttons = document.querySelectorAll('.blog-filter-btn');
  var articles = document.querySelectorAll('.blog-list-item[data-category]');
  if (!buttons.length) return;
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      articles.forEach(function (art) {
        if (filter === 'all') {
          art.classList.remove('hidden');
        } else {
          var cat = art.getAttribute('data-category') || '';
          if (cat === filter) {
            art.classList.remove('hidden');
          } else {
            art.classList.add('hidden');
          }
        }
      });
    });
  });
})();
