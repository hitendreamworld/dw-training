import {LitElement, html} from "lit"

export class DwDemo extends LitElement {

  render() {
    return html`<h2>Demo</h2>`
  }
}

customElements.define('dw-demo', DwDemo)