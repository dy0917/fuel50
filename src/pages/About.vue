<template>
  <div style="overflow-y: scroll">
    <b-alert v-model="welcomeInfo" variant="info">
      <div class="text-center">
        <h3>Welcome!</h3>
        <p>Before you get to carried away, do you agree to us collecting anonimized statistics about your usage of our app?</p>
        <div class="d-flex justify-content-center">
          <b-button class="mr-2" pill variant="outline-secondary" @click="disMissAlert"><b-icon icon="x" style="color: red"></b-icon>Disagree</b-button>
          <b-button pill variant="info"><b-icon icon="check" @click="disMissAlert" style="color: green;"></b-icon>Agree</b-button>
        </div>
      </div>
     
    </b-alert>
    <div class="container">
      <h3>Overview</h3>
      <div class="d-flex">
        <div class="col-md-4 block">
          <div class="circle" >
            <div class='pt-5'>
              <h3>198</h3>
              <small><b-icon icon="arrow-down"></b-icon>84 <i>last 30 days</i></small>
            </div>
         
          </div>
          Cat videos watched
        </div>
        <div class="col-md-4 block">
          <div class="circle" style="background-color: green">
            <div class='pt-5'>
              <h3>5</h3>
              <small><b-icon icon="arrow-up"></b-icon>2 <i>last 30 days</i></small>
            </div>
          </div>
          Slices of pizza in the fridge
        </div>
        <div class="col-md-4 block">
          <div class="circle" style="background-color: green">
            <div class='pt-5'>
            <h3>1,324</h3>
            <small><b-icon icon="arrow-up"></b-icon>23 <i>last 30 days</i></small>
            </div>
          </div>
          Favourite songs beginning with the letter 'A'
        </div>
      </div>
    </div>
    
    <div class="container">
      <h3>Top music</h3>
      <div class="p-3" style="background-color: white">
        <b-tabs 
                nav-class="ff_top_music" small card>
          <b-tab title="Artists">

            <table class="table">
              <thead class="table-header">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Artist</th>
                <th scope="col">Plays</th>
                <th scope="col">Handle</th>
                <th scope="col"></th>
              </tr>
              </thead>
             
              <tbody>
              <tr v-for="(artist) in sortResult()" v-bind:key="artist.id">
                <th scope="row">{{artist.id}}</th>
                <td>{{artist.name}}</td>
                <td>{{dollarFormat(artist.play)}}</td>
                <td>{{artist.songs}}</td>
                <td>
                  <b-icon icon="trash-fill" class="mr-2 " style="color:red" @click="removeArtist(artist)"></b-icon>
                  <b-icon icon="share-fill" style="color:#17a2b8"></b-icon>
                </td>
              </tr>
              </tbody>
            </table>
          
          </b-tab>
          <b-tab title="Songs">
            I'm the second tab
          </b-tab>
          <b-tab title-item-class="mr-auto">
            <template #title>
              Moods
              <b-badge variant="warning">21</b-badge>
            </template>
          </b-tab>
      
          <template v-slot:tabs-end >
            <div class="w-50 d-flex justify-content-end">
              <p class=" mt-2">Order by</p>
              <b-form-select class="w-50 btn ff-rounded-pill" v-model="sortId" :options="['Most play', 'Handle','No sort']"></b-form-select>
            </div>
          </template>
        </b-tabs>
        <div class="d-flex justify-content-end">
          <b-button pill variant="info">View more music data ></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {mapGetters} from "vuex";

  export default Vue.extend({
    computed:{
      ...mapGetters(['getArtists']),
      sortResult(){
        return ()=>{
          if(this.sortId){
            if(this.sortId==='Most play'){
            return this.getArtists.sort((a:any,b:any)=>{
              return b.play-a.play
            })
            }
            else if(this.sortId==='Handle'){
              return this.getArtists.sort((a:any,b:any)=>{
                return b.songs- a.songs
              })
            }
            else{
              return this.getArtists.sort((a:any,b:any)=>{
                return a.id- b.id
              });
            }
          }
          return this.getArtists.sort((a:any,b:any)=>{
            return a.id- b.id
          });
        }
      },
      dollarFormat(){
        return (number)=>{
             return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
      },
    },
    data(){
      return {
        welcomeInfo: true,
        sortId:undefined
      }
    },
    methods: {
      disMissAlert(){
        this.welcomeInfo = false
      },
      removeArtist(artist){
        this.$store.commit('removeArtist',artist);
      }
    }
  });
</script>
