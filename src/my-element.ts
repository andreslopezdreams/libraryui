import type { Reactive } from 'minze' 
import { MinzeElement } from 'minze'

export interface MyElement { 
  count: number 
} 

export class MyElement extends MinzeElement {
  reactive: Reactive = [['count', 0]]

  increaseCount = () => this.count++

  get doubledCount() {
    return this.count * 2
  }

  html = () => `
    <div>
      <h2>Web Component</h2>
      <button on:click="increaseCount">
        Contador duplicado por 2 es: ${this.doubledCount}
      </button>
    </div>
  `
}