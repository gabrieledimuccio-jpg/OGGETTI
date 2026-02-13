let bowling = {
    giocatori : [
        { nome :`A`, punteggio : []},
        { nome :`B`, punteggio : []},
        { nome :`C`, punteggio : []},
        { nome :`D`, punteggio : []},
        
    ],
    
    scores :  function () {
        this.giocatori.forEach(giocatore => { 
            for (let i = 1; i <= 10; i++) {
                giocatore.punteggio.push(Math.floor(Math.random()* (10 - 1 + 1) + 1));
            }
        })
    },
    totalScore : function () {
        this.giocatori.forEach(giocatore => {
            let tot = giocatore.punteggio.reduce((acc, num) => acc + num);
            giocatore.total = tot
            
        })
        this.giocatori.sort((a, b) => b.total - a.total)
    },
    add_player : function (name) {
        let newgiocatore = {nome: name, punteggio: []}
        for (let i = 1; i <= 10; i++) {
            newgiocatore.punteggio.push(Math.floor(Math.random()* (10 - 1 + 1) + 1));
        }
        this.giocatori.push(newgiocatore);
        
        
    },
    winner : function () {
        let vincitore = this.giocatori[0]
        console.log(`Il vincitore è ${vincitore.nome} con un totale di ${vincitore.total}`);
        
    },
    classifica : function () {
        this.giocatori.forEach(giocatore => {
            console.log(`${giocatore.nome} ${giocatore.total} punti totali`);
            
        })
        
    }
};
bowling.scores()

bowling.add_player(`E`)

bowling.totalScore()

bowling.winner()

bowling.classifica()