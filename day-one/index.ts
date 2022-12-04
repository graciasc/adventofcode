// import { readfileSync } from 'fs'
import * as fs from 'fs'
import * as path from 'path'

const file = (fileName): string => (path.join(__dirname, fileName))

const fileInputStr = fs.readFileSync(file('input.txt'), 'utf8')

const allInputs = fileInputStr.split('\n')

const formattedInputs: string[][] | undefined[] = []
let elfCount: number = 0

for (let i = 0; i < allInputs.length; i++) {
  if (allInputs[i] === '') {
    elfCount++
    continue
  }

  formattedInputs[elfCount] = formattedInputs[elfCount] === undefined ? [] : formattedInputs[elfCount]

  formattedInputs[elfCount].push(allInputs[i])
}

console.log('elf count', elfCount, JSON.stringify(formattedInputs))

// check the highest total calories

