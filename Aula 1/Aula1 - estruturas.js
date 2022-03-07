const biblioteca = [
    {
        nome: 'Ego Transformado',
        autor: 'Timothy Keller',
        editora: 'Vida Nova',
        qt_Paginas: 48,
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
        qt_Paginas: 154,
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
        qt_Paginas: 253,
        livroBom: true,
        bestSeller: false,
        sobre: {
           qt_Capitulos: 15,
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
