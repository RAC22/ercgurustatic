<template>
  <v-container style="max-width: 650px">
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Did you pay any W-2 wages in 2020 or 2021?</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The ERC credit is calculated as a percentage of W-2 wages paid - 1099
          wages do <strong>not</strong> qualify.
          <strong
            >Note: The wages of majority owners (over 50%) and their immediate
            relatives (even if paid W-2) do not qualify for the ERC
            program.</strong
          >
          Wages for all other W-2 employees still qualify.
        </p>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-radio-group v-model="store.w2_wages_paid">
            <v-radio
              label="Yes my company had 1 or more non-owner employees paid on W-2 in 2020 and/or 2021"
              name="w2_wages_paid"
              value="true"
            />
            <v-radio label="No" name="w2_wages_paid" value="false" />
          </v-radio-group>
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
    }
  },
}
</script>
