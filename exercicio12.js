function giveMePhoneNumber(name, phoneBook) {


    // const savedPhoneNumber = phoneBook[name]

    // return savedPhoneNumbe

    if(phoneBook[name] == undefined) {
        return 'the name' + name + 'is not registered'
    }

    return phoneBook[name]
    
}


function AddList(name, num, phoneBook) {

     phoneBook[name] = num
     return phoneBook

}



function EliminaList(name, phoneBook) {


     delete phoneBook[name];

     return phoneBook

}



// Funcao principal

let phoneBook = {
    Abel: 5802943,
    Laura: 9761405,
    Lisa: 5850628,
    Adilson: 9240912,
    Victor: 9519228
}


 function verdade(name, num, operation) {



 if (operation == "add") {

    phoneBook = AddList(name, num, phoneBook)
    
 }else if(operation == "del"){


    phoneBook =  EliminaList(name, phoneBook)

} else if(operation == "get") {


   phoneBook = giveMePhoneNumber(name, num, phoneBook)
   
}

return phoneBook

}


