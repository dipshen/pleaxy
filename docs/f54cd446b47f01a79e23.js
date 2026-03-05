import logo from '../images/logo.svg';
document.addEventListener('DOMContentLoaded', function () {
  var MENU_ITEMS = [{
    href: '/inventory.html',
    text: 'Инвентарь'
  }, {
    href: '/practices.html',
    text: 'Практики'
  },
  // исправил "Пракики" → "Практики"
  {
    href: '/articles.html',
    text: 'Статьи'
  }];
  var menuContainer = document.getElementById('menu');
  if (menuContainer) {
    menuContainer.outerHTML = " \n      <nav class=\"O_Menu\">\n        <a href=\"/\" class=\"A_logo\">\n          <img src=\"".concat(logo, "\" alt=\"pleaxy\" />\n        </a>\n        <div class=\"M_Menu\">\n          ").concat(MENU_ITEMS.map(function (item) {
      return "<a class=\"A_MenuBottom\" href=\"".concat(item.href, "\">").concat(item.text, "</a>");
    }).join(''), "\n        </div>\n        <a class=\"A_pText A_MenuTelegram\" href=\"https://t.me/pleaxy_media\">telegram</a>\n      </nav>\n    ");
  }
});

// document.addEventListener('DOMContentLoaded', function () {
//   const MENU_ITEMS = [
//     { href: '/inventory.html', text: 'Инвентарь' },
//     { href: '/practice.html', text: 'Практики' }, // исправил "Пракики" → "Практики"
//     { href: '/articles.html', text: 'Статьи' }
//   ]

//   const menuContainer = document.getElementById('menu')
//   if (menuContainer) {
//     menuContainer.innerHTML = `
//       <nav class="O_Menu">
//         <a href="/" class="A_logo">
//           <img src="${logo}" alt="pleaxy" />
//         </a>
//         <div class="M_Menu">
//           ${MENU_ITEMS.map(
//             (item) =>
//               `<a class="A_MenuBottom" href="${item.href}">${item.text}</a>`
//           ).join('')}
//         </div>
//         <a class="A_pText" href="https://t.me/pleaxy_media">telegram</a>
//       </nav>
//     `
//   }
// })