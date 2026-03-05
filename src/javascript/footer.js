import logo from '../images/logo.svg'
document.addEventListener('DOMContentLoaded', function () {
  const footerContainer = document.getElementById('footer')
  if (footerContainer) {
    footerContainer.innerHTML = `
      <div class="O_Footer">
        <div class="A_FooterLeft">
          <a href="/" class="A_FooterLogo">
            <img src="${logo}" alt="pleaxy" />
          </a>
          <p class="A_FooterText">Онлайн медиа о разнообразии в сексе</p>
        </div>
        <div class="A_FooterRight">
          <a href="https://t.me/pleaxy_media" class="A_FooterTg">telegram</a>
          <p class="A_FooterText">Больше интересного в нашем канале</p>
        </div>
      </div>
    `
  }
})
