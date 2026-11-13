function calculator(a,b,operator){
    if( typeof a !== "number" || typeof b !== "number"){
            return "Это не число"
    }

    if (operator === "+"){
        return a+b
    } else if(operator === "-"){
        return a-b
    } else if(operator === "/"){
           if (b === 0){
            return "На ноль делить нельзя"
           }
            return a/b
              
        } else if(operator === "*" ){
        return a*b
       }        
        
     
        return "Ошибка: Не известный оператор"
    }


    console.log(calculator(10, 5, "+"))
    console.log(calculator(10, 5, "-"))
    console.log(calculator(10, 5, "*"))
    console.log(calculator(10, 0, "/"))