<template>
  <div :uid="uid" :id="id" class="dews-mobile-infoContainer dews-mobile-component dews-container-infobox" :class="type">
    <p class="info-text">
      {{ value }}
    </p>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";

export default {
  name: 'dews-info-container',
  data() {
    return {
      uid: '',
      parentUid: '',
      value: 'TestValue',

      /* check child */
      hasChildControl: true,
      controlType: 'info',

      /* Properties */
      id: '',
      type: 'basic',
    }
  },
  created() {
    this.uid = CreateService.createUid('dews-info-container');
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setType(value) {
      this.type = value;
    },
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include dews-container-infobox();
</style>
