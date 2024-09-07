<template>
  <v-container style="max-width: 650px" class="pb-16">
    <v-row>
      <v-col>
        <h1>Supply disruption</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Supply chain disruption is a common qualification for businesses that
          rely on vendors and suppliers for their business to function properly.
          This qualification must have resulted from a government suspension
          order to your supplier that resulted in the supplier not being able to
          deliver critical goods, but may continue beyond the original
          suspension order. The specific requirements for this qualification are
          listed below.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>
          These impacts qualify a company regardless of revenue gain or loss.
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Please reference the IRS notices pertaining to supply chain disruption
          qualification:
          <a href="https://www.irs.gov/pub/irs-drop/n-21-11.pdf" target="_blank"
            >Notice 2021-11</a
          >
          &
          <a href="https://www.irs.gov/pub/irs-drop/n-21-20.pdf" target="_blank"
            >Notice 2021-20</a
          >.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Supply disruption qualifications</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <li>
          <strong>More than Nominal Impact</strong> - The supply chain
          disruption due to vendor shutdowns must have resulted in a more than
          10% impact on your business. This can be directly from the reduction
          of sales from the inability to procure the supply item, or from the
          impact not being able to procure the item had on your business. To
          calculate the more than 10% impact, evaluate the impact of the supply
          item on your 2019 gross receipts. For example, if you were not able to
          procure pallets for the shipping of goods, consider how much of your
          business relied upon pallets in order to operate in 2019. If it was
          more than 10%, this qualification can apply.
        </li>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <li>
          <strong>No Replacement Supplier</strong> - Your business must not have
          been able to find a reasonable replacement supplier for the supply
          item affected by the government suspension order.
        </li>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>
          Did you experience a supply chain disruption due to a COVID government
          ordered suspension on your supplier?
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          The cumulative impact of the disrupted supply items must have directly
          or indirectly represented more than 10% of gross sales in 2019. This
          does not mean that your revenue must have decreased to use this
          qualification. If you were able to find a replacement supplier that
          resulted in a less than 10% impact on your business, this
          qualification does not apply.
        </p>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-radio-group v-model="store.supply_disruption">
            <v-radio label="Yes" name="supply_disruption" value="true" />
            <v-radio label="No" name="supply_disruption" value="false" />
          </v-radio-group>
          <v-container v-show="store.supply_disruption === 'true'">
            <v-row>
              <v-col>
                <h2>
                  Please check all <strong>2020</strong> quarters your business
                  was impacted more than 10% due to the cumulative impact of any
                  disrupted supply items that the business was unable to find
                  reasonable replacement suppliers.
                </h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>
                  This does <strong>not</strong> mean revenue must have
                  decreased during the 2020 quarters
                </p>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="store.q2_supply_disruption_2020"
              label="Q2 2020"
            />
            <v-checkbox
              v-model="store.q3_supply_disruption_2020"
              label="Q3 2020"
            />
            <v-checkbox
              v-model="store.q4_supply_disruption_2020"
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
                  Please check all <strong>2021</strong> quarters your business
                  was impacted more than 10% due to the cumulative impact of any
                  disrupted supply items that the business was unable to find
                  reasonable replacement suppliers.
                </h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>
                  This does <strong>not</strong> mean revenue must have
                  decreased during the 2021 quarters
                </p>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="store.q1_supply_disruption_2021"
              label="Q1 2021"
            />
            <v-checkbox
              v-model="store.q2_supply_disruption_2021"
              label="Q2 2021"
            />
            <v-checkbox
              v-model="store.q3_supply_disruption_2021"
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
