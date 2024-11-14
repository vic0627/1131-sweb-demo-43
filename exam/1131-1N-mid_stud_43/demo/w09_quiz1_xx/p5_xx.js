const p = document.querySelector('.show-quiz1-answer');
console.log('show-quiz1-answer', p);

function showQuiz1Page(item) {
  switch (item) {
    case 'p1_xx':
      p.innerHTML = `<iframe src='./cards_xx/p1_xx.html' width="100%" height="100%" />`;
      break;
    case 'p2_xx':
      p.innerHTML = `<iframe src='./cards_xx/p2_xx.html' width="100%" height="100%" />`;
      break;
    case 'p3_xx':
      p.innerHTML = `<iframe src='./cards_xx/p3_xx.html' width="100%" height="100%" />`;
      break;
    case 'p4_xx':
      p.innerHTML = `<iframe src='./cards_xx/p4_xx.html' width="100%" height="100%" />`;
      break;
  }
}
