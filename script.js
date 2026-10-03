let lastAnswer = 0;
let isDegree = true;
// DOM elements
const display = document.getElementById("display");

function press(val) {
    display.value += val;
}
function clearDisplay() {
    display.value = "";
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function useAns() {
    display.value += lastAnswer;
}
function toggleMode() {
    isDegree = !isDegree;
    alert(isDegree ? "Degree Mode" : "Radian Mode");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}


// Convert trig input if DEG mode
function convertTrig(expr) {
    if (!isDegree) return expr;
    return expr
        .replace(/sin\(([^)]+)\)/g, "sin(($1) * pi / 180)")
        .replace(/cos\(([^)]+)\)/g, "cos(($1) * pi / 180)")
        .replace(/tan\(([^)]+)\)/g, "tan(($1) * pi / 180)")
        .replace(/cot\(([^)]+)\)/g, "cot(($1) * pi / 180)");
        expression = expression.replace(/(\d+)%/g, "($1/100)");
}

 function checkEven() {
    let num = parseInt(document.getElementById("display").value);

    if (isNaN(num)) {
        alert("Enter a valid number");
        return;
    }

    if (num % 2 === 0) {
        document.getElementById("display").value = "Even";
    } else {
        document.getElementById("display").value = "Not Even";
    }
}
function checkOdd() {
    let num = parseInt(document.getElementById("display").value);

    if (isNaN(num)) {
        alert("Enter a valid number");
        return;
    }

    if (num % 2 !== 0) {
        document.getElementById("display").value = "Odd";
    } else {
        document.getElementById("display").value = "Not Odd";
    }
}
function checkPrime() {
    let num = parseInt(document.getElementById("display").value);

    if (isNaN(num) || num < 2) {
        document.getElementById("display").value = "Not Prime";
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.getElementById("display").value = "Not Prime";
            return;
        }
    }

    document.getElementById("display").value = "Prime";
}
function checkComposite() {
    let num = parseInt(document.getElementById("display").value);

    if (isNaN(num) || num < 2) {
        document.getElementById("display").value = "Not Composite";
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.getElementById("display").value = "Composite";
            return;
        }
    }

    document.getElementById("display").value = "Not Composite";
}
function calculate() {
    try {
        let expr = display.value;
        expr = convertTrig(expr);

        let result = math.evaluate(expr);

        history.innerHTML += expr + " = " + result + "<br>";
        display.value = result;
        lastAnswer = result;

    } catch (err) {
        display.value = "Error";
    }
}

function calculatePercentage() {
    let input = document.getElementById("display").value;

    let parts = input.split('/');

    if (parts.length !== 2) {
        alert("Enter in format: obtained/total");
        return;
    }

    let obtained = parseFloat(parts[0]);
    let total = parseFloat(parts[1]);

    if (isNaN(obtained) || isNaN(total) || total === 0) {
        alert("Invalid input");
        return;
    }

    let percentage = (obtained / total) * 100;

    document.getElementById("display").value =
        percentage.toFixed(2) + "%";
}

// Keyboard support
document.addEventListener("keydown", function (e) {
    if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
        press(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        backspace();
    }
});







