import chalk from 'chalk'
import { generate } from 'random-words'

const word1 = generate({ exactly: 1, minLength: 10, wordsPerString: 1 })
const word2 = generate()
console.log(`The ${chalk.greenBright(word1)} is ${chalk.redBright(word2)}.`)

function linter() {
  // Nicht verwendete Variable
  let unusedVariable = 'Hello'

  // Nicht definierte Variable
  console.log(undeclaredVariable)

  // Verwendung von == anstelle von ===
  if ('1' == 1) {
    console.log('Loose equality')
  }

  // Verwendung von var statt let oder const
  var x = 10
}

// testing
export const sum = (a, b) => {
  return a + b;
};