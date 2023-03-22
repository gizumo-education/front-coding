import 'animate.css';

// ここにコードを書きながら確認しましょう！
// const title = document.getElementById('title');

// console.log(title); // <h1 id="title" class="title animate__animated">...</h1>

// const button = document.querySelector('.button');

// console.log(button); // <button id="button" type="button" class="button">animation</button>

{
/* <p class="text">hoge</p> ← 最初の要素が取得できる
<p class="text">fuga</p> ← 取得できない
<p class="text">piyo</p> ← 取得できない */
}

const list = document.querySelectorAll('.card-type--mocha .menu li');

console.log(list); // NodeList(3) [li, li, li]

// 対象の要素.addEventListener('イベントの種類', イベント発生後に実行する関数, オプション);

// 練習問題
// 問題 1
// classListメソッドは特定の要素のクラス名を追加したり、削除したり、参照したりすることが出来る
// 引数に渡したidやセレクタを取得する↓↓
const title = document.getElementById('title');
const button = document.getElementById('button');
const nodeCard = document.querySelector('.card-type--mocha');
const eventCard = document.querySelector('.card-type--yellow');

button.addEventListener('click', () => {
  // title要素に.animate__hingeクラスを付与
  title.classList.add('animate__hinge');
  // 2秒後にtitle要素から.animate__hingeクラスを削除
  setTimeout(() => {
    title.classList.remove('animate__hinge'),
    nodeCard.classList.add('card-animation'),
    eventCard.style.display = 'block',
    eventCard.classList.add('animate__fadeInUp');
  }, 2000);
});



