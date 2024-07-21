let buttons= document.querySelector('.buttons')
const input = document.getElementById('inputArea');

input.addEventListener('keypress', (event) => {
  event.preventDefault();
});


input.addEventListener('keydown', (event) => {
  event.preventDefault();
});

input.addEventListener('keyup', (event) => {
  event.preventDefault();
});

// onScreenValue= document.getElementById("inputArea")
buttons.addEventListener("click", (e)=>{
    let previousValue=0
    onScreenInput= document.getElementById("inputArea") 
    onScreenValue= onScreenInput.value
    e.stopPropagation()
    idNode= e.target.id;
    if (idNode == "one") {
        previousValue= 1
        document.getElementById("inputArea").value= `${onScreenValue}1`

    }
    else if(idNode == "two"){
        document.getElementById("inputArea").value= `${onScreenValue}2`
    }
    else if(idNode == "three"){
        document.getElementById("inputArea").value= `${onScreenValue}3`
    }
    else if(idNode == "four"){
        document.getElementById("inputArea").value= `${onScreenValue}4`
    }
    else if(idNode == "five"){
        document.getElementById("inputArea").value= `${onScreenValue}5`
    }
    else if(idNode == "six"){
        document.getElementById("inputArea").value= `${onScreenValue}6`
    }
    else if(idNode == "seven"){
        document.getElementById("inputArea").value= `${onScreenValue}7`
    }
    else if(idNode == "eight"){
        document.getElementById("inputArea").value= `${onScreenValue}8`
    }
    else if(idNode == "nine"){
        document.getElementById("inputArea").value= `${onScreenValue}9`
    }
    else if(idNode == "divide"){
        document.getElementById("inputArea").value= `${onScreenValue}/`
    }
    else if(idNode == "multiply"){
        document.getElementById("inputArea").value= `${onScreenValue}*`
    }
    else if(idNode == "add"){
        document.getElementById("inputArea").value= `${onScreenValue}+`
    }
    else if(idNode == "subtract"){
        document.getElementById("inputArea").value= `${onScreenValue}-`
    }
    else if(idNode == "dZero"){
        document.getElementById("inputArea").value= `${onScreenValue}00`
    }
    else if(idNode == "zero"){
        document.getElementById("inputArea").value= `${onScreenValue}0`
    }
    else if(idNode == "equalsTO"){
        let finalInput= Array.from(onScreenValue)
        let finalInputLength= finalInput.length
        if(finalInput[finalInputLength-1] == '+' || finalInput[finalInputLength-1] == '-' || finalInput[finalInputLength-1] == '*' || finalInput[finalInputLength-1] == '/' ){
            finalInput.pop()
            let finalInputInteger= String(finalInput.join(""))
            document.getElementById("inputArea").value= `${onScreenValue} => ${finalInputInteger} = ${eval(finalInputInteger)}`
        }

        else{
        document.getElementById("inputArea").value= `${onScreenValue} = ${eval(onScreenValue)}`
        }
    }
    else if(idNode == "decimal"){
        document.getElementById("inputArea").value= `${onScreenValue}.`
    }
    else if(idNode == "allClear"){
        document.getElementById("inputArea").value= ""
    }
    else if(idNode == "delete"){
        let newArr= Array.from(onScreenValue)
        newArr.pop()
        let updatedNumber= String(newArr.join(""))
        document.getElementById("inputArea").value= `${updatedNumber}`
    }
    else if(idNode == "percentage"){
        document.getElementById("inputArea").value= `${onScreenValue}%`
    }
    
})