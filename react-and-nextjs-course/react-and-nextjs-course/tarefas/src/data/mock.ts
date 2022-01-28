import ListaTarefas from "../model/ListaTarefas"
import Tarefa from "../model/Tarefa"
import TipoFiltro from "../model/TipoFiltro"

const tarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, "Estudar next"),
    Tarefa.criarAtiva(2, "Estudar japones"),
    Tarefa.criarConcluida(3, "Caminhar")
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)
