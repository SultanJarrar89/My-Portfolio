window.sr = ScrollReveal()

window.sr = ScrollReveal()
sr.reveal('.heading', {
  duration: 2000,
  origin: 'top',
  distance: '300px',
})
sr.reveal('.name', {
  duration: 5000,
  origin: 'bottom',
})
sr.reveal('.info', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px',
})
sr.reveal('.port', {
  duration: 7000,
  origin: 'bottom',
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

function speed(el) {
  let videos = $(el)
  for (let index = 0; index < videos.length; index++) {
    videos[index].playbackRate = 2.5
    console.log(videos[index])
  }
}

speed($('video'))
