window.addEventListener('DOMContentLoaded', () => {
  $(window).on('load', function () {
    $('.loader__wrap').delay(600).fadeOut('slow');
    $("html,body").addClass("hidden");
    setTimeout(function () {
      $("html,body").removeClass("hidden");
    }, 800);
  });

  // menu__burger
  const menu = document.querySelector('.nav'),
    burger = document.querySelector('.burger'),
    mobileBack = document.querySelector('.mobile-back'),
    overlay = document.querySelector('.overlay');

  const lockScroll = () => {
    document.body.classList.add('lock');
  }

  const unlockScroll = () => {
    document.body.classList.remove('lock');
  }

  const initialMenu = () => {
    document.querySelector('.nav__list--dropdown').classList.remove('transformation');
    document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
  }

  const scrollTop = () => {
    menu.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  burger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
    initialMenu();
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link--drop')) {
      e.preventDefault();
      e.target.closest('.nav__list').classList.add('transformation');
      e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
      scrollTop();
    }

    if (e.target.classList.contains('mobile-back__link')) {
      e.preventDefault();
      e.target.closest('.nav__list--dropdown').classList.remove('transformation');
      e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
      scrollTop();
    }

    if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
      e.preventDefault();
      menu.classList.remove('open');
      overlay.classList.remove('open');
      unlockScroll();
    }
  });

  // counter animation
  let elements = document.querySelectorAll(".counter__main-count")

  elements.forEach(function (item) {
    // Add new attributes to the elements with the '.scroll-counter' HTML class
    item.counterAlreadyFired = false
    item.counterSpeed = item.getAttribute("data-counter-time") / 25
    item.counterTarget = +item.innerText
    item.counterCount = 0
    item.counterStep = item.counterTarget / item.counterSpeed

    item.updateCounter = function () {
      item.counterCount = item.counterCount + item.counterStep
      item.innerText = Math.ceil(item.counterCount)

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed)
      } else {
        item.innerText = item.counterTarget
      }
    }
  })

  // Function to determine if an element is visible in the web page
  let isElementVisible = function isElementVisible(el) {
    let scroll = window.scrollY || window.pageYOffset
    let boundsTop = el.getBoundingClientRect().top + scroll
    let viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }
    let bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    }
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    )
  }

  // Funciton that will get fired uppon scrolling
  let handleScroll = function handleScroll() {
    elements.forEach(function (item, id) {
      if (true === item.counterAlreadyFired) return
      if (!isElementVisible(item)) return
      item.updateCounter()
      item.counterAlreadyFired = true
    })
  }

  // Fire the function on scroll
  window.addEventListener("scroll", handleScroll)


  // slider
  $(function () {
    $('.sliders').slick({
      infinite: true,
      arrows: false,
      speed: 600,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1145,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 881,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 641,
          settings: {
            dots: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '150px',
          }
        },
        {
          breakpoint: 620,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '130px',
          }
        },
        {
          breakpoint: 580,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '120px',
          }
        },
        {
          breakpoint: 552,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 520,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '100px',
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

  $('.relationship__sliders').slick({
    arrows: false,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 884,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 566,
        settings: {
          centerMode: false,
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 514,
        settings: {
          centerMode: true,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          centerMode: false,
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
    ]
  });
  $('.sliders_hockey').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [{
      breakpoint: 578,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }]
  });

  // book sliders
  $(function () {
    $('.sliders__Book').slick({
      infinite: true,
      arrows: false,
      speed: 500,
      autoplaySpeed: 2900,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1145,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 881,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 641,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 620,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '130px',
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 552,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 520,
          settings: {
            centerMode: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

  // burger menu
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger__menu-button");
    let overlay = menu.find('.burger__menu-overlay');
    button.on("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
    overlay.on('click', () => toggleMenu());
    function toggleMenu() {
      menu.toggleClass('burger__menu-active');
      if (menu.hasClass('burger__menu-active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  burgerMenu(".burger__menu");

  // videos youtube
  const videoInit = (selector) => {
    const videos = document.querySelectorAll(selector)

    if (videos.length > 0) {
      videos.forEach(video => {
        videoGenerate(video)
      })
    }

  }

  const videoGenerate = (video) => {
    const btn = video.querySelector(".video__block-button")
    const videoId = btn.dataset.videoId
    const container = video.querySelector('.video__block-inner')

    btn.addEventListener('click', () => {
      const iframe = iframeGenerate(videoId)

      container.innerHTML = '';
      container.appendChild(iframe)
    })
  }

  const iframeGenerate = (videoId) => {
    const iframe = document.createElement('iframe')

    const src = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`

    iframe.setAttribute('src', src)
    iframe.setAttribute('frameborder', "0")
    iframe.setAttribute('allow', "autoplay")
    iframe.setAttribute('allowfullscreen', "")
    iframe.classList.add('video__block-content')

    return iframe
  }
  videoInit('.video__block')

});
