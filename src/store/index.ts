import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artists:[
      {
        id:1,
        name: 'The Wiggles',
        play: 86340,
        songs: 189
      },
      {
        id:2,
        name: 'Dolly Parton',
        play: 86333,
        songs: 244
      },

      {
        id:3,
        name: 'Wellington International Ukulele Orchestra',
        play: 85023,
        songs: 12
      },
    ]
  },
  mutations: {
    removeArtist(state, artist:any){
      const index = state.artists.findIndex((thisArtist)=>{
        return thisArtist.id===artist.id;
      });
     
     Vue.delete(state.artists, index);

    },
  },
  actions: {
    
  },
  getters:{
    getArtists(state, getters) {
      return [...state.artists.sort()];
    },
  },
  modules: {},
});
