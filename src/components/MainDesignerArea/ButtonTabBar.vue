<template>
  <div :class="[mobileLayout, showScroll]" class="button-tab-bar">
    <div class="button-tab-bar-bg">
      <div class="dews-mobile-buttonMenu"></div>
      <div class="dews-main-buttons">
        <add-button ref="addButton"></add-button>
        <search-button ref="searchButton"></search-button>
        <delete-button ref="deleteButton"></delete-button>
        <save-button ref="saveButton"></save-button>
        <scan-button ref="scanButton"></scan-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import AddButton from "@/components/MainButtons/AddButton";
import SearchButton from "@/components/MainButtons/SearchButton";
import DeleteButton from "@/components/MainButtons/DeleteButton";
import SaveButton from "@/components/MainButtons/SaveButton";
import ScanButton from "../MainButtons/ScanButton";

export default {
  name: 'button-tab-bar',
  components: {ScanButton, SaveButton, DeleteButton, SearchButton, AddButton},
  props: ['showScroll'],
  data() {
    return {}
  },
  mounted() {
    this.$store.commit('ADD_ITEM', this.$refs.addButton);
    this.$store.commit('ADD_ITEM', this.$refs.searchButton);
    this.$store.commit('ADD_ITEM', this.$refs.deleteButton);
    this.$store.commit('ADD_ITEM', this.$refs.saveButton);
    this.$store.commit('ADD_ITEM', this.$refs.scanButton);
  },
  computed: {
    ...mapGetters({
      mobileLayout: "getMobileSize"
    })
  },
}
</script>

<style lang="scss" scoped>
.button-tab-bar {
  position: absolute;
  backdrop-filter: blur(20px);
  background-color: rgba(28, 144, 251, 0.95);
  border-radius: 0 0 33px 33px;
  bottom: 0;

  .button-tab-bar-bg {
    width: 100%;
    height: 56px;
    background-color: rgba(28, 144, 251, 0.95);
    border-radius: 0 0 33px 33px;

    .dews-mobile-buttonMenu {
      margin: 16px 0 0 23px;
      float: left;
      width: 24px;
      height: 24px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADB/VeXAAAAX0lEQVRIDWNgGCzg////AUB8Hojvg9hUdxfQ0AdADAPnibWAiViFaOoY0fiUc4FOBwXRBSAG+YT6QUS5E0dNGPQhAE1FoxkNd0xBg2g0o+EOolEZgiEwmtGIDaLBl9EAiKiEf0/YLGcAAAAASUVORK5CYII=');
    }

    .dews-main-buttons {
      margin: 17px 0 0 0;
      float: right;
    }
  }

  &.smartPhone {
    width: 430px;
    height: 56px;
    margin: 0 24px 20px;
  }

  &.tabletM {
    width: 859px;
    height: 56px;
    margin: 0 20px 20px;
  }

  &.tabletL {
    width: 1077px;
    height: 56px;
    margin: 0 21px 20px;
  }
}

//확장모드
.designer-style {
  .button-tab-bar {
    position: sticky;
    z-index: 0;
    bottom: 0;

    &.scroll {
      opacity: 0.2;
    }


    .button-tab-bar-bg {
      border-radius: 0;
      //border-bottom: 1px solid rgba(60, 60, 67, 0.18);
      //border-left: 1px solid rgba(60, 60, 67, 0.18);
      //border-right: 1px solid rgba(60, 60, 67, 0.18);
      box-shadow: 0px 10px 10px 0 rgba(0, 0, 0, 0.06);
    }

    &.smartPhone {
      width: 100%;
      margin: 0;
    }

    &.tabletM {
      width: 100%;
      margin: 0;
    }

    &.tabletL {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
