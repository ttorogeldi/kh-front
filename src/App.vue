<template>
  <v-app id="app">
    <HeaderComponent/>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
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

export default {
  components: {HeaderComponent},
  methods: {
    callGlobalCustomEvent() {
      eventBus.$emit('custom-event') // если ChildComponent примонтирован, то появится сообщение в консоли
    }
  }
}
</script>
