const history =
document.getElementById("history");
const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "C") {

            display.value = "";

        }

        else if (value === "⌫") {

            display.value = display.value.slice(0, -1);

        }

        else if (value === "=") {

            try {

               const expression = display.value;

const answer = eval(expression);

display.value = answer;

history.innerHTML +=
`<li>${expression} = ${answer}</li>`;
            }

            catch {

                display.value = "Error";

            }

        }
else if(value === "%"){

    display.value =
    Number(display.value)/100;

}
        else {

            display.value += value;

        }

    });

});
// Keyboard Support

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(
        "0123456789+-*/.".includes(key)
    ){
        display.value += key;
    }

    else if(key === "Enter"){

        event.preventDefault();

        try{
            display.value = eval(display.value);
        }

        catch{

            display.value = "Error";
        }

    }

    else if(key === "Backspace"){

        display.value =
        display.value.slice(0,-1);

    }

    else if(key === "Escape"){

        display.value = "";

    }

});