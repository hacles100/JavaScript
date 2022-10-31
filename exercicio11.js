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



function EliminaList(name, num) {
    let phoneBook = {
        Abel: 5802943,
        Laura: 9761405,
        Lisa: 5850628,
        Adilson: 9240912,
        Victor: 9519228
    }

     delete phoneBook[name, num];

     return phoneBook

}

function principal() {
    
    
}

