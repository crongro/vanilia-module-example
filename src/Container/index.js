import InputView from "./InputView.js";
import DisplayView from "./DisplayView.js";

class MainContainer {
    constructor() {
        const elInputWrapper = document.querySelector(".input-area");
        const elDisplayWrapper = document.querySelector(".display-area");

        this.inputView = new InputView({elWrapper : elInputWrapper, saveTodoHandler: this.saveTodoHandler.bind(this)});
        this.displayView = new DisplayView({elWrapper : elDisplayWrapper});
    }

    initialize (){
        this.inputView.initialize();
        this.displayView.initialize();
    }

    saveTodoHandler(todo) {
        this.displayView.appendTodoItem(todo);
    }

}

export default MainContainer;