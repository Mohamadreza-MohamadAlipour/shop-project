const next = document.querySelector('.control-left')
const prev = document.querySelector('.control-right')
const slideItem = document.querySelector('.slider-item').children
let slideLength = slideItem.length
let index = 0
let duration = 6000

//event

//eventlistener

next.onclick = () => {
  slide('next')
}

prev.onclick = () => {
  slide('prev')
}

function slide (direction) {
  progress()
  if (direction == 'next') {
    if (slideLength - 1 == index) {
      index = 0
    } else {
      index++
    }
  }
  if (direction == 'prev') {
    if (index == 0) {
      index = slideLength - 1
    } else {
      index--
    }
  }

  clearInterval(timer)

  timer = setInterval(autoSlide, duration)

  for (i = 0; i < slideLength; i++) {
    slideItem[i].classList.remove('active')
  }

  slideItem[index].classList.add('active')
}

function progress () {
  document.querySelector('.progress').innerHTML = ''
  const div = document.createElement('div')
  div.style.width = '0'
  div.style.height = '5px'
  div.style.position = 'absolute'
  div.style.top = '0'
  div.style.left = '0'
  div.style.backgroundColor = '#c00'
  div.style.animation = 'progress ' + duration / 1000 + 's linear'
  document.querySelector('.progress').appendChild(div)
}

function autoSlide () {
  slide('next')
}

let timer = setInterval(autoSlide, duration)

progress()

const btn = document.querySelector('.hamburger-menu')
const list = document.querySelector('.top-header-right-list')

btn.addEventListener('click', function () {
  list.classList.toggle('active')
})

const closeIcon = document.querySelector('.close-icon')

closeIcon.addEventListener('click', function () {
  list.classList.remove('active')
})

const searchIcon = document.querySelector('.search-icon')
const searchBox = document.querySelector('.search-box')

searchIcon.addEventListener('click', function () {
  searchBox.classList.toggle('active')
})

const hasMegaMenu = document.querySelector('.has-megaMenu')
const megaMenu = document.querySelector('.mega-menu')

hasMegaMenu.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    megaMenu.classList.toggle('active')
  }
})

const dropdown = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content')

dropdown.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    dropdownContent.classList.toggle('active')
  }
})
