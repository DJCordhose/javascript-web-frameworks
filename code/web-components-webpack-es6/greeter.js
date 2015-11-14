import template from './template.html';

class Greeter extends HTMLElement {

    // Fires when an instance of the element is created.
    createdCallback() {
        this.render();
        this.bind();
        this.setModel("Hello");
    }

    render() {
        this.createShadowRoot().innerHTML = template;
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
