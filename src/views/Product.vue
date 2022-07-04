<template>
  <div>
    <v-img height="800" align="bottom" :src="require('../assets/images/product-back.jpg')">
      <v-card height="800" color="transparent" class="dark-back-custom"/>
    </v-img>
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
  name: "ProductView",
  data() {
    return {}
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
}
</script>

<style scoped>
.tableparagraph {
  min-width: 400px;
  font-family: Lato, sans-serif;
  color: #eee5d6;
  font-size: 18px;
  line-height: 30px;
  font-weight: 100;
  text-align: justify;
  text-indent: 0px;
}
</style>
