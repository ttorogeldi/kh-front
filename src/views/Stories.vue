<template>
  <div>
    <v-img
        :src="require('../assets/images/back.jpg')"
        height="600"
        alt="center"
    >
      <v-card height="600" color="transparent" class="dark-back-custom">
        <div class="white--text text-h2 mx-auto font-weight-medium" style="width: 800px;padding-top: 150px">We believe that the honey we
          produce can last for as long as over 100 years
        </div>
      </v-card>
    </v-img>
    <div class="dark--overlay">

      <v-container>
        <v-row class="my-12">
          <carousel-3d
              v-if="info!==null"
              style="width: 1200px"
              class="mx-auto"
              :disable3d="true"
              :display="7"
              :space="1270"
              :width="950"
              :border="0"
              :height="400"
              :clickable="false"
              :autoplay="true"
          >
            <slide style="background: transparent" v-for="(item,index) in info"  :index="index" :key="item.id">
                <v-card
                    elevation="0"
                    color="transparent"
                    style="overflow: hidden; text-overflow: ellipsis"
                    height="400"
                >
                  <v-img
                      class="white--text align-end"
                      height="300px"
                      :src="'http://ttorogf2.beget.tech/uploads/'+item.thumbnail"
                  >
                  </v-img>

                  <v-card-title
                      style="color: rgb(255,255,255) !important; overflow: hidden; text-overflow: ellipsis; height: 45px"
                  >{{ item.title }}
                  </v-card-title>
                  <div
                      style="color: rgb(239,239,239) !important;"
                      class="text-left pa-2 mb-2">{{ item.description }}
                  </div>
                </v-card>


            </slide>
          </carousel-3d>
        </v-row>
        <v-row>
          <v-row class="my-15"></v-row>
        </v-row>
      </v-container>
    </div>
    <div style="background: #214a3b!important;">
      <v-container>
        <v-row class="my-12"></v-row>
        <v-row>

          <v-row class="my-15"></v-row>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: "StoriesView",
  components:{
    Carousel3d,
    Slide
  },
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
        .get('http://ttorogf2.beget.tech/api/article')
        .then(response => {
          console.log(response)
          this.info = response.data
        });
  }
}
</script>

<style scoped>

</style>
