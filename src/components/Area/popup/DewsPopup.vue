<template>
  <div :uid="uid" class="dews-mobile-popup popup" :class="`${dialogType} ${dialogSize} ${use_button}`" ref="popup">
    <div class="overlay"></div>
    <!-- size: full/large/medium/small-->
    <div class="layer layer-popup">
      <div class="layer-header">
        <div class="titlebar">
          <div class="title">{{ this.title }}</div>
        </div>
        <button class="close-button" @click="clickClose($event)"></button>
      </div>
      <dews-popup-content :class="`${dialogClass} ${dialogContent} dews-mobile-component`" :data-uid="dataUid" ref="popupContent"></dews-popup-content>
      <dews-popup-buttons v-show="isShowPopupButtons" ref="popupButtons"></dews-popup-buttons>
    </div>
  </div>

</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import DewsPopupButtons from "./DewsPopupButtons";
import DewsPopupContent from "./DewsPopupContent";

export default {
  name: "dews-popup",
  components: {DewsPopupContent, DewsPopupButtons},
  data() {
    return {
      /* Properties */
      uid: '',
      type: 'dialog',
      dialogType: '',
      dialogContent: 'popup-content',
      dialogClass: '',
      dialogSize: '',
      use_button: '',
      dataUid: '',
      size: '',
      page_id: '',
      title: 'Sample Layout popup',
      active: '',
    }
  },
  methods: {
    setUseButton(value) {
      if (JSON.parse(value) == true) {
        if (this.dialogType == 'custom')
          this.use_button = 'use-button';
      } else
        this.use_button = '';
    },
    setCustom(value) {
      JSON.parse(value) ? this.$refs.popup.classList.add('custom') : this.$refs.popup.classList.remove('custom');
    },
    setDialogSize(value) {
      if (!value)
        return;
      if (this.dialogType == 'custom')
        this.dialogSize = value;
    },
    setID(value) {
      this.id = value;
    },
    setTitle(value) {
      this.title = value;
    },
    clickClose() {
      console.log('close');
    },
  },
  created() {
    //this.uid = CreateService.createUid('dews-popup');
    this.dataUid = CreateService.createUid('popup-content');
  },
  computed: {
    isShowPopupButtons() {
      if (this.dialogType == 'custom') {
        if (this.use_button == 'use-button')
          return true;
      }
      return false;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include layer-popup();
.dews-mobile-popup {
  position: absolute !important;
  z-index: 1;
  top: 0;
  left: 0;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border: 1px dotted rgba(23, 122, 255, 0.75);

  .overlay {
    display: none;
  }

  .layer-popup {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ffffff;

    .layer-header {
      background-color: #e7f0fe;
    }

    .popup-content {
      width: 100%;
      height: calc(100% - 53px);
      overflow-y: auto;
      padding: 10px;
      background-color: #ffffff;
    }
  }
}


.dews-mobile-popup.custom {

  .layer-header {
    margin-bottom: 4px;
  }

  .popup-content {
    height: calc(100% - 57px);
    padding: 10px 20px 0;
  }

  &.large {
    top: 24px;
    left: 53%;
    width: 320px;
    height: calc(100% - 24px - 16px);
    margin-left: calc(-320px / 2);
  }

  &.medium {
    top: 50%;
    left: 53%;
    width: 320px;
    height: 480px;
    margin-top: calc(-480px / 2);
    margin-left: calc(-320px / 2);
  }

  &.small {
    top: 50%;
    left: 53%;
    width: 320px;
    height: 320px;
    margin-top: calc(-320px / 2);
    margin-left: calc(-320px / 2);
  }

  &.use-button {
    .popup-content {
      height: calc(100% - 57px - 36px - 40px);
    }

    .popup-buttons {
      position: absolute !important;
      left: 0;
      bottom: 20px;
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 56px;
      margin: 0;
      padding: 0 20px;
      border: 1px dotted #212121;
    }
  }
}

.designer-style {
  .dews-mobile-popup.custom {
    &.large,
    &.medium,
    &.small {
      left: 50%;
    }
  }
}
</style>
