<template>
  <v-container style="max-width: 650px">
    <v-form>
      <v-row>
        <v-col>
          <h1>In which state is your business headquartered?</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="mb-16">
          <v-select
            v-model="store.state"
            :items="states"
            outlined
            label="State"
          />
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
      states: [
        'AK - Alaska',
        'AL - Alabama',
        'AR - Arkansas',
        'AS - American Samoa',
        'AZ - Arizona',
        'CA - California',
        'CO - Colorado',
        'CT - Connecticut',
        'DC - District of Columbia',
        'DE - Delaware',
        'FL - Florida',
        'GA - Georgia',
        'GU - Guam',
        'HI - Hawaii',
        'IA - Iowa',
        'ID - Idaho',
        'IL - Illinois',
        'IN - Indiana',
        'KS - Kansas',
        'KY - Kentucky',
        'LA - Louisiana',
        'MA - Massachusetts',
        'MD - Maryland',
        'ME - Maine',
        'MI - Michigan',
        'MN - Minnesota',
        'MO - Missouri',
        'MS - Mississippi',
        'MT - Montana',
        'NC - North Carolina',
        'ND - North Dakota',
        'NE - Nebraska',
        'NH - New Hampshire',
        'NJ - New Jersey',
        'NM - New Mexico',
        'NV - Nevada',
        'NY - New York',
        'OH - Ohio',
        'OK - Oklahoma',
        'OR - Oregon',
        'PA - Pennsylvania',
        'PR - Puerto Rico',
        'RI - Rhode Island',
        'SC - South Carolina',
        'SD - South Dakota',
        'TN - Tennessee',
        'TX - Texas',
        'UT - Utah',
        'VA - Virginia',
        'VI - Virgin Islands',
        'VT - Vermont',
        'WA - Washington',
        'WI - Wisconsin',
        'WV - West Virginia',
        'WY - Wyoming',
      ],
    }
  },
}
</script>
