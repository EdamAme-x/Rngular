globalThis.Rngular = {
    component: class {
        constructor() {
            this.uuid = this._createUuid();
        }

        html = ``;

        style = ``;

        script = ``;

        args = [];

        _createUuid() {
            return 'rg_xxxxxxxx_xxxxx'.replace(/x/g, function (a) {
                let r = (new Date().getTime() + Math.random() * 16) % 16 | 0, v = a == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        mount(selector) {
            this._document = document.querySelectorAll(selector);

            for (let i = 0; i < this._document.length; i++) {
                const ArgGetter = this._document[i].getattribute;
                this._document[i].innerHTML = `
    <${this.uuid} id="${this.uuid}_html" class="${this.uuid}" rg-element>
        ${this._encode(this.html)}
        <style id="${this.uuid}_style">
            ${this._encode(this.style)}
        </style>
        <script id="${this.uuid}_script">
            ${this._encode(this.script)}
        </script>
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