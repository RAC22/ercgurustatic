<template>
  <section
    id="testimonials"
    :class="$vuetify.theme.dark ? 'black' : 'white'"
    class="py-16"
  >
    <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-4 my-8">
      Customer Reviews
    </h2>
    <v-carousel
      cycle
      draggable="true"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in testimonials" :key="i" class="">
        <v-container fill-height>
          <div style="max-width: 700px" class="mx-auto text-center">
            <h3
              :class="
                $vuetify.theme.dark
                  ? 'black'
                  : 'white grey--text text--darken-2'
              "
              class="mb-1 font-weight-black text-uppercase"
            >
              {{ item.name }}
            </h3>
            <div class="mb-10 font-weight-light grey--text text-uppercase">
              {{ item.post }}
            </div>
            <v-row>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-open</v-icon
                ></v-col
              >
              <v-col cols="10">
                <div
                  :class="
                    $vuetify.theme.dark
                      ? 'black'
                      : 'white grey--text text--darken-2'
                  "
                  class="mb-5 font-italic"
                >
                  {{ item.review }}
                </div>
              </v-col>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-close</v-icon
                ></v-col
              >
            </v-row>
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
      testimonials: [
        {
          name: 'COO, Biotech',
          post: 'Refund: $78,000',
          review:
            'The ERC Guru team handled everything, from explaining the opportunity, to helping my team decipher what documents were needed, to calculating my refund! It could not have been a smoother and more efficient process!',
        },
        {
          name: 'CEO, Restaurant',
          post: 'Refund: $200,000',
          review:
            "I didn't even know ERC was a thing until ERC Guru reached out. And I'm glad they did. Our team has a ton of pressure on them to keep our restaurant open and feed our community. Having this ERC refund was truly a lifesaver!!",
        },
        {
          name: 'Owner, Construction Management',
          post: 'Refund: $520,000',
          review:
            "I've had ERC on my list for the last 3 months but did not have the time to get it done. ERC Guru took care of everything. They were professional, explained all my options and helped me get this done. Now I can stop worrying about missing out on this once in a lifetime opportunity..",
        },
      ],
    }
  },
}
</script>
