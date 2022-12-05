import * as fs from 'fs'
import * as path from 'path'

const file = (fileName): string => (path.join(__dirname, fileName))

const fileInputStr: string = fs.readFileSync(file('input.txt'), 'utf8')
const allInputs = fileInputStr.split('\n')

let totalNumber = 0
let elfMax = -Infinity

for (let i = 0; i < allInputs.length; i++) {
  if (allInputs[i] === '') {
    elfMax = Math.max(elfMax, totalNumber)
    totalNumber = 0
    continue
  }
  totalNumber += parseInt(allInputs[i])
}

console.log(elfMax)
