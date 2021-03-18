import { LinkedList, LinkedListNode } from "./Exercicio01"

export class Queue {
    public nodes: LinkedList = new LinkedList()

    isEmpty(): boolean {
      return this.nodes.start === undefined
    }
  
    enqueue(value: number): void {
      this.nodes.addToTail(value)
    }
  
    dequeue(): LinkedListNode | undefined {
      if (this.nodes.start) {
              const nodeToDequeue = this.nodes.start
        this.nodes.start = this.nodes.start.next
              return nodeToDequeue
      }
    }
  
    print(): void {
      this.nodes.print
    }
  }