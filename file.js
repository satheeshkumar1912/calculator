let input = document.querySelector('input')
function addValue(elementVal){
    input.value += elementVal
}

function clearValue(elementVal){
    input.value = "" 
}

function deleteValue(elementVal){
    input.value = input.value.slice(0,length-1)
} 

function evaluateValue(elementVal){
    input.value = eval(input.value,elementVal)
}
