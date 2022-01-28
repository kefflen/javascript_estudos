
export default class Tarefa {
    #id: number
    #descricao: string
    #concluida: boolean

    constructor(id: number, descricao: string, concluida=false) {
        this.#id = id
        this.#descricao = descricao
        this.#concluida = concluida
    }

    static criarAtiva(id: number, descricao: string) {
        return new Tarefa(id, descricao)
    }
    static criarConcluida(id: number, descricao: string) {
        return new Tarefa(id, descricao, true)
    }

    get id() {
        return this.#id
    }
    get descricao() {
        return this.#descricao
    }
    get concluida() {
        return this.#concluida
    }
    get isAtiva() {
        return !this.#concluida
    }
    alternarStatus() {
        return this.concluida ? this.ativar() : this.concluir()
    }

    ativar() {
        return Tarefa.criarAtiva(this.#id, this.#descricao)
    }

    concluir() {
        return Tarefa.criarConcluida(this.#id, this.#descricao)
    }

    /*
    concluir() {
        return this.#clone({concluida: true})
    }
    

    #clone(changedAtt) {
        let clone = {
            id: this.#id, 
            descricao: this.#descricao, 
            concluida: this.#concluida
        }
        Object.assign(clone, changedAtt)
        return new Tarefa(clone.id, clone.descricao, clone.concluida)
    }
    */
}   