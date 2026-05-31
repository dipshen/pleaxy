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

import logo from '../images/logo.svg'
import burgerIcon from '../images/burger.svg'
import closeIcon from '../images/close.svg'

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname
  const BASE_PATH = path.includes('/pages/') ? '../' : './'

  const MENU_ITEMS = [
    { href: BASE_PATH + 'sextoys.html', text: 'Секс-игрушки' },
    { href: BASE_PATH + 'practices.html', text: 'Практики' },
    { href: BASE_PATH + 'articles.html', text: 'Статьи' }
  ]

  const menuContainer = document.getElementById('menu')

  if (menuContainer) {
    /* Полная перезапись структуры для корректной работы адаптива */
    menuContainer.outerHTML = `
      <nav class="O_Menu" id="main-nav">
        <a href="${BASE_PATH === '../' ? '../index.html' : './index.html'}" class="A_logo">
          <img src="${logo}" alt="pleaxy" />
        </a>

        <button class="A_Burger" id="burger-btn">
          <img src="${burgerIcon}" alt="Open menu" />
        </button>

        <div class="W_MenuContent" id="menu-content">
          <div class="W_MobileTop">
            <a href="#" class="A_logo"><img src="${logo}" alt="pleaxy" /></a>
            
            <button class="A_Close" id="close-btn">
              <img src="${closeIcon}" alt="Close menu" />
            </button>
          </div>

          <div class="M_Menu">
            ${MENU_ITEMS.map((item) => `<a class="A_MenuBottom decode-text" href="${item.href}">${item.text}</a>`).join('')}
          </div>
          
          <div class="W_TogglesGroup">
            <div class="W_Toggle">
              <span class="A_pText">Блюр</span>
              <label class="A_Switch">
                <input type="checkbox" id="blur-toggle" checked>
                <span class="A_Slider"></span>
              </label>
            </div>
            <div class="W_Toggle">
              <span class="A_pText">Шифр</span>
              <label class="A_Switch">
                <input type="checkbox" id="decode-toggle" checked>
                <span class="A_Slider"></span>
              </label>
            </div>
          </div>
        </div>
      </nav>
    `

    /* Управление мобильным меню */
    const nav = document.getElementById('main-nav')
    document
      .getElementById('burger-btn')
      ?.addEventListener('click', () => nav.classList.add('is-open'))
    document
      .getElementById('close-btn')
      ?.addEventListener('click', () => nav.classList.remove('is-open'))

    /* Логика тогглов блюра */
    const toggle = document.getElementById('blur-toggle')
    if (toggle) {
      if (localStorage.getItem('blurDisabled') === 'true') {
        toggle.checked = false
        document.body.classList.add('no-blur')
      }
      toggle.addEventListener('change', function () {
        document.body.classList.toggle('no-blur', !this.checked)
        localStorage.setItem('blurDisabled', !this.checked)
      })
    }

    /* Логика тогглов текста */
    const decodeToggle = document.getElementById('decode-toggle')
    if (decodeToggle) {
      if (localStorage.getItem('decodeDisabled') === 'true') {
        decodeToggle.checked = false
        document.body.classList.add('no-decode')
      }
      decodeToggle.addEventListener('change', function () {
        localStorage.setItem('decodeDisabled', !this.checked)
        location.reload()
      })
    }
  }
})
