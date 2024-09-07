<template>
  <section class="mb-6">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container style="max-width: 650px">
          <v-col cols="12">
            <v-text-field
              v-model="store.user.email"
              label="Email"
              type="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="store.user.companyName"
              label="Company name"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="store.user.firstName"
              label="First name"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="store.user.lastName"
              label="Last name"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="store.user.phoneNum"
              label="Phone Number"
              type="Phone Number"
            ></v-text-field>
          </v-col>
          <v-btn color="primary" :disabled="isSaving" @click="update">
            <span v-if="isSaving">
              <v-progress-circular
                indeterminate
                color="green"
              ></v-progress-circular>
            </span>
            <span v-else>Save</span>
          </v-btn>
          <v-row class="mt-4 d-flex justify-space-between">
            <v-col cols="auto">
              <h1>2020 through 2021 Form 941</h1>
            </v-col>
            <v-col cols="auto">
              <v-btn size="medium" @click="add941"
                ><v-icon>mdi-file-document-plus-outline</v-icon>&nbsp;Add
                File</v-btn
              >
            </v-col>
          </v-row>
          <div
            v-for="(nines, index) in store.user.nine_forty_ones"
            :key="`u941${index}`"
          >
            {{ nines.filename }} <v-icon>mdi-check</v-icon>
          </div>
          <div
            v-for="(nineFourtyOne, index) in nineFourtyOnes"
            :key="`941${index}`"
          >
            <v-row class="d-flex justify-space-between">
              <v-col>
                <v-file-input
                  ref="fileInputs"
                  show-size
                  accept=".pdf"
                  counter
                  multiple
                  label="Click to select file"
                  @change="pushFile($event, index, 'nineFourtyOnes')"
                ></v-file-input>
              </v-col>
              <v-col cols="auto">
                <v-btn @click="remove('nineFourtyOnes', index)"
                  ><v-icon>mdi-minus</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </div>
          <v-divider horizontal class="my-6"></v-divider>
          <v-row class="mt-4 d-flex justify-space-between">
            <v-col cols="auto">
              <h1>P&L 2019, 2020, 2021</h1>
            </v-col>
            <v-col cols="auto">
              <v-btn size="medium" @click="addpl"
                ><v-icon>mdi-file-document-plus-outline</v-icon>&nbsp;Add
                File</v-btn
              >
            </v-col>
          </v-row>
          <div
            v-for="(plentry, index) in store.user.profit_and_losses"
            :key="`plentry${index}`"
          >
            {{ plentry.filename }} <v-icon>mdi-check</v-icon>
          </div>
          <div v-for="(pl, index) in pls" :key="`pls${index}`">
            <v-row class="d-flex justify-space-between">
              <v-col>
                <v-file-input
                  ref="fileInputs"
                  show-size
                  accept=".csv, .pdf, .xls"
                  counter
                  multiple
                  label="Click to select file"
                  @change="pushFile($event, index, 'pls')"
                ></v-file-input>
              </v-col>
              <v-col cols="auto">
                <v-btn @click="remove('pls', index)"
                  ><v-icon>mdi-minus</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </div>
          <v-divider horizontal class="my-6"></v-divider>
          <v-row class="mt-4 d-flex justify-space-between">
            <v-col cols="auto">
              <h1>Payroll Ledgers 2020, 2021</h1>
            </v-col>
            <v-col cols="auto">
              <v-btn size="medium" @click="addPayroll"
                ><v-icon>mdi-file-document-plus-outline</v-icon>&nbsp; Add
                File</v-btn
              >
            </v-col>
          </v-row>
          <div
            v-for="(ledger, index) in store.user.payroll_ledgers"
            :key="`payrollL${index}`"
          >
            {{ ledger.filename }} <v-icon>mdi-check</v-icon>
          </div>
          <div
            v-for="(payrollLedger, index) in payrollLedgers"
            :key="`payroll${index}`"
          >
            <v-row class="d-flex justify-space-between">
              <v-col>
                <v-file-input
                  ref="fileInputs"
                  show-size
                  accept=".pdf, .csv"
                  counter
                  multiple
                  label="Click to select file"
                  @change="pushFile($event, index, 'payrollLedgers')"
                ></v-file-input>
              </v-col>
              <v-col cols="auto">
                <v-btn @click="remove('payrollLedgers', index)"
                  ><v-icon>mdi-minus</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </div>
          <v-divider horizontal class="my-6"></v-divider>
          <v-row class="mt-4 d-flex justify-space-between">
            <v-col cols="auto">
              <h1>(If Applicable) PPP forgiveness Documents</h1>
            </v-col>
            <v-col cols="auto">
              <v-btn size="medium" @click="addppp"
                ><v-icon>mdi-file-document-plus-outline</v-icon>&nbsp;Add
                File</v-btn
              >
            </v-col>
          </v-row>
          <div
            v-for="(ppp, index) in store.user.ppp_forgivenesses"
            :key="`ppp${index}`"
          >
            {{ ppp.filename }} <v-icon>mdi-check</v-icon>
          </div>
          <div v-for="(pppForgive, index) in pppForgives" :key="`pppF${index}`">
            <v-row class="d-flex justify-space-between">
              <v-col>
                <v-file-input
                  ref="fileInputs"
                  show-size
                  accept=".pdf"
                  counter
                  multiple
                  label="Click to select file"
                  @change="pushFile($event, index, 'pppForgives')"
                ></v-file-input>
              </v-col>
              <v-col cols="auto">
                <v-btn @click="remove('pppForgives', index)"
                  ><v-icon>mdi-minus</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </div>
          <v-divider horizontal class="my-6"></v-divider>
          <v-btn color="primary" :disabled="isUploading" @click="upload">
            <span v-if="isUploading">
              <v-progress-circular
                indeterminate
                color="green"
              ></v-progress-circular>
            </span>
            <span v-else>Upload Documents</span>
          </v-btn>
        </v-container>
      </v-col>
    </v-row>
    <v-snackbar v-model="toast" timeout="2000">Profile updated</v-snackbar>
  </section>
