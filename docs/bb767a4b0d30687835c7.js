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
    menuContainer.outerHTML = " \n      <nav class=\"O_Menu\">\n        <a href=\"./\" class=\"A_logo\">\n          <img src=\"".concat(logo, "\" alt=\"pleaxy\" />\n        </a>\n        <div class=\"M_Menu\">\n          ").concat(MENU_ITEMS.map(function (item) {
      return "<a class=\"A_MenuBottom\" href=\"".concat(item.href, "\">").concat(item.text, "</a>");
    }).join(''), "\n        </div>\n        <a class=\"A_pText A_MenuTelegram\" href=\"https://t.me/pleaxy_media\">telegram</a>\n      </nav>\n    ");
  }
});