import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {
        title: "THE SCOTTS",
        author: "Travis Scott",
        rating: 5
      },
      {
        title: "ESCAPE PLAN",
        author: "Travis Scott",
        rating: 4.8
      },
      {
        title: "The Real Slim Shady",
        author: "Eminem",
        rating: 4.7
      },
      {
        title: "Mirror Masa",
        author: "Dathan",
        rating: 4.6
      },
      {
        title: "Nothing",
        author: "Virtual Riot, Modestep",
        rating: 4.5
      },
      {
        title: "Bem melhor",
        author: "Mc Hariel, Mc Lipi",
        rating: 4.5
      },
      {
        title: "Eleanor Rigby",
        author: "The Beatles",
        rating: 4.4
      },
      {
        title: "Celine",
        author: "Matuê",
        rating: 4.3
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
