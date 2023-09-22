globalThis.Rngular = {
    component: class {
        constructor() {
        }

        html = ``;

        style = ``;

        script = ``;

        args = 0;

        _createUuid() {
            return 'rg_xxxxxxxx_xxxxx'.replace(/x/g, function (a) {
                let r = (new Date().getTime() + Math.random() * 16) % 16 | 0, v = a == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        mount(selector) {
            this.uuid = this._createUuid();
            this._document = document.querySelectorAll(selector);

            for (let i = 0; i < this._document.length; i++) {

                this._document[i].innerHTML = `
    <${this.uuid} id="${this.uuid}_html" class="${this.uuid}" rg-element>
        ${this._encode(this.html)}
        <style id="${this.uuid}_style">
            ${this._encode(this.style)}
        </style>
    </${this.uuid}>`;
                let scriptElement = document.createElement("script");
                scriptElement.innerHTML = this._encode(this.script);
                document.getElementById(`${this.uuid}_html`).appendChild(scriptElement);
            }
        } // Mount

        _encode(string) {
            string = string.replaceAll("$this", this.uuid);
            return string;
        }
    }
}

document.head.innerHTML += `
<style RngularStyle>
[rg-element] {
    display: contents;
}
</style>
`