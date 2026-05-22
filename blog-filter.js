(function () {
  var buttons = document.querySelectorAll('.blog-filter-btn');
  var articles = document.querySelectorAll('.blog-list-item[data-category]');
  var featuredSection = document.getElementById('blog-featured');
  if (!buttons.length) return;
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      if (featuredSection) {
        featuredSection.style.display = filter === 'all' ? '' : 'none';
      }
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
