UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
Superintendência de Educação Aberta e a Distância — SEAD
Bacharelado em Sistemas de Informação (EaD)

Componente curricular: **Algoritmos e Programação I**
Semana 07: 11/05 a 16/05/2026 — Função

---

**Discente:** Deivison de Lima Santana
**Docente:** Luis Paulo Morais Conceição
**Semestre:** 2026.1
**Data de entrega:** 31/05/2026
**Valor:** 100% da Nota

---

### Questão 1
**Crie uma função que apenas exiba a mensagem: "Olá, mundo!".**

```c
#include <stdio.h>

void olaMundo() {
    printf("Ola, mundo!\n");
}

int main() {
    olaMundo();
    return 0;
}
```

**Exemplo de execução:**
```
Ola, mundo!
```

---

### Questão 2
**Descreva uma função que receba dois números e retorne a soma deles.**

```c
#include <stdio.h>

float somar(float a, float b) {
    return a + b;
}

int main() {
    float x, y;

    printf("Digite dois numeros: ");
    scanf("%f %f", &x, &y);

    printf("Soma: %.2f\n", somar(x, y));

    return 0;
}
```

**Exemplo de execução:**
```
Digite dois numeros: 7.5 3.2
Soma: 10.70
```

---

### Questão 3
**Crie uma função que receba um número e retorne se ele é par ou ímpar.**

```c
#include <stdio.h>

int ehPar(int num) {
    return num % 2 == 0;
}

int main() {
    int num;

    printf("Digite um numero: ");
    scanf("%d", &num);

    if (ehPar(num)) {
        printf("O numero %d e par.\n", num);
    } else {
        printf("O numero %d e impar.\n", num);
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero: 7
O numero 7 e impar.
```

---

### Questão 4
**Elabore uma função que calcule o dobro de um número informado.**

```c
#include <stdio.h>

float dobro(float num) {
    return num * 2;
}

int main() {
    float num;

    printf("Digite um numero: ");
    scanf("%f", &num);

    printf("O dobro de %.2f e %.2f\n", num, dobro(num));

    return 0;
}
```

**Exemplo de execução:**
```
Digite um numero: 5.5
O dobro de 5.50 e 11.00
```

---

### Questão 5
**Crie uma função que receba três notas e retorne a média aritmética.**

```c
#include <stdio.h>

float calcularMedia(float n1, float n2, float n3) {
    return (n1 + n2 + n3) / 3;
}

int main() {
    float nota1, nota2, nota3;

    printf("Digite as tres notas:\n");
    printf("Nota 1: ");
    scanf("%f", &nota1);
    printf("Nota 2: ");
    scanf("%f", &nota2);
    printf("Nota 3: ");
    scanf("%f", &nota3);

    printf("Media aritmetica: %.2f\n", calcularMedia(nota1, nota2, nota3));

    return 0;
}
```

**Exemplo de execução:**
```
Digite as tres notas:
Nota 1: 7.5
Nota 2: 8.0
Nota 3: 6.5
Media aritmetica: 7.33
```

---

### Questão 6
**Desenvolva uma função que receba o comprimento e a largura de um retângulo e retorne sua área.**

```c
#include <stdio.h>

float areaRetangulo(float comprimento, float largura) {
    return comprimento * largura;
}

int main() {
    float comp, larg;

    printf("Digite o comprimento do retangulo: ");
    scanf("%f", &comp);
    printf("Digite a largura do retangulo: ");
    scanf("%f", &larg);

    printf("Area do retangulo: %.2f\n", areaRetangulo(comp, larg));

    return 0;
}
```

**Exemplo de execução:**
```
Digite o comprimento do retangulo: 5.0
Digite a largura do retangulo: 3.0
Area do retangulo: 15.00
```

---

### Questão 7
**Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade ou não.**

```c
#include <stdio.h>

int ehMaiorDeIdade(int idade) {
    return idade >= 18;
}

int main() {
    int idade;

    printf("Digite a idade: ");
    scanf("%d", &idade);

    if (ehMaiorDeIdade(idade)) {
        printf("A pessoa e maior de idade.\n");
    } else {
        printf("A pessoa e menor de idade.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite a idade: 20
A pessoa e maior de idade.
```
