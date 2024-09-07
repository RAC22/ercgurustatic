<template>
  <section id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHero
          v-intersect="heroIntersect"
          :options="intersectOpts"
          :class="{ section: true, fadeIn: heroVisible }"
        />
        <SectionsBrands
          v-intersect="asSeenIntersect"
          :options="intersectOpts"
          :class="{ section: true, fadeIn: testimonialsVisible }"
        />
        <SectionsIntro
          v-intersect="introIntersect"
          :options="intersectOpts"
          :class="{ section: true, fadeIn: introVisible }"
        />
        <SectionsCalloutBlock
          v-intersect="calloutIntersect"
          :options="intersectOpts"
          :class="{ section: true, fadeIn: calloutVisible }"
        />
        <!-- <SectionsFeatures
          v-intersect="featuresIntersect"
          :options="intersectOpts"
          :class="{ section: true, fadeIn: featuresVisible }"
        /> -->
        <SectionsTestimonials
          v-intersect="testimonialsIntersect"
          :options="intersectOpts"
          :class="{ section: true, fadeIn: testimonialsVisible }"
        />
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      intersectOpts: {
        threshold: 0.3,
      },
      heroVisible: false,
      introVisible: false,
      calloutVisible: false,
      featuresVisible: false,
      testimonialsVisible: false,
      asSeenVisible: false,
    }
  },
  methods: {
    heroIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.heroVisible) {
          this.heroVisible = true
        }
      })
    },
    introIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.introVisible) {
          this.introVisible = true
        }
      })
    },
    calloutIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.calloutVisible) {
          this.calloutVisible = true
        }
      })
    },
    featuresIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.featuresVisible) {
          this.featuresVisible = true
        }
      })
    },
    testimonialsIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.testimonialsVisible) {
          this.testimonialsVisible = true
        }
      })
    },
    asSeenIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.testimonialsVisible) {
          this.testimonialsVisible = true
        }
      })
    },
  },
}
</script>
<style>
.section {
  opacity: 0;
  transform: translateY(200px);
}
.fadeIn {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 2s, transform 1s;
}
</style>
