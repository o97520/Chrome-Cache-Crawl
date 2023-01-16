import { readdirSync } from "fs";

export var pc = 'C:/Users/M/AppData/Local/Google/Chrome/User Data/Default/Cache/Cache_Data/'
export var pa = 'C:/Users/M/Pictures/A/' //whatever path

export var sze = process.argv[2] ? process.argv[2] * 1024 * 1024 : 20 * 1024;
export var n = readdirSync(pc)

import { fileTypeFromFile } from "file-type";
import { statSync, renameSync } from "fs";
import { n, pc, a, sze, pa } from "./n";

var a = await newFunction();
async function newFunction() {
    for (var a of n) {
        try { var szec = statSync(pc + a).size; } catch (error) { }
        if (szec > sze) {
            var c = await fileTypeFromFile(pc + a).then((c) => {
                return c;
            }).catch(err => console.log(err));
            if (c && c.mime.split('/')[0] == 'image') {
                try { renameSync(pc + a, pa + String(Math.floor(Math.random() * 1e8)) + '.' + c.ext); } catch (error) { }
                console.log('\n' + c.ext + ' == ' + (szec / (1024 * 1024)).toPrecision(4) + ' MB');
            }
        }
    }
    return a;
}

