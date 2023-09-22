class App extends Rngular.component {

    title = () => {
        return "Rngular";
    }

    html = `
    <div>
        <h1> Welcome to ${this.title()}! 🔥 </h1>
        <div id="counter"></div>
        <a href="https://github.com/EdamAme-x/Rangular">GitHub</a>
    </div>
    `

    style = `
    $this {
        text-align: center;
    }

    $this a {
        color: #000;
        font-weight: bold;
    }
    `

    script = `
    setTimeout(() => {
        console.log("CHILD-ID: " + Rngular.getChildId(document.getElementById('counter')))
    }, 1000); // After render children component.
    `
}

const app = new App();
app.mount(document.getElementById("app"));

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

    console.log("PARENT-ID: $parent")
    `

    args = ["count"]
}

const counter = new Counter();
counter.mount(document.getElementById("counter"))