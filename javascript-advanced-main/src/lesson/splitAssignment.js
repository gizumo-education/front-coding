// ここにコードを書きながら確認しましょう！
// 分割代入
const array = ['one', 'two', 'three'];
const [ hoge, fuga, piyo ] = array;

console.log(hoge); // one
console.log(fuga); // two
console.log(piyo); // three

function testFn() {
  return ['Hello', 2022];
}

const [text, year] = testFn();
console.log(text); // Hello
console.log(year); // 2022

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place: 'Shibuya',
// };

// // nameとestablishedの並び順がプロパティと同じではないが問題ない
// const { established, name, place } = gizumo;

// console.log(name); // Gizumo
// console.log(established); // 2015年5月15日
// console.log(place); // Shibuya

// const gizumo = {
//   name: 'Gizumo',
//   established: '2015年5月15日',
//   place: 'Shibuya',
// };

// // valueの部分に使用したい変数名を記述
// const { name: companyName } = gizumo;

// console.log(companyName); // Gizumo

const gizumo = {
  name: 'Gizumo',
  established: '2015年5月15日',
  place: 'Shibuya',
  course: {
    frontend: 'Vue',
    backend: 'Laravel',
  },
};

const { course: { frontend, backend }} = gizumo;
console.log(frontend); // Vue
console.log(backend); // Laravel

// 問題１
const arg = 'JavaScript';
function arrayFn(arg) {
  return ['jQuery', 'Vue', arg];
}

const [ mou, papiko, pino ] = arrayFn(arg);


console.log(mou); //jQuery
console.log(papiko); //Vue
console.log(pino); //JavaScript

// 問題２
function objectFn({ name }) {
  console.log(name);
}

const argObject = {
  name: 'Gizumo',
  place: 'Shibuya',
};

// const { name } = argObject;

objectFn(argObject);
