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

import logo from '../images/logo.svg';
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;
  var BASE_PATH = path.includes('/pages/') ? '../' : './';
  var footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = "\n      <div class=\"O_Footer\">\n        <div class=\"A_FooterLeft\">\n          <a href=\"".concat(BASE_PATH === '../' ? '../' : './', "\" class=\"A_FooterLogo\">\n            <img src=\"").concat(logo, "\" alt=\"pleaxy\" />\n          </a>\n          <p class=\"A_FooterText\">\u041E\u043D\u043B\u0430\u0439\u043D \u043C\u0435\u0434\u0438\u0430 \u043E&nbsp;\u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0438 \u0432&nbsp;\u0441\u0435\u043A\u0441\u0435</p>\n        </div>\n        <div class=\"A_FooterRight\">\n          <a href=\"https://t.me/pleaxy_media\" class=\"A_FooterTg\">telegram</a>\n          <p class=\"A_FooterText\">\u0411\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0432&nbsp;\u043D\u0430\u0448\u0435\u043C \u043A\u0430\u043D\u0430\u043B\u0435</p>\n        </div>\n      </div>\n    ");
  }
});