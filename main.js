class App extends Rngular.component {

    html = `
    <div>
        <h1> Welcome to Rngular! 🔥 </h1>
        <div id="counter"></div>
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
    <button id="$this_click(-1)">-</button>
    <div id="$this_num"></div>
    <button id="$this_click(1)">+</button>
    `

    script = `
    function $this_click(num) {
        const dom = document.getElementById("$this_num");
        dom.innerHTML = parseInt(dom.innerHTML) + num;
    }
    `

    args = ["count"]
}