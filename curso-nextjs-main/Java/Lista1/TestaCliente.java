package Lista1;

public class TestaCliente {
    public static void main(String[] args) {
        Cliente fulano = new Cliente(1, 1, "Fulano", 550F);
        Cliente beltrano = new Cliente(2, 3, "beltrano", 550F);

        fulano.realizarDeposito(1000);
        fulano.realizarSaque(500);
        System.out.println(fulano.dadosCliente());

        beltrano.realizarDeposito(100);
        beltrano.realizarSaque(50);
        System.out.println(beltrano.dadosCliente());
    }
}
