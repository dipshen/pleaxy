/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 473:
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // --- ЛОГИКА ДИСКЛЕЙМЕРА ---

  // Проверяем, подтверждал ли пользователь возраст в этой сессии
  if (sessionStorage.getItem('adultConfirmed') !== 'true') {
    // Создаем элемент оверлея
    var disclaimer = document.createElement('div');
    disclaimer.id = 'disclaimer';
    disclaimer.className = 'O_Disclaimer';

    // Вставляем внутреннюю разметку
    disclaimer.innerHTML = "\n      <div class=\"M_DisclaimerCard\">\n        <h1 class=\"A_H1\">\u0414\u0438\u0441\u043A\u043B\u0435\u0439\u043C\u0435\u0440</h1>\n        <p class=\"A_pText\">\n          \u0421\u0430\u0439\u0442 \u043D\u043E\u0441\u0438\u0442 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0438&nbsp;\u043F\u0440\u043E\u0441\u0432\u0435\u0442\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0434\u043B\u044F \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439 \u0432&nbsp;\u043F\u0430\u0440\u0430\u0445 \u0438&nbsp;\u0441\u0435\u043C\u044C\u044F\u0445\n        </p>\n        <div class=\"M_DisclaimerButtons\">\n          <button id=\"disclaimer-no\" class=\"A_Btn A_Btn--light\">\u041C\u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 18 \u043B\u0435\u0442</button>\n          <button id=\"disclaimer-yes\" class=\"A_Btn A_Btn--purple\">\u041C\u043D\u0435 \u0435\u0441\u0442\u044C 18 \u043B\u0435\u0442</button>\n        </div>\n        <p class=\"A_pSmall\">\n          \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043D\u0430&nbsp;\u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043B\u0435\u0442\u043D\u0438\u0445 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439\n        </p>\n      </div>\n    ";

    // Добавляем дисклеймер в самое начало body
    document.body.prepend(disclaimer);

    // Вешаем события на кнопки
    document.getElementById('disclaimer-yes').addEventListener('click', function () {
      sessionStorage.setItem('adultConfirmed', 'true');
      disclaimer.classList.add('O_Disclaimer--hidden');
      // Удаляем из DOM после анимации, чтобы не мешал
      setTimeout(function () {
        return disclaimer.remove();
      }, 500);
    });
    document.getElementById('disclaimer-no').addEventListener('click', function () {
      window.location.href = 'https://www.google.com';
    });
  }
});

/***/ }),

