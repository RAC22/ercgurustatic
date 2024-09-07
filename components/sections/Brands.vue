<template>
  <section
    id="sponsors"
    :class="this.$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-2'"
  >
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" align-self="center">
          <h3
            :class="$vuetify.theme.dark ? 'grey--text' : null"
            class="text-h4 text-center font-weight-light mb-xs-4"
          >
            AS SEEN ON
          </h3>
        </v-col>
        <v-col cols="12" sm="8">
          <v-slide-group draggable="true">
            <v-slide-item
              v-for="(logo, index) in brandsLogo"
              :key="`eh${index}`"
              class="custom-slide-group"
            >
              <v-card
                :class="$vuetify.theme.dark ? 'white' : 'grey lighten-4'"
                class="mx-4 pa-0 px-2"
                height="90"
                width="140"
                flat
              >
                <v-img height="90" contain :src="`/brands/${logo}`"></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      brandsLogo: [
        'digitaljournal.png',
        'fox28.png',
        'globaltribune.png',
        'investorplace.png',
        'kmlk.png',
        'fox40.png',
        'ncn.png',
        'penney.png',
        'podcastpark.png',
        'newsnet.png',
        'starbusiness.png',
        'thetimes.png',
        'snnews.png',
      ],
    }
  },
}
</script>
<style>
.custom-slide-group {
  animation: slideAnimation 30s linear infinite forwards;
}

@keyframes slideAnimation {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-1300%);
  }
}
</style>
