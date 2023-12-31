globalThis.Rngular = {
    component: class {

        html = ``;

        style = ``;

        script = ``;

        async mount(dom, props = {}) {
            this.uuid = Rngular.createUuid();
            this.dom = dom;
            this._document = this.dom;
            const keys = Object.keys(props);

            for (let i = 0; i < keys.length; i++) {
                globalThis[`rg_props_${this.uuid}_` + keys[i]] = props[keys[i]]
            }

            this._document.innerHTML = `
    <${this.uuid} id="${this.uuid}_html" class="${this.uuid}" rg-el>
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

                const tagName = dom.parentNode.tagName;

                if (tagName == "BODY" || tagName == "HEAD") {
                    console.error("The top-level cannnot it.");
                    return false;
                }

                return tagName.toLowerCase();
            }

            string = string.replaceAll("$this", this.uuid);
            if (/\$parent/.test(string)) {
                string = string.replaceAll("$parent", getParentId());
            }
            return string;
        }
    },
    getChildId: (dom) => {
        return dom.children[0].tagName;
    },
    createUuid() {
        return 'rg_xxxxxx_xxxxxx_x'.replaceAll("x", function (a) {
            let r = (new Date().getTime() + Math.random() * 16) % 16 | 0, v = r;
            return v.toString(16);
        });
    },
    getProps(name, uuid) {
        return globalThis[`rg_props_${uuid}_${name}`]
    }
}

document.head.innerHTML += `
<style RgCSS>
[rg-el] {
    display: contents;
}
</style>
`