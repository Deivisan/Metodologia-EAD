UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
Superintendência de Educação Aberta e a Distância — SEAD
Bacharelado em Sistemas de Informação (EaD)

Componente curricular: **Algoritmos e Programação I**
Semana 04: 20/04 a 25/04/2026 — Estrutura de Repetição FOR

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
    int i;

    for (i = 0; i <= 50; i++) {
        printf("%d ", i);
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
    int i;

    for (i = 100; i >= 1; i--) {
        printf("%d ", i);
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
    int i;

    for (i = 1; i <= 20; i++) {
        printf("%d ", i * i);
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
**Faça um programa em que leia 15 números, informado pelo usuário, imprima apenas os números ímpares.**

```c
#include <stdio.h>

int main() {
    int num, i;

    printf("Digite 15 numeros:\n");
    for (i = 1; i <= 15; i++) {
        printf("Numero %d: ", i);
        scanf("%d", &num);
        if (num % 2 != 0) {
            printf("  -> %d e impar\n", num);
        }
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite 15 numeros:
Numero 1: 3
  -> 3 e impar
Numero 2: 8
Numero 3: 15
  -> 15 e impar
...
```

---

### Questão 5
**Faça um programa que leia 10 notas informadas pelo usuário. Ao final, deve ser mostrado quantas notas foram digitadas menores que 5, entre 5 e 8 e maiores que 8.**

```c
#include <stdio.h>

int main() {
    float nota;
    int i;
    int menores5 = 0, entre5e8 = 0, maiores8 = 0;

    for (i = 1; i <= 10; i++) {
        printf("Digite a nota %d: ", i);
        scanf("%f", &nota);

        if (nota < 5) {
            menores5++;
        } else if (nota <= 8) {
            entre5e8++;
        } else {
            maiores8++;
        }
    }

    printf("\n--- RESULTADO ---\n");
    printf("Notas menores que 5: %d\n", menores5);
    printf("Notas entre 5 e 8: %d\n", entre5e8);
    printf("Notas maiores que 8: %d\n", maiores8);

    return 0;
}
```

**Exemplo de execução:**
```
Digite a nota 1: 4.5
Digite a nota 2: 7.0
Digite a nota 3: 9.5
Digite a nota 4: 3.0
Digite a nota 5: 6.5
Digite a nota 6: 8.0
Digite a nota 7: 10.0
Digite a nota 8: 2.0
Digite a nota 9: 5.5
Digite a nota 10: 7.5

--- RESULTADO ---
Notas menores que 5: 3
Notas entre 5 e 8: 5
Notas maiores que 8: 2
```

---

### Questão 6
**Crie um programa que o usuário digite um número, entre 1 e 10, e seja impressa a tabuada de multiplicação do número digitado.**

```c
#include <stdio.h>

int main() {
    int num, i;

    printf("Digite um numero entre 1 e 10: ");
    scanf("%d", &num);

    if (num < 1 || num > 10) {
        printf("Numero invalido.\n");
        return 1;
    }

    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero entre 1 e 10: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

---

### Questão 7
**Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:**

- Total de homens
- Total de mulheres
- Média das idades dos homens
- Média dos pesos das mulheres

```c
#include <stdio.h>

int main() {
    int idade, i;
    float peso;
    char sexo;

    int totalHomens = 0, totalMulheres = 0;
    int somaIdadeHomens = 0;
    float somaPesoMulheres = 0;

    for (i = 1; i <= 10; i++) {
        printf("\n--- Pessoa %d ---\n", i);
        printf("Idade: ");
        scanf("%d", &idade);
        printf("Peso (kg): ");
        scanf("%f", &peso);
        printf("Sexo (M/F): ");
        scanf(" %c", &sexo);

        if (sexo == 'M' || sexo == 'm') {
            totalHomens++;
            somaIdadeHomens += idade;
        } else if (sexo == 'F' || sexo == 'f') {
            totalMulheres++;
            somaPesoMulheres += peso;
        }
    }

    printf("\n========== RESULTADOS ==========\n");
    printf("Total de homens: %d\n", totalHomens);
    printf("Total de mulheres: %d\n", totalMulheres);

    if (totalHomens > 0)
        printf("Media das idades dos homens: %.2f\n", (float)somaIdadeHomens / totalHomens);
    else
        printf("Nenhum homem cadastrado.\n");

    if (totalMulheres > 0)
        printf("Media dos pesos das mulheres: %.2f kg\n", somaPesoMulheres / totalMulheres);
    else
        printf("Nenhuma mulher cadastrada.\n");

    return 0;
}
```

**Exemplo de execução:**
```
--- Pessoa 1 ---
Idade: 25
Peso (kg): 70.5
Sexo (M/F): M

--- Pessoa 2 ---
Idade: 22
Peso (kg): 55.0
Sexo (M/F): F
...

========== RESULTADOS ==========
Total de homens: 6
Total de mulheres: 4
Media das idades dos homens: 28.33
Media dos pesos das mulheres: 62.50 kg
```
