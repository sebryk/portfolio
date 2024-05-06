// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Xu7I":[function(require,module,exports) {
var typedTextSpan = document.querySelector('.typed-text');
var cursorSpan = document.querySelector('.cursor');
var textArray = ['Сергей Брыкалов'];
var typingDelay = 200;
var erasingDelay = 100;
var newTextDelay = 5000;
var textArrayIndex = 0;
var charIndex = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 2700);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, 300);
});
var swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    670: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var burgerMenu = function burgerMenu() {
  var burger = document.querySelector('.icon');
  var mobileMenu = document.querySelector('.nav__wrapper');
  var menuLinks = document.querySelectorAll('.nav__list-item');
  var body = document.querySelector('body');
  var toggleBurger = function toggleBurger() {
    mobileMenu.classList.toggle('nav__list--active');
    burger.classList.toggle('icon--active');
    body.classList.toggle('body__lock');
  };
  var closeBurger = function closeBurger() {
    mobileMenu.classList.remove('nav__list--active');
    burger.classList.remove('icon--active');
    body.classList.remove('body__lock');
  };
  var closeBurgerAfterOutsideCick = function closeBurgerAfterOutsideCick(e) {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      closeBurger();
    }
  };
  burger.addEventListener('click', toggleBurger);
  menuLinks.forEach(function (el) {
    return el.addEventListener('click', closeBurger);
  });
  document.addEventListener('click', closeBurgerAfterOutsideCick);
};
burgerMenu();
var moveElementBasedOnWindowSize = function moveElementBasedOnWindowSize() {
  var navLanguage = document.querySelector('.nav__language');
  var navWrapper = document.querySelector('.nav__wrapper');
  var headerNav = document.querySelector('.header__nav');
  if (window.innerWidth < 765) {
    navWrapper.appendChild(navLanguage);
  } else {
    headerNav.appendChild(navLanguage);
  }
};
moveElementBasedOnWindowSize();
window.addEventListener('resize', moveElementBasedOnWindowSize);
},{}]},{},["Xu7I"], null)