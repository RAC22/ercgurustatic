<template>
  <section
    :class="
      this.$vuetify.theme.dark
        ? 'grey darken-4 primary--text text--lighten-1'
        : 'grey lighten-2 primary--text'
    "
    class="primary--text py-16"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12" sm="7" class="text-center">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"
              >
                It Couldn't Be Easier
              </h2>

              <p>
                Answer a few questions about your business to see if it
                qualifies for the ERC credit in just a few minutes.
              </p>
            </v-col>
            <v-col align-self="center" cols="12" sm="5" class="text-center">
              <v-btn x-large color="primary" rounded @click="gotoForm"
                >Prequalify Now</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  methods: {
    gotoForm() {
      this.$router.push('/qualify')
    },
  },
}
</script>
