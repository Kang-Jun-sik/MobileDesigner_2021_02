import GlobalService from "@/service/GlobalService";

export default {
    init() {
        // 글로벌 서비스를 위한 서비스 Map 등록
        window.services = new Map();
        window.services.set(GlobalService.openService.name, GlobalService.openService);
        window.services.set(GlobalService.selectFromIDEService.name, GlobalService.selectFromIDEService);
    }
}