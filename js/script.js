console.log('ciao');

/* Dati
Ogni todo è un oggetto con due proptrietà:
text: stringa col testo del todo
done: un booleano che indica se il todo è stato fatto oppure no

*/
// MILESTONE 1:
// stampare all'interno di ogni lista un item per ogni todo
// se done === true, visualizzare il testo del todo sbarrato
/*
 creare una todolist partendo da un array di oggetti così composto
 { text: 'attività', done: true/false (fatto o da fare) }

 
 - al clic su un task barrarlo per segnalare che è stato fatto

 - Visualizzare a fianco ad ogni item una "x": 
   cliccando su di essa, il todo viene rimosso dalla lista.

 - aggiungere un input text con pulsante aggiungi per aggiungere nuovi task
    - la pressione del tasto invio aggiunge un nuovo task

 - click su task inverte done
*/



// creo un array con i miei todo

const toDoTasks = [
    {
        text: 'fare yoga',
        done: false,
    },
    {
        text: 'fare meditazione',
        done: true,
    },
    {
        text: 'seguire le lezione del mattino',
        done: false,
    },
    {
        text: 'fare pranzo',
        done: true,
    },
    {
        text: 'fare una passeggiata',
        done: false,
    },
    {
        text: 'fare l\'esercizio del pomeriggio',
        done: true,
    },
    {
        text: 'disperarsi fino all\'ora di cena',
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
        toDoTasks,
        newTask: '',
    },
    methods: {
        taskClicked(index) {
            console.log(index);
            this.toDoTasks[index].done = !this.toDoTasks[index].done;
        },
        deleteTask(index) {
            console.log(`filtro tasks in modo da avere solo i task
            con indice diverso da ${index}`)

            const filteredArray = this.toDoTasks.filter(
                (_, i) => {
                    return index !== i;

                }
            )
            console.log(filteredArray);
            this.toDoTasks = filteredArray;
        },
        addTask() {
            this.toDoTasks.push(
                {
                    text: this.newTask,
                    done: false
                }
            )
            this.newTask = '';

        }
    }


})

// con deleteTask cancello il mio todo dalla lista quando viene cliccata la X
// con this.toSoTasks = filteredArray vado ad aggiornare il mio array iniziale senza gli i-esimi elementi cliccati (e quindi filtrati)


