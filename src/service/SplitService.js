import store from "@/store/index"
import SplitService from "@/service/SplitService";
import SelectService from "@/service/SelectService";
import CreateService from "@/service/CreateService";
import ChangeService from "@/service/ChangeService";
import MultiCommandService from "@/service/MultiCommandService";

export default {
    verticalSplit(target) {
        // TabletL 사이즈가 아니라면 분할이 불가능하므로 리턴
        if (store.state.layout.designerLayout !== 'designer-tabletL') return;

        if (!target.classList.contains('dews-item')
            && !target.parentElement.classList.contains('dews-item')) {
            SplitService.setSplit(target)
        } else {
            if (target.classList.contains('dews-item')) {
                SplitService.itemSplit(target);
            } else {
                SplitService.areaSplit(target);
            }
        }
    },

    /*
    * AreaBox/ AreaTabs 분할 할 경우
    * AreaPanel 생성 후, 2개의 AreaItem을 생성하여 분할한다.
    * */
    setSplit(target, areaMultiCommand) {
        const multiCommand = areaMultiCommand ? areaMultiCommand : []; //MultiCommandService (복수 메세지 호출을 위한 Array)
        multiCommand.push({
            commandType: 'delete',
            obj: {
                target: target,
                parentUid: target.parentElement.closest('.dews-mobile-component').getAttribute('uid')
            }
        });

        // 분할을 위한 AreaPanel extend 후, target과 area.$el를 replaceWith 실행
        const areaPanel = CreateService.addComponent('AreaPanel');
        const areaPanelElement = areaPanel.$el;
        store.commit('ADD_ITEM', areaPanel);
        target.replaceWith(areaPanelElement);
        for (let i = 0; i < 2; i++) {
            let item = CreateService.addComponent('AreaItem');
            areaPanelElement.appendChild(item.$el);
            store.commit('ADD_ITEM', item);
        }

        // 왼쪽 item에 target(box 혹은 tabs) appendChild (default)
        const areaItem = areaPanelElement.querySelectorAll(':scope > .dews-item')[0];
        areaItem.appendChild(target);
        SelectService.setPosition(target);
        multiCommand.push({ commandType: 'create', obj: areaPanelElement });
        MultiCommandService.sendMultiCommand(multiCommand);
    },

    /*
    * 하나의 AreaPanel 최대 3개까지 분할 가능 4:4:4
    * @param target => dews-item (이미 분할이 되어있는 경우)
    * 1) target(item)이 존재하는 AreaPanel안에 또다른 AreaPanel(AreaPanel 2개)이 존재한다면 이미 분할된 상태이므로 return
    * 2) target(item)이 존재하는 AreaPanel에는 최대 3개(4:4:4)의 item이 들어갈 수 있으므로 2개가 아니면 return
    * */
    itemSplit(target) {
        if (SplitService.parentPanelCount(target) >= 2
            || SplitService.childPanelCount(target.parentElement) >= 2
            || target.parentElement.childElementCount !== 2) return;

        const multiCommand = [];
        const parentElement = target.parentElement;
        const addItem = CreateService.addComponent('AreaItem');
        parentElement.appendChild(addItem.$el);
        store.commit('ADD_ITEM', addItem);
        multiCommand.push({commandType: 'create', obj: addItem.$el}); // <- CreateService.sendCreateMessage(addItem.$el);

        const childElement = Array.from(parentElement.children);
        childElement.forEach(child => {
            let splitItem = store.state.component.items.find(item => {
                return item.uid === child.getAttribute('uid');
            })
            splitItem.col = '4';
            multiCommand.push({
                commandType: 'change',
                obj: { AttributeKey: 'col', AttributeValue: '4', uniqueId: splitItem.uid }
            });
        });
        MultiCommandService.sendMultiCommand(multiCommand);
    },

    /*
    * 분할 가능 비율 (4:8 / 8:4)로 변경 후, 재분할 진행 (비율은 6:6 고정 / 1Row 당 최대 3개까지 분할 가능)
    * @param target => dews-box / dews-tabs (이 두가지가 이미 분할된 item 속에 들어있을 경우)
    * 1) target(box, tabs)이 존재하는 AreaPanel이 2개 이상이라면 이미 3개가 분할된 상태이므로 return
    * 2) target(box, tabs)이 존재하는 AreaItem의 SiblingItem이 이미 분활된 상태(AreaPanel 2개)라면 return
    * 3) target(box, tabs)이 존재하는 AreaPanel에 이미 item이 3개(4:4:4)가 존재한다면 return
    * */
    areaSplit(target) {
        const multiCommand = [];
        const targetParentItem = target.parentElement;
        const parentSiblingItem = targetParentItem.nextElementSibling ? targetParentItem.nextElementSibling : targetParentItem.previousElementSibling;

        if (SplitService.parentPanelCount(target) >= 2
            || SplitService.childPanelCount(parentSiblingItem) >= 2
            || target.closest('.dews-panel').childElementCount === 3) return

        store.state.component.items.forEach(item => {
            if (item.uid === targetParentItem.getAttribute('uid')) {
                item.col = '8';
                multiCommand.push({
                    commandType: 'change',
                    obj: { AttributeKey: 'col', AttributeValue: '8', uniqueId: item.uid }
                });
            } else if (item.uid === parentSiblingItem.getAttribute('uid')) {
                item.col = '4';
                multiCommand.push({
                    commandType: 'change',
                    obj: { AttributeKey: 'col', AttributeValue: '4', uniqueId: item.uid }
                });
            }
        });
        // MultiCommandService.sendMultiCommand(multiCommand);
        // AreaPanel + AreaItem 생성
        SplitService.setSplit(target, multiCommand);
    },

    /*
    * 재분할 전, AreaPanel을 Count하여 하나만 있다면 재분할 가능 (그 이상 재분할 불가능)
    * @param element
    * */
    parentPanelCount(element) {
        let _element = element;
        let cnt = 0;
        while (!_element.classList.contains('main-designer')) {
            if (_element.parentElement.classList.contains('dews-panel')) {
                cnt += 1;
            }
            _element = _element.parentElement;
        }
        return cnt;
    },

    /*
    * 재분할 전, AreaPanel을 Count하여 하나만 있다면 재분할 가능 (그 이상 재분할 불가능)
    * @param element
    * */
    childPanelCount(element) {
        let cnt = 1;
        Array.from(element.children).forEach(el => {
            const elementInPanel = Array.from(el.children).filter(child => {
                return child.classList.contains('dews-panel');
            })
            if (el.classList.contains('dews-panel') || elementInPanel.length > 0) cnt += 1;
        })
        return cnt;
    },
}
