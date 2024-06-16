const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}

function calculate() {
    if (display.value === "159") {
        display.value = "Priyansh Rana";
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }
}
