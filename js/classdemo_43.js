const $ = (e) => document.querySelector(e)

const $iframeWrap = $('.show-classdemo')
const $iframe = $('#show-midterm-answer__frame')

function showClassDemo(page) {
  if (page === 'w07_nav_43') return
  $iframe?.setAttribute('src', `./demo/${page}/index.html`)
}
