const Using = require("./lib/using");
const Tool = require("./lib/tool");
const { subDomain } = require("./config");

let lastIp = "";

const ddns = () => {
    const ip = Tool.getIp();
    const time = (new Date()).toLocaleString();

    if (lastIp==ip) return console.log(time+" |" ,"IP未变更:"+lastIp);
    lastIp = ip;

    Using.recordList(res => {
        const { records } = res.data;
        const own = records.filter((item) => {
            return item.name === subDomain;
        });
        
        if (own.length) {
            //如果解析已存在
            const ownId = own[0].id;
            Using.recordModify(ownId, ip, (res) => {
                console.log(time+" |","IP更新:",res);
            });
        }else{
            Using.recordCreate(ip,(res)=>{
                console.log(time+" |","创建解析:",res);
            });
        }
    });
}

ddns();
setInterval(ddns, 1000*60);
//每1分钟更新