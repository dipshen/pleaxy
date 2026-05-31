// document.querySelectorAll('.O_CardToy').forEach((card) => {
//   const blurLayer = card.querySelector('.A_Blur')

//   card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     blurLayer.style.setProperty('--x', `${x}px`)
//     blurLayer.style.setProperty('--y', `${y}px`)
//     blurLayer.style.setProperty('--size', '5.3vw')
//   })

//   card.addEventListener('mouseleave', () => {
//     blurLayer.style.setProperty('--size', '0px')
//   })
// })

// document.addEventListener('DOMContentLoaded', () => {
//   // Добавляем все типы контейнеров, на которых должен работать эффект
//   const containers = document.querySelectorAll(
//     '.O_CardToy, .O_CardArticle, .O_ImgCaptionArticle'
//   )

//   containers.forEach((container) => {
//     const blurLayer = container.querySelector('.A_Blur')
//     if (!blurLayer) return

//     container.addEventListener('mousemove', (e) => {
//       if (document.body.classList.contains('no-blur')) return

//       // Находим конкретную область с картинкой (где лежит блюр)
//       const imgArea =
//         container.querySelector('.M_ImgBlurArticle, .M_ImgBlurPageArticle') ||
//         container
//       const rect = imgArea.getBoundingClientRect()

//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top

//       blurLayer.style.setProperty('--x', `${x}px`)
//       blurLayer.style.setProperty('--y', `${y}px`)
//       blurLayer.style.setProperty('--size', '10vw')
//     })

//     container.addEventListener('mouseleave', () => {
//       blurLayer.style.setProperty('--size', '0px')
//     })
//   })
// })

document.addEventListener('mousemove', (e) => {
  // Если блюр выключен на всем сайте — выходим из функции
  if (document.body.classList.contains('no-blur')) return

  const cards = document.querySelectorAll(
    '.O_CardToy, .O_CardArticle, .O_ImgCaptionArticle'
  )

  cards.forEach((container) => {
    const blurLayer = container.querySelector('.A_Blur, .A_Blur_Effect')
    if (!blurLayer) return

    const rect = container.getBoundingClientRect()

    // Проверяем, находится ли мышь над текущей карточкой
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      blurLayer.style.setProperty('--x', `${x}px`)
      blurLayer.style.setProperty('--y', `${y}px`)
      blurLayer.style.setProperty('--size', '10vw')
    } else {
      blurLayer.style.setProperty('--size', '0px')
    }
  })
})
