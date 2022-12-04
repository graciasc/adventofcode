"use strict";
exports.__esModule = true;
// import { readfileSync } from 'fs'
var fs = require("fs");
var path = require("path");
var file = function (fileName) { return (path.join(__dirname, fileName)); };
var fileInputStr = fs.readFileSync(file('input.txt'), 'utf8');
var allInputs = fileInputStr.split('\n');
var formattedInputs = [];
var elfCount = 0;
for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i] === '') {
        elfCount++;
        continue;
    }
    formattedInputs[elfCount] = formattedInputs[elfCount] === undefined ? [] : formattedInputs[elfCount];
    formattedInputs[elfCount].push(allInputs[i]);
}
console.log('elf count', elfCount, JSON.stringify(formattedInputs));
