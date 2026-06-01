UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
Superintendência de Educação Aberta e a Distância — SEAD
Bacharelado em Sistemas de Informação (EaD)

Componente curricular: **Algoritmos e Programação I**
Semana 02: 06/04 a 11/04/2026 — Estrutura de Seleção IF/ELSE

---

**Discente:** Deivison de Lima Santana
**Docente:** Luis Paulo Morais Conceição
**Semestre:** 2026.1
**Data de entrega:** 31/05/2026
**Valor:** 100% da Nota

---

### Questão 1
**Escreva um algoritmo que solicite ao usuário sua idade e informe se o mesmo já pode tirar carteira de motorista (18 anos).**

```c
#include <stdio.h>

int main() {
    int idade;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    if (idade >= 18) {
        printf("Voce ja pode tirar carteira de motorista.\n");
    } else {
        printf("Voce ainda nao pode tirar carteira de motorista.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite sua idade: 20
Voce ja pode tirar carteira de motorista.
```

---

### Questão 2
**Faça um algoritmo para ler a temperatura do corpo medida com um termômetro. Caso a temperatura seja maior que 37 graus o paciente está com febre, caso contrário, sua temperatura está normal.**

```c
#include <stdio.h>

int main() {
    float temperatura;

    printf("Digite a temperatura do corpo (C): ");
    scanf("%f", &temperatura);

    if (temperatura > 37) {
        printf("O paciente esta com febre.\n");
    } else {
        printf("A temperatura esta normal.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite a temperatura do corpo (C): 38.5
O paciente esta com febre.
```

---

### Questão 3
**Faça um algoritmo que leia um número, informado pelo usuário, e imprima se ele é positivo, negativo ou nulo.**

```c
#include <stdio.h>

int main() {
    int num;

    printf("Digite um numero: ");
    scanf("%d", &num);

    if (num > 0) {
        printf("O numero e positivo.\n");
    } else if (num < 0) {
        printf("O numero e negativo.\n");
    } else {
        printf("O numero e nulo.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero: -5
O numero e negativo.
```

---

### Questão 4
**Faça um algoritmo que leia um valor digitado pelo usuário e informe se o número digitado é par ou ímpar.**

```c
#include <stdio.h>

int main() {
    int num;

    printf("Digite um numero: ");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("O numero e par.\n");
    } else {
        printf("O numero e impar.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero: 7
O numero e impar.
```

---

### Questão 5
**Construa um algoritmo que indique se o número digitado pelo usuário está entre 20 e 50.**

```c
#include <stdio.h>

int main() {
    int num;

    printf("Digite um numero: ");
    scanf("%d", &num);

    if (num >= 20 && num <= 50) {
        printf("O numero esta entre 20 e 50.\n");
    } else {
        printf("O numero nao esta entre 20 e 50.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero: 35
O numero esta entre 20 e 50.
```

---

### Questão 6
**Elabore um algoritmo que, dada a idade de um nadador, classifique-o em uma das seguintes categorias:**

| Categoria   | Idade |
|-------------|-------|
| Infantil A  | 5 a 7 anos |
| Infantil B  | 8 a 10 anos |
| Juvenil A   | 11 a 13 anos |
| Juvenil B   | 14 a 17 anos |
| Sênior      | maiores de 18 anos |

```c
#include <stdio.h>

int main() {
    int idade;

    printf("Digite a idade do nadador: ");
    scanf("%d", &idade);

    if (idade >= 5 && idade <= 7) {
        printf("Categoria: Infantil A\n");
    } else if (idade >= 8 && idade <= 10) {
        printf("Categoria: Infantil B\n");
    } else if (idade >= 11 && idade <= 13) {
        printf("Categoria: Juvenil A\n");
    } else if (idade >= 14 && idade <= 17) {
        printf("Categoria: Juvenil B\n");
    } else if (idade >= 18) {
        printf("Categoria: Senior\n");
    } else {
        printf("Idade fora das categorias (minimo 5 anos).\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite a idade do nadador: 12
Categoria: Juvenil A
```

