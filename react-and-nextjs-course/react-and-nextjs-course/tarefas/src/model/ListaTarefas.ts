import Tarefa from "./Tarefa";
import TipoFiltro from "./TipoFiltro";

export default class ListaTarefas {
    #todas: Tarefa[]
    #filtroUtilizado: TipoFiltro

    constructor(todas: Tarefa[], filtroUtilizado = TipoFiltro.NENHUM) {
        this.#todas = todas
        this.#filtroUtilizado = filtroUtilizado

    }

    get itens() {
        return this.aplicarFiltro(this.#todas)
    }

    get quantidade() {
        return this.itens.length
    }

    get filtroUtilizado() {
        return this.#filtroUtilizado
    }

    adicionarTarefa(novaTarefa: Tarefa) : ListaTarefas {
        const todas = [...this.#todas]
        todas.push(novaTarefa)
        return new ListaTarefas(todas, this.#filtroUtilizado)
    }

    modificarTarefa(tarefaModificada: Tarefa) : ListaTarefas {
        const todas = this.#todas.map(tarefa => {
            return tarefa.id === tarefaModificada.id ? tarefaModificada : tarefa
        })
        return new ListaTarefas(todas, TipoFiltro.NENHUM)
    }

    filtrarAtivas() {
        console.log(this.exibindoSomenteAtivas())
        if (!this.exibindoSomenteAtivas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.ATIVAS)
        } else return this
    }

    filtrarConcluidas() {
        if (!this.exibindoSomenteConcluidas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.CONCLUIDAS)
        } else return this
    }

    removerFiltros() {
        if (!this.exibindoTodas()) {
            return new ListaTarefas(this.#todas, TipoFiltro.NENHUM)
        } else return this
    }

    excluirConcluidas() {
        let tarefasAtivas = this.#todas.filter(tarefa => tarefa.isAtiva)
        return new ListaTarefas(tarefasAtivas, TipoFiltro.NENHUM)
    }

    exibindoTodas() {
        return this.#filtroUtilizado === TipoFiltro.NENHUM
    }

    exibindoSomenteAtivas() {
        return this.#filtroUtilizado === TipoFiltro.ATIVAS
    }
    exibindoSomenteConcluidas() {
        return this.#filtroUtilizado === TipoFiltro.CONCLUIDAS
    }

    private aplicarFiltro(tarefas: Tarefa[]) : Tarefa[] {
        if (this.exibindoSomenteAtivas()) {
            return this.aplicarFiltroAtivas(tarefas)
        } else if (this.exibindoSomenteConcluidas()){
            return this.aplicarFiltroConcluidas(tarefas)
        }
        return [...tarefas]
    }

    private aplicarFiltroAtivas(tarefas: Tarefa[]) : Tarefa[] {
        let result = tarefas.filter(tarefa => tarefa.isAtiva)
        return result
    }

    private aplicarFiltroConcluidas(tarefas: Tarefa[]) : Tarefa[] {
        return tarefas.filter(tarefa => tarefa.concluida)
    }
}