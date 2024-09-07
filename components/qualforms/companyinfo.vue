<template>
  <v-container style="max-width: 650px">
    <v-form>
      <v-row class="mb-n6">
        <v-col>
          <v-text-field
            v-model="store.companyName"
            label="Company Name"
            dense
            outlined
            required
            :rules="required"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-n6">
        <v-col
          ><v-text-field
            v-model="store.firstName"
            label="First Name"
            dense
            outlined
            required
            :rules="required"
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            v-model="store.lastName"
            label="Last Name"
            dense
            outlined
            required
            :rules="required"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row class="mb-n6">
        <v-col
          ><v-text-field
            v-model="store.email"
            label="Email"
            dense
            outlined
            required
            :rules="required"
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            v-model="store.phoneNum"
            label="Phone# 555-555-5555"
            dense
            outlined
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            :rules="phoneRule"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row class="mb-n6 mx-auto py-4 d-flex justify-center">
        <h2>Estimate your potential employee retention credit amount</h2>
        <p>
          This is for estimate purposes only. The actual credit is based off of
          documents submitted. Potential ERC amount is based off the average
          count qualifying for all 6 quarters of the ERC program.
        </p>
      </v-row>
      <v-row class="d-flex justify-center">
        <div ref="warn1" style="display: none">
          <v-alert type="info"
            >If you averaged over 100 full time employees in 2020 the potential
            ERC amount for that year is $0</v-alert
          >
        </div>
        <v-col cols="6">
          <label>Average full-time W-2 employee count in 2020</label>
          <v-text-field
            v-model="numEmployees2020"
            hide-details
            single-line
            type="number"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <div ref="warn2" style="display: none">
          <v-alert type="info"
            >If you averaged over 500 full time employees in 2021 the potential
            ERC amount for that year is $0</v-alert
          >
        </div>
        <v-col cols="6">
          <label>Average full-time W-2 employee count in 2021</label>
          <v-text-field
            v-model="numEmployees2021"
            hide-details
            single-line
            type="number"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex justify-end my-auto">
          <h3>Potential ERC amount*</h3>
        </v-col>
        <v-col id="bigMoney" cols="6">{{ bigMoney }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-checkbox v-model="store.optIn" :rules="checkboxRule"></v-checkbox>
        </v-col>
        <v-col>
          By checking the box and clicking “Continue” below, you consent for ERC
          Guru to use automated technology, including calls, texts and
          prerecorded messages. Clicking the button below constitutes your
          electronic signature. <a @click="goTerms">Terms of Service</a> and
          <a @click="goPP">Privacy Policy.</a>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { store } from '~/middleware/store.js'
export default {
  data() {
    return {
      store,
      numEmployees2021: store.numEmployees2021,
      numEmployees2020: store.numEmployees2020,
      bigMoney: '0',
      failCheck: true,
      required: [(value) => !!value || 'Required'],
      checkboxRule: [(value) => !!value || ''],
      phoneRule: [
        (value) => !!value || 'Required',
        (value) => {
          const phoneRegex = new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}')
          return phoneRegex.test(value) || 'Please use above format'
        },
      ],
    }
  },
  watch: {
    numEmployees2020() {
      store.numEmployees2020 = this.numEmployees2020
      this.calcBigMoney(this.numEmployees2020, this.numEmployees2021)
    },
    numEmployees2021() {
      store.numEmployees2021 = this.numEmployees2021
      this.calcBigMoney(this.numEmployees2020, this.numEmployees2021)
    },
  },
  methods: {
    calcBigMoney(num2020, num2021) {
      let newBigMoneyVal = 0
      if (num2020 > 100) {
        this.$refs.warn1.style = ''
      } else {
        this.$refs.warn1.style = 'display: none;'
      }
      if (num2021 > 500) {
        this.$refs.warn2.style = ''
      } else {
        this.$refs.warn2.style = 'display: none;'
      }
      if (num2020 && num2020 >= 0 && num2020 <= 100) {
        newBigMoneyVal += 5000 * num2020
      }
      if (num2021 && num2021 >= 0 && num2021 <= 500) {
        newBigMoneyVal += 21000 * num2021
      }
      this.bigMoney = `$${newBigMoneyVal.toLocaleString()}`
      store.firstEstimate = this.bigMoney
    },
    goPP() {
      this.$router.push('/privacy')
    },
    goTerms() {
      this.$router.push('/terms')
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
