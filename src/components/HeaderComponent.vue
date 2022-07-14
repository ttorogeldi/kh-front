<template>
  <div>
    <v-card height="82">
      <v-app-bar class="dark--overlay-header" height="82" fixed id="inspire">
        <v-container class="d-md-none px-0" fluid>
          <v-row class="py-0 px-0">
            <v-col cols="2" class="pt-0 pl-0">
              <a
                  href="/">
                <Logo/>
              </a>
            </v-col>
            <v-col cols="1" class="mr-0 ml-auto justify-center flex-column d-flex">
              <v-icon class="d-md-none" @click="drawer=!drawer" color="rgb(203 176 67)">mdi-reorder-horizontal</v-icon>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="d-none d-md-block">
          <v-row style="max-width:1000px" class="mx-auto">
            <v-col cols="2" class="text-center ma-auto">
              <v-hover v-slot="{ hover }">
                <a class="menu-item" :class="{'menu-item-hover':hover}" href="/stories">STORIES</a>
              </v-hover>
            </v-col>
            <v-col cols="2" class="text-center ma-auto">
              <a class="menu-item" href="/product">PRODUCT</a>
            </v-col>
            <v-col cols="4" class="pt-0 ma-auto">
              <a
                  href="/">
                <Logo class="mx-auto"/>
              </a>
            </v-col>
            <v-col cols="2" class="text-center ma-auto">
              <a class="menu-item" href="/how-to-buy">HOW TO BUY</a>
            </v-col>
            <v-col cols="2" class="text-center ma-auto">
              <a class="menu-item" href="/">ABOUT US</a>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        right
        color="#214a3b"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <a
                href="/">
              <Logo class="mx-auto"/>
            </a>
            <v-icon class="ml-auto mr-0" @click="drawer=!drawer" color="rgb(203 176 67)">mdi-reorder-horizontal</v-icon>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a class="menu-item" :class="{'menu-item-hover':hover}" href="/stories">STORIES</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a class="menu-item" href="/product">PRODUCT</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a class="menu-item" href="/how-to-buy">HOW TO BUY</a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a class="menu-item" href="/">ABOUT US</a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "HeaderComponent",
  components: {Logo},
  data() {
    return {
      drawer: false,
    }
  }
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
