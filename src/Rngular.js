globalThis.Rngular = {
    component: class {

        html = ``;

        style = ``;

        script = ``;

        async mount(dom) {
            this.uuid = Rngular._createUuid();
            this.dom = dom;
            this._document = this.dom;

            this._document.innerHTML = `
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

        _encode(string) {
            const dom = this.dom;

            function getParentId() {

                const tagName = dom.parentNode.parentNode.tagName;

                if (tagName == "BODY" || tagName == "HEAD") {
                    console.error("The top-level cannnot it.");
                    return false;
                }

                return tagName;
            }

            string = string.replaceAll("$this", this.uuid);
            string = string.replaceAll("$parent", getParentId());
            return string;
        }
    },
    getChildId: (dom) => {
        return dom.children[0].tagName;
    },
    _createUuid() {
        return 'rg_xxxxxx_xxxxxx_x'.replaceAll("x", function (a) {
            let r = (new Date().getTime() + Math.random() * 16) % 16 | 0, v = a == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

document.head.innerHTML += `
<style RgStyle>
[rg-element] {
    display: contents;
}
</style>
`