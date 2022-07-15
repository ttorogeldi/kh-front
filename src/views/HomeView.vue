<template>
  <div class="home">
    <video-background
        :src="require('../assets/videos/backvideo.mp4')"
        style="max-height: 90vh;height: 90vw"
        :sources="[
        {src: '<your-mobile-video-path>.mp4', res: 738, autoplay: true, poster: require('../assets/images/honey4.jpeg')}
    ]"
    >
      <div style="height: inherit">
        <div class="custom-title">KYRGYZ HONEY</div>
        <div class="custom-subtitle">Legacy and traditions reimagined for a new era</div>
      </div>
    </video-background>
    <div>
      <v-img height="1450" :src="require('../assets/images/back.jpg')">
        <v-card min-height="800" color="#214a3b" class="dark--overlay pt-15">
          <v-container fluid>
            <v-row>
              <div class="white--text text-h4 text-md-h3 font-weight-bold mx-auto">IDENTITY</div>
            </v-row>
            <v-row>
              <v-col cols="4" class="d-none d-lg-block">
                <v-img
                    lazy-src="../assets/images/lazy.gif"
                    height="550" class="mx-10 photo"
                    :src="require('../assets/images/photo1.jpeg')"/>
              </v-col>
              <v-col cols="10" lg="4" class="mx-auto">
                <p class="tableparagraph mx-auto">
                  &nbsp;&nbsp;&nbsp;&nbsp;Kyrgyz Honey represents the very essence of natural gifts often taken for
                  granted. Infused with traditions of excellence and ancestral craftsmanship, each bottle holds
                  sainfoin
                  honey of utmost quality.&nbsp;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Sainfoin, often overlooked by consumers, is a gentle symbol of the highland
                  landscapes we proudly call home. Carefully collected in the bee-gardens up in the mountains, the
                  final
                  product carries ancestral values of purity and excellence.
                </p>
              </v-col>
              <v-col cols="4" class="d-none d-lg-block">
                <v-img
                    class="mx-10 photo"
                    lazy-src="../assets/images/lazy.gif" height="550"
                    :src="require('../assets/images/photo2.jpeg')"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card min-height="650" color="transparent" class="dark-back-custom">
          <v-container style="height: 200px;" class="pt-15">
            <v-row>
              <v-col cols="10" class="mx-auto">
                <div class="text-h4 text-lg-h3 font-weight-bold pt-10 pt-md-15 white--text">THE HONEY</div>
                <p class="paragraff pt-8 mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our journey started in the sainfoin
                  fields of
                  Issyk-Kul near the foothills of Tien-Shan. Instantly recognizable pink hues became the backdrop to
                  what later turned into our brand.<br>&nbsp;&nbsp;&nbsp;&nbsp;With every cradle of flowers we create
                  the best in class product that presents honey in a whole new light. We look to reinvent the category
                  with a discerning eye to details and stories.&nbsp;<br></p>
              </v-col>
            </v-row>
          </v-container>

        </v-card>
      </v-img>
      <v-card max-height="800" color="#214a3b" class="dark--overlay">
        <vueper-slides fixed-height="50vw" class="d-md-none">
          <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide">
          </vueper-slide>
        </vueper-slides>
        <v-container class="d-none d-md-block pt-15" fluid>
          <v-row>
            <v-col cols="3">
              <v-img class="photo-blur"
                     lazy-src="../assets/images/lazy.gif" :src="require('../assets/images/honye1.jpeg')"></v-img>
            </v-col>
            <v-col cols="3">
              <v-img
                  class="photo-blur"
                  lazy-src="../assets/images/lazy.gif"
                  :src="require('../assets/images/honey2.jpeg')"></v-img>
            </v-col>
            <v-col cols="3">
              <v-img
                  class="photo-blur"
                  lazy-src="../assets/images/lazy.gif"
                  :src="require('../assets/images/honey3.jpeg')"></v-img>
            </v-col>
            <v-col cols="3">
              <v-img
                  class="photo-blur"
                  lazy-src="../assets/images/lazy.gif"
                  :src="require('../assets/images/honey4.jpeg')"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'HomeView',
  components: {VueperSlides, VueperSlide},
  data() {
    return {
      slides: [
        require('../assets/images/honye1.jpeg'),
        require('../assets/images/honey2.jpeg'),
        require('../assets/images/honey3.jpeg'),
        require('../assets/images/honey4.jpeg')
      ]
    }
  }
}
</script>
<style scoped>
.custom-title {
  font-family: Lato, sans-serif;
  font-size: 60px;
  color: white;
  height: 70px;
  margin-top: 135px;
  font-weight: 700
}

.custom-subtitle {
  color: #eee5d6;
  padding-top: 5px;
  font-size: 20px;
  line-height: 25px;
  font-weight: 300;
  text-align: center;
}

.paragraff {
  max-width: 900px;
  color: #eee5d6;
  font-size: 30px;
  line-height: 45px;
  font-weight: 500;
  text-align: justify;
}

.tableparagraph {
  color: #eee5d6;
  font-size: 30px;
  line-height: 40px;
  font-weight: 100;
  text-align: justify;
  text-indent: 0px;
}

.photo {
  -webkit-filter: grayscale(79%);
}

.photo:hover {

  -webkit-filter: grayscale(0);
  -webkit-transition: -webkit-filter 625ms ease;
  transition: -webkit-filter 625ms ease;
  transition: filter 625ms ease;
  transition: filter 625ms ease, -webkit-filter 625ms ease;
}

.photo-blur {
  filter: blur(1px);
  margin: 25px;
  transition: transform .4s;

}

.photo-blur:hover {
  opacity: 1;
  transform: scale(1.1);
  filter: blur(0px);
  margin: 0;;

}

@media (max-width: 700px) {
  .custom-title {
    font-size: 40px;
  }

  .paragraff {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    text-align: justify;
  }

  .custom-subtitle {
    font-size: 14px;
  }
}

@media (max-width: 500px) {
  .custom-title {
    margin-top: 75px;
  }

  .tableparagraph {
    font-size: 18px;
  }
}
</style>
