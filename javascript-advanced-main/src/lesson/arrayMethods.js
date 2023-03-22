// ここにコードを書きながら確認しましょう！
// 繰り返し処理したい配列.forEach(コールバック関数);
// const Array = [1, 2, 3, 4, 5];

// Array.forEach(val => console.log(val));
// /*
//   ↓ consoleの表示
//   1
//   2
//   3
//   4
//   5
// */

// const Array = [1, 2, 3, 4, 5];

// Array.forEach((val, index, array) => {
//   console.log(val, index, array);
// });
/*
  1 0 [ 1, 2, 3, 4, 5 ]
  2 1 [ 1, 2, 3, 4, 5 ]
  3 2 [ 1, 2, 3, 4, 5 ]
  4 3 [ 1, 2, 3, 4, 5 ]
  5 4 [ 1, 2, 3, 4, 5 ]
*/

// 繰り返し処理したい配列.map(コールバック関数);

const Array = [2, 4, 6, 8, 10];

const newArray = Array.map(val => val * 2);

console.log(newArray);
// [4, 8, 12, 16, 20]

// mapメソッドは、配列の要素をコールバック関数へ渡し、
// コールバック関数が返した値から新しい配列を作成するメソッド。

// forEachメソッドはfor文と同じような繰り返し処理ができるメソッド。


// 練習問題
// 問題 1
const array = [
  {
    tag: 'p',
    className: 'hoge',
  },
  {
    tag: 'div',
    className: 'fuga',
  },
  {
    tag: 'h1',
    className: 'piyo',
  },
];

// 仮引数valには、1回目の実行では配列の1つ目の要素、2回目の実行では配列の2つ目の要素...
// というように配列の要素が順番に渡される

const anotherArray = array.map(val => {
  return {
    tag: val.tag,
    className:'c-'+val.className
  }
});

console.log(anotherArray);

