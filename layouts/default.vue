<template>
  <v-app dark>
    <siteHeader />
    <v-main>
      <nuxt />
    </v-main>
    <footerTop />
    <siteFooter />
    <!-- <Notification /> -->
  </v-app>
</template>

<script>
import { store } from '~/middleware/store.js'
import siteHeader from '~/components/siteHeader.vue'
import footerTop from '~/components/footerTop.vue'
import siteFooter from '~/components/siteFooter.vue'
export default {
  components: {
    siteHeader,
    footerTop,
    siteFooter,
  },
  data() {
    return {
      store,
    }
  },
  async mounted() {
    const url = window.location.href
    if (url.includes('?')) {
      const split = url.split('?')
      const referrer = split[1]
      store.referrer = referrer
    } else {
      store.referrer = 'no ref'
    }
    const localAuthToken = localStorage.auth_token
    const cookieExists =
      localAuthToken !== 'undefined' && localAuthToken !== null
    if (cookieExists) {
      const authToken = localStorage.getItem('auth_token')
      const authTokenExists = authToken !== 'undefined' && authToken !== null
      if (authTokenExists) {
        await store.loginUserWithtoken(authToken)
      }
    }
  },
  beforeMount() {
    const url = window.location.href
    const split = url.split(':')
    const protocol = split.shift()
    const remaining = split.join(':')
    if (process.env.NODE_ENV !== 'development' && protocol === 'http') {
      window.location.href = `https:${remaining}`
    }
  },
  head() {
    return {
      script: [
        {
          // src: 'https://www.googletagmanager.com/ns.html?id=GTM-WDG6WSS',
        },
      ],
    }
  },
}
</script>

<style></style>
