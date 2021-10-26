import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  getters,
  mutations,
  actions,
  modules: {
    count
  }
  // getters: {
  // doubleCount: state => state.count * 2,
  // tripleCount: state => state.count * 3,
  // message: state => state.message
  // },
  // mutations: {
  //   increment(state, number) {
  //     state.count += number;
  //   },
  //   decrement(state, number) {
  //     state.count -= number;
  //   },
  //   updateMessage(state, newMessage) {
  //     state.message = newMessage
  //   }
  // },
  // actions: {
  //   increment(context, number) {
  //     context.commit('increment', number)
  //   },
  //   decrement(context, number) {
  //     context.commit('decrement', number)
  //   },
  //   updateMessage({ commit }, newMessage) {
  //     commit("updateMessage", newMessage);
  //   },
});