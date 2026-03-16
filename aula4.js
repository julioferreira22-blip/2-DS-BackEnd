const idade = 15
const possuiCNH = false
const possuiCarro = false 




if (idade >= 18){
    //código para Verdadeiro
    if (possuiCNH == true){
        if(possuiCarro ==true){
         console.log("Parabéns, você tem tudo para dirigir ")
         } else {

            console.log("Você possui idade, carteira, mas não o carro ")

        }else {

            console.log("Você possui idade, mas não tem carteira ")
        }
        } 

} else{
    //código para Falso
    console.log("Você não possui idade para dirigir ")

       }       