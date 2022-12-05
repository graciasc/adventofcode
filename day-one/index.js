// import { readfileSync } from 'fs'
// import * as fs from 'fs'
// import * as path from 'path'
// const file = (fileName): string => (path.join(__dirname, fileName))
// const fileInputStr: string = fs.readFileSync(file('input.txt'), 'utf8')
var fileInputStr = "12 56\n12 48";
// 68 60
var maxNumber = 0;
var total = 0;
var firstNumber = '';
var secondNumber = '';
for (var i = 0; i < fileInputStr.length; i++) {
    if (total > maxNumber) {
        maxNumber = total;
    }
    if (fileInputStr[i] === '\n') {
        continue;
    }
    console.log(fileInputStr[i]);
    console.log('secondNumber', secondNumber);
    console.log('firstNumber', firstNumber);
    if (secondNumber === '') {
        firstNumber += fileInputStr[i];
    }
    else if (firstNumber !== '') {
        secondNumber += fileInputStr[i];
    }
    else {
        total = parseInt(firstNumber) + parseInt(secondNumber);
        firstNumber = '';
        secondNumber = '';
    }
}
console.log(maxNumber);
// const allInputs = fileInputStr.split('\n')
//
// const formattedInputs: number[][] | undefined[] = []
// let elfCount: number = 0
//
// for (let i = 0; i < allInputs.length; i++) {
//   if (allInputs[i] === '') {
//     elfCount++
//     continue
//   }
//
//   formattedInputs[elfCount] = formattedInputs[elfCount] === undefined ? [] : formattedInputs[elfCount]
//
//   formattedInputs[elfCount].push(parseInt((allInputs[i])))
// }
//
// console.log('elf count', elfCount, JSON.stringify(formattedInputs))
//
// // check the highest total calories
//
// const maxElf = {
//   totalCount: 0,
//   elf: -1
// }
// for (let i = 0; i < formattedInputs.length; i++) {
//   const elfCaloriesInfo: number[] = formattedInputs[i]
//   let elfCaloriesTotal = 0
//
//   for (let j = 0; j < elfCaloriesInfo.length; j++) {
//     // TODO: fix type from string to number
//     elfCaloriesTotal += elfCaloriesInfo[j]
//   }
//
//   if (elfCaloriesTotal > maxElf.totalCount) {
//     maxElf.totalCount = elfCaloriesTotal
//     maxElf.elf = i
//   }
// }
// console.log('biggest calories elf', maxElf)
