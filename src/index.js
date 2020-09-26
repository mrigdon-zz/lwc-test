import "@lwc/synthetic-shadow";
import Container from "my/container";

// eslint-disable-next-line @lwc/lwc/no-document-query
const container = document.getElementById("main");
const myComponent = document.createElement('my-container');
customElements.define('my-container', Container.CustomElementConstructor);
container.appendChild(myComponent);
