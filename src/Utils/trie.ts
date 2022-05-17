// Assume ASCII characters only
// Review implements functionality
//const ALPHABET_SIZE = 26

interface TrieNodeInterface {
  children: {}
  endOfWord: boolean
  content: string
  id: string
}

export class TrieNode implements TrieNodeInterface {
  children: {}
  endOfWord: boolean
  content: string
  id: string
  constructor(content: string, id: string) {
    this.children = {}
    this.endOfWord = false
    this.content = content
    this.id = id
  }
}

interface TrieInterface {
  root: TrieNode
  insert(word: string, id: string): void
  searchPrefix(prefix: string): string[] | boolean
  searchSpecificWord(specificWord: string): boolean
}

export class Trie implements TrieInterface {
  root: TrieNode
  constructor() {
    this.root = new TrieNode('', '')
  }

  // This part works
  insert(word: string, id: string): void {
    // console.log('word', word)
    let cur = this.root
    // console.log('cur', cur)
    for (const char of word) {
      // console.log('char', char)
      if (!cur.children[char]) {
        cur.children[char] = new TrieNode(char, id)
      }
      cur = cur.children[char]
    }
    // Does this need to be redone?
    cur.endOfWord = true
    cur.content = word
    // This id shoudl really be an array so it's not overwriting
    cur.id = id
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

  searchPrefix(prefix: string): string[] {
    const successArr: string[] = []
    let cur = this.root
    for (const char of prefix) {
      if (!cur.children[char]) {
        return ['']
      }
      cur = cur.children[char]
    }
    // otherwise, this means we have to traverse and output everything below this
    // check if need for first
    // if (cur.endOfWord === true) {
    //   successArr.push(curString)
    // }
    if (cur.children) {
      const stack = [cur]
      console.log('cur is ')
      console.log(cur)
      while (stack.length > 0) {
        console.log('at the beginning of the while loop')
        let currentNode = stack.pop()
        console.log('current node is')
        console.log(currentNode)
        if (currentNode?.endOfWord === true) {
          //successArr.push(currentNode)
          console.log('found')
          successArr.push(currentNode.content)
        }
        if (currentNode) {
          for (const child in currentNode.children) {
            console.log('looking through one child in children')
            console.log('current child is ')
            console.log(child)
            stack.push(currentNode.children[child])
          }
          console.log('this is what stack looks like')
          console.log(stack)
        }
      }
    }
    console.log('this is the value of successArr', successArr)
    return successArr
  }
}
