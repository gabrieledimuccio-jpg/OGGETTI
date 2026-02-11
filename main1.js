let persona = {
'nome' : 'Gabriele',
'cognome' : 'Baudo',
'età' : 20,
presentati : function () {
    console.log(`Ciao, sono ${this.nome} ${this.cognome} ed ho ${this.età} anni.`); 
},
}

persona.presentati()
