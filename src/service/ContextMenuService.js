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
                        "edit": {name: "mainDesignerOption", icon: "ic-edit"},
                        "sep1": "---------",
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
                        "vertical": {name: "세로분할", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"}
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "vertical":
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
                        "vertical": {name: "세로분할", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"}
                    },
                    callback: function(itemKey, opt) {
                        switch (itemKey){
                            case "vertical":
                                SplitService.verticalSplit(opt.$trigger[0]);
                                break;
                            case "delete" :
                                DeleteService.deleteControl(opt.$trigger[0]);
                                break;
                        }
                    }
                })
                break;

            case "dews-mobile-searchContainer" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "edit": {name: "Search-container-option", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
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

            case "dews-mobile-button" :
                $.contextMenu({
                    selector: ".selected-control",
                    items: {
                        "b1": {name: "ButtonOption1", icon: "edit"},
                        "delete": {name: "Delete", icon: "delete"},
                        "sep1": "---------",
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
        }
    },

    destroyContextMenu(){
        $.contextMenu('destroy');
    }
}

