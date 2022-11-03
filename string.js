
// function caracter(name){
//     let name = "lisa"

//     for(let count = 0; count < name.length; count++){
//         console.log(name[count])
//     }

//     return name
// }


// function novo(){

//     let name = "Olavo"

//     for(let i in name){
//         console.log(name[i])
//     }

// }


// function novo2(nome) {


//     for(let i in nome){
//         console.log(nome[i])
//     }
// }


function novo3(nome) {

    for (var i = nome.length - 1;  i >= 0;  i--) {
        console.log(nome[i])
    }
}





// function letras(name){

//     const names = "Lisa";


//     for (let i of names) {

   
//       name = i.split(" ");

//     }

//    return name
// }



// stringExemplo = "João da Silva Oliveira";
// resultado = stringExemplo.split(" ");



function divideString(nome, pedacos = 1){

    const numChunks = Math.ceil(nome.length / pedacos)
    const chunks = new Array(numChunks)

    for(let i=0, o = 0; i < numChunks; ++i, o+=pedacos){
        chunks[i] = nome.substr(o,pedacos)
    }

    return chunks
    
}


function divideString2(msg, divide =1){

    const chunks = []

    if(divide==1){
        chunks.push(msg)
        return chunks
    } 

    let part=""

    for(let i=0; i<msg.length; i++){
        part = part + msg[i]
        if(part.length==divide){
            chunks.push(part)
            part=''
        }
    }

    chunks.push(part)
    return chunks

    
}


// function divideString3(msg, divide =1){

//     const chunks = []

//     if(divide==1){
//         chunks.push(msg)
//         return chunks
//     } 

//     for(let i=0; i<msg.length; i=i+divide){
//         part = part + msg[i]
//         if(part.length==divide){
//             chunks.push(part)
//             part=''
//         }
//     }

//     chunks.push(part)
//     return chunks

    
// }


// function dataActual(date){

//     const date = new Date(date);
//     return date
// }




