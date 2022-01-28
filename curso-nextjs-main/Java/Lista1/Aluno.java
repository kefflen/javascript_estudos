package Lista1;

public class Aluno {
    int numeroAluno;
    String nome;
    int idade;
    float p1;
    float p2;
    Aluno() { }
    Aluno(String nome, int idade, int numeroAluno, float p1, float p2) {
        this.nome = nome;
        this.idade = idade;
        this.numeroAluno = numeroAluno;
        this.p1 = p1;
        this.p2 = p2;
    }
    public float NotaFinal() {
        return (this.p1 + this.p2) / 2;
    }

    public String dadosAluno() {
        return String.format("Numero do aluno=%d |Nome=%s |Idade=%d", this.numeroAluno, this.nome, this.idade);
    }

    public String passou() {
        return (this.NotaFinal() >= 6)? "Passou": "Reprovado";
    }


}   
