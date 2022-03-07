const biblioteca = [
    {
        nome: 'Ego Transformado',
        autor: 'Timothy Keller',
        editora: 'Vida Nova',
        qt_paginas: 48,
        livroBom: true,
        bestSeller: false,
        sobre: {
           qt_capitulos: 3,
           autorBrasileiro: true
        } 
    },
    {
        nome: 'Até que nada mais importe',
        autor: 'Luciano Subirá',
        editora: 'United Press',
        qt_paginas: 154,
        livroBom: true,
        bestSeller: true,
        sobre: {
           qt_capitulos: 12,
           autorBrasileiro: true
        }  
    },
    {
        nome: 'Discipulado',
        autor: 'Dietrich Bonhoeffer',
        editora: 'Mundo Cristão',
        qt_paginas: 253,
        livroBom: true,
        bestSeller: false,
        sobre: {
           qt_capitulos: 15,
           autorBrasileiro: false
        }
    },
]

/*
var cont = biblioteca.length
for (var i = 0; i <= cont; i++){
    alert(`Nome do Livro: ${biblioteca[i].nome} \nQualidade de Capitulos: ${biblioteca[i].sobre.qt_capitulos}`)
}

*/