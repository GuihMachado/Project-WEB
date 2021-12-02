import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {
        title: "THE SCOTTS",
        author: "Travis Scott",
        rating: 5,
        year: 2020
      },
      {
        title: "ESCAPE PLAN",
        author: "Travis Scott",
        rating: 4.8,
        year: 2021
      },
      {
        title: "The Real Slim Shady",
        author: "Eminem",
        rating: 4.7,
        year: 2010
      },
      {
        title: "Mirror Masa",
        author: "Dathan",
        rating: 4.6,
        year: 2015
      },
      {
        title: "Nothing",
        author: "Virtual Riot, Modestep",
        rating: 4.5,
        year: 2019
      },
      {
        title: "Bem melhor",
        author: "Mc Hariel, Mc Lipi",
        rating: 4.5,
        year: 2021
      },
      {
        title: "Eleanor Rigby",
        author: "The Beatles",
        rating: 4.4,
        year: 2016
      },
      {
        title: "Celine",
        author: "Matuê",
        rating: 4.3,
        year: 2017
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
