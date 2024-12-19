const player = document.querySelector('.player iframe')
const videos = {
  1: 'https://www.youtube.com/embed/RechrtUxfQc?si=BIU_sCfpQOt7XOxs',
  2: 'https://www.youtube.com/embed/MRWX49Furew?si=yjYPa_oqwfGk9Jks',
  3: 'https://www.youtube.com/embed/METhdbL_iMw?si=swolv1XCTH_OzVLO',
  4: 'https://www.youtube.com/embed/ZyDbq-lEKTo?si=oD36Tv2U9ZQVXskl',
  5: 'https://www.youtube.com/embed/NlsrJbVvjaA?si=4xghcjNZkr2Ii7lJ',
}

function changeTKU60(videoId) {
  const src = videos[videoId]
  if (!src) return
  player.src = src
}
