// document.getElementById("msg").innerHTML = "ola"

document.getElementById("paragrafo").innerHTML = "Love eu te amo"

document.getElementById("header").innerHTML = "Treinando para ser o melhor do mundo!"


// document.getElementById("paragrafo").parentNode.innerHTML = "ola"

document.title = "Love"


function nhaData(){

    let data = new Date()

    let dia = data.getDay()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    let time = `${dia}/${mes}/${ano}` 

    document.getElementById("data").innerHTML = time

}

function addTextDiv(name){

    return document.getElementById("msg").innerHTML +=  name

}




