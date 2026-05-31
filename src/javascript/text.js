// document.addEventListener('DOMContentLoaded', () => {
//   const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/?#$@!%&*'

//   // Ищем все элементы с нашим классом
//   document.querySelectorAll('.A_Decode').forEach((el) => {
//     // 1. Сохраняем оригинальный текст в память элемента
//     const originalText = el.innerText

//     // 2. Сразу превращаем текст в шум при загрузке
//     el.innerText = originalText
//       .split('')
//       .map(() => glyphs[Math.floor(Math.random() * glyphs.length)])
//       .join('')

//     // 3. Функция расшифровки
//     const startDecoding = () => {
//       let iteration = 0
//       const interval = setInterval(() => {
//         el.innerText = originalText
//           .split('')
//           .map((letter, index) => {
//             if (index < iteration) return originalText[index]
//             return glyphs[Math.floor(Math.random() * glyphs.length)]
//           })
//           .join('')

//         if (iteration >= originalText.length) clearInterval(interval)
//         iteration += 1 / 3
//       }, 30)
//     }

//     // 4. Запускаем расшифровку при наведении
//     el.addEventListener('mouseenter', startDecoding, { once: true })
//     // { once: true } значит, что текст расшифруется один раз и останется нормальным
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  // const glyphs = '⋅⋄⋇⋉⋊⊹⋐⋑'
  const glyphs = '⋄⬦◇✧⊹'
  // const glyphs = '· ◦ ✧ ˚ ₊'
  const DECODE_CLASS = 'A_Decode'
  const TOGGLE_ID = 'decode-toggle'

  // --- 1. Генерация шума ---
  const generateNoise = (length) => {
    return Array.from(
      { length },
      () => glyphs[Math.floor(Math.random() * glyphs.length)]
    ).join('')
  }

  // --- 2. Функция расшифровки ---
  // --- 2. Функция мгновенной расшифровки всего текста сразу ---
  const solve = (el) => {
    if (
      document.body.classList.contains('no-decode') ||
      el.dataset.isDecoding === 'true'
    )
      return

    el.dataset.isDecoding = 'true'
    const originalText = el.dataset.original
    const duration = 5 // Сколько раз текст "дернется" перед тем как застыть
    let count = 0

    const interval = setInterval(() => {
      // Пока count меньше duration, рисуем полный шум
      // Когда достигли лимита — ставим финальный текст
      if (count < duration) {
        el.innerText = generateNoise(originalText.length)
      } else {
        el.innerText = originalText
        clearInterval(interval)
        el.dataset.isDecoding = 'false'
      }

      count++
    }, 50) // Скорость мерцания (50мс)

    el.dataset.decodeInterval = interval
  }

  // --- 3. Подготовка и проверка тоггла ---
  const prepareElements = () => {
    const isNoDecode = document.body.classList.contains('no-decode')

    document.querySelectorAll(`.${DECODE_CLASS}`).forEach((el) => {
      // Сохраняем оригинал один раз при первой загрузке
      if (!el.dataset.original) {
        el.dataset.original = el.innerText.trim()
      }

      if (isNoDecode) {
        // Если тоггл ВЫКЛЮЧЕН (режим "Код" не активен) — показываем текст
        el.innerText = el.dataset.original
      } else {
        // Если тоггл ВКЛЮЧЕН — прячем за шумом
        el.innerText = generateNoise(el.dataset.original.length)
      }
    })
  }

  // --- 4. Логика тоггла ---
  const initToggle = () => {
    const toggle = document.getElementById(TOGGLE_ID)
    if (!toggle) return

    const isDisable = localStorage.getItem('decodeDisabled') === 'true'
    if (isDisable) {
      document.body.classList.add('no-decode')
      toggle.checked = false
    } else {
      toggle.checked = true
    }

    toggle.addEventListener('change', function () {
      if (!this.checked) {
        document.body.classList.add('no-decode')
        localStorage.setItem('decodeDisabled', 'true')
      } else {
        document.body.classList.remove('no-decode')
        localStorage.setItem('decodeDisabled', 'false')
      }
      prepareElements()
    })
  }

  // --- 5. Запуск ---
  initToggle()
  prepareElements()
  // Повтор для динамического меню
  setTimeout(prepareElements, 500)

  // --- 6. Слушатели для ПК (Наведение) ---
  // На мобилках mouseover/mouseout не сработают так же, как на ПК,
  // поэтому там текст останется зашифрованным, пока не нажмут тоггл.
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(`.${DECODE_CLASS}`)
    const parentCard = e.target.closest(
      '.O_CardPractice, .O_CardToy, .O_CardArticle, .A_MenuBottom'
    )

    const elementToSolve =
      target ||
      (parentCard ? parentCard.querySelector(`.${DECODE_CLASS}`) : null)
    if (elementToSolve) solve(elementToSolve)
  })

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(`.${DECODE_CLASS}`)
    const parentCard = e.target.closest(
      '.O_CardPractice, .O_CardToy, .O_CardArticle, .A_MenuBottom'
    )

    const elementToReset =
      target ||
      (parentCard ? parentCard.querySelector(`.${DECODE_CLASS}`) : null)

    if (elementToReset && !document.body.classList.contains('no-decode')) {
      clearInterval(elementToReset.dataset.decodeInterval)
      elementToReset.dataset.isDecoding = 'false'
      elementToReset.innerText = generateNoise(
        elementToReset.dataset.original.length
      )
    }
  })
})
