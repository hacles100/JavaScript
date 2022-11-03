// function string (content, value){


//  return console.log(content.startsWith(value));

// }


function comparacao(content1, content2) {

    for(let count = 0; count < content2.length; count++){
       
        if(content1[count] == content2[count] ){

            return console.log("true")

        }else{

            return console.log("false")
        }
    }

 
}




function substring(elemento1, elemento2){

    // let i = 0

    // if(elemento1[i] == elemento2[i].substring(elemento2)){
        
    //     return true

    // }else {

    //     return false
    // }

    var sub = elemento1.substring(0, elemento2.length)
    return elemento2 == sub

}


function concatena(primeiro, segundo) {


    return primeiro.repeat(segundo)
      
}



// Usando for
function concatena2(primeiro, segundo = 1) {

    let conjunto = ""

    for(let count = 0; count < segundo; count++){
       
        conjunto = conjunto + primeiro
    }

    return conjunto

}




function remover(str){

     const strNum = str.replace(/[^a-zA-Z0-9]/g,'')
     return strNum 
}




function divideString(nome, pedacos){

    let nome = ""

    for(let i = 0; i < pedacos.length; i++) {

        nome = nome + split(" ")
    }

    return nome
}



