<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>
    <section>
      <v-container style="max-width: 650px; min-height: 300px">
        <v-progress-linear
          height="13"
          class="mb-10"
          value="100"
          rounded
          animated
        ></v-progress-linear>
        <h1>
          We're sorry. Based on your responses, you do not qualify for the ERC
          Program.
        </h1>
      </v-container>
    </section>
    <v-divider class="mx-16"></v-divider>
    <v-container style="max-width: 300px" class="pb-16">
      <v-row class="d-flex justify-space-between">
        <v-btn class="my-4 py-6 pr-6 pl-4" color="secondary" @click="backLogic"
          ><img src="../static/images/chevron-left.svg" />Back</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { store } from '~/middleware/store.js'
export default {
  data() {
    return {
      store,
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3830745.jpg',
          heading: ' Qualification Form ',
        },
      ],
    }
  },
  created() {
    store.government_entity = Boolean
    store.w2_wages_paid = Boolean
    store.fte_2019 = String
  },
  methods: {
    backLogic() {
      this.$router.push('/qualify')
    },
  },
  head() {
    return {
      title: "We're sorry",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
