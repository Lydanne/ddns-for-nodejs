const https = require("https");
const os = require("os");
const { SecretId, domain, SignatureMethod ,network} = require("../config");

class Tool {
    static request(url, callback) {
        https.get(url, (resp) => {
            resp.setEncoding("utf8");
            let buf = "";
            resp.on("data", data => {
                buf += data;
            });

            resp.on("end", err => {

                callback(JSON.parse(buf));
            })

        });
    }

    static getParams() {
        return {
            Timestamp: (new Date()).getTime().toString().substr(0, 10),
            Nonce: Math.floor(Math.random() * 100000),
            SecretId,
            SignatureMethod,
            domain
            // Signature 已经通过codeingUrl自动添加了
        }
    };

    static getIp() {
        //获取系统的网络接口信息
        const netInfo = os.networkInterfaces();

        //ip地址
        return netInfo[network][0].address;
        // return "1.1.1." + Math.floor(Math.random()*3);
    }
}

module.exports = Tool;