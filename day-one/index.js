"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var file = function (fileName) { return (path.join(__dirname, fileName)); };
var fileInputStr = fs.readFileSync(file('input.txt'), 'utf8');
var allInputs = fileInputStr.split('\n');
var elfCount = 0;
var totalNumber = 0;
var elfMax = -Infinity;
var elf = 0;
for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i] === '') {
        if (totalNumber > elfMax) {
            elfMax = totalNumber;
            elf = elfCount;
        }
        elfCount += 1;
        totalNumber = 0;
        continue;
    }
    totalNumber += parseInt(allInputs[i]);
}
console.log(elfMax, elf);
