import ApiService from "@/services/ApiService";

const state = {
  currentUser: null,
};

const getters = {
  getCurrentUser: state => state.currentUser
};

const mutations = {
  setCurrentUser(state, messages) {
    state.currentUser = messages;
  },
  
};

const actions = {
  async fetchMessages({ commit },payload ) {
    const { userName, password } = payload;
    const response = await ApiService.get('login?userName='+userName+'&password='+password);

    if (response.status === 200) {
      commit('setCurrentUser', response.data);
    }else throw new Error('Invalid username or password');
    
  },

  cleanCurrentUser({ commit }) {
    commit('setCurrentUser', null);
  }
  
};

export default {
  state,
  getters,
  mutations,
  actions
};
