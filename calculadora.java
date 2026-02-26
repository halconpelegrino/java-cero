import java.util.Scanner;

public class calculadora {
  public static void main(String[] args) {
    Scanner lector = new Scanner(System.in);

    boolean continuar = true;

    System.out.println("---Mi Máquina de Calcular con Java ---");

    while (continuar) {
      // El bucle envuelve Todo
      // Limpiar pantalla
      try {
        new ProcessBuilder("clear").inheritIO().start().waitFor();
      } catch (Exception e) {
        // Si hay un error, simplemente no limpia nada
      }

      // 1. Mostramos el Menú Cada Vez
      System.out.println("\nSeleccione una operación:");
      System.out.println("1. Sumar");
      System.out.println("2. Restar");
      System.out.println("3. Multiplicar");
      System.out.println("4. Dividir");
      System.out.println("5. Salir");
      System.out.println("Opción elegida: ");
      int opcion = lector.nextInt();
      // Si el usuario elige 5, cerramos antes de pedir números
      if (opcion == 5) {
        System.out.println("¡Hasta luego, Víctor!");
        continuar = false;
        break; // Sale del switch/while

      }
      // 2. Pedimos los números Dentro del bucle para que puedan cambiar
      System.out.println("Introduce el primer número: ");
      double primerNumero1 = lector.nextDouble();
      System.out.println("Introduce el segundo número: ");
      double segundoNumero2 = lector.nextDouble();

      // 3. El Switch decide la operación
      switch (opcion) {
        case 1:
          System.out.println("La suma es: " + (primerNumero1 + segundoNumero2));
          break;
        case 2:
          System.out.println("La resta es: " + (primerNumero1 - segundoNumero2));
          break;
        case 3:
          System.out.println("La multiplicación es: " + (primerNumero1 * segundoNumero2));
          break;
        case 4:
          if (segundoNumero2 == 0) {
            System.out.println("Error: No se puede dividir entre cero La Rata no come su Queso");
          } else {
            System.out.println("La division es: " + (primerNumero1 / segundoNumero2));
          }
          break;

        default: // Es una buena práctica añadir un aviso si marca una opción no valida
          System.out.println("Opción no válida la Rata no come su queso.");
          break;
      }
      // Justo después de terminar el switch y antes de cerrar el while
      System.out.println("\nPresiona Enter para continuar...");
      lector.nextLine(); // Consumir el salto de linea
      lector.nextLine(); // Esperar a que el usuario presione enter
    }
    // Fin del while
    lector.close();// Cerramos el recurso al final de todo

  }
}
