// const addUserText = document.getElementById('add-user')
// console.log(addUserText)

// addUserText.innerText = 'Ola Usuario'

// const addUserText = document.querySelector('#add-user')

function fimDeSemana(data){


    let data = data.getDay()

    arrayDia = new Array();
    arrayDia[0] = "Domingo";
    arrayDia[1] = "Segunda-Feira";
    arrayDia[2] = "Terça-Feira";
    arrayDia[3] = "Quarta-Feira";
    arrayDia[4] = "Quinta-Feira";
    arrayDia[5] = "Sexta-Feira";
    arrayDia[6] = "Sábado";

        
    if(data === arrayDia[0] || data === arrayDia[6]){

    
        return 'Fim de semana'

    }else {

        return 'Dia da semana'
    }
 

}