window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2
  // verificar SE a seção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = section.offsetTop
  // o altura da seção
  const sectionHeight = section.offsetHeight
  // o topo da seção chegou ou ultrapassou a linha avo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //informações dos dados e da logica coletados
  console.log(
    'o topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )
  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight
  //o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndAt <= targetLine
  console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline)

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 50) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
//para pegar o body tem que achar o documento, por isso coloca a palavra document.body onde chama-se a lista de classes "classLiss" para poder inforar a propriedade de adicionar a classe expanded. pq? pq o css esta trabalhando em cima dessa classe adicionada body
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header,
#services .card,
#about,
#about header,
#about .content`)
