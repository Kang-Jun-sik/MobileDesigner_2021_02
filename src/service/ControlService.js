import Vue from 'vue'
import {mobileDesignerToIDE} from "@/utils/mobileDesignerToIDE";

import Button from "@/components/Controls/ButtonComponent";
import AreaPanel from "@/components/Area/AreaPanel";
import AreaItem from "@/components/Area/AreaItem";
import AreaBox from "@/components/Area/AreaBox";
import AreaTabs from "@/components/Area/tab/AreaTabs";

import SearchContainer from "@/components/Containers/SearchContainer";
import FormContainer from "@/components/Containers/FormContainer";

export default {
    /*
    * 컨트롤 UID 생성
    **/
    createUid(target) {
        let controlUid;
        let date = new Date();
        return controlUid = target + '-' + date.getTime();
    },

    /*
    * 컴포넌트 추가 (Vuex에서 관리될 수 있도록 Vue Component 객체 생성)
    * */
    addComponent(type, param) {
        let component;
        switch (removeSpaceBetweenWord(type)) {
            case 'Button':
                component = Vue.extend(Button);
                break;
            case 'AreaPanel':
                component = Vue.extend(AreaPanel);
                break;
            case 'AreaItem':
                component = Vue.extend(AreaItem);
                break;
            case 'AreaBox':
                component = Vue.extend(AreaBox);
                break;
            case 'AreaTabs':
                component = Vue.extend(AreaTabs);
                break;
            case 'SearchContainer':
                component = Vue.extend(SearchContainer);
                break;
            case 'FormContainer':
                component = Vue.extend(FormContainer);
                break;
        }
        component = new component();
        component.$mount();
        return component;

        function removeSpaceBetweenWord(word) {
            return word.split(' ').join('');
        }
    },

    /*
    * 컨트롤 삭제 (디자이너에서만 삭제)
    **/
    deleteService(target) {
        if (target) {
            //메모리 해제 로직

            //(1)dragula container에서 삭제할 것

            //(2)vuex에서 삭제할 것
            target.remove();
        }
    },

    /*
    * 컨트롤 삭제 메세지 전달 함수 (Mobile Designer --> IDE)
    * */
    sendDeleteMessage(component) {
        // 부모 노드 찾기
        let parentNode = component.parentElement.closest('.dews-mobile-component');
        let parentUid = parentNode.getAttribute('uid');
        mobileDesignerToIDE("delete", component, parentUid);
    },
}
