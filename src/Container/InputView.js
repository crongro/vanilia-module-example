class InputView {
    constructor({elWrapper, saveTodoHandler}) {
        this.elWrapper = elWrapper;
        this.saveTodoHandler = saveTodoHandler;
    }

    initialize() {
        this.render(this.elWrapper);
        this.elWrapper.querySelector("input[type=submit]").addEventListener("click", ({target})=> {
            const todo = document.querySelector("#todo-input").value;
            this.saveTodoHandler(todo);
        })
    }

    render(elWrapper) {
        elWrapper.innerHTML = `
        <div class="input-wrapper">
            <input type="text" id="todo-input" placeholder="뭐할거야" />
            <input type="submit" value="등록" /> 
        </div>
        `
  }
}

export default InputView;