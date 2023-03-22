// ここにコードを書きながら確認しましょう！
// const hoge = 'hoge';

// // 変数hogeをnamed exportによってエクスポートしている
// export { hoge };

const hoge = 'hoge';

// 追加
export function testFn(text) {
  return `Hello ${text}`;
};

export { hoge };

console.log(testFn(hoge));


// 練習問題
// 問題 1
const nameFn = () => {
  return 'Gizumo taro';
};

const calcFn = (num) => {
  return num * 10;
};

export { nameFn, calcFn };