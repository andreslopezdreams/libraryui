import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: Number })
  public count = 0

  render() {
    return html`
      <h1>Contador</h1>
      <div class="card">
        <button @click=${this.#onClick} part="button">
          count is ${this.count}
        </button>
      </div>
    `
  }

  #onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
