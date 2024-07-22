let buttons= document.querySelector('.buttons')
var check=0

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
        let newInput= "/"
        document.getElementById("inputArea").value= `${onScreenValue}/`
        onScreenInput= document.getElementById("inputArea")
        let opArray= Array.from(onScreenValue)
        let opLength= opArray.length
        console.log(opArray[opLength-1])
        if(opArray[opLength-1].includes("+") || opArray[opLength-1].includes("-") || opArray[opLength-1].includes("*") || opArray[opLength-1].includes("/")){
            opArray.pop()
            opArray.push(`${newInput}`)
            let finalOperatorInput= String(opArray.join(""))
            document.getElementById("inputArea").value= `${finalOperatorInput}`
        }        
    }

    else if(idNode == "multiply"){
        let newInput= "*"
        document.getElementById("inputArea").value= `${onScreenValue}/`
        onScreenInput= document.getElementById("inputArea")
        let opArray= Array.from(onScreenValue)
        let opLength= opArray.length
        console.log(opArray[opLength-1])
        if(opArray[opLength-1].includes("+") || opArray[opLength-1].includes("-") || opArray[opLength-1].includes("*") || opArray[opLength-1].includes("/")){
            opArray.pop()
            opArray.push(`${newInput}`)
            let finalOperatorInput= String(opArray.join(""))
            document.getElementById("inputArea").value= `${finalOperatorInput}`
        }        
    }
    else if(idNode == "add"){
        let newInput= "+"
        document.getElementById("inputArea").value= `${onScreenValue}/`
        onScreenInput= document.getElementById("inputArea")
        let opArray= Array.from(onScreenValue)
        let opLength= opArray.length
        console.log(opArray[opLength-1])
        if(opArray[opLength-1].includes("+") || opArray[opLength-1].includes("-") || opArray[opLength-1].includes("*") || opArray[opLength-1].includes("/")){
            opArray.pop()
            opArray.push(`${newInput}`)
            let finalOperatorInput= String(opArray.join(""))
            document.getElementById("inputArea").value= `${finalOperatorInput}`
        }        
    }
    else if(idNode == "subtract"){
        let newInput= "-"
        document.getElementById("inputArea").value= `${onScreenValue}/`
        onScreenInput= document.getElementById("inputArea")
        let opArray= Array.from(onScreenValue)
        let opLength= opArray.length
        console.log(opArray[opLength-1])
        if(opArray[opLength-1].includes("+") || opArray[opLength-1].includes("-") || opArray[opLength-1].includes("*") || opArray[opLength-1].includes("/")){
            opArray.pop()
            opArray.push(`${newInput}`)
            let finalOperatorInput= String(opArray.join(""))
            document.getElementById("inputArea").value= `${finalOperatorInput}`
        }        
    }
    else if(idNode == "dZero"){
        document.getElementById("inputArea").value= `${onScreenValue}00`
    }
    else if(idNode == "zero"){
        document.getElementById("inputArea").value= `${onScreenValue}0`
    }
    else if(idNode == "equalsTO"){
        document.getElementById("outputBox").classList.add("visible")
        document.getElementById("outputBox").classList.remove("hidden")
        document.getElementById("outputBox").classList.remove("fadeOut")
        document.getElementById("inputBox").classList.add("hidden")
        document.getElementById("inputBox").classList.remove("visible")
        check=1
        let regex = /^[a-zA-Z]+$/

        
        let finalInput= Array.from(onScreenValue)
        let finalInputLength= finalInput.length
        let alpArray= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q", "r","s","t","u","v","w","x","y","z", "A" ,"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R","S","T","U","V","W","X","Y","Z"]
        for(let i=0; i<alpArray.length;i++){
            if(finalInput.includes(alpArray[i])){
                document.getElementById("outputArea").value= `Invalid Input`
                return
            }
        } 
        
        if(finalInput[finalInputLength-1] == '+' || finalInput[finalInputLength-1] == '-' || finalInput[finalInputLength-1] == '*' || finalInput[finalInputLength-1] == '/' ){
            finalInput.pop()
            let finalInputInteger= String(finalInput.join(""))
            document.getElementById("outputArea").value= `${eval(finalInputInteger)}`
        }
        
        else if(regex.test(`${onScreenValue}`)){
            console.log( "Invalid Input")
        }

        else{
        document.getElementById("outputArea").value= `${eval(onScreenValue)}`
        }
    }
    else if(idNode == "decimal"){
        document.getElementById("inputArea").value= `${onScreenValue}.`
    }
    else if(idNode == "allClear"){
        document.getElementById("outputBox").classList.add("fadeOut")
       
        document.getElementById("outputBox").classList.add("hidden")
       
        
        document.getElementById("outputBox").classList.remove("visible")
        document.getElementById("inputBox").classList.add("visible")
        document.getElementById("inputBox").classList.remove("hidden")
        document.getElementById("inputArea").value= ""
    }
    else if(idNode == "delete"){
        if (check == 1){
            document.getElementById("outputBox").classList.add("fadeOut")
            document.getElementById("inputBox").classList.add("visible")
            document.getElementById("inputBox").classList.remove("hidden")
            document.getElementById("outputBox").classList.remove("visible")
            document.getElementById("outputBox").classList.add("hidden")
            check=0
        }
        else{

            let newArr= Array.from(onScreenValue)
            newArr.pop()
            let updatedNumber= String(newArr.join(""))
            document.getElementById("inputArea").value= `${updatedNumber}`
        }
    }
    else if(idNode == "percentage"){
        document.getElementById("inputArea").value= `${onScreenValue}%`
    }
    
})