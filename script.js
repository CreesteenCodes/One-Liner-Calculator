let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            try {
                const expression = string.replace(/%/g, '/100');
                string = eval(expression);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (btnValue === 'AC') {
            string = "";
            input.value = string;
        }

        else if (btnValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += btnValue;
            input.value = string;
        }
    });
});
