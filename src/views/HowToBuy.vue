<template>
  <div class="how-to-buy-custom">
    <v-card color="transparent" style="" height="600">
      <div class="white--text text-h2 mx-auto" style="width: 940px">The honey we produce is Bio-genuine pure raw honey
      </div>
    </v-card>
    <v-card height="800" color="#214a3b" class="dark--overlay pt-15">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="white--text text-h1 text-left font-weight-medium">HONEY</div>
            <div class="tableparagraph text-left" style="width: 400px">
              Sainfoin honey has been a Kyrgyz staple for centuries. What separates it from other types of honey is its
              story of an underdog. Local farmers underestimated key qualities of sainfoin nectar and mixed it in water
              to feed horses. It helped improve their stamina as it related to hunting and looking over other livestock.
            </div>
          </v-col>
          <v-col cols="6">
            <v-img class="mx-10 photo" height="550" :src="require('../assets/images/photo2.jpeg')"/>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HowToBuy"
}
</script>

<style scoped>
.how-to-buy-custom {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url("../assets/images/how-back.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
