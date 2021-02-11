window.sr = ScrollReveal()

window.sr = ScrollReveal()
sr.reveal('.cover-heading', {
  duration: 2000,
  origin: 'top',
  distance: '300px',
})
sr.reveal('.name', {
  duration: 5000,
  origin: 'bottom',
})
sr.reveal('.lead', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
})
sr.reveal('.about-img', {
  duration: 2000,
  distance: '300px',
  origin: 'top',
})
sr.reveal('.about-info', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
})

sr.reveal('.projects', {
  duration: 2000,
  origin: 'left',
  distance: '-300px',
})

sr.reveal('.card', {
  duration: 2500,
  origin: 'bottom',
})

sr.reveal(Circlle('.round')),
  {
    duration: 2000,
  }

function Circlle(el) {
  $(el)
    .circleProgress({ fill: { color: '#1e3646' } })
    .on('circle-animation-progress'),
    function (event, progress, stepValue) {
      $(this)
        .find('strong')
        .text(String(stepValue.toFixed(2)).substr(2) + '%')
    }
}

Circlle($('.round'))
