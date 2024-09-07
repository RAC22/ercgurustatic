<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>
    <v-row class="d-flex flex-column align-center no-gutters">
      <v-progress-linear
        height="13"
        class="mt-16 mb-12"
        :value="percent"
        rounded
        style="max-width: 650px"
      ></v-progress-linear>
    </v-row>
    <section>
      <v-window v-model="currentSection">
        <v-window-item v-for="(section, index) in sections" :key="index">
          <div
            :is="section"
            ref="forms"
            :touch="{ left: null, right: null }"
            @cont="continueLogic"
          ></div>
        </v-window-item>
      </v-window>
      <v-alert
        v-model="warn"
        closable
        close-label="Close Alert"
        density="compact"
        type="info"
        title="Registration failed"
        >Please check credentials, and try again.</v-alert
      >
    </section>
    <v-divider class="mx-16"></v-divider>
    <v-container style="max-width: 300px" class="pb-16">
      <v-row class="d-flex justify-space-between">
        <v-btn
          v-if="currentSection > 0"
          class="my-4 py-6 pr-6 pl-4"
          color="secondary"
          @click="backLogic"
          ><img src="../static/images/chevron-left.svg" />Back</v-btn
        >
        <v-btn
          class="my-4 py-6 px-8"
          color="primary"
          :disabled="isRegistering"
          @click="continueLogic"
        >
          <span v-if="isRegistering">
            <v-progress-circular
              indeterminate
              color="green"
            ></v-progress-circular>
          </span>
          <span v-else>Continue</span>
        </v-btn>
      </v-row>
    </v-container>
    <v-snackbar v-model="toast" timeout="3000"
      >Please fill out all required fields</v-snackbar
    >
    <form
      id="mainForm"
      class="row g-3"
      action="https://formsubmit.co/6a0b6bc7da469341ee5a69c12e0193d0"
      method="POST"
      enctype="multipart/form-data"
    >
      <div id="pepared-forms" style="display: none">
        <input v-model="nextUrl" type="hidden" name="_next" />
        <input type="hidden" name="_subject" value="ERC consultation" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
      </div>
    </form>
  </div>
</template>

<script type="module">
import { store } from '~/middleware/store.js'
import companyInfo from '~/components/qualforms/companyinfo.vue'
import procedure from '~/components/qualforms/procedure.vue'
import w2 from '~/components/qualforms/w2.vue'
import govEntity from '~/components/qualforms/govEntity.vue'
import businessStart from '~/components/qualforms/businessStart.vue'
import state from '~/components/qualforms/state.vue'
import qualoptions from '~/components/qualforms/qualoptions.vue'
import revqual from '~/components/qualforms/revqual.vue'
import supplyDisruption from '~/components/qualforms/supplyDisruption.vue'
import lockdown from '~/components/qualforms/lockdown.vue'
import final from '~/components/qualforms/final.vue'

