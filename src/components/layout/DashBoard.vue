<template>
  <div>
    <div class="container-fluid" style="height: 100vh">
      <div class="row">
        <nav class="col-md-3 p-0 sidenav">
          <div class="d-flex flex-column h-100" >
            <div class="">
              <div class="p-1 d-flex">
                <img :src="require('@/assets/ff_logo.png')" class="nav-logo">
                <div class="pt-3 sidebarTitle">
                  DataDashBoard
                </div>
              </div>
              <ul class="nav d-flex flex-column">
              <li class="nav-item">
                <router-link :to="{name: 'overview'}" class="nav-link p-1">
                  Overview
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'overview.animals'}" class="nav-link p-1">
                  Animals
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'overview.food'}" class="nav-link p-1">
                  Food
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'overview.music'}" class="nav-link p-1">
                  music
                </router-link>
              </li>
            </ul></div>
       
            <div class="mt-auto border-top">
       
                <ul class="nav">
                  <li class="nav-item">
                    <router-link :to="{name: 'overview.settings'}" class="nav-link p-1">
                      Settings
                    </router-link>
                    <router-link :to="{name: 'overview.logout'}" class="nav-link p-1">
                      logout
                    </router-link>
                  </li>
                </ul>
                <p class="text-center p-0">
                  <small>&copy; Firefly 2019</small>
                </p>
            </div>
          </div>
         
        </nav>

        <main role="main" class="col-md-9 p-0 ff-background" style="height: 100vh; overflow: scroll">

          <router-view></router-view>
        
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {mapGetters} from "vuex";

  export default Vue.extend({
   
  });
</script>
