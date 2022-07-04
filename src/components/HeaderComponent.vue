<template>
  <v-card height="80">
    <v-app-bar class="dark--overlay-header" height="80" fixed id="inspire">
      <v-container>
        <v-row style="width:1000px" class="mx-auto">
          <v-col cols="2" class="text-center ma-auto">
            <v-hover v-slot="{ hover }">
              <router-link class="menu-item" :class="{'menu-item-hover':hover}" to="/stories">STORIES</router-link>

            </v-hover>
          </v-col>
          <v-col cols="2" class="text-center ma-auto">
            <router-link class="menu-item" to="/product">PRODUCT</router-link>
          </v-col>
          <v-col cols="4" class="pt-0 ma-auto">
            <router-link to="/">
              <Logo class="mx-auto"/>
            </router-link>
          </v-col>
          <v-col cols="2" class="text-center ma-auto">
            <router-link class="menu-item" to="/how-to-buy">HOW TO BUY</router-link>
          </v-col>
          <v-col cols="2" class="text-center ma-auto">
            <router-link class="menu-item" to="/">ABOUT US</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "HeaderComponent",
  components: {Logo}
}
</script>

<style scoped>
.menu-item {
  color: rgb(200, 171, 55) !important;
  font-family: Lato, sans-serif;
  font-weight: 600;
  font-size: 17px;
}

.menu-item:hover {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}


</style>
