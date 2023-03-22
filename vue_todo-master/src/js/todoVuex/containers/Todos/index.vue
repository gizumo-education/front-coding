<template>
  <app-wrapper>
    <!-- ③タグを追加してhtmlを表示させる -->
    <app-navi />
    <app-register
      v-if="todoFilter !== 'completedTodos'"
    />
    <app-error-message
      v-if="errorMessage"
    />
    <template v-slot:todos>
      <app-list
        v-if="todos.length"
        :todos="todos"
      />
      <app-empty-message
        v-if="todos.length !== 0 && errorMessage !==''"
      />
    </template>
  </app-wrapper>
</template>

<script>
// ①使うコンポーネントをインポートする
import Wrapper from 'TodoVuexDir/components/Wrapper/index.vue';
import { ErrorMessage, EmptyMessage } from 'TodoVuexDir/components/Message';
import Register from 'TodoVuexDir/components/Register/index.vue';
import List from 'TodoVuexDir/components/List/index.vue';
import Navi from 'TodoVuexDir/components/Navi/index.vue';

export default {
  components: {
    // ②コンポーネントに入れる→→タグの名前：componentの名前
    appWrapper: Wrapper,
    appErrorMessage: ErrorMessage,
    appEmptyMessage: EmptyMessage,
    appList: List,
    appRegister: Register,
    appNavi: Navi,
  },
  computed: {
    todoFilter() {
      return this.$store.state.todoFilter;
    },
    todos() {
      if (this.todoFilter === 'allTodos') {
        return this.$store.state.todos;
      }
      return this.$store.getters[this.todoFilter];
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
  },
  watch: {
    todos(todos) {
      if (!todos.length) this.$store.dispatch('setEmptyMessage', this.todoFilter);
    },
    $route(to) {
      this.$store.dispatch('setTodoFilter', to.name);
    },
  },
  // vueインスタンスが初期化されたあとに実行されるので、リロードされるちょっと前に
  // 呼び出す必要があるものはここで呼び出す
  created() {
    // dispatchはactionを呼ぶ
    this.$store.dispatch('getTodos');
    this.$store.dispatch('setTodoFilter', this.$route.name);
  },
};
</script>
