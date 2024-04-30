<template>
  <div class="app-name" :class="customClasses" v-html="htmlAppName"></div>
</template>
<script>
/**
 * This mixin contains things linked to the brand
 */
import brand from 'shared/brand';

export default {
  props: {
    customClasses: Array,
    default: () => [],
  },
  data() {
    return {
      appName: brand.appName,
      appColor: brand.appColor,
    };
  },
  computed: {
    htmlAppName() {
      return this.appName.replace('.', `<span style="color: ${this.appColor}">.</span>`);
    },
  },
};
</script>

<style lang="stylus">
  .app-name
    font-weight 300
</style>
