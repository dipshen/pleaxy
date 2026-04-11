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

import logo from '../images/logo.svg'

document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname
  const BASE_PATH = path.includes('/pages/') ? '../' : './'

  const footerContainer = document.getElementById('footer')
  if (footerContainer) {
    footerContainer.innerHTML = `
      <div class="O_Footer">
        <div class="A_FooterLeft">
          <a href="${BASE_PATH === '../' ? '../' : './'}" class="A_FooterLogo">
            <img src="${logo}" alt="pleaxy" />
          </a>
          <p class="A_FooterText">Онлайн медиа о&nbsp;разнообразии в&nbsp;сексе</p>
        </div>
        <div class="A_FooterRight">
          <a href="https://t.me/pleaxy_media" class="A_FooterTg">telegram</a>
          <p class="A_FooterText">Больше интересного в&nbsp;нашем канале</p>
        </div>
      </div>
    `
  }
})
