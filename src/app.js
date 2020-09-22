import HeaderView from "./HeaderView/index.js";
import ContainerView from "./Container/index.js";

function runService() {
    const elHeaderWrapper = document.querySelector("header");
    const elContainer = document.querySelector(".container");

    new HeaderView({elWrapper: elHeaderWrapper}).initialize();
    new ContainerView({ elContainer }).initialize();

}

window.addEventListener("DOMContentLoaded", ()=> {
    runService();
})