/***/ 517:
/***/ (() => {

// document.addEventListener('DOMContentLoaded', () => {
//   const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/?#$@!%&*'

//   // Ищем все элементы с нашим классом
//   document.querySelectorAll('.A_Decode').forEach((el) => {
//     // 1. Сохраняем оригинальный текст в память элемента
//     const originalText = el.innerText

//     // 2. Сразу превращаем текст в шум при загрузке
//     el.innerText = originalText
//       .split('')
//       .map(() => glyphs[Math.floor(Math.random() * glyphs.length)])
//       .join('')

//     // 3. Функция расшифровки
//     const startDecoding = () => {
//       let iteration = 0
//       const interval = setInterval(() => {
//         el.innerText = originalText
//           .split('')
//           .map((letter, index) => {
//             if (index < iteration) return originalText[index]
//             return glyphs[Math.floor(Math.random() * glyphs.length)]
//           })
//           .join('')

//         if (iteration >= originalText.length) clearInterval(interval)
//         iteration += 1 / 3
//       }, 30)
//     }

//     // 4. Запускаем расшифровку при наведении
//     el.addEventListener('mouseenter', startDecoding, { once: true })
//     // { once: true } значит, что текст расшифруется один раз и останется нормальным
//   })
// })

document.addEventListener('DOMContentLoaded', function () {
  // const glyphs = '⋅⋄⋇⋉⋊⊹⋐⋑'
  var glyphs = '⋄⬦◇✧⊹';
  // const glyphs = '· ◦ ✧ ˚ ₊'
  var DECODE_CLASS = 'A_Decode';
  var TOGGLE_ID = 'decode-toggle';

  // --- 1. Генерация шума ---
  var generateNoise = function generateNoise(length) {
    return Array.from({
      length: length
    }, function () {
      return glyphs[Math.floor(Math.random() * glyphs.length)];
    }).join('');
  };

  // --- 2. Функция расшифровки ---
  // --- 2. Функция мгновенной расшифровки всего текста сразу ---
  var solve = function solve(el) {
    if (document.body.classList.contains('no-decode') || el.dataset.isDecoding === 'true') return;
    el.dataset.isDecoding = 'true';
    var originalText = el.dataset.original;
    var duration = 5; // Сколько раз текст "дернется" перед тем как застыть
    var count = 0;
    var interval = setInterval(function () {
      // Пока count меньше duration, рисуем полный шум
      // Когда достигли лимита — ставим финальный текст
      if (count < duration) {
        el.innerText = generateNoise(originalText.length);
      } else {
        el.innerText = originalText;
        clearInterval(interval);
        el.dataset.isDecoding = 'false';
      }
      count++;
    }, 50); // Скорость мерцания (50мс)

    el.dataset.decodeInterval = interval;
  };

  // --- 3. Подготовка и проверка тоггла ---
  var prepareElements = function prepareElements() {
    var isNoDecode = document.body.classList.contains('no-decode');
    document.querySelectorAll(".".concat(DECODE_CLASS)).forEach(function (el) {
      // Сохраняем оригинал один раз при первой загрузке
      if (!el.dataset.original) {
        el.dataset.original = el.innerText.trim();
      }
      if (isNoDecode) {
        // Если тоггл ВЫКЛЮЧЕН (режим "Код" не активен) — показываем текст
        el.innerText = el.dataset.original;
      } else {
        // Если тоггл ВКЛЮЧЕН — прячем за шумом
        el.innerText = generateNoise(el.dataset.original.length);
      }
    });
  };

  // --- 4. Логика тоггла ---
  var initToggle = function initToggle() {
    var toggle = document.getElementById(TOGGLE_ID);
    if (!toggle) return;
    var isDisable = localStorage.getItem('decodeDisabled') === 'true';
    if (isDisable) {
      document.body.classList.add('no-decode');
      toggle.checked = false;
    } else {
      toggle.checked = true;
    }
    toggle.addEventListener('change', function () {
      if (!this.checked) {
        document.body.classList.add('no-decode');
        localStorage.setItem('decodeDisabled', 'true');
      } else {
        document.body.classList.remove('no-decode');
        localStorage.setItem('decodeDisabled', 'false');
      }
      prepareElements();
    });
  };

  // --- 5. Запуск ---
  initToggle();
  prepareElements();
  // Повтор для динамического меню
  setTimeout(prepareElements, 500);

  // --- 6. Слушатели для ПК (Наведение) ---
  // На мобилках mouseover/mouseout не сработают так же, как на ПК,
  // поэтому там текст останется зашифрованным, пока не нажмут тоггл.
  document.addEventListener('mouseover', function (e) {
    var target = e.target.closest(".".concat(DECODE_CLASS));
    var parentCard = e.target.closest('.O_CardPractice, .O_CardToy, .O_CardArticle, .A_MenuBottom');
    var elementToSolve = target || (parentCard ? parentCard.querySelector(".".concat(DECODE_CLASS)) : null);
    if (elementToSolve) solve(elementToSolve);
  });
  document.addEventListener('mouseout', function (e) {
    var target = e.target.closest(".".concat(DECODE_CLASS));
    var parentCard = e.target.closest('.O_CardPractice, .O_CardToy, .O_CardArticle, .A_MenuBottom');
    var elementToReset = target || (parentCard ? parentCard.querySelector(".".concat(DECODE_CLASS)) : null);
    if (elementToReset && !document.body.classList.contains('no-decode')) {
      clearInterval(elementToReset.dataset.decodeInterval);
      elementToReset.dataset.isDecoding = 'false';
      elementToReset.innerText = generateNoise(elementToReset.dataset.original.length);
    }
  });
});

/***/ }),

