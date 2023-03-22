// 必要な関数をモジュールからインポートする
import $axios from './axiosHelper.js';
import createErrorElement from './createElement.js';



window.addEventListener('DOMContentLoaded', () => {
  // ここに処理を書いていく
  $axios.get(`https://pokeapi.co/api/v2/pokemon/${pictureBookId}`).then(({ data }) => {
  // API通信が成功した時の処理

  // ポケモンの画像url
  const imgPath = data.sprites.other['official-artwork'].front_default;
  // 日本語訳のリクエスト先url
  const jaRequestUrl = data.species.url;
  $axios.get(jaRequestUrl).then(({ data }) => {
    // ポケモン名の日本語訳
  const characterName = data.names[0].name;
    //取得したポケモンの情報をもとに表示するHTML要素を作成
  const imgElement = `<img src="${imgPath}" width="475" height="475" alt="" class="character__img">`;
  const nameElement = `<p class="character__name">${characterName}</p>`;
  const fragment = createElements(imgElement + nameElement);
  
  console.log(jaRequestUrl);
  // 作成したHTML要素をDOMに反映
  characterElement.appendChild(fragment);
  }).catch(() => {
  // リクエストに失敗した場合はエラーメッセージを表示
  formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
  });

}).catch(error => {
  // API通信が失敗した時の処理
  // リクエストに失敗した場合はエラーメッセージを表示
  switch (error.response && error.response.status) {
    case 404:
      formElement.after(createErrorElement(error.message));
      break;
    default:
      formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
      break;
  }
});
});