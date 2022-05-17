import styles from './index.css'
import { createTemplate } from "./template"

const TAG_NAME = 'spire-feedjet'

export default function SpireWidget() {
  const template = createTemplate()

  class SpireFeedjetElement extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: 'open' });

      const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

      // Render the template in the shadow dom
      // Create some CSS to apply to the shadow DOM
      const style = document.createElement('style');
      style.textContent = styles

        // attach the created elements to the shadow DOM
        shadowDOM.appendChild(linkElem)
      shadowDOM.appendChild(style)
      shadowDOM.appendChild(template.content.cloneNode(true));
    }
  }
  if (!customElements.get(TAG_NAME)) {
    customElements.define(TAG_NAME, SpireFeedjetElement);
  }

  // create an instance of the component
  const componentInstance = document.createElement(TAG_NAME, {
    is: TAG_NAME,
  });
  // mount the component instance in the body element
  const container = document.body;
  container.append(componentInstance);
  // returning the instance will be useful later
  return componentInstance;
}