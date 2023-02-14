//acessando um nome privado com javaScrip

class Pessoas {
    #nome 

    constructor(nome) {
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }
}

const p1 = new Pessoas("Bianca")
console.log*p1.nome