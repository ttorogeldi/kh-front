<template>
  <v-app id="app">
    <HeaderComponent/>
    <div style="min-height: 700px">
      <router-view/>
    </div>
    <FooterComponent/>
  </v-app>
</template>

<style lang="scss">
@font-face {
  font-family: "Lato";
  src: url("./assets/fonts/Lato/Lato-Light.ttf");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #214a3b;
}

a {;
  text-decoration: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import eventBus from './plugins/eventBus.js'
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent},
  methods: {
    callGlobalCustomEvent() {
      eventBus.$emit('custom-event') // если ChildComponent примонтирован, то появится сообщение в консоли
    }
  }
}
</script>
