import $ from "jquery";
import 'jquery-contextmenu'
import DeleteService from "@/service/DeleteService";
import SplitService from "@/service/SplitService";

export default {
    /*
    * 마우스 오른쪽 클릭
    * ContextMenu 호출
    * */
    getContextMenu(instance) {
        switch (instance.classList[0]) {
            case "main-designer" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "edit": {
                            name: "mainDesignerOption",
                            icon: "edit"
                        },
                    },
                    callback: function(itemKey, opt) {
                        console.log(itemKey);
                    }
                });
                break;
            case "dews-mobile-item":
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "split": {
                            name: "분할",
                            icon: "ic-split"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        }
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey) {
                            case "split":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                })
                break;
            case "dews-mobile-box":
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "split": {
                            name: "분할",
                            icon: "ic-split"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        }
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "split":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-tabs':
                break;
            case 'dews-mobile-tab':
                break;
            case "dews-mobile-searchContainer" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-listContainer':
                break;
            case 'dews-mobile-formContainer':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                        "addFormSection": {
                            name: 'Add FormSection',
                            icon: 'edit'
                        }
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-infoContainer':
                break;
            case 'dews-mobile-formSection':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-containerContent':
                break;
            case 'dews-mobile-containerButton':
                break;
            case "dews-mobile-button" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-buttonGroup':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-checkbox':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-checkbox-group':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-complex':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-datePicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-maskbox':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-monthPicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-numeric':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-periodPicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-radiobutton':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-radioGroup':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-textbox':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-timePicker':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-dropdownList':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'dews-mobile-dropdownButton':
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "option": {
                            name: "Option",
                            icon: "edit"
                        },
                        "addChildButton": {
                            name: "Add Child Button",
                            icon: "edit"
                        },
                        "delete": {
                            name: "Delete",
                            icon: "ic-delete"
                        },
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                });
                break;
            case 'button-list-child':
                break;
        }
    },

    destroyContextMenu(){
        $.contextMenu('destroy');
    }
}
