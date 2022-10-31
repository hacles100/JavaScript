function giveMePhoneNumber(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }
  
    // return phoneBook.Abel
    // let nome = phoneBook[nome];

    // return nome

    const savedPhoneNumber = phoneBook[name]

    return savedPhoneNumber
    
}


function AddList(name, num) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }

     phoneBook[name] = num
     return phoneBook

}



function EliminaList(name) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }

     delete phoneBook[name];

     return phoneBook

}



// Funcao principal

 function principal(name, num, operation) {


 if (operation == "add") {

    return AddList(name, num)
    
 }else if(operation == "del"){


    return EliminaList(name)

} else if(operation == "get") {


   return giveMePhoneNumber(name)
   
}


 }


