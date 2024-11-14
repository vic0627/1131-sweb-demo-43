const p = document.querySelector('.show-classdemo');
console.log('show-classdemo', p);

function showDemo(item) {
  switch (item) {
    case 'w02_intro_xx':
      p.innerHTML = `<iframe src='./w02_intro_xx/index.html' width="100%" height="100%" />`;
      break;
    case 'w03_card_xx':
      p.innerHTML = `<iframe src='./w03_card_xx/' width="100%" height="100%" />`;
      break;
    case 'w06_blog_xx':
      p.innerHTML = `<iframe src='./w06_blog_xx/' width="100%" height="100%" />`;
      break;
    case 'w09_quiz1_xx':
      p.innerHTML = `<iframe src='./w09_quiz1_xx/p5_xx.html' width="100%" height="100%" />`;
      break;
  }
}
