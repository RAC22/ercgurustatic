<template>
  <img
    :src="require('../static/images/' + getLogoSrc())"
    class="logo"
    alt="ERCguru Logo"
  />
</template>
<script>
export default {
  methods: {
    getLogoSrc() {
      const dark = this.$vuetify.theme.dark
      if (dark) {
        return `ercgurulogodark.png`
      } else {
        return `ercgurulogo.png`
      }
    },
  },
}
</script>
<style scoped>
.logo {
  height: 41px;
  width: 134px;
}
</style>
