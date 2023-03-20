import { html, LitElement } from "lit";
import "./src/dw-carousel.js";

export class DwDemo extends LitElement {
  render() {
    return html`
      <h2>Demo</h2>
      <dw-carousel></dw-carousel>
    `;
  }
}

customElements.define("dw-demo", DwDemo);
