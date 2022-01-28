package Lista1;

public class Rio {
    String nome;
    float nivel;
    boolean poluido;

    Rio() {}
    Rio(String nome, float nivel, boolean poluido) {
        this.nome = nome;
        this.nivel = nivel;
        this.poluido = poluido;
    }

    public void chover(float value) {
        this.nivel += value;
    }
    public void ensolarar(float value) {
        float novoNivel = nivel - value;
        if (novoNivel < 0) {
            this.nivel = 0;
        } else {
            this.nivel = novoNivel;
        }
    }
    public void limpar() {
        this.poluido = false;
    }
    public void sujar() {
        this.poluido = true;
    }
    public void mostrar() {
        System.out.printf("Rio(nome='%s', nivel=%.3f, poluido=%b)\n", this.nome, this.nivel, this.poluido);
    }
}
