const template = `
<input id="in">
<p><span id="log"></span>, World</p>
<input id="btn" type="button" value="Clear">
`;

class Greeter extends HTMLElement {
    static get observedAttributes() {
        return ['greeting'];
    }
    constructor() {
        super();
        this.render();
        this.bind();
        this.setModel(this.getAttribute("greeting"));
    }

    bind() {
        this.input.addEventListener("keyup", event => this.setModel(event.target.value));
        this.button.addEventListener("click", event => {
            this.setModel("");
            this.input.focus();
        });
    }

    render() {
        this.createShadowRoot({mode: 'closed'});
        this.shadowRoot.innerHTML = template;
        this.input = this.shadowRoot.querySelector("#in");
        this.log = this.shadowRoot.querySelector("#log");
        this.button = this.shadowRoot.querySelector("#btn");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "greeting") {
            this.setModel(newValue);
        }
    }
    setModel(value) {
        this.log.textContent = value;
        this.input.value = value;
    }
}


customElements.define('greeter-element', Greeter); // v1
