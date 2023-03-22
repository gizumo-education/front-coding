// ここにコードを書きながら確認しましょう！
// console.log('1番目の処理');
// console.log('2番目の処理');
// console.log('3番目の処理');

// console.log('1番目の処理'); // 同期処理

// setTimeout(() => { // 非同期処理
//   console.log('2番目の処理');
// }, 0);

// console.log('3番目の処理'); // 同期処理

// // 1番目の処理
// // 3番目の処理
// // 2番目の処理

// // 非同期処理は処理の完了を待たずに次の処理を実行すると言いました。
// // つまり、非同期処理であるsetTimeoutの完了を待たずに後続のconsole.log('3番目の処理');が実行された

// // 非同期処理にかかる時間は関係なく、後続の同期処理の結果が先に出力される

// console.log('1番目の処理');

// setTimeout(() => {
//   console.log('2番目の処理');
// }, 2000);

// setTimeout(() => {
//   console.log('3番目の処理');
// }, 1000);

// // 1番目の処理
// // 3番目の処理
// // 2番目の処理

// console.log('1番目の処理');

// // ※setTimeoutは、第二引数に指定したミリ秒後に第一引数のコールバック関数を実行する

// setTimeout(() => {
//   console.log('2番目の処理');
//   setTimeout(() => {
//     console.log('3番目の処理');
//   }, 1000);
// }, 2000);

// // 1番目の処理
// // 2番目の処理
// // 3番目の処理

// // コールバック地獄は、可読性の低下、改修コストの増加、
// // エラーハンドリングがしにくい、などのデメリットがあります。
// console.log('1番目の処理');

// setTimeout(() => {
//   console.log('2番目の処理');
//   setTimeout(() => {
//     console.log('3番目の処理');
//     setTimeout(() => {
//       console.log('4番目の処理');
//       setTimeout(() => {
//         console.log('5番目の処理');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   // 非同期処理を書く
//   // 引数に処理の結果として文字列を渡している
//   reject('非同期が失敗しました');
// });

// // reject関数が実行されるとcatchメソッドが実行される
// // reject関数の引数に渡した「非同期が失敗しました」がコールバック関数の引数であるerrに入ってくる
// promise.catch(err => {
//   // 非同期処理が失敗した後に実行したい処理を書く
//   console.log(err);
// });

// console.log(promise);


// 練習問題
// 問題 1

const returnPromise = () => {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject('エラーが発生しました');
    }, 3000);
  });
};

returnPromise().catch(err => {
  console.log(err);
});
