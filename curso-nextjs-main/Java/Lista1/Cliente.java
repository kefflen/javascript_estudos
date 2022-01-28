package Lista1;

public class Cliente {
    int numeroConta;
    int numeroAgencia;
    String nome;
    float saldo;

    Cliente() {}
    Cliente(int numeroConta, int numeroAgencia, String nome, float saldo) {
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;
        this.saldo = saldo;
    }
    public void realizarDeposito(float value) {
        this.saldo += value;
    }
    public void realizarSaque(float value) {
        this.saldo -= value;
    }

    public String dadosCliente() {
        return String.format("Numero conta=%d |Nome=%s |Saldo=%.2f", this.numeroConta, this.nome, this.saldo);
    }
}
