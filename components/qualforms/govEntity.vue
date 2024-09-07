<template>
  <v-container style="max-width: 650px">
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>Are you a federal, state, or local entity?</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The federal government, the governments of any state or political
          subdivision thereof, and any agency or instrumentality of those
          governments are not Eligible Employers and are
          <strong>not</strong> entitled to receive the Employee Retention
          Credit. However, tribal governments and tribal entities may be
          Eligible Employers.
        </p>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-radio-group v-model="store.government_entity">
            <v-radio label="Yes" name="government_entity" value="true" />
            <v-radio label="No" name="government_entity" value="false" />
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
