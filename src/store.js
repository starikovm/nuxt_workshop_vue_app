import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    wholeList: [],
    currentList: [],
    budget: 0
};

const mutations = {
    listLoaded (state, list) {
        state.wholeList = list;
        state.currentList = list;
    },
    updateCurrentList(state, currentList) {
        state.currentList = currentList;
    },
    updateBudget(state, budget) {
        state.budget = budget;
    }
};

const actions = {
    loadList ({ commit }) {
        fetch('/list.json')
            .then(response => response.json())
            .then(response => {
                commit('listLoaded', response);
            });
    },
    userBudgetUpdated({ commit, state: { wholeList }}, newBudget) {
        commit('updateBudget', newBudget);
        commit('updateCurrentList', wholeList.filter(item => item.price <= newBudget));

    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations
})