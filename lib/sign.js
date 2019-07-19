const crypto = require("crypto");
const {SecretKey, SignatureMethod} = require("../config");

function jsonSort(jsonObj) {
    let arr = [];
    for (var key in jsonObj) {
        arr.push(key)
    }
    arr.sort();
    let obj = {};
    for (var i in arr) {
        obj[arr[i]] = jsonObj[arr[i]];
    }
    return obj;
}

const parserUrl = function (url,params={}) {
    //对json进行排序
    params = jsonSort(params);

    //URL参数转换
    const urlParmas =  Object.keys(params).map(function (key) {
        return key + "=" + (params[key]);
    }).join("&");

    //将要加密的串
    const str = "GET"+(url.split("//"))[1] + '?' +urlParmas;
    
    const enumHmac = {
        "HmacSHA256":"sha256",
        "HmacSHA1":"sha1"
    };
    //hmacsha256签名
    let Signature = crypto.createHmac(enumHmac[SignatureMethod], Buffer.from(SecretKey, 'utf8'))
    .update(str)
    .digest()
    .toString('base64');

    params.Signature = Signature;

    //参数url编码
    const encodeUrlParmas =  Object.keys(params).map(function (key) {
        //编码后的参数
        return key.replace(/_/g,".") + "=" + encodeURIComponent(params[key]);
    }).join("&");

    return url + "?" + encodeUrlParmas;
}

module.exports = {
    parserUrl
}