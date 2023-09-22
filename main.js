class App extends Rngular.component {

    html = `
    <div>
        <h1> Welcome to Rngular! 🔥 </h1>
        <div id="counter"></div>
        <a href="https://github.com/EdamAme-x/Rangular">GitHub</a>
    </div>
    `

    style = `
    $this h1 {
        text-align: center;
    }
    `

    script = `console.log("Hello world!")`
}

const app = new App();
app.mount("#app");

class Counter extends Rngular.component {

    html = `
    <div id="counter-box">
        <button onclick="$this_click(-1)">-</button>
        <input id="$this_num" value="0" />
        <button onclick="$this_click(1)">+</button>
    </div>
    `

    style = `
    $this #counter-box {
        display: flex;
        justify-content: center;
    }

    $this #counter-box > * {
        margin: 5px 10px;
    }

    $this #counter-box > input {
        text-align: center;
        font-size: 1rem;
    }

    $this #counter-box > button {
        width: 50px;
        font-size: 2.5rem;
        border-radius: 50%;
        border: none;
    }
    `

    script = `
    function $this_click(num) {
        const dom = document.getElementById("$this_num");
        dom.value = parseInt(dom.value) + num;
    }
    `

    args = ["count"]
}

const counter = new Counter();
counter.mount("#counter")