</template>

<script>
import { store } from '~/middleware/store.js'
export default {
  data() {
    return {
      store,
      toast: false,
      isSaving: false,
      isUploading: false,
      nineFourtyOnes: [],
      pls: [],
      payrollLedgers: [],
      pppForgives: [],
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: ' Profile ',
        },
      ],
    }
  },
  methods: {
    async update() {
      this.toast = false
      this.isSaving = true
      const data = store.user
      await store.updateUser(data)
      this.toast = true
      this.isSaving = false
    },
    add941() {
      if (this.nineFourtyOnes.length < 10) {
        this.nineFourtyOnes.push({ file: null })
      }
    },
    addpl() {
      if (this.pls.length < 10) {
        this.pls.push({ file: null })
      }
    },
    addPayroll() {
      if (this.payrollLedgers.length <= 3) {
        this.payrollLedgers.push({ file: null })
      }
    },
    addppp() {
      if (this.pppForgives.length <= 3) {
        this.pppForgives.push({ file: null })
      }
    },
    remove(list, index) {
      this[list].splice(index, 1)
    },
    pushFile(event, index, list) {
      this[list][index].file = event[0]
    },
    async upload() {
      this.isUploading = true
      const payload = new FormData()
      this.nineFourtyOnes.forEach((file) => {
        payload.append('nine_forty_ones[]', file.file)
      })
      this.pls.forEach((file) => {
        payload.append('profit_and_losses[]', file.file)
      })
      this.payrollLedgers.forEach((file) => {
        payload.append('payroll_ledgers[]', file.file)
      })
      this.pppForgives.forEach((file) => {
        payload.append('ppp_forgivenesses[]', file.file)
      })
      payload.append('user_id', store.user.id)
      const result = await store.uploadFiles(payload)
      this.isUploading = false
      if (result.status === 200) {
        this.$refs.fileInputs.forEach((input) => {
          input.reset()
        })
      }
    },
  },
  head() {
    return {
      title: 'Profile',
      meta: [
        {
          hid: 'Profile',
          name: 'Profile',
          content: 'Upload documents, and edit profile information',
        },
      ],
    }
  },
}
</script>
