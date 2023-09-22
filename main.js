class App extends Rngular.component {

    html = `
    <div>
        <h1> Welcome to Rngular! 🔥 </h1>
        <button onclick="$this_click()" id="inc">0</button>
    </div>
    `

    style = `
    $this h1 {
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