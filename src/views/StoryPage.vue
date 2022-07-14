<template>
  <div>
    <v-img
        :src="require('../assets/images/back.jpg')"
        height="600"
        alt="center"
    >
      <v-card height="600" color="transparent" class="dark-back-custom">
        <v-container >
          <v-row class="mt-15 mx-10">
            <v-col class="mt-15">
              <h1 class="heading-16">We believe that the honey we produce can last for as long as over 100 years</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-img>
    <div class="dark--overlay">
      <v-container>
        <v-row class="mt-15">
          <v-col class="mt-15">
            <p class="stories">You can see the pink hues from afar. Slightly pale
              but bright sunlight gives the eye an illusion of watching an old tape from your family’s 90s archive.
              Little brown and beige houses somewhere in the distance remind you of where you are but not when.
              Landscapes around are still untouched by the industrial giants and are protected as sacred symbols of what
              this little country has to offer.&nbsp;</p>
            <p class="stories">If you trot the globe with nothing but a backpack and a dream, you’ll understand why
              Kyrgyzstan is still considered a wildly undiscovered corner of the world. While dangers of the climate
              crisis can be felt in bigger cities like Bishkek where activists ring the alarms, the further you go
              into the mountains the more untouched beauty will devour your eyes.</p>
            <p class="stories">The country is rarely in global headlines but its latest efforts in cultivating media
              coverage around local cultures and historic landmarks have been pulling in more international attention.
              Most of these campaigns come from content creators and travelers (although the government does have some
              contributions too) who spread the word (and images) across all major social networks. Many things first
              were cultural symbols and then turned into souvenirs. Honey quickly rose to high ranks amongst those
              things. </p>
            <p class="stories">Honey is a traditional Kyrgyz export. Any driver can stop by a small kiosk along many
              roads connecting the country together and buy a jar.</p>

            <p class="stories">You can see the pink hues from afar. Slightly pale but bright sunlight gives the eye an
              illusion of watching an old tape from your family’s 90s archive. Little brown and beige houses somewhere
              in
              the distance remind you of where you are but not when. Landscapes around are still untouched by the
              industrial giants and are protected as sacred symbols of what this little country has to offer.&nbsp;</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div style="background: #214a3b!important;">
      <v-container>
        <v-row>
          <v-col>
          </v-col>
          <v-row class="my-15"></v-row>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryPage"
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
  font-size: 70px;
  line-height: 130%;
  font-weight: 400;
  text-align: center;
  background-clip: border-box;
  -webkit-text-fill-color: inherit;
}
</style>
