class HeaderView {
    constructor({elWrapper}) {
        this.elWrapper = elWrapper;
    }

    getHeaderData() {
        fetch("http://127.0.0.1:8080/mock/headerData.json")
        .then(res => res.json())
        .then(data => this.render(data));
    }
 
    initialize() {
        this.getHeaderData();
    }

    render({title}) {
        this.elWrapper.innerHTML = `
        <header>
            <h1>${title}</h1>
        </header>
        `
  }
}

export default HeaderView;