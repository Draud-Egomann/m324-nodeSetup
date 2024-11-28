import chalk from 'chalk'
import { generate } from 'random-words'

const word1 = generate({ exactly: 1, minLength: 10, wordsPerString: 1 })
const word2 = generate()
console.log(`The ${chalk.greenBright(word1)} is ${chalk.redBright(word2)}.`)

function linter() {
  // 1. Nicht verwendete Variable
  let unusedVariable = 'Hello' // ESLint sollte hier eine Warnung ausgeben

  // 2. Nicht definierte Variable
  console.log(undeclaredVariable) // ESLint sollte einen Fehler wegen der undefinierten Variable anzeigen

  // 3. Verwendung von == anstelle von ===
  if ('1' == 1) {
    // ESLint sollte hier eine Warnung wegen der Verwendung von "==" anstelle von "===" anzeigen
    console.log('Loose equality')
  }

  // 4. Verwendung von var statt let oder const
  var x = 10 // ESLint sollte hier einen Fehler anzeigen, weil "var" verwendet wird, statt "let" oder "const"
}

// testing
export const sum = (a, b) => {
  return a + b;
};