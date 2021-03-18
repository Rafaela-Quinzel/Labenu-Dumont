export class LinkedListNode {
    constructor(
        public value: any,
        public next: LinkedListNode | null = null
    ) { }
}


export class LinkedList {
    constructor(
        public start: LinkedListNode | null = null
    ) { }

    public addToTail = (
        value: any
    ): void => {
        if (!this.start) {
            this.start = new LinkedListNode(value)
        } else {
            let currentNode: LinkedListNode = this.start

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = new LinkedListNode(value)
        }
    }

    public print(value: any) {
        let currentNode = this.start

        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.next
        }

        return currentNode
    }
}
const names: LinkedList = new LinkedList(new LinkedListNode("Rafaela"))
names.addToTail("Amanda")

console.log(JSON.stringify(names, null, 2))
names.print(names)


