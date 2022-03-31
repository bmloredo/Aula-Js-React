import React from "react";

export const Instrumento = (valorDigitado) => {
    if (valorDigitado === 'Guitarra'){
        console.log(`A ${valorDigitado} tem cordas`)
    }
    else if (valorDigitado === 'Bateria'){
        console.log(`A ${valorDigitado} tem pedal`)
    }
    else if (valorDigitado === 'Microfone'){
        console.log(`O ${valorDigitado} tem fios`)
    }
    else console.log(`Não existe este instrumento`)
}

export const Fruta = (fruta) => {
    switch (fruta) {
        case "Abacaxi":
            console.log(`A ${fruta} é bom para caimbra`); break;
        case "Maça":
            console.log(`A ${fruta} é bom para voz`); break;
        case "Mamão":
            console.log(`O ${fruta} é bom para estomago`); break;
        default:
        console.log('Essa fruta não existe aqui')
    }
    
    
}
