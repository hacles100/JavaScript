// numeros primos

function primeNumber (num){
    var num = 0;
    for (var i = 0; i <= num; i++){
        if ((num % 1 === 0) && (num % num === 0)){
            return (primeNumber(i));
        }
    }
}
console.log(primeNumber(num));


// funcao para saber se o numero é par ou impar

function parOuImpar (num) {

    if(num % 2 == 0){
        console.log("O numero é par")
    }else {
        console.log("O numero é impar")
    }

    return num
}

//  funcao maior numero

function maiorNumero(num1, num2) {

    Math.max(num1, num2)

    return Math.max(num1, num2)
}


// funcao maior numero 2.0

function maiorNumeroDeTres(num1, num2, num3){
    if(num1 > num2 > num3) {

        console.log(`O maior numero é ${num1}`)

    }else if(num2 > num1 > num3){

        console.log(`O maior numero é ${num2}`)

    }else if(num3 > num2 > num1){

        console.log(`O maior numero é ${num3}`)
    }

    return maiorNumeroDeTres(num1, num2, num3)
}