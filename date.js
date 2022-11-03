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




















