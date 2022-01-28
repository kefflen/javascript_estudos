public class Carro {
    int ano;
    float velocidade;
    boolean motor;
    String modelo;
    public Carro() {

    }
    public Carro(int ano, String modelo, float velocidade, boolean motor) {
        this.ano = ano;
        this.modelo = modelo;
        this.velocidade = velocidade;
        this.motor = motor;
    }

    public void show() {
        System.out.println("Carro:" +
            " ano=" + this.ano +
            " modelo=" + this.modelo +
            " velocidade=" + this.velocidade +
            " motor="+ this.motor
        );
    }

    public void desligar() {
        this.velocidade = 0;
        this.motor = false;
    }

    public void acelerar(float velocidade) {
        if (!this.motor) {
            this.motor = true;
        }
        this.velocidade += velocidade;
    }
}
