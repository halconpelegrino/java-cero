package conversor.java;

import java.util.Scanner;

public class Conversor {
  public static void main(String[] args) {
    Scanner entrada = new Scanner((System.in));

    System.out.println("----------------------------");
    System.out.println(" RATAAUDAZ -CONVERSOR JAVA  ");
    System.out.println("----------------------------");
    System.out.println("1. Celsius a Fahrenheit");
    System.out.println("2. Fahrenheit a Celsius");
    System.out.println("3. Salir");
    System.out.println("Elija una opción: ");

    int opcion = entrada.nextInt();

    if (opcion == 1) {
      System.out.println("Ingrese grados Celsius: ");
      double celsius = entrada.nextDouble();
      double resultado = (celsius * 9 / 5) + 32;
      System.out.printf("%.2f °C equivalen a %.2f °F\n", celsius, resultado);
    } else if (opcion == 2) {
      System.out.println("Ingrese grados Fahrenheit: ");
      double fahr = entrada.nextDouble();
      double resultado = (fahr - 32) * 5 / 9;
      System.out.printf("%.2f °F equivalen a %.2f °C\n", fahr,resultado);

    } else if (opcion == 3) {
      System.out.println("Cerrando sistema... ¡ Hasta pronto!");
    } else {
      System.out.println("opcion no válida.");
    }


    entrada.close();
  }
}
