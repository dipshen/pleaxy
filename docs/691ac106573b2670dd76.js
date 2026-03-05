import logo from '../images/logo.svg';
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
    menuContainer.outerHTML = "\n      <nav class=\"O_Menu\">\n        <a href=\"./\" class=\"A_logo\">\n          <img src=\"".concat(logo, "\" alt=\"pleaxy\" />\n        </a>\n        <div class=\"M_Menu\">\n          ").concat(MENU_ITEMS.map(function (item) {
      return "<a class=\"A_MenuBottom\" href=\"".concat(item.href, "\">").concat(item.text, "</a>");
    }).join(''), "\n        </div>\n        <a class=\"A_pText A_MenuTelegram\" href=\"https://t.me/pleaxy_media\">telegram</a>\n      </nav>\n    ");
  }
});

// import logo from '../images/logo.svg'

// document.addEventListener('DOMContentLoaded', function () {
//   function getBasePath() {
//     const pathname = window.location.pathname

//     if (pathname.includes('pages/')) {
//       return pathname.split('pages/')[0]
//     }

//     if (window.location.hostname === 'dipshen.github.io') {
//       return '/pleaxy/'
//     }

//     return '/'
//   }

//   const BASE_PATH = getBasePath()

//   const MENU_ITEMS = [
//     { href: `${BASE_PATH}inventory.html`, text: 'Инвентарь' },
//     { href: `${BASE_PATH}practices.html`, text: 'Практики' },
//     { href: `${BASE_PATH}articles.html`, text: 'Статьи' }
//   ]

//   const menuContainer = document.getElementById('menu')
//   if (menuContainer) {
//     menuContainer.outerHTML = `
//       <nav class="O_Menu">
//         <a href="${BASE_PATH}" class="A_logo">
//           <img src="${BASE_PATH}images/logo.svg" alt="pleaxy" />
//         </a>
//         <div class="M_Menu">
//           ${MENU_ITEMS.map(
//             (item) =>
//               `<a class="A_MenuBottom" href="${item.href}">${item.text}</a>`
//           ).join('')}
//         </div>
//         <a class="A_pText A_MenuTelegram" href="https://t.me/pleaxy_media">telegram</a>
//       </nav>
//     `
//   }
// })