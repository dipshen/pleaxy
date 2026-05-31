document.addEventListener('DOMContentLoaded', function () {
  // --- ЛОГИКА ДИСКЛЕЙМЕРА ---

  // Проверяем, подтверждал ли пользователь возраст в этой сессии
  if (sessionStorage.getItem('adultConfirmed') !== 'true') {
    // Создаем элемент оверлея
    const disclaimer = document.createElement('div')
    disclaimer.id = 'disclaimer'
    disclaimer.className = 'O_Disclaimer'

    // Вставляем внутреннюю разметку
    disclaimer.innerHTML = `
      <div class="M_DisclaimerCard">
        <h1 class="A_H1">Дисклеймер</h1>
        <p class="A_pText">
          Сайт носит образовательный и&nbsp;просветительский характер для укрепления отношений в&nbsp;парах и&nbsp;семьях
        </p>
        <div class="M_DisclaimerButtons">
          <button id="disclaimer-no" class="A_Btn A_Btn--light">Мне меньше 18 лет</button>
          <button id="disclaimer-yes" class="A_Btn A_Btn--purple">Мне есть 18 лет</button>
        </div>
        <p class="A_pSmall">
          Информация на&nbsp;сайте предназначена исключительно для совершеннолетних посетителей
        </p>
      </div>
    `

    // Добавляем дисклеймер в самое начало body
    document.body.prepend(disclaimer)

    // Вешаем события на кнопки
    document.getElementById('disclaimer-yes').addEventListener('click', () => {
      sessionStorage.setItem('adultConfirmed', 'true')
      disclaimer.classList.add('O_Disclaimer--hidden')
      // Удаляем из DOM после анимации, чтобы не мешал
      setTimeout(() => disclaimer.remove(), 500)
    })

    document.getElementById('disclaimer-no').addEventListener('click', () => {
      window.location.href = 'https://www.google.com'
    })
  }
})
