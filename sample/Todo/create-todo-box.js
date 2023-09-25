export class CreateTodoBox extends Rngular.component {
    html = `
    <div class="box">
        <input type="text" id="write-box" placeholder="Todo Title"/>
        <button onclick="$this_add()">Add</button>
    </div>
        `

    style = `
    $this .box {
        margin: 5px 0;
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    `

    script = `
    function $this_add() {
        const text = document.querySelector("$this #write-box").value;
        $parent_add(text)
    }
    `
}