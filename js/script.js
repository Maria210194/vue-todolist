console.log('ciao');

/* Dati
Ogni todo è un oggetto con due proptrietà:
text: stringa col testo del todo
done: un booleano che indica se il todo è stato fatto oppure no

*/
// MILESTONE 1:
// stampare all'interno di ogni lista un item per ogni todo
// se done === true, visualizzare il testo del todo sbarrato



// creo un array con i miei todo

const toDoItems = [
    item = {
        text: 'fare yoga',
        done: false,
    },
    {
        text: 'fare meditazione',
        done: false,
    },
    {
        text: 'seguire le lazione del mattino',
        done: false,
    },
    {
        text: 'fare pranzo',
        done: false,
    },
    {
        text: 'fare una passeggiata',
        done: false,
    },
    {
        text: 'fare l\'esercizio del pomeriggio',
        done: false,
    },
    {
        text: 'piangere fino all\'ora di cena',
        done: false,
    },
    {
        text: 'fare cena',
        done: false,
    },
    {
        text: 'Netflix e depressione',
        done: false,
    }
]

// inizializzo Vue e richiamo l'array toDoItems
const app = new Vue({
    el: '#root',
    data: {
        toDoItems
    }

})

