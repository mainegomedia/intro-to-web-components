// <app-navbar></app-navbar>

class AppNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        console.log(this.getAttribute("theme"));

        const template = document.querySelector("template");
        // this.shadowRoot.innerHTML = `<h2>Hello World</h2>`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

static get observedAttributes() {
    return ["theme"];
}

attributeChangedCallback(name, oldVal, newVal) {
    console.table({name, oldVal, newVal}); 
}

connectedCallback() {
    console.log("Element added to the DOM");
}

disconnectedCallback() {
    console.log("Element removed from DOM");
}

} 

window.customElements.define("app-navbar", AppNavbar)