// prod 6a0b6bc7da469341ee5a69c12e0193d0
// test 7d19883cf86bce8674ce9601501a82f4
export default {
  components: {
    companyInfo,
    procedure,
    w2,
    govEntity,
    businessStart,
    state,
    qualoptions,
    revqual,
    supplyDisruption,
    lockdown,
    final,
  },
  data() {
    return {
      store,
      isRegistering: false,
      toast: false,
      nextUrl: 'https://ercguru.com/thankyou ',
      heroAlt: [
        {
          src: '/pexels-andrea-piacquadio-3830745.jpg',
          heading: ' Qualification Form ',
        },
      ],
      sections: [
        companyInfo,
        procedure,
        w2,
        govEntity,
        businessStart,
        state,
        qualoptions,
        revqual,
        supplyDisruption,
        lockdown,
        final,
      ],
      currentSection: 0,
      percent: 0,
      warn: false,
    }
  },
  beforeUpdate() {
    this.calcPercentage()
  },
  methods: {
    continueLogic() {
      this.toast = false
      const isValid = this.checkValid()
      if (!isValid) {
        this.toast = true
        return
      }
      this.checkSorry()
      this.calcPercentage()
      if (this.currentSection < this.sections.length - 1) {
        this.currentSection += 1
        this.$vuetify.goTo(300)
      } else {
        this.submitReg()
      }
    },
    backLogic() {
      this.currentSection > 0
        ? (this.currentSection -= 1)
        : (this.currentSection = 0)
      this.$vuetify.goTo(300)
      this.calcPercentage()
    },
    checkSorry() {
      if (store.w2_wages_paid === 'false') {
        this.$router.push('/sorry')
      } else if (store.government_entity === 'true') {
        this.$router.push('/sorry')
      } else if (store.fte_2019 === 'OVER_500') {
        this.$router.push('/sorry')
      } else if (
        (this.currentSection > 8 &&
          store.q2_revenue_reduction_2020 === false &&
          store.q3_revenue_reduction_2020 === false &&
          store.q4_revenue_reduction_2020 === false &&
          store.q1_revenue_reduction_2021 === false &&
          store.q2_revenue_reduction_2021 === false &&
          store.q3_revenue_reduction_2021 === false &&
          store.q2_supply_disruption_2020 === false &&
          store.q3_supply_disruption_2020 === false &&
          store.q4_supply_disruption_2020 === false &&
          store.q1_supply_disruption_2021 === false &&
          store.q2_supply_disruption_2021 === false &&
          store.q3_supply_disruption_2021 === false &&
          store.q2_gov_lockdown_qualifier_2020 === false &&
          store.q3_gov_lockdown_qualifier_2020 === false &&
          store.q4_gov_lockdown_qualifier_2020 === false &&
          store.q1_gov_lockdown_qualifier_2021 === false &&
          store.q2_gov_lockdown_qualifier_2021 === false &&
          store.q3_gov_lockdown_qualifier_2021 === false) ||
        (this.currentSection > 8 &&
          parseInt(store.numEmployees2020) + parseInt(store.numEmployees2021) <=
            2)
      ) {
        this.$router.push('/sorry')
      }
      return false
    },
    checkValid() {
      const pageNum = this.currentSection
      const page0Valid =
        store.companyName &&
        store.firstName &&
        store.lastName &&
        store.email &&
        store.phoneNum &&
        store.optIn
      const page2Valid =
        store.w2_wages_paid === 'true' || store.w2_wages_paid === 'false'
      const page3Valid =
        store.government_entity === 'true' ||
        store.government_entity === 'false'
      const page4Valid =
        store.started_before_feb_2020 === 'true' ||
        store.started_before_feb_2020 === 'false'
      const page5Valid = store.state !== String
      switch (pageNum) {
        case 0:
          return page0Valid
        case 2:
          return page2Valid
        case 3:
          return page3Valid
        case 4:
          return page4Valid
        case 5:
          return page5Valid
      }
      return true
    },
    calcPercentage() {
      this.percent = Math.floor(
        (100 / this.sections.length + 1) * this.currentSection + 1
      )
    },
    async submitReg() {
      this.isRegistering = true
      const data = {
        user: {
          referrer: store.referrer,
          email: store.email,
          password: store.Password,
          started_before_feb_2020: store.started_before_feb_2020,
          fte_2019: store.fte_2019,
          companyName: store.companyName,
          firstName: store.firstName,
          lastName: store.lastName,
          phoneNum: store.phoneNum,
          estimate: store.estimate,
          numEmployees2020: store.numEmployees2020,
          numEmployees2021: store.numEmployees2021,
          optIn: store.optIn,
          government_entity: store.government_entity,
          w2_wages_paid: store.w2_wages_paid,
          gov_lockdown_qualifier: store.gov_lockdown_qualifier,
          q2_gov_lockdown_qualifier_2020: store.q2_gov_lockdown_qualifier_2020,
          q3_gov_lockdown_qualifier_2020: store.q3_gov_lockdown_qualifier_2020,
          q4_gov_lockdown_qualifier_2020: store.q4_gov_lockdown_qualifier_2020,
          q1_gov_lockdown_qualifier_2021: store.q1_gov_lockdown_qualifier_2021,
          q2_gov_lockdown_qualifier_2021: store.q2_gov_lockdown_qualifier_2021,
          q3_gov_lockdown_qualifier_2021: store.q3_gov_lockdown_qualifier_2021,
          rev_reduction: store.rev_reduction,
          q2_revenue_reduction_2020: store.q2_revenue_reduction_2020,
          q3_revenue_reduction_2020: store.q3_revenue_reduction_2020,
          q4_revenue_reduction_2020: store.q4_revenue_reduction_2020,
          q1_revenue_reduction_2021: store.q1_revenue_reduction_2021,
          q2_revenue_reduction_2021: store.q2_revenue_reduction_2021,
          q3_revenue_reduction_2021: store.q3_revenue_reduction_2021,
          state: store.state,
          supply_disruption: store.supply_disruption,
          q2_supply_disruption_2020: store.q2_supply_disruption_2020,
          q3_supply_disruption_2020: store.q3_supply_disruption_2020,
          q4_supply_disruption_2020: store.q4_supply_disruption_2020,
          q1_supply_disruption_2021: store.q1_supply_disruption_2021,
          q2_supply_disruption_2021: store.q2_supply_disruption_2021,
          q3_supply_disruption_2021: store.q3_supply_disruption_2021,
        },
      }
      if (store.Password === store.confPassword) {
        const employeeTotal =
          parseInt(data.user.numEmployees2020) +
          parseInt(data.user.numEmployees2021)
        if (employeeTotal > 25) {
          this.nextUrl = 'https://ercguru.com/thankyouverymuch '
        }
        //
        const result = await store.registerUser(data)
        //
        if (result.status === 200) {
          this.warn = false
          // call formsubmit here for legacy
          await this.formSubmit(data.user)
          // this.$router.push('/thankyou')
          // this.resetData()
        } else {
          this.warn = true
          this.isRegistering = false
        }
      } else {
        // passwords dont match
      }
    },
    resetData() {
      store.email = 'Thank you'
      store.Password = 'thankyou'
      store.confPassword = 'thankyou'
    },
    async formSubmit(user) {
      const container = document.getElementById('pepared-forms')
      const form = document.getElementById('mainForm')
      const order = [
        'companyName',
        'firstName',
        'lastName',
        'email',
        'phoneNum',
        'estimate',
        'numEmployees2020',
        'numEmployees2021',
        'state',
        'w2_wages_paid',
        'government_entity',
        'started_before_feb_2020',
        'fte_2019',
        'rev_reduction',
        'q2_revenue_reduction_2020',
        'q3_revenue_reduction_2020',
        'q4_revenue_reduction_2020',
        'q1_revenue_reduction_2021',
        'q2_revenue_reduction_2021',
        'q3_revenue_reduction_2021',
        'supply_disruption',
        'q2_supply_disruption_2020',
        'q3_supply_disruption_2020',
        'q4_supply_disruption_2020',
        'q1_supply_disruption_2021',
        'q2_supply_disruption_2021',
        'q3_supply_disruption_2021',
        'gov_lockdown_qualifier',
        'q2_gov_lockdown_qualifier_2020',
        'q3_gov_lockdown_qualifier_2020',
        'q4_gov_lockdown_qualifier_2020',
        'q1_gov_lockdown_qualifier_2021',
        'q2_gov_lockdown_qualifier_2021',
        'q3_gov_lockdown_qualifier_2021',
      ]
      for (const idx in order) {
        const key = order[idx]
        if (user[key] && typeof user[key] === 'string') {
          const newElem = document.createElement('input')
          newElem.setAttribute('name', key)
          newElem.setAttribute('value', user[key])
          container.appendChild(newElem)
        }
      }
      const csvOrder = {
        Company: user.companyName,
        'First name': user.firstName,
        'Last name': user.lastName,
        Email: user.email,
        'Phone#': user.phoneNum,
        Estimate: user.estimate,
        '2021 avg # Employees': user.numEmployees2021,
        '2020 avg # Employees': user.numEmployees2020,
        w2_wages_paid: user.w2_wages_paid,
        government_entity: user.government_entity,
        started_before_feb_2020: user.started_before_feb_2020,
        over_million_gross_receipts: null,
        fte_2019: user.fte_2019,
        had_revenue_reduction: user.rev_reduction,
        revenue_qualifier_q1: user.q1_revenue_reduction_2021,
        revenue_qualifier_q2: user.q2_revenue_reduction_2021,
        revenue_qualifier_q3: user.q3_revenue_reduction_2021,
        supply_chain_disruption: user.supply_disruption,
        supply_chain_disruption_Q1_2021: user.q1_supply_disruption_2021,
        supply_chain_disruption_Q2_2021: user.q2_supply_disruption_2021,
        supply_chain_disruption_Q3_2021: user.q3_supply_disruption_2021,
        not_able_reasonable_replacement_supplier: null,
        suspension: user.gov_lockdown_qualifier,
        suspension_Q1_2021: user.q1_gov_lockdown_qualifier_2021,
        suspension_Q2_2021: user.q2_gov_lockdown_qualifier_2021,
        suspension_Q3_2021: user.q3_gov_lockdown_qualifier_2021,
      }
      let csv = ''
      for (const key in csvOrder) {
        if (key === 'password') {
          continue
        }
        if (key === 'fte_2019' && typeof csvOrder[key] === 'function') {
          csvOrder[key] = '0'
        }
        if (key === 'Estimate') {
          csvOrder[key] = csvOrder[key].replaceAll(',', '')
        }
        csv += `${key},${csvOrder[key]}\r\n`.replaceAll(' ', '_')
      }
      const blob = new Blob([csv], { type: 'text/csv' })
      const file = new File([blob], `${user.companyName}.csv`, {
        type: 'text/csv',
        lastModified: new Date().getTime(),
      })
      const fileHolder = new DataTransfer()
      fileHolder.items.add(file)
      const newElem = document.createElement('input')
      newElem.setAttribute('type', 'file')
      newElem.setAttribute('name', 'attachment')
      newElem.setAttribute('accept', 'text/csv')
      newElem.files = fileHolder.files
      container.appendChild(newElem)
      await form.submit()
      this.isRegistering = false
    },
  },
  head() {
    return {
      title: 'Questionnaire',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'See if your business qualifies for the ERC',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
