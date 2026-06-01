UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
Superintendência de Educação Aberta e a Distância — SEAD
Bacharelado em Sistemas de Informação (EaD)

Componente curricular: **Algoritmos e Programação I**
Semana 03: 13/04 a 18/04/2026 — Estrutura de Repetição WHILE e DO-WHILE

---

**Discente:** Deivison de Lima Santana
**Docente:** Luis Paulo Morais Conceição
**Semestre:** 2026.1
**Data de entrega:** 31/05/2026
**Valor:** 100% da Nota

---

### Questão 1
**Escreva um programa que imprima todos os números inteiros de 0 a 50.**

```c
#include <stdio.h>

int main() {
    int i = 0;

    while (i <= 50) {
        printf("%d ", i);
        i++;
    }
    printf("\n");

    return 0;
}
```

**Exemplo de execução:**
```
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ... 49 50
```

---

### Questão 2
**Escreva um programa que imprima todos os números inteiros de 100 a 1 (ordem decrescente).**

```c
#include <stdio.h>

int main() {
    int i = 100;

    while (i >= 1) {
        printf("%d ", i);
        i--;
    }
    printf("\n");

    return 0;
}
```

**Exemplo de execução:**
```
100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 ... 3 2 1
```

---

### Questão 3
**Escreva um programa que imprima o quadrado dos números inteiros, no intervalo fechado de 1 a 20.**

```c
#include <stdio.h>

int main() {
    int i = 1;

    while (i <= 20) {
        printf("%d ", i * i);
        i++;
    }
    printf("\n");

    return 0;
}
```

**Exemplo de execução:**
```
1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256 289 ... 400
```

---

### Questão 4
**Criar um programa que imprima todos os números pares de 1 até 50, inclusive, e a soma do quadrado desses números.**

```c
#include <stdio.h>

int main() {
    int i = 1, soma = 0;

    while (i <= 50) {
        if (i % 2 == 0) {
            printf("%d ", i);
            soma += i * i;
        }
        i++;
    }
    printf("\nSOMA DOS QUADRADOS DOS PARES: %d\n", soma);

    return 0;
}
```

**Exemplo de execução:**
```
2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 ... 50
SOMA DOS QUADRADOS DOS PARES: 22100
```

---

### Questão 5
**Escreva um programa que receba oito números reais do usuário, através do teclado, e imprima a metade de cada número.**

```c
#include <stdio.h>

int main() {
    float num;
    int i = 1;

    while (i <= 8) {
        printf("Digite um numero: ");
        scanf("%f", &num);
        printf("Metade: %.2f\n\n", num / 2);
        i++;
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero: 10
Metade: 5.00

Digite um numero: 7
Metade: 3.50

Digite um numero: 3
Metade: 1.50
```

---

### Questão 6
**Escreva um programa em que calcule e escreva a tabuada de multiplicação dos números de 1 a 10.**

```c
#include <stdio.h>

int main() {
    int i = 1, j;

    while (i <= 10) {
        printf("Tabuada do %d:\n", i);
        j = 1;
        while (j <= 10) {
            printf("%d x %d = %d\n", i, j, i * j);
            j++;
        }
        printf("\n");
        i++;
    }

    return 0;
}
```

**Exemplo de execução (primeiras linhas):**
```
Tabuada do 1:
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
...
```
*(imprime todas as tabuadas de 1 a 10)*

---

### Questão 7
**Crie um programa que o usuário diga qual a tabuada deseja imprimir (multiplicação, soma ou subtração), e qual valor da tabuada deseja selecionar (tabuada de 1 a 10). O programa deve imprimir a tabuada desejada.**

```c
#include <stdio.h>

int main() {
    int tipo, valor, i;

    printf("Tabuada:\n");
    printf("1 - Multiplicacao\n");
    printf("2 - Soma\n");
    printf("3 - Subtracao\n");
    printf("Escolha o tipo: ");
    scanf("%d", &tipo);

    printf("Digite o valor da tabuada (1 a 10): ");
    scanf("%d", &valor);

    i = 1;
    while (i <= 10) {
        if (tipo == 1) {
            printf("%d x %d = %d\n", valor, i, valor * i);
        } else if (tipo == 2) {
            printf("%d + %d = %d\n", valor, i, valor + i);
        } else if (tipo == 3) {
            printf("%d - %d = %d\n", valor, i, valor - i);
        } else {
            printf("Tipo invalido.\n");
            break;
        }
        i++;
    }

    return 0;
}
```

**Exemplo de execução:**
```
Tabuada:
1 - Multiplicacao
2 - Soma
3 - Subtracao
Escolha o tipo: 1
Digite o valor da tabuada (1 a 10): 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

---

### Questão 8
**Escreva um programa que receba 8 (oito) números reais do usuário, através do teclado, e que imprima a metade de cada número, numerando as entradas.**

```c
#include <stdio.h>

int main() {
    float num;
    int i = 1;

    while (i <= 8) {
        printf("%d) DIGITE UM NUMERO: ", i);
        scanf("%f", &num);
        printf("METADE DO NUMERO: %.2f\n\n", num / 2);
        i++;
    }

    return 0;
}
```

**Exemplo de execução:**
```
1) DIGITE UM NUMERO: 3
METADE DO NUMERO: 1.50

2) DIGITE UM NUMERO: 9
METADE DO NUMERO: 4.50

3) DIGITE UM NUMERO: 18
METADE DO NUMERO: 9.00

...
8) DIGITE UM NUMERO: 0.22
METADE DO NUMERO: 0.11
```

---

### Questão 9
**Escreva um programa que apresente um menu de opções para realizar operações entre dois números reais. O programa só termina quando for escolhida a opção 5 (Saída).**

```c
#include <stdio.h>

int main() {
    int op;
    float a, b;

    do {
        printf("\n========== MENU ==========\n");
        printf("1) Adicao\n");
        printf("2) Subtracao\n");
        printf("3) Multiplicacao\n");
        printf("4) Divisao\n");
        printf("5) Saida\n");
        printf("==========================\n");
        printf("Opcao escolhida: ");
        scanf("%d", &op);

        if (op >= 1 && op <= 4) {
            printf("Digite o primeiro numero: ");
            scanf("%f", &a);
            printf("Digite o segundo numero: ");
            scanf("%f", &b);
        }

        if (op == 1) {
            printf("Resultado: %.2f\n", a + b);
        } else if (op == 2) {
            printf("Resultado: %.2f\n", a - b);
        } else if (op == 3) {
            printf("Resultado: %.2f\n", a * b);
        } else if (op == 4) {
            if (b != 0)
                printf("Resultado: %.2f\n", a / b);
            else
                printf("Erro: divisao por zero.\n");
        } else if (op == 5) {
            printf("Encerrando o programa.\n");
        } else {
            printf("Opcao invalida. Tente novamente.\n");
        }
    } while (op != 5);

    return 0;
}
```

**Exemplo de execução:**
```
========== MENU ==========
1) Adicao
2) Subtracao
3) Multiplicacao
4) Divisao
5) Saida
==========================
Opcao escolhida: 1
Digite o primeiro numero: 10
Digite o segundo numero: 5
Resultado: 15.00

========== MENU ==========
...
Opcao escolhida: 5
Encerrando o programa.
```
