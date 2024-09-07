<template>
  <v-container style="max-width: 650px">
    <v-row>
      <v-col class="d-flex justify-center">
        <h1>When did you start your business?</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          A recovery startup business is an employer that began carrying on a
          trade or business on or after February 15, 2020. Therefore, the
          determination of when an employer "began carrying on a trade or
          business" is made in the same manner as found in the purposes of
          <a href="https://www.irs.gov/pub/irs-drop/rr-99-7.pdf" target="_blank"
            >section 162</a
          >. In general, for purposes of section 162, a taxpayer has not begun
          carrying on a trade or business "until such time as the business has
          begun to function as a going concern and performed those activities
          for which it was organized".
        </p>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-radio-group v-model="store.started_before_feb_2020">
            <v-radio
              label="Before February 15, 2020"
              name="started_before_feb_2020"
              value="true"
            />
            <v-radio
              label="On or after February 15, 2020"
              name="started_before_feb_2020"
              value="false"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-container v-show="store.started_before_feb_2020 === 'true'">
        <v-row>
          <v-col>
            <h1>2019 full-time employees</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              A full-time employee is classified as someone that worked at least
              30 hours per week, or 130 hours per month in 2019. Remember, this
              question is based on the average amount of employees during 2019.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              <strong>Important: </strong> The IRS aggregate rule applies to the
              ERC credit. If your company has common ownership with other
              companies, please take into account all associated businesses when
              calculating this question
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              <strong>Example: </strong> The business owner was the majority
              owner of ABC Company, which averaged 50 FT employees in 2019. The
              same business owner was also the majority owner of 123 Company,
              which averaged 75 FT employees in 2019. According to the aggregate
              rule, the employee count of both companies must be combined for
              the ERC program. Although both companies can be entered for the
              program, they would both be classified as having over 100
              employees.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              <strong>Note: </strong> Businesses with over 100, but under 500 FT
              employees in 2019 do not qualify for ERC funds in 2020. Businesses
              with over 500 FT employees in 2019 do not qualify for the ERC
              program, except for actual wages paid to employees that did not
              work due to a government shutdown.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              Part-Time Employees: Part-time employee wages
              <strong>do</strong> qualify for the ERC program. This question
              only requires full-time employee count to determine qualification.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h1>How many full-time employees did you average in 2019?</h1>
          </v-col>
        </v-row>
        <v-radio-group v-model="store.fte_2019">
          <v-radio
            label="My business averaged fewer than 100 full-time employees in 2019"
            name="fte_2019"
            value="UNDER_100"
          />
          <v-radio
            label="My business averaged over 100, but under 500 full-time employees in 2019"
            name="fte_2019"
            value="UNDER_500"
          />
          <v-radio
            label="My business averaged over 500 full-time employees in 2019"
            name="fte_2019"
            value="OVER_500"
          />
        </v-radio-group>
      </v-container>
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
