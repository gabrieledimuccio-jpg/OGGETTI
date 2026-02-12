let agenda = {
    'contatti': [
        { 'nome' : 'Tizio', 'numero' : '3333333333'},
        { 'nome' :'Caio', 'numero' : '4444444444'},
        { 'nome' :'Sempronio', 'numero' : '5555555555'},
        { 'nome' :'Pippo', 'numero' : '8888888888'},
    ],
    'rubrica': function () {
        agenda.contatti.forEach((recapito) => { 
            console.log(`${recapito.nome} : ${recapito.numero}`)
            
        });
    },
    'contact' : function (contatto) {
        let contact = this.contatti.find(contact => contact.nome == contatto)
        if (contact ) {
            console.log(`${contact.nome} : ${contact.numero}`);
        }else{
            console.log(`Contatto non presente in rubrica`);
        } 
    },
    'elimina_contatto' : function (contatto_eliminato) {
        let elimina = this.contatti.find(elimina => elimina.nome == contatto_eliminato)
        let index = this.contatti.indexOf(elimina);
        if (elimina) {
            this.contatti.splice(index, 1),
            console.log(`È stato eliminato il contatto ${contatto_eliminato}`);
        } else {
            console.log(`Contatto non trovato`);
        }
          
    },
    
    'aggiungi_contatto' : function (name) {
        this.contatti.push(name)
        console.log(`È stato aggiunto il contatto ${name}`);
    },
    
    'modifica_contatto' : function (name, newcellulare) {
        let contatto = this.contatti.find(contatto => contatto.nome == name);
        if (contatto){
            console.log(`Contatto modificato`);
            contatto.numero = newcellulare
        }else{
            console.log(`Contatto non trovato`);
        }
        
    }
}

