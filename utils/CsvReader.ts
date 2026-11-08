import fs from 'fs';                    // file படிக்க
import {parse} from 'csv-parse/sync';   // CSV-ஐ parse பண்ண
import path from 'path';                // (இங்கே use ஆகவில்லை)

export function readCSV(filepath:string){
    const fullPath = path.resolve(__dirname, '..', filepath);
    const filecontent = fs.readFileSync(fullPath);   // file-ஐ படி
    const records = parse(filecontent,{
        columns:true,           // முதல் row = column names
        skip_empty_lines:true,  // காலி lines-ஐ தவிர்
        trim:true
    })
    return records;             // data-வை திருப்பி கொடு
}