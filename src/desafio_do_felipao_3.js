//Escrevendo as classes de um jogo de heróis

// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Múltiplos ataques
        atacar() {
        let ataque = '';
        switch (this.tipo) {
            case 'mago': ataque = 'usou magia'; break;
            case 'guerreiro': ataque = 'usou espada'; break;
            case 'monge': ataque = 'usou artes marciais'; break;
            case 'ninja': ataque = 'usou shuriken'; break;
        }
        console.log(`O herói ${this.nome.toUpperCase()} do tipo: *${this.tipo}* atacou usando ${ataque}`);
    }
}

// Testando os heróis
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
const heroi2 = new Heroi('He Man', 38, 'guerreiro'); 
const heroi3 = new Heroi('Naruto', 20, 'monge');
const heroi4 = new Heroi('Itachi', 25, 'ninja');

// Chamando os ataques
heroi1.atacar(); // o mago atacou usando usou magia
heroi2.atacar(); // o guerreiro atacou usando usou espada
heroi3.atacar(); // o monge atacou usando usou artes marciais
heroi4.atacar(); // o ninja atacou usando usou shuriken