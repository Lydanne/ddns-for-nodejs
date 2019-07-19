module.exports = {
    SecretId:"",
    SecretKey:"",
    SignatureMethod:"HmacSHA256", //只支持HmacSHA256与HmacSHA1
    domain:"",
    subDomain:"",
    recordType:"A",
    recordLine:"默认",
    network:"ppp0" //表示网卡的名称，ppp0表示linux宽带拨号默认虚拟网卡
}