const PHONE_TO_ALPHA = new Map<string, Array<string>>()
PHONE_TO_ALPHA.set('1', [])
PHONE_TO_ALPHA.set('2', ['a', 'b', 'c'])
PHONE_TO_ALPHA.set('3', ['d', 'e', 'f'])
PHONE_TO_ALPHA.set('4', ['g', 'h', 'i'])
PHONE_TO_ALPHA.set('5', ['j', 'k', 'l'])
PHONE_TO_ALPHA.set('6', ['m', 'n', 'o'])
PHONE_TO_ALPHA.set('7', ['p', 'q', 'r', 's'])
PHONE_TO_ALPHA.set('8', ['t', 'u', 'v'])
PHONE_TO_ALPHA.set('9', ['w', 'x', 'y', 'z'])

function letterCombinations(digits: string): string[] {
  const queue: string[] = ['']
  for (const digit of digits) {
    const letters = PHONE_TO_ALPHA.get(digit) ?? []
    const queueSize = queue.length
    for (let i = 0; i < queueSize; i++) {
      const front = queue.shift() ?? ''
      for (const letter of letters) {
        queue.push(`${front}${letter}`)
      }
    }
  }

  return queue
}

console.log(letterCombinations('23'))

export { letterCombinations }
