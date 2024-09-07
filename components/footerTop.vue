<template>
  <section
    id="footer-top"
    :class="
      $vuetify.theme.dark
        ? 'blue-grey darken-4 grey--text text--lighten-1'
        : 'grey lighten-3 grey--text text--darken-4'
    "
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="py-8"
          ><v-row no-gutters>
            <v-col cols="12" class="d-flex justify-center">
              <Logo />
            </v-col>
            <v-col cols="12">
              <v-divider class="mt-4"></v-divider>
              <div class="d-flex justify-center mt-5">
                <v-btn
                  v-for="(socialm, i) in social"
                  :key="`social-${i}`"
                  :aria-label="socialm.platform"
                  class="d-flex"
                  icon
                  large
                  color="primary"
                  :href="socialm.link"
                  target="_blank"
                >
                  <v-icon>{{ socialm.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="text-center hidden-sm-and-down col col-2 py-12">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="12" md="5" class="py-10">
          <v-divider class="hidden-md-and-up"></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-email </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>EMAIL</v-list-item-title>
              <v-list-item-subtitle>info@ercguru.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// import footerContactForm from '~/components/sections/footerContactForm.vue'
export default {
  // components: {
  //   footerContactForm,
  // },
  data() {
    return {
      social: [
        {
          platform: 'Home',
          link: '/',
          icon: 'mdi-home-circle',
        },
        {
          platform: 'FAQ',
          link: '/faq',
          icon: 'mdi-frequently-asked-questions',
        },
        {
          platform: 'Qualify',
          link: '/qualify',
          icon: 'mdi-account-box',
        },
      ],
    }
  },
}
</script>
