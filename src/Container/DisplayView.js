class DisplayView {
    constructor({elWrapper}) {
        this.elWrapper = elWrapper;
    }

    initialize() {
        this.getTodoList();
    }

    getTodoList() {
        fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(res => res.json())
        .then(todoList => this.render(todoList));
    }

    render(todoList) {
        const todoListHTML = todoList.reduce( (html, {title}) => `${html}<li>${title}</li>`, ``);
        this.elWrapper.innerHTML = `
        <ul class="display-wrapper">${todoListHTML}</ul> `
    }

    appendTodoItem(todoItem) {
        this.elWrapper.querySelector(".display-wrapper").insertAdjacentHTML("afterbegin", `<li>${todoItem}</li>`)
    }
}

export default DisplayView;