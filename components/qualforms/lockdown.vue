<template>
  <v-container style="max-width: 650px" class="pb-16">
    <v-row>
      <v-col>
        <h1>Full or partial suspension</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The partial or full shutdown qualification is based on a "suspension
          test" to demonstrate that your operations were partially or fully
          suspended due to a Covid-19 governmental order. Keep in mind that a
          government restriction may have had a direct impact on your operations
          even though that shutdown order wasn't given to you directly.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          <strong>Important:</strong> This qualification only applies during the
          period of the actual government order. Since there were very few
          government shutdown orders during 2021, the actual shutdown type of
          this qualification mainly applies to 2020 quarters. However, if the
          impact of shutdowns affected your business beyond the actual shutdown
          period, this qualification may apply.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Please reference the IRS notices pertaining to suspension
          qualification:
          <a href="https://www.irs.gov/pub/irs-drop/n-21-20.pdf" target="_blank"
            >Notice 2021-20</a
          >,
          <a href="https://www.irs.gov/pub/irs-drop/n-21-23.pdf" target="_blank"
            >Notice 2021-23</a
          >,
          <a
            href="https://www.irs.gov/pub/irs-drop/rp-21-33.pdf"
            target="_blank"
            >Notice 2021-33</a
          >
          &
          <a href="https://www.irs.gov/pub/irs-drop/n-21-49.pdf" target="_blank"
            >Notice 2021-49</a
          >.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Full or partial suspension qualification requirements</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <li>
          <strong>More than Nominal Impact</strong> - The partial suspension
          from a government order must have had a more than nominal effect,
          which means it affected more than 10% of business operations. This
          impact can come from a reduction in business hours of 10% or more, or
          a suspension of your business operations that represented 10% or more
          of gross receipts as compared to 2019. (This
          <strong>does not</strong> mean that a 10% reduction in sales is
          required to qualify, but the order must have suspended at least 10% of
          your revenue-producing operations.)
          <p></p>
          <p>
            Hourly example: Government orders required a restaurant to close 2
            hours early due to curfew requirements. The 2 hours represented 15%
            of the business working hours. This business qualifies for the
            period affected by the government order.
          </p>
          <p>
            Gross receipts example: Government orders required a radiology
            clinic to stop elective procedures during Q2 &amp; Q3 of 2020. The
            business reviewed its gross receipts for Q2 &amp; Q3 of 2019 and
            determined that the suspended elective procedures represented 18% of
            its total gross receipts during those quarters. This business
            qualifies for these two quarters.
          </p>
        </li>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <li>
          <strong>Inability to Convert to Telework</strong> - If the business
          was able to effectively convert to a remote work environment that
          mitigated the nominal impact on the business, they do not qualify for
          the suspension qualification.
        </li>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The cumulative effect of the full or partial suspensions must have had
          a more than 10% impact on your business operations when considering
          the gross receipts of that portion of your business in 2019. This does
          not mean that your revenue must have decreased to use this
          qualification.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>
          Did you experience a full or partial suspension due to a COVID
          government order?
        </h1>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-radio-group v-model="store.gov_lockdown_qualifier">
            <v-radio label="Yes" name="gov_lockdown_qualifier" value="true" />
            <v-radio label="No" name="gov_lockdown_qualifier" value="false" />
          </v-radio-group>
          <v-container v-show="store.gov_lockdown_qualifier === 'true'">
            <v-row>
              <v-col>
                <h2>
                  In which 2020 quarters were you impacted by these suspensions?
                </h2>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="store.q2_gov_lockdown_qualifier_2020"
              label="Q2 2020"
            />
            <v-checkbox
              v-model="store.q3_gov_lockdown_qualifier_2020"
              label="Q3 2020"
            />
            <v-checkbox
              v-model="store.q4_gov_lockdown_qualifier_2020"
              label="Q4 2020"
            />
            <v-row>
              <v-col>
                <v-divider class="my-8"></v-divider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h2>
                  In which 2021 quarters were you impacted by these suspensions?
                </h2>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="store.q1_gov_lockdown_qualifier_2021"
              label="Q1 2021"
            />
            <v-checkbox
              v-model="store.q2_gov_lockdown_qualifier_2021"
              label="Q2 2021"
            />
            <v-checkbox
              v-model="store.q3_gov_lockdown_qualifier_2021"
              label="Q3 2021"
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
