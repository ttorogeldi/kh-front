<template>
  <div>
    <vueper-slides fixed-height="100vh" :dragging-distance="50" :parallax="1" :parallax-fixed-content="false">
      <vueper-slide
          v-for="(slide, i) in info"
          :key="i"
          :image="'http://ttorogf2.beget.tech/uploads/'+slide.thumbnail"
          :title="slide.title"
          :content="slide.description"
          class="white--text text-h6"
          :link="'/story'"
      >
        <template #content>
          <v-card color="transparent" height="150vh" class="dark--overlay-stories">
            <v-container class="white--text">
              <v-row>
                <v-col>
                  <h1 class="align-center" style="padding-top: 80vh;">{{ slide.title }}</h1>

                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div class="mx-15 mt-15 stories">{{ slide.description }}</div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import axios from "axios";
import {VueperSlide, VueperSlides} from "vueperslides";

export default {
  name: "StoriesView",
  components: {
    VueperSlide, VueperSlides
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
.stories {
  background-image: linear-gradient(238deg, #daa3f3, #b8ffb0);
  color: #eee5d6;
  font-size: 25px;
  line-height: 130%;
  text-align: justify;
  text-indent: 40px;
  font-weight: bold;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