/***/ 899:
/***/ (() => {

// document.querySelectorAll('.O_CardToy').forEach((card) => {
//   const blurLayer = card.querySelector('.A_Blur')

//   card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     blurLayer.style.setProperty('--x', `${x}px`)
//     blurLayer.style.setProperty('--y', `${y}px`)
//     blurLayer.style.setProperty('--size', '5.3vw')
//   })

//   card.addEventListener('mouseleave', () => {
//     blurLayer.style.setProperty('--size', '0px')
//   })
// })

// document.addEventListener('DOMContentLoaded', () => {
//   // Добавляем все типы контейнеров, на которых должен работать эффект
//   const containers = document.querySelectorAll(
//     '.O_CardToy, .O_CardArticle, .O_ImgCaptionArticle'
//   )

//   containers.forEach((container) => {
//     const blurLayer = container.querySelector('.A_Blur')
//     if (!blurLayer) return

//     container.addEventListener('mousemove', (e) => {
//       if (document.body.classList.contains('no-blur')) return

//       // Находим конкретную область с картинкой (где лежит блюр)
//       const imgArea =
//         container.querySelector('.M_ImgBlurArticle, .M_ImgBlurPageArticle') ||
//         container
//       const rect = imgArea.getBoundingClientRect()

//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top

//       blurLayer.style.setProperty('--x', `${x}px`)
//       blurLayer.style.setProperty('--y', `${y}px`)
//       blurLayer.style.setProperty('--size', '10vw')
//     })

//     container.addEventListener('mouseleave', () => {
//       blurLayer.style.setProperty('--size', '0px')
//     })
//   })
// })

document.addEventListener('mousemove', function (e) {
  // Если блюр выключен на всем сайте — выходим из функции
  if (document.body.classList.contains('no-blur')) return;
  var cards = document.querySelectorAll('.O_CardToy, .O_CardArticle, .O_ImgCaptionArticle');
  cards.forEach(function (container) {
    var blurLayer = container.querySelector('.A_Blur, .A_Blur_Effect');
    if (!blurLayer) return;
    var rect = container.getBoundingClientRect();

    // Проверяем, находится ли мышь над текущей карточкой
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      blurLayer.style.setProperty('--x', "".concat(x, "px"));
      blurLayer.style.setProperty('--y', "".concat(y, "px"));
      blurLayer.style.setProperty('--size', '10vw');
    } else {
      blurLayer.style.setProperty('--size', '0px');
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/javascript/disclaimer.js
var disclaimer = __webpack_require__(473);
;// ./src/images/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/2e8475c169cc155b7d3c.svg";
;// ./src/images/favicon.png
const favicon_namespaceObject = __webpack_require__.p + "images/d2451f9726ebf7ea0d3f.png";
;// ./src/images/burger.svg
const burger_namespaceObject = __webpack_require__.p + "images/bd980d915b143a167b0f.svg";
;// ./src/images/close.svg
const close_namespaceObject = __webpack_require__.p + "images/80f82a2f2eeb8dc60789.svg";
;// ./src/javascript/menu.js
// import logo from '../images/logo.svg'

// document.addEventListener('DOMContentLoaded', function () {
//   const BASE_URL = window.location.origin + '/'
//   const MENU_ITEMS = [
//     { href: BASE_URL + 'sextoys.html', text: 'Секс-игрушки' },
//     { href: BASE_URL + 'practices.html', text: 'Практики' },
//     { href: BASE_URL + 'articles.html', text: 'Статьи' }
//   ]

//   const menuContainer = document.getElementById('menu')
//   if (menuContainer) {
//     menuContainer.outerHTML = `
//       <nav class="O_Menu">
//         <a href="/" class="A_logo">
//           <img src="${logo}" alt="pleaxy" />  <!-- logo уже полный URL от import -->
//         </a>
//         <div class="M_Menu">
//           ${MENU_ITEMS.map((item) => `<a class="A_MenuBottom" href="${item.href}">${item.text}</a>`).join('')}
//         </div>
//         <a class="A_pText A_MenuTelegram" href="https://t.me/pleaxy_media">telegram</a>
//       </nav>
//     `
//   }
// })

// import logo from '../images/logo.svg'

// document.addEventListener('DOMContentLoaded', function () {
//   // Авто: если в /pages/, BASE_PATH = '../' | иначе './'
//   const path = window.location.pathname
//   const BASE_PATH = path.includes('/pages/') ? '../' : './'

//   const MENU_ITEMS = [
//     { href: BASE_PATH + 'sextoys.html', text: 'Секс-игрушки' },
//     { href: BASE_PATH + 'practices.html', text: 'Практики' },
//     { href: BASE_PATH + 'articles.html', text: 'Статьи' }
//   ]

//   const menuContainer = document.getElementById('menu')
//   if (menuContainer) {
//     menuContainer.outerHTML = `
//       <nav class="O_Menu">
//         <a href="${BASE_PATH === '../' ? '../' : './'}" class="A_logo">
//           <img src="${logo}" alt="pleaxy" />
//         </a>
//         <div class="M_Menu">
//           ${MENU_ITEMS.map((item) => `<a class="A_MenuBottom" href="${item.href}">${item.text}</a>`).join('')}
//         </div>
//         <a class="A_pText A_MenuTelegram" href="https://t.me/pleaxy_media">telegram</a>
//       </nav>
//     `
//   }
// })

// МЕНЮ

// import logo from '../images/logo.svg'

// document.addEventListener('DOMContentLoaded', function () {
//   // 1. Автоматическое определение базового пути
//   const path = window.location.pathname
//   const BASE_PATH = path.includes('/pages/') ? '../' : './'

//   const MENU_ITEMS = [
//     { href: BASE_PATH + 'sextoys.html', text: 'Секс-игрушки' },
//     { href: BASE_PATH + 'practices.html', text: 'Практики' },
//     { href: BASE_PATH + 'articles.html', text: 'Статьи' }
//   ]

//   const menuContainer = document.getElementById('menu')

//   if (menuContainer) {
//     // Структура меню
//     menuContainer.outerHTML = `
//       <nav class="O_Menu">
//         <a href="${BASE_PATH === '../' ? '../index.html' : './index.html'}" class="A_logo">
//           <img src="${logo}" alt="pleaxy" />
//         </a>
//         <div class="M_Menu">
//           ${MENU_ITEMS.map((item) => `<a class="A_MenuBottom decode-text" href="${item.href}">${item.text}</a>`).join('')}
//         </div>

//         <div class="W_TogglesGroup">
//           <div class="W_Toggle">
//             <span class="A_pText">Блюр</span>
//             <label class="A_Switch">
//               <input type="checkbox" id="blur-toggle" checked>
//               <span class="A_Slider"></span>
//             </label>
//           </div>

//           <div class="W_Toggle">
//             <span class="A_pText">Шифр</span>
//             <label class="A_Switch">
//               <input type="checkbox" id="decode-toggle" checked>
//               <span class="A_Slider"></span>
//             </label>
//           </div>
//         </div>
//       </nav>
//     `

//     // ТОГГЛ БЛЮР
//     const toggle = document.getElementById('blur-toggle')

//     if (toggle) {
//       // Проверяем сохраненное состояние в памяти браузера
//       // Если записи нет (первый заход), по умолчанию блюр ВКЛЮЧЕН (toggle.checked = true)
//       const blurStatus = localStorage.getItem('blurDisabled')

//       if (blurStatus === 'true') {
//         toggle.checked = false
//         document.body.classList.add('no-blur')
//       } else {
//         toggle.checked = true
//         document.body.classList.remove('no-blur')
//       }

//       // Слушатель клика по тогглу
//       toggle.addEventListener('change', function () {
//         if (!this.checked) {
//           // Выключили блюр -> добавляем класс и сохраняем 'true'
//           document.body.classList.add('no-blur')
//           localStorage.setItem('blurDisabled', 'true')
//         } else {
//           // Включили блюр -> убираем класс и сохраняем 'false'
//           document.body.classList.remove('no-blur')
//           localStorage.setItem('blurDisabled', 'false')
//         }
//       })
//     }

//     // ТОГГЛ ТЕКСТ
//     const decodeToggle = document.getElementById('decode-toggle')

//     if (decodeToggle) {
//       // Проверяем память при загрузке
//       const isDecodeDisabled = localStorage.getItem('decodeDisabled') === 'true'
//       if (isDecodeDisabled) {
//         decodeToggle.checked = false
//         document.body.classList.add('no-decode')
//       } else {
//         decodeToggle.checked = true
//       }

//       decodeToggle.addEventListener('change', function () {
//         if (!this.checked) {
//           document.body.classList.add('no-decode')
//           localStorage.setItem('decodeDisabled', 'true')
//           // Принудительно расшифровываем всё прямо сейчас
//           document.querySelectorAll('.A_Decode').forEach((el) => {
//             if (el.dataset.original) el.innerText = el.dataset.original
//           })
//         } else {
//           document.body.classList.remove('no-decode')
//           localStorage.setItem('decodeDisabled', 'false')
//           // Возвращаем шум
//           location.reload() // Проще всего перезагрузить, чтобы prepare() отработал заново
//         }
//       })
//     }
//   }
// })





document.addEventListener('DOMContentLoaded', function () {
  var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = favicon_namespaceObject;
  document.head.appendChild(favicon);
  var path = window.location.pathname;
  var BASE_PATH = path.includes('/pages/') ? '../' : './';
  var MENU_ITEMS = [{
    href: BASE_PATH + 'sextoys.html',
    text: 'Секс-игрушки'
  }, {
    href: BASE_PATH + 'practices.html',
    text: 'Практики'
  }, {
    href: BASE_PATH + 'articles.html',
    text: 'Статьи'
  }];
  var menuContainer = document.getElementById('menu');
  if (menuContainer) {
    var _document$getElementB, _document$getElementB2;
    /* Полная перезапись структуры для корректной работы адаптива */
    menuContainer.outerHTML = "\n      <nav class=\"O_Menu\" id=\"main-nav\">\n        <a href=\"".concat(BASE_PATH === '../' ? '../index.html' : './index.html', "\" class=\"A_logo\">\n          <img src=\"").concat(logo_namespaceObject, "\" alt=\"pleaxy\" />\n        </a>\n\n        <button class=\"A_Burger\" id=\"burger-btn\">\n          <img src=\"").concat(burger_namespaceObject, "\" alt=\"Open menu\" />\n        </button>\n\n        <div class=\"W_MenuContent\" id=\"menu-content\">\n          <div class=\"W_MobileTop\">\n            <a href=\"#\" class=\"A_logo\"><img src=\"").concat(logo_namespaceObject, "\" alt=\"pleaxy\" /></a>\n            \n            <button class=\"A_Close\" id=\"close-btn\">\n              <img src=\"").concat(close_namespaceObject, "\" alt=\"Close menu\" />\n            </button>\n          </div>\n\n          <div class=\"M_Menu\">\n            ").concat(MENU_ITEMS.map(function (item) {
      return "<a class=\"A_MenuBottom decode-text\" href=\"".concat(item.href, "\">").concat(item.text, "</a>");
    }).join(''), "\n          </div>\n          \n          <div class=\"W_TogglesGroup\">\n            <div class=\"W_Toggle\">\n              <span class=\"A_pText\">\u0411\u043B\u044E\u0440</span>\n              <label class=\"A_Switch\">\n                <input type=\"checkbox\" id=\"blur-toggle\" checked>\n                <span class=\"A_Slider\"></span>\n              </label>\n            </div>\n            <div class=\"W_Toggle\">\n              <span class=\"A_pText\">\u0428\u0438\u0444\u0440</span>\n              <label class=\"A_Switch\">\n                <input type=\"checkbox\" id=\"decode-toggle\" checked>\n                <span class=\"A_Slider\"></span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </nav>\n    ");

    /* Управление мобильным меню */
    var nav = document.getElementById('main-nav');
    (_document$getElementB = document.getElementById('burger-btn')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
      return nav.classList.add('is-open');
    });
    (_document$getElementB2 = document.getElementById('close-btn')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function () {
      return nav.classList.remove('is-open');
    });

    /* Логика тогглов блюра */
    var toggle = document.getElementById('blur-toggle');
    if (toggle) {
      if (localStorage.getItem('blurDisabled') === 'true') {
        toggle.checked = false;
        document.body.classList.add('no-blur');
      }
      toggle.addEventListener('change', function () {
        document.body.classList.toggle('no-blur', !this.checked);
        localStorage.setItem('blurDisabled', !this.checked);
      });
    }

    /* Логика тогглов текста */
    var decodeToggle = document.getElementById('decode-toggle');
    if (decodeToggle) {
      if (localStorage.getItem('decodeDisabled') === 'true') {
        decodeToggle.checked = false;
        document.body.classList.add('no-decode');
      }
      decodeToggle.addEventListener('change', function () {
        localStorage.setItem('decodeDisabled', !this.checked);
        location.reload();
      });
    }
  }
});
;// ./src/javascript/footer.js
// import logo from '../images/logo.svg'
// document.addEventListener('DOMContentLoaded', function () {
//   const footerContainer = document.getElementById('footer')
//   if (footerContainer) {
//     footerContainer.innerHTML = `
//       <div class="O_Footer">
//         <div class="A_FooterLeft">
//           <a href="/" class="A_FooterLogo">
//             <img src="${logo}" alt="pleaxy" />
//           </a>
//           <p class="A_FooterText">Онлайн медиа о&nbsp;разнообразии в&nbsp;сексе</p>
//         </div>
//         <div class="A_FooterRight">
//           <a href="https://t.me/pleaxy_media" class="A_FooterTg">telegram</a>
//           <p class="A_FooterText">Больше интересного в&nbsp;нашем канале</p>
//         </div>
//       </div>
//     `
//   }
// })


document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;
  var BASE_PATH = path.includes('/pages/') ? '../' : './';
  var footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = "\n      <div class=\"O_Footer\">\n        <div class=\"A_FooterLeft\">\n          <a href=\"".concat(BASE_PATH === '../' ? '../' : './', "\" class=\"A_FooterLogo\">\n            <img src=\"").concat(logo_namespaceObject, "\" alt=\"pleaxy\" />\n          </a>\n          <p class=\"A_FooterText\">\u041E\u043D\u043B\u0430\u0439\u043D \u043C\u0435\u0434\u0438\u0430 \u043E&nbsp;\u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0438 \u0432&nbsp;\u0441\u0435\u043A\u0441\u0435</p>\n        </div>\n        <div class=\"A_FooterRight\">\n          <a href=\"https://t.me/pleaxy_media\" class=\"A_FooterTg\">telegram</a>\n          <p class=\"A_FooterText\">\u0411\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0432&nbsp;\u043D\u0430\u0448\u0435\u043C \u043A\u0430\u043D\u0430\u043B\u0435</p>\n        </div>\n      </div>\n    ");
  }
});
// EXTERNAL MODULE: ./src/javascript/blur.js
var javascript_blur = __webpack_require__(899);
// EXTERNAL MODULE: ./src/javascript/text.js
var javascript_text = __webpack_require__(517);
;// ./src/index.js







// import jpg from './images/image.jpg'

// document.addEventListener('DOMContentLoaded', () => {
//   const image = new Image()
//   image.src = jpg
//   document.querySelector('.images').appendChild(image)
// })
})();

/******/ })()
;