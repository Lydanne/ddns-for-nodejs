const Tool = require("./tool");
const { parserUrl } = require("./sign");
const { subDomain,recordType,recordLine } = require("../config");

class Using {
    //添加解析
    static recordCreate(value, callback) {
        let params = Object.assign({
            Action: "RecordCreate",
            subDomain,
            recordType,
            recordLine,
            value
        }, Tool.getParams());

        let url = parserUrl("https://cns.api.qcloud.com/v2/index.php", params);
        
        Tool.request(url, (data) => {
            callback(data);
        });

        return url;
    }

    //修改解析
    static recordModify(recordId, value, callback) {
        let params = Object.assign({
            Action: "RecordModify",
            recordId,
            subDomain,
            recordType,
            recordLine,
            value
        }, Tool.getParams());

        let url = parserUrl("https://cns.api.qcloud.com/v2/index.php", params);
        
        Tool.request(url, (data) => {
            callback(data);
        });

        return url;
    }

    //获取域名
    static recordList(callback) {
        //生成参数
        let params = Object.assign({
            Action: "RecordList",
        }, Tool.getParams());

        //生成请求
        let url = parserUrl("https://cns.api.qcloud.com/v2/index.php", params);

        Tool.request(url, (data) => {
            callback(data);
        });

        return url;
    }

}

module.exports = Using;