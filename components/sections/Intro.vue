<template>
  <section id="intro" class="py-16">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="600">
        <v-avatar color="primary" size="70" class="mb-8">
          <v-icon x-large dark>mdi-web</v-icon>
        </v-avatar>
        <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-7">
          ERCGuru: The ERC Experts
        </h2>
        <p class="title font-weight-light">
          ErcGuru has helped many businesses recieve the credit they deserve for
          maintaining operations during the pandemic
        </p>
      </v-responsive>

      <v-row class="pt-12">
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <v-row no-gutters>
            <v-col :cols="card.callout ? 9 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="card.subtitle"></div>
                <div
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em; font-weight: bold"
                  v-text="card.title"
                ></div>
                <p v-text="card.text"></p>
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <span
                class="text-h3 grey--text font-weight-bold pr-8"
                style="opacity: 0.1"
                >{{ card.callout }}</span
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
  data() {
    return {
      cards: [
        {
          title: 'Affordable',
          subtitle: 'No Upfront Cost',
          text: "We don't get paid until your business gets paid",
          callout: '01',
        },
        {
          title: 'Safe',
          subtitle: 'Audit Protection',
          text: 'Our tax attorneys will defend their work. We offer audit protection at no additional cost',
          callout: '02',
        },
        {
          title: 'Easy',
          subtitle: 'Personal Support',
          text: 'A dedicated refund specialist assigned to your account will help every step of the way.',
          callout: '03',
        },
      ],
    }
  },
}
</script>
