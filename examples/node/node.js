
const { match } = require('match-ish');

const start = process.hrtime();

const test = match()
  .with('1', () => 'one')
  .with('1, 2', () => 'one and two')
  .with('1, 2 | 4, 2 & _, x', ({x}) => `value: ${x}`)
  .else(() => 'no match')
  .end();

console.log(JSON.stringify(test(1, 2)))

const end = process.hrtime(start);

console.log(`time: ${end[0]} ${end[1]}`)