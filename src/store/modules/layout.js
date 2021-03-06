export default {
    state: {
        workMode: '',

        designerWrapperLayout: 'designer-wrapper-tabletL',
        designerLayout: 'designer-tabletL',
        mobileLayout: 'tabletL',
        drawerLayout: 'drawer-tabletL',

        navigationBarTitle: '',
        navigationBarTitleList: [],
        mainButtons: {
            'btn-save': false,
            'btn-add': false,
            'btn-delete': false,
            'btn-search': false,
            'btn-scan' : false
        },
        mainButtonList: [],
    },
    getters: {
        getWorkMode(state) {
            return state.workMode;
        },

        getWrapperSize(state) {
            return state.designerWrapperLayout;
        },
        getDesignerSize(state) {
            return state.designerLayout;
        },
        getMobileSize(state) {
            return state.mobileLayout;
        },
        getDrawerSize(state) {
            return state.drawerLayout;
        },
        getNavigationBarTitleList: (state) => (uid) => {
            return state.navigationBarTitleList[uid];
        },
        getMainButtons(state){
            return state.mainButtons;
        },
    },
    actions: {},
    mutations: {
        setWorkMode(state, payload) {
            state.workMode = payload ? 'designer-style' : '';
        },

        SET_LAYOUT(state, payload) {
            state.designerWrapperLayout = 'designer-wrapper-' + payload;
            state.designerLayout = 'designer-' + payload;
            state.mobileLayout = payload;
            state.drawerLayout = 'drawer-' + payload;
        },
        SET_NAVIGATION_BAR_TITLE_LIST(state, payload) {
            state.navigationBarTitleList[payload.uid] = payload.title;
        },
        SET_MAIN_BUTTONS(state, payload) {
            state.mainButtons = payload;
        },
        SET_MAIN_BUTTON_LIST(state, payload) {
            state.mainButtonList[payload.uid] = payload.mainButtons;
        },
    }
}

