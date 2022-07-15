<template>
  <div class="how-to-buy-custom">
    <v-card color="transparent" style="" height="600">
      <div class="white--text mx-auto justify-center flex-column d-flex big-title-custom">
        The honey we produce is Bio-genuine pure raw honey
      </div>
    </v-card>
    <v-card min-height="800" color="#214a3b" class="dark--overlay pt-md-15">
      <v-container>
        <v-row class="mt-15">
          <v-col cols="12" md="6" class="px-0">
            <v-img class="mx-5 photo" height="350" position="bottom"
                   :src="require('../assets/images/product3.png')"/>
          </v-col>

          <v-col cols="12" md="6">
            <div class="white--text text-center font-weight-bold title-custom">Kyrgyz Honey</div>
            <div class="white--text mx-auto text-center font-weight-medium" style="max-width: 360px;font-size: 18px">
              Organic
              honey(raw honey) produced in
              non-polluted wild fields of Kyrgyzstan.
            </div>
            <div style="max-width: 290px; font-size: 14px" class="mx-auto text-left white--text pt-5">
              <p class="font-weight-light">Water/Moisture content - not more than 21%;<br>Diastatic number – not less
                than
                7%;<br>Reductive sugars, mass – not less than 82 %;<br>Sucrose percentage – not more than 6%;&nbsp;<br>No
                radioactive or heavy metal additives.&nbsp;<br>No antibiotics – tetracycline, chlortetracycline,
                oxytetracycline, streptomycin, cholarphenicol.</p>
            </div>

            <div class="white--text text-h5 mt-10">100 $ / Jar</div>
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

.title-custom {
  font-size: 70px;
  font-weight: 700 !important;
}

.big-title-custom {
  font-size: 80px;
  font-weight: 700 !important;
  max-width: 920px;
  height: 600px;
}

@media (max-width: 600px) {

  .big-title-custom {
    font-size: 40px;
  }

  .title-custom {
    font-size: 40px;
  }

}
</style>
