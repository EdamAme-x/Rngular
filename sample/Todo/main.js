import { CreateTodoBox } from "./create-todo-box.js";

class App extends Rngular.component {
    html = `
    <h1>ToDo</h1>
    <div id="create-todo-box"></div>
    <div id="todos">

    </div>
    `

    style = `
    body, html {
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    $this h1 {
        text-align: center;
    }

    $this #todo-box {
        display: flex;
        width: 100vw;
        justify-content: center;
        font-size: 10px;
    }

    $this #todo-box h2 {
        margin-right: 10px;
    }
    `

    script = `
    let todos = -1;

    function $this_add(text) {
        todos += 1;

        document.querySelector("$this #todos").innerHTML += \`
        <div id="todo-box">
            <h2 id="todo-title" class="tt\${todos}">\${text}</h2>
            <input type="checkbox" onclick="$this_delete(\${todos})"/>
        </div>
        \`
    }

    function $this_delete(index) {
        document.querySelector("$this .tt" + index).parentNode.style = "display: none"
    }
    `
}

const app = new App();
app.mount(document.getElementById("app"));

const createTodoApp = new CreateTodoBox();
createTodoApp.mount(document.getElementById("create-todo-box"))
