import { createTemplate } from "./template"

const TAG_NAME = 'spire-feedjet'

export default function SpireWidget() {
  const template = createTemplate()

  class SpireFeedjetElement extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: 'open' });

      // Render the template in the shadow dom
      // Create some CSS to apply to the shadow DOM

        // attach the created elements to the shadow DOM
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