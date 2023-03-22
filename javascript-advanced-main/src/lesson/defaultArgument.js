// ここにコードを書きながら確認しましょう！
// デフォルト引数
// デフォルト引数に'Hello'を指定
function argFn(arg = 'Hello') {
  console.log(arg);
}

// 引数にundefinedを渡す
argFn(undefined);

function totalPrice(price, tax = 1.10) {
  return price * tax;
}
console.log(totalPrice(1000, 1.10)); // 1100
console.log(totalPrice(1000)); // 1100

// デフォルト引数
// 問題１
// rate = 5 デフォルト引数を指定
function discountRateCalc(price, rate = 5) {
  return price * (1 - rate * 0.01);
}
console.log(discountRateCalc(4500));
console.log(discountRateCalc(6000,20));
