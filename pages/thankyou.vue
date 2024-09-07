<template>
  <section style="min-height: 800px">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container style="max-width: 800px">
          <v-row class="py-16">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
              >
                Your Prequalification is complete.
              </h2>
              <h3
                class="text-h4 text-uppercase font-weight-thin text-center my-8"
              >
                An ERC guru will review the information submitted. Expect a
                response in the next few business days.
              </h3>
              <p>
                Feel free to click the profile icon at the top menu, to update
                any profile information. And if possible, upload any documents
                to expidite your ERC processing.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: '/pexels-moose-photos-1036641.jpg',
          heading: ' Thank you ',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Thank you',
      meta: [
        {
          hid: 'Thank you',
          name: 'Thank you',
          content: 'Thank you for registering',
        },
      ],
    }
  },
}
</script>
