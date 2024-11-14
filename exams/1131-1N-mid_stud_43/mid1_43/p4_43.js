const p = document.querySelector('.show-midterm-answer')
console.log('show-midterm-answer', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_43':
      p.innerHTML = `<iframe src='./p1_43/p1_43.html' width="100%" height="100%" />`
      break
    case 'p2_43':
      p.innerHTML = `<iframe src='./p2_43/p2_43.html' width="100%" height="100%" />`
      break
    case 'p3_43':
      p.innerHTML = `<iframe src='./p3_43/p3_43.html' width="100%" height="100%" />`
      break
    case 'p4_43':
      p.innerHTML = `<iframe src='./p4_43/p4_43.html' width="100%" height="100%" />`
      break
  }
}
