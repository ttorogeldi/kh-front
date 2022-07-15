<template>
  <div class="dark--overlay" style="min-height: 110vh">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
            v-for="(slide, i) in info"
            :key="i">
          <v-img
              height="300"
              width="400"
              lazy-src="../assets/images/lazy.gif"
              :src="'http://ttorogf2.beget.tech/uploads/'+slide.thumbnail"
              class="mx-auto  mt-1 white--text text-h6 stories"
              @click="go(slide.id)"
          >
            <v-card color="transparent" height="150vh" class="dark--overlay-stories">
              <v-container>
                <v-row>
                  <v-col>
                    <h3 class="mt-15  white--text">{{ slide.title }}</h3>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "StoriesView",
  components: {},
  data() {
    return {
      info: null
    }
  },
  methods: {
    go(id) {
      this.$router.push('/story?id='+id);
    }
  },
 async mounted() {
    await axios
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
  transition: transform .2s;
}

.stories:hover {

  opacity: 1;
  transform: scale(1.05);
}
</style>
