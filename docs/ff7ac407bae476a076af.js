import logo from '../images/logo.svg';
document.addEventListener('DOMContentLoaded', function () {
  var footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = "\n      <div class=\"O_Footer\">\n        <div class=\"A_FooterLeft\">\n          <a href=\"/\" class=\"A_FooterLogo\">\n            <img src=\"".concat(logo, "\" alt=\"pleaxy\" />\n          </a>\n          <p class=\"A_FooterText\">\u041E\u043D\u043B\u0430\u0439\u043D \u043C\u0435\u0434\u0438\u0430 \u043E \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0438 \u0432 \u0441\u0435\u043A\u0441\u0435</p>\n        </div>\n        <div class=\"A_FooterRight\">\n          <a href=\"https://t.me/pleaxy_media\" class=\"A_FooterTg\">telegram</a>\n          <p class=\"A_FooterText\">\u0411\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0432 \u043D\u0430\u0448\u0435\u043C \u043A\u0430\u043D\u0430\u043B\u0435</p>\n        </div>\n      </div>\n    ");
  }
});