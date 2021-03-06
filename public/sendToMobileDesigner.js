/**
 * IDE --> MOBILE DESIGNER 데이터 수신 처리부
 */

(function () {
    let messageHandler = window.messageHandler || {};

    function MessageFromIDE(args) {
        let obj = JSON.parse(args);
        let isUndoRedo = true;
        console.log(args);
        //IDE와 Message를 맞춰줘야 한다.
        switch (obj.commandType.toUpperCase()) {
            //등록된 서비스를 호출
            case 'OPEN' :
                window.services.get("openService").call(this, args);
                break;
            case 'SELECT_IDE' :
                window.services.get("selectFromIDE").call(this, args);
                break;
            case 'CREATE' :
                window.services.get("createFromIDE").call(this, args);
                break;
            case 'DELETE' :
                window.services.get("deleteFromIDE").call(this, args, isUndoRedo);
                break;
            case 'UNDO_REDO' :
                window.services.get("undoredoService").call(this, args);
                break;
            case 'PASTE' :
                window.services.get("pasteFromIDE").call(this, args);
                break;
            case 'CHANGE' :
                window.services.get("changeFromIDE").call(this, args);
                break;
            case 'CHANGE_CONTROL' :
                window.services.get("changePositionServiceFromIDE").call(this, args);
                break;
        }
    }
    messageHandler.MessageFromIDE = MessageFromIDE;
    window.messageHandler = messageHandler;
}());
