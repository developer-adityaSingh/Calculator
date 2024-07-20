let add = (num1,num2) => (num1+num2)
let sub = (num1,num2) => (num1-num2)
let mul = (num1,num2) => (num1*num2)
let div = (num1,num2) => (num1/num2)
var inputValue = document.getElementById("inputArea").value
var finalAnswer=0
document.getElementById('allClear').addEventListener('click',()=>{
    console.log("AllClear was clicked")
    document.getElementById("inputArea").value= ""
})

document.getElementById('delete').addEventListener('click',()=>{
    console.log("delete was clicked")
    document.getElementById("inputArea").value= ""
})

document.getElementById('percentage').addEventListener('click',()=>{
    console.log("percentage was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}%`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('divide').addEventListener('click',()=>{
    console.log("divide was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}/`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('seven').addEventListener('click',()=>{
    console.log("seven was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}7`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('eight').addEventListener('click',()=>{
    console.log("eight was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}8`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('nine').addEventListener('click',()=>{
    console.log("nine was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}9`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('multiply').addEventListener('click',()=>{
    console.log("multiply was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}*`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('four').addEventListener('click',()=>{
    console.log("four was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}4`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('five').addEventListener('click',()=>{
    console.log("five was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}5`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('six').addEventListener('click',()=>{
    console.log("six was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}6`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('subtract').addEventListener('click',()=>{
    console.log("subtract was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}-`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('one').addEventListener('click',()=>{
    console.log("one was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}1`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('two').addEventListener('click',()=>{
    console.log("two was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}2`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('three').addEventListener('click',()=>{
    console.log("three was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}3`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('add').addEventListener('click',()=>{
    console.log("add was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}+`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('dZero').addEventListener('click',()=>{
    console.log("dZero was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}00`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('zero').addEventListener('click',()=>{
    console.log("zero was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}0`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('decimal').addEventListener('click',()=>{
    console.log("decimal was clicked")
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue}.`
    inputValue= document.getElementById("inputArea").value
})

document.getElementById('equalsTO').addEventListener('click',()=>{
    console.log("equalsTO was clicked")
    console.log(inputValue)
    finalAnswer= eval(`${inputValue}`)
    inputValue= document.getElementById("inputArea").value
    document.getElementById("inputArea").value= `${inputValue} = ${finalAnswer}`
})