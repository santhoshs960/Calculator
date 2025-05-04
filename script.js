function Evaluate(expression) {
    expression = expression.replace(/(\d+\.?\d*)([*\/])(\d+\.?\d*)/g, (match, num1, operator, num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (operator === '*') return num1 * num2;
        if (operator === '/') return num1 / num2;
    });

    const result = expression.replace(/(\d+\.?\d*)([+-])(\d+\.?\d*)/g, (match, num1, operator, num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (operator === '+') return num1 + num2;
        if (operator === '-') return num1 - num2;
    });

    return parseFloat(result);
}



function Calculator() {

    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");
    let screen = document.querySelector(".screen");
    let content = "";


    buttons.forEach(button => {
        button.addEventListener("click", function () {

            if (button.textContent.trim().toLowerCase() == "clear") {
                content = ""
                display.textContent = ""
            } else if (button.textContent != "clear" && button.textContent != "=") {
                content += button.textContent;
                console.log(content);
                display.textContent = content;
            } else if (button.textContent == "=") {
                let value = Evaluate(content)
                display.textContent = value;
                content = value.toString();
            } else {
                if (display.textContent !== content) {
                    content = button.textContent;
                } else {
                    content += button.textContent;
                }
                display.textContent = content;
            }
        })
    })

}

Calculator()