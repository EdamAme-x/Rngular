class App extends Rangular.component {

    html = `
    <div>
        <p> Hello World </p>
        <button onclick="$this_click()" id="inc">0</button>
    </div>
    `

    style = `
    $this p {
        color: red;
    }
    `

    script = `
    function $this_click() {
        const dom = document.querySelector("$this #inc");
        dom.innerHTML = parseInt(dom.innerHTML) + 1;
        console.log("add!")
    }
    `

}

const app = new App();
app.mount("#app");