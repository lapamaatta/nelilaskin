var Variables = {};

const SelectFunc = (functionName) => {
    Variables.funcName = functionName;
    Variables.result;
    Variables.calcResult = document.getElementById("calcResult");
    Variables.verifText = document.getElementById("verifText");
    Variables.number1 = document.getElementById("number1").value;
    Variables.number2 = document.getElementById("number2").value;
    if(Variables.number1 != "" && Variables.number2 != ""){
        if(functionName == "plus"){
            Variables.verifText.innerHTML = "Laskentafunktio valittu : +"
            Variables.result = Number(Variables.number1) + Number(Variables.number2);
            Variables.calcResult.innerHTML = Variables.number1 + " + " + Variables.number2 + " = ";
        } else if(functionName == "minus"){
            Variables.verifText.innerHTML = "Laskentafunktio valittu : -"
            Variables.result = Number(Variables.number1) - Number(Variables.number2);
            Variables.calcResult.innerHTML = Variables.number1 + " - " + Variables.number2 + " = ";
        } else if(functionName == "multi"){
            Variables.verifText.innerHTML = "Laskentafunktio valittu : *"
            Variables.result = Number(Variables.number1) * Number(Variables.number2);
            Variables.calcResult.innerHTML = Variables.number1 + " * " + Variables.number2 + " = ";
        } else if(functionName == "divide"){
            Variables.verifText.innerHTML = "Laskentafunktio valittu : /"
            Variables.result = Number(Variables.number1) / Number(Variables.number2);
            Variables.calcResult.innerHTML = Variables.number1 + " / " + Variables.number2 + " = ";
        } else {
            Variables.verifText.innerHTML = "Nyt meni jotain pahasti pieleen!"
        }
    } else{
        Variables.verifText.innerHTML = "Älä jätä lukuja tyhjäksi!"
    }
}

const Equals = () => {
    let result = Variables.result;
    if(result = NaN){
        return null;
    } else{
        if(Variables.funcName == "plus"){
            Variables.calcResult.innerHTML = Variables.number1 + " + " + Variables.number2 + " = " + Variables.result;
            document.getElementById("number1").value = '';
            document.getElementById("number2").value = '';
            Variables.verifText.innerHTML = "";
        } else if(Variables.funcName == "minus"){
            Variables.calcResult.innerHTML = Variables.number1 + " - " + Variables.number2 + " = " + Variables.result;
            document.getElementById("number1").value = '';
            document.getElementById("number2").value = '';
            Variables.verifText.innerHTML = "";
        } else if(Variables.funcName == "multi"){
            Variables.calcResult.innerHTML = Variables.number1 + " * " + Variables.number2 + " = " + Variables.result;
            document.getElementById("number1").value = '';
            document.getElementById("number2").value = '';
            Variables.verifText.innerHTML = "";
        } else if(Variables.funcName == "divide"){
            Variables.calcResult.innerHTML = Variables.number1 + " / " + Variables.number2 + " = " + Variables.result;
            document.getElementById("number1").value = '';
            document.getElementById("number2").value = '';
            Variables.verifText.innerHTML = "";
        }
    }
}