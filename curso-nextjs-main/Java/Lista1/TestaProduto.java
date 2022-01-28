package Lista1;

public class TestaProduto {
    public static void main(String[] args) {
        Produto pdt = new Produto();
        pdt.id = 1;
        pdt.descricao = "Produto domestico";
        pdt.qtd = 100;
        pdt.preco = 35.5F;

        Produto pdt2 = new Produto(2, "Smartphone", 20, 1499.99F);

        pdt.comprar(15);
        pdt2.vender(19);

        pdt.subirPreco(5F);
        pdt2.decerPreco(99.99F);
        pdt.mostrar();
        pdt2.mostrar();
    }
}
