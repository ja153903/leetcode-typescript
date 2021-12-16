function decodeString(s: string): string {
  let curString = ''
  let curNum = 0

  const stack: Array<number | string> = []

  for (const ch of s) {
    if (ch >= '0' && ch <= '9') {
      const asNum = parseInt(ch) ?? 0
      curNum = curNum * 10 + asNum
    } else if (ch === '[') {
      stack.push(curString)
      stack.push(curNum)
      curString = ''
      curNum = 0
    } else if (ch === ']') {
      const numToRepeat = stack.pop() ?? -1

      let res = ''
      for (let i = 0; i < numToRepeat; i++) {
        res += curString
      }

      const str = stack.pop() ?? ''
      curString = str + res
    } else {
      curString += ch
    }
  }

  return curString
}

console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
console.log(decodeString('2[abc]3[cd]ef'))

export { decodeString }
