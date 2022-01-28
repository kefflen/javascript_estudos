package Lista1;

public class TestaRio {
    public static void main(String[] args) {
        Rio rio1 = new Rio("Aguas claras", 20, false);
        Rio rio2 = new Rio();
        
        rio2.nome = "São fracisco";
        rio2.nivel = 15;
        rio2.poluido = true;
        
        rio1.ensolarar(10);
        rio1.sujar();
        rio2.chover(10);
        rio1.limpar();
        rio1.mostrar();
        rio2.mostrar();
    }
}
