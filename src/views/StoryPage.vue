<template>
  <div>
    <div class="dark--overlay">
      <v-container>
       <v-row class="mt-15">
         <v-img
             :src="'http://ttorogf2.beget.tech/uploads/'+info.thumbnail"
             height="600"
             alt="center"
         >
         </v-img></v-row>
        <v-row class="mx-10">
          <v-col class="mt-15">
            <h3 class="heading-16">{{info.title}}</h3>
          </v-col>
        </v-row>
        <v-row class="mb-15">
          <v-col class="mt-10 mb-15 stories" v-html="info.description">
          </v-col>
        </v-row>
      </v-container>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StoryPage",
  data(){
    return{
      id: null,
      info: {}
    }
  },
  async mounted() {
    this.id = location.search.slice(4)
    await axios
        .get('http://ttorogf2.beget.tech/api/article/'+ this.id)
        .then(response => {
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
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.heading-16 {
  color: #eee5d6;
  font-size: 50px;
  line-height: 130%;
  font-weight: 400;
  text-align: center;
  background-clip: border-box;
  -webkit-text-fill-color: inherit;
}
</style>
