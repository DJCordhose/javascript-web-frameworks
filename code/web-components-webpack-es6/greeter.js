import template from './template.html';

class Greeter extends HTMLElement {

    // Fires when an instance of the element is created.
    createdCallback() {
        this.render();
        this.bind();
        this.setModel(this.getAttribute("greeting"));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "greeting") {
            this.setModel(newValue);
        }
    }

    render() {
        this.createShadowRoot().innerHTML = template;
        // https://webkit.org/blog/4096/introducing-shadow-dom-api/
        // http://w3c.github.io/webcomponents/spec/shadow/#widl-Element-attachShadow-ShadowRoot-ShadowRootInit-shadowRootInitDict
        // this.attachShadow({mode: 'closed'}).innerHTML = template;
        this.input = this.shadowRoot.querySelector("#in");
        this.span = this.shadowRoot.querySelector("#log");
        this.button = this.shadowRoot.querySelector("#btn");
    }

    bind() {
        // binding view => model
        // input.addEventListener("change", function (event) {
        this.input.addEventListener("keyup", event => this.setModel(event.target.value));
        this.button.addEventListener("click", event => {
            this.setModel("");
            this.input.focus();
        });
    }

    setModel(value) {
        this.model = value;
        this.span.textContent = value;
        // XXX do not override when typing (looses cursor position otherwise)
        if (this.input.value !== value) this.input.value = value;
    }

}
document.registerElement('greeter-element', Greeter);
// Standard now speaks of define
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-custom-tag-example
// document.define('greeter-element', Greeter);
