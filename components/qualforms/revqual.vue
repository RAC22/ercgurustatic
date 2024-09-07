<template>
  <v-container style="max-width: 650px" class="pb-16">
    <v-row>
      <v-col>
        <h1>Revenue reduction</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The most straightforward way to qualify for the Employee Retention
          Credit is from a qualified revenue reduction during the qualification
          period of the program.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Revenue reduction</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          2021 - 20% reduction of gross sales for the 2021 quarter as compared
          to the same quarter in 2019 (or 2020 if you were not in business
          during the quarter in 2019). The alternative lookback option allows
          the business to use the previous quarter compared to the same 2019
          quarter to qualify.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>Did you experience any revenue reductions in 2020 or 2021?</h1>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-radio-group v-model="store.rev_reduction">
            <v-radio label="Yes" name="rev_reduction" value="true" />
            <v-radio label="No" name="rev_reduction" value="false" />
          </v-radio-group>
          <v-container v-show="store.rev_reduction === 'true'">
            <v-row>
              <v-col>
                <h2>Please check all that apply for 2020</h2>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="store.q2_revenue_reduction_2020"
              label="My Q2 2020 gross revenue was 20% lower than Q2 2019"
            />
            <v-checkbox
              v-model="store.q3_revenue_reduction_2020"
              label="My Q3 2020 gross revenue was 20% lower than Q3 2019"
            />
            <v-checkbox
              v-model="store.q4_revenue_reduction_2020"
              label="My Q4 2020 gross revenue was 20% lower than Q4 2019"
            />
            <v-row>
              <v-col>
                <v-divider class="my-8"></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h2>Please check all that apply for 2021</h2>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="store.q1_revenue_reduction_2021"
              label="My Q1 2021 gross revenue was 20% lower than Q1 2019 (or Q1 2020 if not in business in Q1 2019)"
            />
            <v-checkbox
              v-model="store.q2_revenue_reduction_2021"
              label="My Q2 2021 gross revenue was 20% lower than Q2 2019 (or Q2 2020 if not in business in Q2 2019)"
            />
            <v-checkbox
              v-model="store.q3_revenue_reduction_2021"
              label="My Q3 2021 gross revenue was 20% lower than Q3 2019 (or Q3 2020 if not in business in Q3 2019)"
            />
          </v-container>
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