---

### Questão 7
**Faça um algoritmo que o usuário digite o nome, nota da prova 1 e nota da prova 2, de um aluno. Imprima ao final: "O aluno Nome está: Aprovado", "Reprovado" ou "em Prova Final".**

*Critérios: média >= 7 (Aprovado), média < 3 (Reprovado), demais casos (Prova Final).*

```c
#include <stdio.h>

int main() {
    char nome[100];
    float nota1, nota2, media;

    printf("Digite o nome do aluno: ");
    scanf(" %[^\n]", nome);

    printf("Digite a nota da prova 1: ");
    scanf("%f", &nota1);

    printf("Digite a nota da prova 2: ");
    scanf("%f", &nota2);

    media = (nota1 + nota2) / 2;

    printf("O aluno %s esta: ", nome);
    if (media >= 7) {
        printf("Aprovado\n");
    } else if (media < 3) {
        printf("Reprovado\n");
    } else {
        printf("em Prova Final\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite o nome do aluno: Joao Silva
Digite a nota da prova 1: 6
Digite a nota da prova 2: 5
O aluno Joao Silva esta: em Prova Final
```

---

### Questão 8
**Construa um programa para determinar se o indivíduo está com um peso favorável através do IMC (Índice de Massa Corpórea).**

Fórmula: `IMC = peso / (altura * altura)`

| Condição            | Situação         |
|---------------------|------------------|
| IMC abaixo de 20    | Abaixo do peso   |
| IMC de 20 até 25    | Peso normal      |
| IMC de 26 até 30    | Sobrepeso        |
| IMC de 31 até 40    | Obeso            |
| IMC de 41 acima     | Obeso mórbido    |

```c
#include <stdio.h>

int main() {
    float peso, altura, imc;

    printf("Digite o peso (kg): ");
    scanf("%f", &peso);

    printf("Digite a altura (m): ");
    scanf("%f", &altura);

    imc = peso / (altura * altura);

    printf("IMC = %.2f — ", imc);

    if (imc < 20) {
        printf("Abaixo do peso\n");
    } else if (imc <= 25) {
        printf("Peso normal\n");
    } else if (imc <= 30) {
        printf("Sobrepeso\n");
    } else if (imc <= 40) {
        printf("Obeso\n");
    } else {
        printf("Obeso morbido\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite o peso (kg): 85
Digite a altura (m): 1.75
IMC = 27.76 — Sobrepeso
```

---

### Questão 9
**Escreva um programa para ler 2 valores e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação). Calcular e escrever o resultado.**

*Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4.*

```c
#include <stdio.h>

int main() {
    float v1, v2, resultado;
    int op;

    printf("Digite o primeiro valor: ");
    scanf("%f", &v1);

    printf("Digite o segundo valor: ");
    scanf("%f", &v2);

    printf("Operacao (1-Adicao, 2-Subtracao, 3-Divisao, 4-Multiplicacao): ");
    scanf("%d", &op);

    if (op == 1) {
        resultado = v1 + v2;
        printf("Resultado: %.2f\n", resultado);
    } else if (op == 2) {
        resultado = v1 - v2;
        printf("Resultado: %.2f\n", resultado);
    } else if (op == 3) {
        if (v2 != 0) {
            resultado = v1 / v2;
            printf("Resultado: %.2f\n", resultado);
        } else {
            printf("Erro: divisao por zero nao permitida.\n");
        }
    } else if (op == 4) {
        resultado = v1 * v2;
        printf("Resultado: %.2f\n", resultado);
    } else {
        printf("Operacao invalida. Use 1, 2, 3 ou 4.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite o primeiro valor: 10
Digite o segundo valor: 3
Operacao (1-Adicao, 2-Subtracao, 3-Divisao, 4-Multiplicacao): 3
Resultado: 3.33
```
