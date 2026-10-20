let currHistorySize = 0;
const history = new Array(0)
sessionStorage.setItem("inputs", JSON.stringify(history));



function equals() {
    document.getElementById("output").textContent = eval(document.getElementById("input").value);
}

function clickNum(id) {
    document.getElementById("input").value += id;
}

function uppies() {
    document.getElementById("input").value = history.pop();
}

document.addEventListener("type", (event) => {
    if (event.key === "Enter") {
        history.push((document.getElementById("input").value));
        equals();
    }


    }
)
