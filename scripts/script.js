
// NAVIGATION HEADER
const links = document.querySelectorAll('.nav__link');

links.forEach(function (item) {
   item.addEventListener("click", function (e) {
       links.forEach(function (i) {
           i.classList.remove('activeLink');
       });
      item.classList.toggle('activeLink');
   });
});


// CAROUSEL
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    touch: false,
    ride: true
})

// MENU BURGER
const icon_menu = document.querySelector('.menu_burger');
if (icon_menu) {
    const menu = document.querySelector('.menu');

    icon_menu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        icon_menu.classList.toggle('menu_active');
        menu.classList.toggle('menu_active')
    })

    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener("click", function (e) {
            icon_menu.classList.toggle('menu_active');
            document.body.classList.toggle('_lock');
            menu.classList.toggle('menu_active')
        })
    }

}
// NAVIGATION MENU_BURGER
const menu_links = document.querySelectorAll('.menu__item');

menu_links.forEach(function (item) {
    item.addEventListener("click", function (e) {
        menu_links.forEach(function (i) {
            i.classList.remove('activeLink');
        });
        item.classList.toggle('activeLink');
        document.querySelector('.menu').classList.toggle('menu_active');
        document.querySelector('.close').classList.toggle('menu_active');
        document.body.classList.toggle('_lock');
    });
});


// lang

const lang_change_btns = document.querySelectorAll('.lng-change');

const allLang = ['en', 'ru'];

var hash = window.location.hash;

lang_change_btns.forEach(function(e) {
    if (e.getAttribute('data-lang') === hash.substr(1)) {
        e.classList.add('activeLang');
    } else {
        e.classList.remove('activeLang');
    }
})

lang_change_btns.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        location.href = window.location.pathname + '#' + elem.getAttribute('data-lang');
        location.reload();
    });
});

function changeLanguage() {
    
    hash = hash.substr(1);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    
    // document.querySelector('.lng-author').innerHTML = langArr['author'][hash];

    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }   
    }
}

changeLanguage();