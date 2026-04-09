// import logo from '../images/logo.svg'
// document.addEventListener('DOMContentLoaded', function () {
//   const MENU_ITEMS = [
//     { href: './inventory.html', text: 'Инвентарь' },
//     { href: './practices.html', text: 'Практики' },
//     { href: './articles.html', text: 'Статьи' }
//   ]

//   const menuContainer = document.getElementById('menu')
//   if (menuContainer) {
//     menuContainer.outerHTML = `
//       <nav class="O_Menu">
//         <a href="./" class="A_logo">
//           <img src="${logo}" alt="pleaxy" />
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

import logo from '../images/logo.svg'

document.addEventListener('DOMContentLoaded', function () {
  const BASE_URL = window.location.origin + '/'
  const MENU_ITEMS = [
    { href: BASE_URL + 'sextoys.html', text: 'Секс-игрушки' },
    { href: BASE_URL + 'practices.html', text: 'Практики' },
    { href: BASE_URL + 'articles.html', text: 'Статьи' }
  ]

  const menuContainer = document.getElementById('menu')
  if (menuContainer) {
    menuContainer.outerHTML = `
      <nav class="O_Menu">
        <a href="/" class="A_logo">
          <img src="${logo}" alt="pleaxy" />  <!-- logo уже полный URL от import -->
        </a>
        <div class="M_Menu">
          ${MENU_ITEMS.map((item) => `<a class="A_MenuBottom" href="${item.href}">${item.text}</a>`).join('')}
        </div>
        <a class="A_pText A_MenuTelegram" href="https://t.me/pleaxy_media">telegram</a>
      </nav>
    `
  }
})
