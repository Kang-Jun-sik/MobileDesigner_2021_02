let mobileDesignerToIDE = (commandType, elm, parentUID, key) => {
    let XMLWriter = require('xml-writer');
    let xw = new XMLWriter;
    let obj = {};
    let value;
    let uidtemp = elm.getAttribute('uid');
    let controlIndex = uidtemp.lastIndexOf('-');
    let control = uidtemp.substring(0, controlIndex);

    switch (commandType) {
        case "select" :
            obj = {
                'commandType': commandType,
                'data': `<?xml version="1.0"?><${control} uid="${elm.getAttribute('uid')}"/>`
            }
            break;
        case "create":
            obj = {
                'commandType': commandType,
                'parentId': parentUID,
                'data': `<?xml version="1.0"?><${control} uid="${elm.getAttribute('uid')}"/>`
            }
            break;
        case "delete":
            obj = {
                'commandType': commandType,
                'parentId': parentUID,
                'data': `<?xml version="1.0"?><${control} uid="${elm.getAttribute('uid')}"/>`
            }
            break;
    }
    console.log(obj);
    // eslint-disable-next-line no-undef
    chromiumObject.mobileDesignerToIDE(obj); //실제 IDE 데이터 전송 로직
};

export {mobileDesignerToIDE};
