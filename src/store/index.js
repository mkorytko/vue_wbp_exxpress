import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    age: 55,
    users: [
      { name: "Alex", age: 22 },
      { name: "Maria", age: 30 },
      { name: "Alexander", age: 12 },
      { name: "Lolla", age: 15 },
      { name: "Jane", age: 20 },
    ],
  },
  mutations: {
    birthdayYear(state, n) {
      new Date().getFullYear() - state.age;
    },
  },
  getters: {
    // вычисляют текущее состояние
    checkAge: (state, getters) => {
      // getters - другие геттеры
      return state.users.filter(user => user.age > 18);
    }
  },
  actions: {}
});
