/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500,
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true
  });

  // ========================================================================
  // Dark mode toggle
  // ========================================================================
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateToggleIcon(currentTheme);

    themeToggle.addEventListener('click', function() {
      var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateToggleIcon(theme);
    });
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    var icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  // ========================================================================
  // Back to top button
  // ========================================================================
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========================================================================
  // Scroll reveal animation
  // ========================================================================
  if ('IntersectionObserver' in window) {
    var reveals = document.querySelectorAll('.page__content > h1, .paper-box, .page__content > ul > li');
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(function(el) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }

  // ========================================================================
  // Active navigation highlighting
  // ========================================================================
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('.page__content h1[id], .anchor[id]');
    var navLinks = document.querySelectorAll('.greedy-nav .visible-links a[href*="#"]');

    var sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id || entry.target.getAttribute('id');
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').indexOf(id) !== -1) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    sections.forEach(function(section) {
      sectionObserver.observe(section);
    });
  }

  // ========================================================================
  // Publication filter
  // ========================================================================
  var pubSearch = document.getElementById('pub-search');
  if (pubSearch) {
    var pubItems = document.querySelectorAll('.paper-box, .pub-list li');
    var countEl = document.querySelector('.pub-search-count');

    pubSearch.addEventListener('input', function() {
      var query = this.value.toLowerCase().trim();
      var visible = 0;
      pubItems.forEach(function(item) {
        var text = item.textContent.toLowerCase();
        var match = !query || text.indexOf(query) !== -1;
        item.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      if (countEl) {
        countEl.textContent = query ? visible + ' / ' + pubItems.length : '';
      }
    });
  }

  // ========================================================================
  // External links open in new tab
  // ========================================================================
  var links = document.querySelectorAll('a[href]');
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.indexOf('http') === 0 && link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

});
