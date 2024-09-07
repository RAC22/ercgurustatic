<template>
  <v-container style="max-width: 650px">
    <v-row>
      <v-col>
        <h1>Congratulations!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Based on your answers, you <strong>qualify</strong> for the ERC
          program!
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Estimated credit amount</h2>
      </v-col>
      <v-col id="bigMoney" cols="6">{{ bigMoney }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          This is an Estimate based on the responses and employee counts
          provided and is not a guarantee of your credit amount or
          qualification. Many factors are evaluated during your ERC analysis. If
          we determine you qualify, this number could be much higher or lower.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { store } from '~/middleware/store.js'
export default {
  data() {
    return {
      store,
      bigMoney: '0',
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === store.Password ||
          'The password confirmation does not match.',
      ],
      emailValid: [(value) => !!value.includes('@') || 'Invalid email'],
    }
  },
  created() {
    let estimate
    let perQuarter = 0
    if (store.numEmployees2021 > 0) {
      perQuarter = store.numEmployees2021 * 7000
    }
    let quarters = 0
    if (
      store.q1_revenue_reduction_2021 === true ||
      store.q1_supply_disruption_2021 === true ||
      store.q1_gov_lockdown_qualifier_2021 === true
    ) {
      quarters++
    }
    if (
      store.q2_revenue_reduction_2021 === true ||
      store.q2_supply_disruption_2021 === true ||
      store.q2_gov_lockdown_qualifier_2021 === true
    ) {
      quarters++
    }
    if (
      store.q3_revenue_reduction_2021 === true ||
      store.q3_supply_disruption_2021 === true ||
      store.q3_gov_lockdown_qualifier_2021 === true
    ) {
      quarters++
    }
    if (store.numEmployees2020) {
      estimate = perQuarter * quarters + store.numEmployees2020 * 5000
    } else {
      estimate = perQuarter * quarters
    }
    this.bigMoney = `$${estimate.toLocaleString()}`
    store.estimate = `$${estimate.toLocaleString()}`
  },
  methods: {
    cont() {
      this.$emit('cont')
    },
  },
}
</script>
<style>
#bigMoney {
  color: rgb(85, 200, 155);
  font-size: 3rem;
  font-weight: 700;
}
</style>
