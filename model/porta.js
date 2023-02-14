
export default class Porta {
    #numero 
    #temPresente
    #selecionada
    #aberta

    constructor(numero, temPresente= false , selecionada = false, aberta = false) {
    
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta

    } 
    //metodos que vão receber os valores

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    //alterando o estado da porta sem mexer na instância altual
    desselecinar() {
        const selecionada = false 
        return new Porta(this.#numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao(){
        const selecionada = !this.selecionada
        return new Porta(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new Porta(this.numero, this.temPresente, this.selecionada, aberta)
    }

}