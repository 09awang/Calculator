let curIndex = 0;
let history = [];
sessionStorage.setItem("inputs", JSON.stringify(history));



function equals() {
    history.push((document.getElementById("input").value));
    document.getElementById("output").textContent = eval(document.getElementById("input").value);
    curIndex = 0;
}

function clickNum(id) {
    document.getElementById("input").value += id;
}

function uppies() {
    // console.log(history[history.length - curIndex-1]);
    document.getElementById("input").value = history[history.length - curIndex-1];
    curIndex++;
}

function GETDOWNNOW() {
    document.getElementById("input").value = history[history.length + curIndex-1];
    curIndex--;
}

document.addEventListener("type", (event) => {
    if (event.key === "Enter") {
        history.push((document.getElementById("input").value));
        equals();
    }


    }
)
function load(){
    const stored = sessionStorage.getItem("inputs");
    if (stored) {
        history = JSON.parse(stored);
    } else {
        history = [];
        sessionStorage.setItem("inputs", JSON.stringify(history));
    }
}


