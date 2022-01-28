package Lista1;

public class Produto {
    int id;
    String descricao;
    int qtd;
    float preco;

    Produto() { }
    Produto(int id, String descricao, int qtd, float preco) {
        this.id = id;
        this.descricao = descricao;
        this.qtd = qtd;
        this.preco = preco;
    }

    public void comprar(int qtd) {
        this.qtd += qtd;
    }

    public void vender(int qtd) {
        int novaQtd = this.qtd - qtd;
        if (novaQtd < 0) {
            this.qtd = 0;
        } else {
            this.qtd = novaQtd;
        }
    }

    public void subirPreco(float value) {
        this.preco += value;
    }

    public void decerPreco(float value) {
        float novoPreco = preco - value;
        if (novoPreco < 0) {
            this.preco = 0;
        } else {
            this.preco = novoPreco;
        }
    }

    public void mostrar() {
        System.out.printf("Produto(id=%d, descricao='%s', qtd=%d, preco=%.2f)\n", this.id, this.descricao, this.qtd, this.preco);
    }
}
