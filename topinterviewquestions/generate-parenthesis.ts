// Another backtracking problem
function generateParenthesis(n: number): string[] {
  const result: string[] = []

  backtrack(n, 0, 0, result, '')

  return result
}

function backtrack(
  n: number,
  open: number,
  close: number,
  result: string[],
  current: string,
) {
  if (current.length === n * 2) {
    result.push(current)
    return
  }

  // there should be n open parens
  if (open < n) {
    backtrack(n, open + 1, close, result, current + '(')
  }

  // if there are less closing parens than open parens, then we need to add more of those
  if (close < open) {
    backtrack(n, open, close + 1, result, current + ')')
  }
}

export { generateParenthesis }
