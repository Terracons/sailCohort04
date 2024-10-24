const display = document.getElementById("display")

console.log(display.value);

function addToDisplay(val) {
    return display.value = display.value + val
}


function calculateTotal() {
    total = eval(display.value)
    return display.value = total
}

function clearScreen(){
    return display.value=""
}

function delLast(){
return display.value=(display.value).slice(0, -1)

}

function returnPercent(){
    return display.value = eval(display.value/100)
}
function returnsquare(){
    return display.value = eval(display.value*display.value)
}