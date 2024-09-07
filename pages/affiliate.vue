<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>
    <v-container style="min-height: 600px">
      <v-row style="max-width: 800px" class="mx-auto my-6">
        <v-col cols="8">
          <v-text-field
            v-model="affiliate"
            label="Enter Affiliate Name"
            type="text"
            @keyup.enter="getAffiliate"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn color="primary" @click="getAffiliate">SEARCH</v-btn>
        </v-col>
      </v-row>
      <v-row style="max-width: 800px" class="mx-auto my-6">
        <template>
          <v-data-table
            :headers="headers"
            :items="store.clients"
            item-value="name"
            class="elevation-1"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.companyName }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <v-select
                    v-model="item.status"
                    label="Status"
                    :items="statuss"
                  ></v-select>
                </td>
                <td>{{ item.phoneNum }}</td>
                <td>{{ item.firstName }} {{ item.lastName }}</td>
              </tr>
            </template>
            <template v-slot:footer>
              <v-row v-if="store.clients.length > 0" class="mx-auto">
                <v-col cols="8" class="text-right">
                  <v-btn color="primary" @click="saveChanges"
                    >Save Changes</v-btn
                  >
                </v-col>
              </v-row>
            </template>
          </v-data-table>
        </template>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { store } from '~/middleware/store.js'
export default {
  data() {
    return {
      store,
      affiliate: '',
      hasData: false,
      statuss: [
        'new_lead',
        'qualification',
        'proposal',
        'signed_client',
        'forms_mailed',
        'refund_received',
      ],
      headers: [
        {
          text: 'Company Name',
          sortable: false,
          key: 'cname',
          align: 'start',
        },
        { text: 'Email', sortable: false, key: 'email' },
        { text: 'Status', sortable: false, key: 'status' },
        { text: 'Phone Number', sortable: false, key: 'phoneNumber' },
        { text: 'Contact Name', sortable: false, key: 'contact' },
      ],
      heroAlt: [
        {
          src: 'pexels-peter-olexa-4012966.jpg',
          heading: ' Affiliate Client info ',
        },
      ],
    }
  },
  methods: {
    async getAffiliate() {
      // console.log(this.affiliate)
      const result = await store.getAffiliateClients(this.affiliate)
      if (result.status === 200) {
        // console.log(result)
        // console.log(store.clients)
        // console.log(typeof store.clients)
      } else {
        // console.log(result)
      }
    },
  },
}
</script>
