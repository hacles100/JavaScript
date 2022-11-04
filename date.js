function nhaData(elemento){

    let data = new Date()

    let dia = data.getDay()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    
    if(elemento === '/'){
    
        let time = `${dia}/${mes}/${ano}`
    
        return time

    }else {

        let time = `${dia}-${mes}-${ano}`
    
        return time
    }
   
}

// Data com mes por extenso

function nhaData2(elemento){

    let data = new Date()

    let dia = data.getDate()
    let ano = data.getFullYear()

    let mes = data.getMonth()

    arrayMes = new Array();
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";      
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";

    
    if(elemento === '/'){
    
        let time = `${dia}/${arrayMes[mes]}/${ano}`
    
        return time

    }else {

        let time = `${dia}-${arrayMes[mes]}-${ano}`
    
    
        return time
    }
   
}


// dia da semana e mes por extenso


function nhaData3(elemento){

    let data = new Date()

    let dia = data.getDate()
    let ano = data.getFullYear()

    let mes = data.getMonth()

    arrayMes = new Array();
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";      
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";

   arrayDia = new Array();
   arrayDia[0] = "Domingo";
   arrayDia[1] = "Segunda-Feira";
   arrayDia[2] = "Terça-Feira";
   arrayDia[3] = "Quarta-Feira";
   arrayDia[4] = "Quinta-Feira";
   arrayDia[5] = "Sexta-Feira";
   arrayDia[6] = "Sábado";

    
    if(elemento === '/'){
    
        let time = `${arrayDia[dia]}/${arrayMes[mes]}/${ano}`
    
        return time

    }else {

        let time = `${arrayDia[dia]}-${arrayMes[mes]}-${ano}`
    
        return time
    }
   
}


// Funcao que compara duas datas e apresenta como resultado se a primeira data é superior, igual ou inferior

function nhaData4(data_1, data_2){

    let data = new Date()
    data.setFullYear()

    if (data_1 === data_2) {
     
        return "Datas iguais"

      }
      
      else if (data_1 > data_2){

        return "data_1 > data_2"
      } 

      else if (data_2 > data_1){

        return "data_2 > data_1"
      }

    
   
}


// funcao que adiciona uma hora a data actual

function nhaData5(data, hora){

    data.setHours(data.getHours()+hora)
    return data
}

// funcao que determina se uma data é fim de semana ou nao

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








