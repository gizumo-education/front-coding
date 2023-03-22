// ここにコードを書きながら確認しましょう！
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(...numbers); // 1 2 3 4 5

// 配列を複製する
// const numbers = [1, 2, 3, 4, 5];

// const copyNumbers = [...numbers];

// console.log(copyNumbers); // [1, 2, 3, 4, 5]

// 値を追加して新しい配列を作成
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]

// 配列のマージ
const animal = ['cat', 'dog'];
const fruit = ['apple', 'orange'];

const mergeArray = [...animal, ...fruit];

console.log(mergeArray); // ['cat', 'dog', 'apple', 'orange']

// プロパティを定義しながらオブジェクトを作成
// const company = {
//   name: 'Gizumo',
//   place: 'Shibuya',
// };

// // スプレッド構文でcompanyを展開し、展開したものをオブジェクトリテラル{}の中に入れている
// const copy = { ...company };

// console.log(copy); // { name: 'Gizumo', place: 'Shibuya' }

const company = {
  name: 'Gizumo',
  place: 'Shibuya',
  established: '2015年5月15日',
};

const updateProperty = {
  name: 'Front End',
};

const updatedCompanyInfo = { ...company, ...updateProperty };
console.log(updatedCompanyInfo);
// { name: 'Front End', place: 'Shibuya', established: '2015年5月15日' }


// 練習問題
// 問題 1
// packageManagerとframeworkをマージ
const packageManager = ['npm', 'yarn', 'pnpm'];

function arrayFn(packageManager) {
  const framework = ['Vue', 'React', 'Svelte'];
  const array = [...packageManager, ...framework];
  return array;
}

console.log(arrayFn(packageManager));


// 問題 2
// objectAとobjectBをマージして、新しいプロパティを追加したオブジェクトを作成
const objectA = {
  language: 'JavaScript',
  framework: 'Vue',
  version: 2,
};

const objectB = {
  version: 3,
};

const updatedObject = {...objectA, ...objectB, routingLibrary: 'Vue Router'};
console.log(updatedObject);