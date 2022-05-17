// Assume ASCII characters only
// Review implements functionality
//const ALPHABET_SIZE = 26

export interface SelectableItem {
  id: string
  name: string
}

interface TrieNodeInterface {
  children: {}
  endOfWord: boolean
  content: SelectableItem
}

export class TrieNode implements TrieNodeInterface {
  children: {}
  endOfWord: boolean
  content: SelectableItem
  constructor(item: SelectableItem) {
    this.children = {}
    this.endOfWord = false
    this.content = item
  }
}

// Deal with issue of same name

interface TrieInterface {
  root: TrieNode
  insert(item: SelectableItem): void
  searchPrefix(prefix: string): SelectableItem[]
  searchSpecificWord(specificWord: string): boolean
}

export class Trie implements TrieInterface {
  root: TrieNode
  constructor() {
    this.root = new TrieNode({name: '', id: ''})
  }

  // This part works
  insert(item: SelectableItem): void {
    // console.log('word', word)
    let cur = this.root
    const word = item.name
    // console.log('cur', cur)
    for (const char of word) {
      // console.log('char', char)
      if (!cur.children[char]) {
        cur.children[char] = new TrieNode(item)
      }
      cur = cur.children[char]
    }
    // Need to add code here to prevent overwriting for same name
    // Does this need to be redone?
    cur.endOfWord = true
  }

  // This part works
  searchSpecificWord(specificWord: string): boolean {
    let cur = this.root
    for (const char of specificWord) {
      if (!cur.children[char]) {
        return false
      }
      cur = cur.children[char]
    }
    return cur.endOfWord
  }

  searchPrefix(prefix: string): SelectableItem[] {
    // Need to fix this line
    const successArr: any[] = []
    let cur = this.root
    for (const char of prefix) {
      if (!cur.children[char]) {
        return [{id: '', name: ''}]
      }
      cur = cur.children[char]
    }
    if (cur.children) {
      const stack = [cur]
      // console.log('cur is ')
      // console.log(cur)
      while (stack.length > 0) {
        // console.log('at the beginning of the while loop')
        const currentNode = stack.pop()
        // console.log('current node is')
        // console.log(currentNode)
        if (currentNode?.endOfWord === true) {
          //successArr.push(currentNode)
          // console.log('found')
          successArr.push(currentNode.content)
        }
        if (currentNode) {
          for (const child in currentNode.children) {
            // console.log('looking through one child in children')
            // console.log('current child is ')
            // console.log(child)
            stack.push(currentNode.children[child])
          }
          // console.log('this is what stack looks like')
          // console.log(stack)
        }
      }
    }
    console.log('this is the value of successArr', successArr)
    return successArr
  }
}
