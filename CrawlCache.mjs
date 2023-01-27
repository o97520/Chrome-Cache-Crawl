import { fileTypeFromFile } from "file-type";
import { readdirSync, promises } from "fs";
var pc = 'C:/Users/M/AppData/Local/Google/Chrome/User Data/Default/Cache/Cache_Data/'
var pa = 'C:/Users/M/Pictures/A/'
var tp = { 'i': 'image', 'v': 'video', 'a': 'audio' }
var tpe = process.argv[2] ? process.argv[2] : 'i';
var sze = process.argv[3] ? process.argv[3] * 1024 * 1024 : 20 * 1024;
var n = readdirSync(pc);
var count = 0;
(async () => {
    var a = await Promise.all(n?.map((ns) => { return promises.stat(pc + ns).then((statrtrn) => { if (statrtrn?.size > sze) { return [ns, statrtrn] } }).catch((err) => { console.log('error'); }) }))
    var b = await Promise.all(a?.map((as) => { if (as) { return fileTypeFromFile(pc + as[0]).then((ftretrn) => { if (ftretrn?.mime.split('/')[0] == tp[tpe]) { return [as[0], as[1], ftretrn] } }).catch((err) => { console.log('error'); }) } }))
    await Promise.all(b?.map((bs) => { if (bs) return promises.rename(pc + bs[0], pa + String(Math.floor(Math.random() * 1e8)) + '.' + bs[2].ext).then(() => { count++; console.log('\n' + bs[2].ext + ' == ' + (bs[1].size / (1024 * 1024)).toPrecision(4) + ' MB'); }).catch((err) => { console.log('error'); }) }))
    console.log('\n==> ' + count + ' ' + tp[tpe] + 's');
})();
