import store from "@/store/index";
import 'jquery-contextmenu';

import mobileDesignerToIDE from "@/utils/mobileDesignerToIDE";
import SelectService from "@/service/SelectService";
import ContextMenuService from "@/service/ContextMenuService";

export default {
    /**
     * 디자이너 컨트롤 선택 서비스 (IDE --> MOBILE DESIGNER Control Selection)
     * @param args
     */
    selectFromIDE(args) {
        // 1) uid를 추출한다.
        // 2) uid를 이용해 vuex에서 해당 componet의 $el을 가져온다.
        // 3) 해당 $el을 selectControl 함수의 파라미터로 넘겨준다.
        console.log(args);
        const message = JSON.parse(args);
        const uid = message['controlUniqueId'];
        const control = store.state.component.items.find(item => item.uid === uid);

        SelectService.selectControl(control.$el);
    },

    /*
    * 컨트롤 선택 이벤트 등록
    **/
    selectControlEvent() {
        const $mainDesigner = document.querySelector('.main-designer-wrapper');
        $mainDesigner.addEventListener('mousedown', function (e) {
            const target = e.target;
            // 이벤트 위임 방법을 사용하여 선택한 AreaPanel만 보일수 있도록 로직 추가
            const panels = $mainDesigner.querySelectorAll('.dews-panel');
            Array.from(panels).forEach(panel => {
                if (panel.classList.contains('dews-panel-show')) {
                    panel.classList.add('dews-panel-hide');
                    panel.classList.remove('dews-panel-show');
                }
            });
            if (target.classList.contains('dews-panel')) {
                if (target.classList.contains('dews-panel-hide')) {
                    target.classList.add('dews-panel-show');
                    target.classList.remove('dews-panel-hide');
                }
            }
            SelectService.selectControl(target);
            e.preventDefault();
        })
    },

    /*
    * Find Layout (box, Tab)
    **/
    findLayoutTarget(target) {
        return target.closest('.dews-layout-component');
    },

    /*
    * Find Component
    **/
    findTarget(target) {
        return target.closest('.dews-mobile-component');
    },
    /*
    * 컨트롤 선택 이벤트 실행
    * @param eventTarget - 선택한 컨트롤
    **/
    selectControl(eventTarget) {
        const target = eventTarget.classList.contains('dews-mobile-component') ? eventTarget : this.findTarget(eventTarget);
        const layoutTarget = eventTarget.classList.contains('dews-layout-component') ? eventTarget : this.findLayoutTarget(eventTarget);
        // 같은 컨트롤을 선택했을 경우 재 선택하는 것을 방지 / target이 null인 경우 return (dews-mobile-component가 아님)
        if ((window.selectedItem && window.selectedItem === target) || target === null) return;

        try {
            if (eventTarget.classList.contains('main-designer')) {
                store.state.designer.navigationBar.title = '';
                store.commit('SET_MAIN_BUTTONS', {
                    'btn-save': false,
                    'btn-add': false,
                    'btn-delete': false,
                    'btn-search': false,
                    'btn-scan':false
                });
            } else {
                const uid = layoutTarget.getAttribute('uid');
                const mainButtons = store.state.layout.mainButtonList[uid];

                store.state.designer.navigationBar.title = store.getters.getNavigationBarTitleList(uid);
                store.commit('SET_MAIN_BUTTONS', mainButtons);
            }
        } catch (e) {
            console.log('Not Find Main Buttons')
        }

        if (document.querySelector('.selected-control')) {
            const selectedElement = document.querySelector('.selected-control');
            selectedElement.classList.remove('selected-control');
        }
        window.selectedItem = target;
        window.selectedItem.classList.add('selected-control');

        SelectService.removeSelectHandler();
        const preventSelectHandlerList = ['main-designer',]
        if (!target.classList.contains('main-designer'))
            SelectService.showSelectHandler(target);
        ContextMenuService.destroyContextMenu();
        ContextMenuService.getContextMenu(window.selectedItem);
        mobileDesignerToIDE({commandType: 'select', elm: window.selectedItem});
    },

    /*
    * Select Control Handler 위치 css 수정
    **/
    setPosition(el) {
        if (!window.selectedItem) return;

        const width = el.offsetWidth;
        const height = el.offsetHeight;
        try {
            el.querySelector('.handle-n').style.left = (width / 2 - 4) + 'px';
            el.querySelector('.handle-e').style.top = (height / 2 - 4) + 'px';
            el.querySelector('.handle-s').style.left = (width / 2 - 4) + 'px';
            el.querySelector('.handle-w').style.top = (height / 2 - 4) + 'px';
        } catch (error) {
            console.error(error);
        }
    },

    showSelectHandler(element) {
        const $element = element;
        const handles = ["n", "e", "s", "w", "ne", "se", "sw", "nw"];
        handles.forEach(handle => {
            let newHandle = document.createElement('div');
            newHandle.className = `dews-control-handle handle-${handle}`;
            $element.appendChild(newHandle);
        });

        SelectService.setPosition($element);
    },

    removeSelectHandler() {
        const handles = document.querySelectorAll('.dews-control-handle');
        Array.from(handles).forEach(handle => handle.remove());
    }
}
