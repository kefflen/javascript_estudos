package Lista1;

public class TestaAluno {
    public static void main(String[] args) {
        Aluno aluno = new Aluno("Roberto", 20, 1, 8, 6);
        Aluno aluno2 = new Aluno("Leandro", 21, 2, 3, 6);
        System.out.println(aluno.NotaFinal());
        System.out.println(aluno.dadosAluno());
        System.out.println(aluno.passou());
        System.out.println(aluno2.passou());
    }
}
