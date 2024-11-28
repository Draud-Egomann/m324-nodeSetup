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
