public class TestaCarro {
    public static void main(String args[]) {
        Carro obj1 = new Carro(2019, "Onix", 40, true);
        Carro obj2 = new Carro(2016, "Celta", 60, true);

        obj1.show();
        obj2.show();

        obj1.desligar();
        obj2.desligar();
        obj1.acelerar(300);

        obj1.show();
    }


}
