<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list dense>
        <v-list-item-group v-for="(item, i) in items" :key="i" color="primary">
          <v-list-item v-if="!item.submenu" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title.toUpperCase()" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else :prepend-icon="item.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.title.toUpperCase()"
                ></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.submenu"
              :key="child.title"
              :to="child.to"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app hide-on-scroll height="64" elevate-on-scroll>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        aria-label="Navigation Drawer"
        @click="drawer = true"
      />
      <nuxt-link to="/" class="px-xs-6">
        <Logo />
      </nuxt-link>
      <v-spacer />

      <template v-for="(name, menuitem) in items">
        <template v-if="name.submenu">
          <v-menu
            :key="menuitem"
            open-on-hover
            offset-y
            transition="slide-y-transition"
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                class="py-5 submenubtn hidden-sm-and-down"
                :ripple="false"
                v-bind="attrs"
                style="height: auto"
                v-on="on"
              >
                {{ name.title }}
                <v-icon right small class="mx-0"> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="index"
                link
                :to="item.to"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-btn
          v-else
          :key="menuitem"
          depressed
          tile
          plain
          class="py-8 hidden-sm-and-down"
          :to="name.to"
          >{{ name.title }}</v-btn
        >
      </template>
      <!-- <login /> -->
      <v-spacer />
      <v-btn
        icon
        aria-label="Night/Light mode toggle"
        @click="changeThemeColor"
      >
        <v-icon>{{
          $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
// import login from './login.vue'
export default {
  // components: {
  //   login,
  // },
  data() {
    return {
      clipped: false,
      drawer: false,
      loginModal: false,
      items: [
        {
          icon: 'mdi-folder-home-outline',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-frequently-asked-questions',
          title: 'FAQ',
          to: '/faq',
        },
        // {
        //   icon: 'mdi-account',
        //   title: 'About',
        //   to: '/about',
        // },
        // {
        //   icon: 'mdi-tools',
        //   title: 'Services',
        //   to: '/services',
        //   submenu: [
        //     {
        //       title: 'Services Page',
        //       to: '/services',
        //     },
        //     {
        //       title: 'Static Websites',
        //       to: '/#',
        //     },
        //     {
        //       title: 'Mobile Applications',
        //       to: '/#',
        //     },
        //     {
        //       title: 'Corporate websites',
        //       to: '/#',
        //     },
        //     {
        //       title: 'Editorial Sites',
        //       to: '/#',
        //     },
        //     {
        //       title: 'Ecommerce and Store',
        //       to: '/#',
        //     },
        //     {
        //       title: 'Block Chain Devemopment',
        //       to: '/#',
        //     },
        //   ],
        // },
        // {
        //   icon: 'mdi-blogger',
        //   title: 'Blog',
        //   to: '/blog',
        // },
        // {
        //   icon: 'mdi-contacts',
        //   title: 'Contact',
        //   to: '/contact',
        // },
      ],
    }
  },
  mounted() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$vuetify.theme.dark = true
    }
  },
  methods: {
    changeThemeColor() {
      if (this.$vuetify.theme.dark === true) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    },
    openModal() {
      this.loginModal = !this.loginModal
    },
  },
}
</script>

<style scoped>
.submenubtn {
  cursor: default;
}
</style>
