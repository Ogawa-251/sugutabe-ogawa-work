const hamBtn = document.getElementById('ham-btn');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');

hamBtn.addEventListener('click', function() {
  nav.classList.toggle('show');
  if (nav.classList.contains('show')) {
    document.body.style.overflow = 'hidden'; // ヘッダーが見えないようにボディを非表示にする
  } else {
    document.body.style.overflow = ''; // ボディの非表示を解除
  }
});

closeBtn.addEventListener('click', function() {
  nav.classList.remove('show');
  document.body.style.overflow = ''; // ボディの非表示を解除
});
