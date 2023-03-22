import Todos from 'TodoRouterDir/containers/Todos/index.vue';
// ↑ページを構成しているファイル(ページのコンポーネント)をインポートしている
const routes = [
  // 配列のなかにオブジェクトとしてルーティングの指定を書いている
  {
    name: 'allTodos',
    path: '/',
    component: Todos,
  },
  {
    name: 'completedTodos',
    path: '/completed',
    component: Todos,
  },
  {
    name: 'incompleteTodos',
    path: '/incomplete',
    component: Todos,
  },
];

export default routes;
