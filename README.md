# DDNS For NodeJs

## 引言
DDNS For NodeJs 是使用nodejs实现的DDNS的工具，通过腾讯云API实现的动态域名解析。
解决在一些情况下IP地址不停更换的问题。

## 适用
- 家庭宽带的ip变化

## 准备
- 安装NODEJS
- 安装pm2
- 腾讯云的域名

## 配置文件

```js
//config.js
module.exports = {
    SecretId:"",
    SecretKey:"",
    SignatureMethod:"HmacSHA256", //只支持HmacSHA256与HmacSHA1
    domain:"", //域名 eg:test.com
    subDomain:"",//子域名 eg:web
    recordType:"A",
    recordLine:"默认",
    network:"ppp0" //表示网卡的名称，ppp0表示linux宽带拨号默认虚拟网卡
}
```

## 启动DDNS
```cmd
git clone https://github.com/holleworldabc/ddns-for-nodejs.git
cd ddns-for-nodejs
pm2 start app.js --name DDNS
```

## 停止DDNS
```cmd
pm2 stop DDNS
```
## 开机自启
```cmd
pm2 save
pm2 startup
```

## 结束
有问题可以在下面回复。