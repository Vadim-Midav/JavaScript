function getSeason(month,temperature){
    if (month <1 || month >12 ){
        return "Ошибка";
    }
     
    if((month === 12 || month === 1 || month === 2) && temperature <=5 ){
          return"Зима";
}

if(month >=3 && month <=5 && temperature < 20){
    
        return"Весна";
}

}

if(month >=6 && month <=8 && temperature > 20){
    
        return"Лето";
}



if (month >=9 && month <=11 && temperature >=5 && temperature <=20 ){
    
        return"Осень";
}

{
        return" Несоответствия сезона"
}


console.log(getSeason(13, 5));
console.log(getSeason(-5, 5));
