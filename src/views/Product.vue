<template>
  <div>
    <v-img height="800" align="bottom" :src="require('../assets/images/product-back.jpg')">
      <v-card height="800" color="transparent" class="dark-back-custom">
        <div class="white--text mx-auto justify-center flex-column d-flex big-title-custom">
          Kyrgyz Honey is a reflection of long-standing practices of organic honey production. It is sourced from
          sainfoin (or esparcet) fields in the mountains of Issyk-Kul, one of the largest alpine lakes in the world.
        </div>
      </v-card>
    </v-img>
    <v-card min-height="800" color="#214a3b" class="dark--overlay">
      <vueper-slides fixed-height="120vh" :dragging-distance="50">
        <vueper-slide
            v-for="(slide, i) in info"
            :key="i"
            class="white--text text-h6"
        >
          <template #content>
            <v-card color="transparent" height="120vh" class="pt-15 dark--overlay">
              <v-container>
                <v-row class="flex-row-reverse">

                  <v-col cols="12" md="6">
                    <v-img class="mx-md-7 photo" height="400"
                           :src="slide.img"/>
                  </v-col>
                  <v-col cols="10" md="6" class="mx-auto">
                    <div class="white--text text-h3 text-lg-h1  text-left font-weight-medium">{{ slide.title }}</div>
                    <div class="tableparagraph text-left pt-4 pt-lg-8">
                      {{ slide.desc }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </template>
        </vueper-slide>
      </vueper-slides>
    </v-card>
  </div>
</template>

<script>
import {VueperSlide, VueperSlides} from "vueperslides";

export default {
  name: "ProductView",
  components: {
    VueperSlide, VueperSlides
  },
  data() {
    return {
      info: [
        {
          title: 'HONEY',
          desc: 'Sainfoin honey has been a Kyrgyz staple for centuries. What separates it from other types of honey\n' +
              '                      is its\n' +
              '                      story of an underdog. Local farmers underestimated key qualities of sainfoin nectar and mixed it\n' +
              '                      in water\n' +
              '                      to feed horses. It helped improve their stamina as it related to hunting and looking over other\n' +
              '                      livestock.',
          img: require('../assets/images/product1.png')
        },
        {
          title: 'UNIQUE\n',
          desc: 'While the reputation of “food for stables” shaped an underwhelming image of sainfoin in many households,' +
              ' it’s been ascending in its glory. It can truly be a treat on any table or a trip.',
          img: require('../assets/images/product2.png')
        },
        {
          title: 'NATURE',
          desc: 'Kyrgyz Honey doesn’t have any sucrose which makes it suit diabetic and sugarless diets. Its richness' +
              ' in minerals, ferments and vitamins improves the cardiovascular system and blood circulation.',
          img: require('../assets/images/product3.png')
        }
      ]
    }
  },
}
</script>

<style scoped>
.tableparagraph {
  max-width: 400px;
  font-family: Lato, sans-serif;
  color: #eee5d6;
  font-size: 18px;
  line-height: 30px;
  font-weight: 100;
  text-align: justify;
  text-indent: 0px;
}

.big-title-custom {
  font-size: 40px;
  max-width: 920px;
  height: 600px;
}

@media (max-width: 600px) {

  .big-title-custom {
    font-size: 20px;
  }

  .tableparagraph {
    font-size: 16px;
    line-height: 25px;
  }

}
</style>
