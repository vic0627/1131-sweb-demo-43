const $ = (e) => document.querySelector(e)

const $iframeWrap = $('.show-classdemo')
const $iframe = $('#show-midterm-answer__frame')

function showClassDemo(page) {
  if (page === 'w07_nav_43') return
  if (page === 'final_43') {
    $iframe?.setAttribute('src', 'exams/final1_43/final_p1_43.html')
    return
  }
  $iframe?.setAttribute('src', `./demo/${page}/index.html`)
}
