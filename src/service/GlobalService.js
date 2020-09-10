import dragula from "dragula";
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

export default {
    OPEN: {
        openService(args) {
            console.log(args);
        }
    },
    CREATEUID: {
        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    },
    RESIZE: {
        canResize(param) {
            let clsName = "." + param.classList[param.classList.length - 1];
            $(clsName).resizable({
                delay: 0,
                // eslint-disable-next-line no-unused-vars
                resize: function (e, ui) {
                    e.stopPropagation();
                },
                // eslint-disable-next-line no-unused-vars
                start: function (e, ui) {
                    e.stopPropagation();
                },
                // eslint-disable-next-line no-unused-vars
                stop: function (e, ui) {
                    e.stopPropagation();
                }
            });
        }
    },
    SELECTION: {
        selectService() {
            window.onclick = function (event) {
                if (!canSelectable(event.target))
                    return;

                if (window.selectedItem) {
                    if (window.selectedItem === event.target) //같은 컨트롤을 선택했을 경우 --> 바뀔 필요가 없다.
                        return;
                }
                //처리로직
                window.selectedItem = event.target;
                window.selectedItem.classList.add('selected');
                //IDE로 선택되었다고 메세지 송신
                mobileDesignerToIDE("create", "button create test");
            }

            //className으로 선택할 수 있는 요소들만 디자이너에서 선택이 가능하도록 필터링하는 함수
            function canSelectable(target) {
                if (target.classList.contains('canselect'))
                    return true;
            }
        }
    }
}