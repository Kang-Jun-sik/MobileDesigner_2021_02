<template>
  <div :uid="uid" v-show="mainButtons['btn-save']" class="dews-mobile-save"></div>
</template>

<script>
import CreateService from "@/service/CreateService";
import {mapGetters} from "vuex";

export default {
  name: 'save-button',
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = CreateService.createUid('btn-save');
  },
  computed: {
    ...mapGetters({
      mainButtons: "getMainButtons"
    }),
  }
}
</script>

<style>
  .dews-mobile-save {
    display: inline-block;
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
    width: 24px;
    height: 24px;
    margin-right: 24px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAA/UlEQVRIDe1VwQ3CMAxsmKDdhBE7ApsVJgA2KBOEc5Wz0tZuqlDBh0iRnfPlro6FaJpvrRjjBfuOXbMGXGrdb0VRxD9dvgmUx6R+5lfQjWcvgtdiXxPfNrHELKzaxBKzMM9AcPD9TiwxC9sysEyUb4kRK8RBRVICvnQyLYFOS0J2vmW5l4ZlIYQwLjF5P3VcFSuAXG+rgwrp9ZXfGaBN/njY8VZcDZu9TEOSmwJgQDo0YiSWonVXsD1P1AnRWjDtSsZTnb3nZAvL68wtXo7t6YBaVfFvUHw2PtFLmBiO/uEUbzqETOOpFIA9J39g7NVAkmTyOMBANObiM6eDD28pyGgkXgWahAAAAABJRU5ErkJggg==');
  }
</style>
