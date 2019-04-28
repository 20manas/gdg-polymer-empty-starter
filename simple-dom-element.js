import {PolymerElement, html} from '@polymer/polymer/polymer-element.js'

class SimpleDomElement extends PolymerElement {
  static get template() {
    console.log(typeof html)
    return html`
    <style>
    * {
      font-family: 'Open Sans';
    }
    h2 {
      color: #1976d2;
      margin: 30px;
      font-size: 60px;
    }
    div {
      margin: 30px;
      font-size: 20px;
    }
  </style>
  <h2>Cliché, Hello World!</h2>
  <div>I'm a simple DOM element</div>
  `
  }
};
customElements.define('simple-dom-element', SimpleDomElement)