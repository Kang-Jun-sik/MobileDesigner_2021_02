<template>
  <div :uid="uid" :id="id" class="dews-mobile-complex dews-mobile-component dews-complex">
    <label>{{ title }}</label>
    <ul class="complex-wrap">

    </ul>
  </div>
</template>

<script>
import CreateService from "@/service/CreateService";
import ComplexLine from "@/components/Controls/complex/ComplexLine";
import store from "@/store";

export default {
  name: 'dews-complex',
  // components: {ComplexLine},
  data() {
    return {
      uid: '',
      parentUid: '',
      dataUid: '',
      type: 'complex',
      liClass: 'complex-line',
      componentClass: 'components',
      controlType: 'complex-control',
      commonClass: 'item',

      /* Properties */
      id: '',
      title: 'Complex',

    }
  },
  created() {
    this.uid = CreateService.createUid('dews-complex');
  },
  mounted() {

  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

.dews-complex {
  position: relative;

  & > label {
    @include label-wrap();
  }
}
</style>
