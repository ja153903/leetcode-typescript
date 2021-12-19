interface TrieNode {
  value: string
  children: TrieNode[]
}

class Trie {
  head: TrieNode

  constructor() {
    this.head = { value: '', children: [] }
  }

  insert(word: string): void {
    let runner: TrieNode = this.head
    for (const ch of word.split('')) {
      // look through its children and find the appropriate node
      let desiredNode: TrieNode | null = null

      for (const child of runner.children) {
        if (child.value === ch) {
          desiredNode = child
          break
        }
      }

      if (desiredNode) {
        runner = desiredNode
      } else {
        const node: TrieNode = { value: ch, children: [] }
        runner.children.push(node)
        runner = node
      }
    }

    // indicator that it is possible to end a string here
    runner.children.push({ value: '', children: [] })
  }

  canWordEnd(node: TrieNode): boolean {
    for (const child of node.children) {
      if (child.value === '') {
        return true
      }
    }

    return false
  }

  _search(
    word: string,
    callback: (node: TrieNode) => boolean,
  ): boolean {
    let runner: TrieNode = this.head

    for (const ch of word.split('')) {
      let desiredNode: TrieNode | null = null

      for (const child of runner.children) {
        if (child.value === ch) {
          desiredNode = child
          break
        }
      }

      if (!desiredNode) {
        return false
      }

      runner = desiredNode
    }

    return callback(runner)
  }

  search(word: string): boolean {
    return this._search(word, this.canWordEnd)
  }

  startsWith(prefix: string): boolean {
    return this._search(prefix, () => true)
  }
}

const trie = new Trie()

trie.insert('apple')
console.log(trie.search('apple')) // return True
console.log(trie.search('app')) // return False
console.log(trie.startsWith('app')) // return True
trie.insert('app')
console.log(trie.search('app')) // return True

export { Trie }
