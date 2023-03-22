// ここにコードを書きながら確認しましょう！
// 定義
// const 変数名 = function(引数) {
//   処理の内容
// };

// const 変数名 = (引数) => {
//   処理の内容
// };

// 引数を1つ受け取っている
// const arrowFn = (arg) => {
//   console.log(arg);
// };

// ↓ 修正 ↓

// // 引数が一つなので()を省略して書くことができる
// const arrowFn = arg => {
//   console.log(arg);
// };

// // 引数が2つなので()は省略できない
// const arrowFn = (title, author) => {
//   console.log(arg, author);
// };

// // 引数を受け取っていないので、()は省略できない
// const arrowFn = () => {
//   console.log('Gizumo');
// };

// const arrowFn = num => {
//   // 処理が1つの式で完結している
//   return num * 10;
// };

// ↓ 修正 ↓

// 処理が1つの式で完結しているため、return文と{}が省略できる
const arrowFn = num => num * 10;



// 練習問題
// 問題 1
// 関数testFnの引数に'group’を代入
const testFn = name => `Gizumo ${name}`;

console.log(testFn('group')); //Gizumo group
