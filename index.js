sessionStorage.setItem("inputs", "0");

function equals() {
    let output = eval(document.querySelector("input").value);
    sessionStorage.setItem("inputs", eval(document.querySelector("input").value));
    const result = document.getElementById("output");
    result.title = output.textContent;
}