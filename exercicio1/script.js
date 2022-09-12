const num = Number(prompt("Digite um número"))

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log("É divisível por 2 e 3")
    } else {
        console.log("Não é divisível por 2 e 3")
    }
} else {
    console.log("Não é divisível por dois e 3")
}

if ((num % 2 === 0) && (num % 3 === 0)) {
    console.log("É divisível por 2 & 3")
} else {
    console.log("Não é divisível por 2 & 3")
}