<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      dark
      cycle
      interval="8000"
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        class="gradient-fill"
      >
        <v-container fill-height>
          <div style="max-width: 600px">
            <div
              class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black white--text"
            >
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5 white--text">{{ carousel.subHeading }}</p>
            <v-btn
              :to="qualLink"
              :x-large="$vuetify.breakpoint.smAndUp"
              class="my-3 primary"
              >Get Started</v-btn
            >
            <span class="mx-2 my-4"></span>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading:
            ' See if your business qualifies for the Employee Retention Credit ',
          subHeading:
            ' The Employee Retention Credit (ERC) is a program designed to support businesses impacted by the COVID-19 pandemic. Established under the CARES Act, this credit provides financial assistance to businesses that demonstrated steadfast commitment to their employees during the challenging times brought about by the pandemic ',
        },
        {
          src: 'pexels-peter-olexa-4012966.jpg',
          heading: 'It only takes a few minutes to prequalify for the ERC',
          subHeading:
            'Discover your eligibility for the Employee Retention Credit in just a few simple steps ',
        },
      ],
      qualLink: '/qualify',
    }
  },
}
</script>

<style>
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.75),
    rgba(5, 11, 31, 0.65)
  );
}
</style>
