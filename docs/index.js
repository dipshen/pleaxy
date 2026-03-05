/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/images/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/2e8475c169cc155b7d3c.svg";
;// ./src/javascript/menu.js

document.addEventListener('DOMContentLoaded', function () {
  var MENU_ITEMS = [{
    href: './inventory.html',
    text: 'Инвентарь'
  }, {
    href: './practices.html',
    text: 'Практики'
  }, {
    href: './articles.html',
    text: 'Статьи'
  }];
  var menuContainer = document.getElementById('menu');
  if (menuContainer) {
    menuContainer.outerHTML = " \n      <nav class=\"O_Menu\">\n        <a href=\"./\" class=\"A_logo\">\n          <img src=\"".concat(logo_namespaceObject, "\" alt=\"pleaxy\" />\n        </a>\n        <div class=\"M_Menu\">\n          ").concat(MENU_ITEMS.map(function (item) {
      return "<a class=\"A_MenuBottom\" href=\"".concat(item.href, "\">").concat(item.text, "</a>");
    }).join(''), "\n        </div>\n        <a class=\"A_pText A_MenuTelegram\" href=\"https://t.me/pleaxy_media\">telegram</a>\n      </nav>\n    ");
  }
});
;// ./src/javascript/footer.js

document.addEventListener('DOMContentLoaded', function () {
  var footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = "\n      <div class=\"O_Footer\">\n        <div class=\"A_FooterLeft\">\n          <a href=\"/\" class=\"A_FooterLogo\">\n            <img src=\"".concat(logo_namespaceObject, "\" alt=\"pleaxy\" />\n          </a>\n          <p class=\"A_FooterText\">\u041E\u043D\u043B\u0430\u0439\u043D \u043C\u0435\u0434\u0438\u0430 \u043E \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0438 \u0432 \u0441\u0435\u043A\u0441\u0435</p>\n        </div>\n        <div class=\"A_FooterRight\">\n          <a href=\"https://t.me/pleaxy_media\" class=\"A_FooterTg\">telegram</a>\n          <p class=\"A_FooterText\">\u0411\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0432 \u043D\u0430\u0448\u0435\u043C \u043A\u0430\u043D\u0430\u043B\u0435</p>\n        </div>\n      </div>\n    ");
  }
});
;// ./src/index.js




// import jpg from './images/image.jpg'

// document.addEventListener('DOMContentLoaded', () => {
//   const image = new Image()
//   image.src = jpg
//   document.querySelector('.images').appendChild(image)
// })
/******/ })()
;