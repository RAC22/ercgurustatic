<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16" style="max-width: 800px; min-height: 500px">
          <v-expansion-panels variant="accordion">
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong>What is ERC?</strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  Employee Retention Credit (ERC) is a stimulus program designed
                  to help businesses that were able to retain their employees
                  during the Covid-19 pandemic. Established by the CARES Act, it
                  is a refundable tax credit – a grant, not a loan – that you
                  can claim for your business. The ERC is available to both
                  small and mid-sized businesses. It is based on qualified wages
                  and healthcare paid to employees.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong>When does ERC end?</strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  An eligible employer claiming a refundable credit for any
                  quarter in 2020 must file its 941x forms by April 15, 2024. An
                  eligible employer claiming a refundable credit for any quarter
                  in 2021 must file its 941x forms by April 15, 2025.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong>How do I qualify for the ERC?</strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                There are two primary ways to qualify:
                <ol>
                  <li>
                    FULL OR PARTIAL SUSPENSION OF BUSINESS OPERATIONS: A
                    government authority required partial or full shutdown of
                    your business during 2020 or 2021. This includes your
                    operations being limited by commerce, inability to travel,
                    or restrictions of group meetings.
                  </li>
                  <li>
                    GROSS RECEIPTS REDUCTION: Gross receipt reduction criteria
                    are different for 2020 and 2021 but are measured against the
                    current quarter as compared to 2019 pre-COVID amounts.
                  </li>
                </ol>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong
                  >Do I still qualify if there was no revenue decline?</strong
                >
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  There are two ways to qualify: EITHER a change in your
                  operations OR a revenue decline. You do not need a revenue
                  decline to qualify, in fact many businesses had a revenue
                  increase and still qualified.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong>Do we still qualify if we already took the PPP?</strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  Yes. Under the Consolidated Appropriations Act, businesses can
                  now qualify for the ERC even if they already received a PPP
                  loan. Note, though, that the ERC will only apply to wages not
                  used for the PPP.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong>Is the ERC refund considered taxable income?</strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  The refund is a deduction in the payroll expense for the
                  period that the credit is for. The interest that the IRS pays
                  on the credit is considered taxable income in the period that
                  the payment is received.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong
                  >Do we still qualify if we did not incur a 20% decline in
                  gross receipts?</strong
                >
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                Your business qualifies for the ERC, if it falls under one of
                the following:
                <ul>
                  <li>
                    A government authority required partial or full shutdown of
                    your business during 2020 or 2021. This includes your
                    operations being limited by commerce, inability to travel or
                    restrictions of group meetings.
                  </li>
                  <li>
                    Gross receipt reduction criteria is different for 2020 and
                    2021, but is measured against the current quarter as
                    compared to 2019 pre-COVID amounts.
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong
                  >Do we still qualify if we remained open during the
                  pandemic?</strong
                >
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  Yes. To qualify, your business must meet either one of the
                  following criteria:
                </p>
                <ul>
                  <li>Experienced a decline in gross receipts by 20%, or</li>
                  <li>
                    Had to change business operations due to government orders
                  </li>
                </ul>
                <p>
                  Many items are considered as changes in business operations,
                  including shifts in job roles and the purchase of extra
                  protective equipment. The ERC, in this case, also applies only
                  for Q3 and Q4 of 2021. Businesses can qualify, regardless of
                  the number of full-time employees.
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header expand-icon="mdi-menu-down">
                <strong>What qualifies as operational changes?</strong>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider class="mb-4"></v-divider>
                <p>
                  Here are some impacts to consider that qualify your business
                  for the Employee Retention Credit:
                </p>
                <ul>
                  <li>Change in business hours</li>
                  <li>Partial or full suspension of your operations</li>
                  <li>Shutdowns of your supply chain or vendors</li>
                  <li>Reduction in services offered</li>
                  <li>Reduction in workforce or employee workloads</li>
                  <li>
                    A disruption in your business (division or department
                    closures)
                  </li>
                  <li>Inability to visit a client's job site</li>
                  <li>
                    Suppliers were unable to make deliveries of critical goods
                    or materials
                  </li>
                  <li>
                    Additional spacing requirements for employees and customers
                    due to social distancing
                  </li>
                  <li>Change in job roles/functions</li>
                  <li>
                    Tasks or work that couldn't be done from home or while
                    transitioning to remote work conditions
                  </li>
                  <li>Lack of Travel</li>
                  <li>Lack of Group Meetings</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: '/pexels-ekaterina-bolovtsova-4048767.jpg',
          heading: ' Frequently asked questions ',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Frequently asked questions',
      meta: [
        {
          hid: 'FAQ',
          name: 'FAQ',
          content: 'Frequently asked questions about the ERC program',
        },
      ],
    }
  },
}
</script>
