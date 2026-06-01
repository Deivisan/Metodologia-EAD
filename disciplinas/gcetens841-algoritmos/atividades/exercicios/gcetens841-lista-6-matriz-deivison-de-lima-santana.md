UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
Superintendência de Educação Aberta e a Distância — SEAD
Bacharelado em Sistemas de Informação (EaD)

Componente curricular: **Algoritmos e Programação I**
Semana 06: 04/05 a 09/05/2026 — Matrizes

---

**Discente:** Deivison de Lima Santana
**Docente:** Luis Paulo Morais Conceição
**Semestre:** 2026.1
**Data de entrega:** 31/05/2026
**Valor:** 100% da Nota

---

### Questão 1
**Leia uma matriz 5x3, com os valores da matriz digitada pelo usuário, e a imprima.**

```c
#include <stdio.h>

int main() {
    int mat[5][3], i, j;

    printf("Digite os valores da matriz 5x3:\n");
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 3; j++) {
            printf("mat[%d][%d]: ", i, j);
            scanf("%d", &mat[i][j]);
        }
    }

    printf("\nMatriz digitada:\n");
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 3; j++) {
            printf("%3d ", mat[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite os valores da matriz 5x3:
mat[0][0]: 1
mat[0][1]: 2
mat[0][2]: 3
...

Matriz digitada:
  1   2   3
  4   5   6
  7   8   9
 10  11  12
 13  14  15
```

---

### Questão 2
**Escreva um programa em C que leia valores inteiros digitados pelo usuário e os armazene em uma matriz 3x3. Depois, conte e escreva na tela quantos dos valores armazenados na matriz são maiores que 10.**

```c
#include <stdio.h>

int main() {
    int mat[3][3], i, j, cont = 0;

    printf("Digite os valores da matriz 3x3:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("mat[%d][%d]: ", i, j);
            scanf("%d", &mat[i][j]);
        }
    }

    printf("\nMatriz:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%3d ", mat[i][j]);
            if (mat[i][j] > 10) {
                cont++;
            }
        }
        printf("\n");
    }

    printf("\nQuantidade de valores maiores que 10: %d\n", cont);

    return 0;
}
```

**Exemplo de execução:**
```
Digite os valores da matriz 3x3:
mat[0][0]: 5
mat[0][1]: 12
mat[0][2]: 3
mat[1][0]: 20
mat[1][1]: 7
mat[1][2]: 15
mat[2][0]: 8
mat[2][1]: 11
mat[2][2]: 2

Matriz:
  5  12   3
 20   7  15
  8  11   2

Quantidade de valores maiores que 10: 4
```

---

### Questão 3
**Crie um algoritmo que receba uma matriz 3x3, com os valores da matriz informados pelo usuário, e depois solicite ao usuário que escolha (digite) uma linha da matriz. Posteriormente, imprima a linha da matriz indicada pelo usuário.**

```c
#include <stdio.h>

int main() {
    int mat[3][3], i, j, linha;

    printf("Digite os valores da matriz 3x3:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("mat[%d][%d]: ", i, j);
            scanf("%d", &mat[i][j]);
        }
    }

    printf("\nMatriz completa:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("%3d ", mat[i][j]);
        }
        printf("\n");
    }

    printf("\nDigite o numero da linha que deseja visualizar (0 a 2): ");
    scanf("%d", &linha);

    if (linha >= 0 && linha <= 2) {
        printf("Linha %d: ", linha);
        for (j = 0; j < 3; j++) {
            printf("%d ", mat[linha][j]);
        }
        printf("\n");
    } else {
        printf("Linha invalida.\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Digite os valores da matriz 3x3:
mat[0][0]: 1
mat[0][1]: 2
mat[0][2]: 3
mat[1][0]: 4
mat[1][1]: 5
mat[1][2]: 6
mat[2][0]: 7
mat[2][1]: 8
mat[2][2]: 9

Matriz completa:
  1   2   3
  4   5   6
  7   8   9

Digite o numero da linha que deseja visualizar (0 a 2): 1
Linha 1: 4 5 6
```

---

### Questão 4
**Elabore um programa que leia dez conjuntos de dois valores, o primeiro representando o número do estudante e o segundo representando a sua altura em metros. Encontre o aluno mais baixo e o mais alto. Mostre o número do aluno mais baixo e do mais alto, juntamente com suas alturas.**

```c
#include <stdio.h>

int main() {
    int num, i;
    float altura;
    int numMaisBaixo, numMaisAlto;
    float alturaMaisBaixo, alturaMaisAlto;

    for (i = 1; i <= 10; i++) {
        printf("Aluno %d:\n", i);
        printf("  Numero do estudante: ");
        scanf("%d", &num);
        printf("  Altura (m): ");
        scanf("%f", &altura);

        if (i == 1) {
            numMaisBaixo = num;
            numMaisAlto = num;
            alturaMaisBaixo = altura;
            alturaMaisAlto = altura;
        } else {
            if (altura < alturaMaisBaixo) {
                alturaMaisBaixo = altura;
                numMaisBaixo = num;
            }
            if (altura > alturaMaisAlto) {
                alturaMaisAlto = altura;
                numMaisAlto = num;
            }
        }
    }

    printf("\n========== RESULTADOS ==========\n");
    printf("Aluno mais baixo: numero %d, altura %.2f m\n", numMaisBaixo, alturaMaisBaixo);
    printf("Aluno mais alto: numero %d, altura %.2f m\n", numMaisAlto, alturaMaisAlto);

    return 0;
}
```

**Exemplo de execução:**
```
Aluno 1:
  Numero do estudante: 101
  Altura (m): 1.75
Aluno 2:
  Numero do estudante: 102
  Altura (m): 1.82
...
Aluno 10:
  Numero do estudante: 110
  Altura (m): 1.68

========== RESULTADOS ==========
Aluno mais baixo: numero 105, altura 1.55 m
Aluno mais alto: numero 102, altura 1.82 m
```

---

### Questão 5
**Escreva um algoritmo que receba os dados de uma matriz A = 3x2 e uma matriz B = 3x2, realize a soma dos elementos gerando a matriz C, ao final imprima a matriz A, matriz B e a matriz com o resultado da soma matriz C.**

```c
#include <stdio.h>

int main() {
    int A[3][2], B[3][2], C[3][2], i, j;

    printf("Digite os valores da matriz A (3x2):\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            printf("A[%d][%d]: ", i, j);
            scanf("%d", &A[i][j]);
        }
    }

    printf("\nDigite os valores da matriz B (3x2):\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            printf("B[%d][%d]: ", i, j);
            scanf("%d", &B[i][j]);
        }
    }

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    printf("\nMatriz A:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            printf("%3d ", A[i][j]);
        }
        printf("\n");
    }

    printf("\nMatriz B:\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            printf("%3d ", B[i][j]);
        }
        printf("\n");
    }

    printf("\nMatriz C (A + B):\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            printf("%3d ", C[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

**Exemplo de execução:**
```
Matriz A:
  1   2
  3   4
  5   6

Matriz B:
  6   5
  4   3
  2   1

Matriz C (A + B):
  7   7
  7   7
  7   7
```

---

### Questão 6
**Escreva um programa em C que leia valores inteiros digitados pelo usuário e os armazene em uma matriz 5x5. Depois, imprima na tela a localização (linha e a coluna) do maior valor da matriz.**

```c
#include <stdio.h>

int main() {
    int mat[5][5], i, j;
    int maior, linhaMaior, colunaMaior;

    printf("Digite os valores da matriz 5x5:\n");
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            printf("mat[%d][%d]: ", i, j);
            scanf("%d", &mat[i][j]);
        }
    }

    maior = mat[0][0];
    linhaMaior = 0;
    colunaMaior = 0;

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (mat[i][j] > maior) {
                maior = mat[i][j];
                linhaMaior = i;
                colunaMaior = j;
            }
        }
    }

    printf("\nMatriz:\n");
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            printf("%3d ", mat[i][j]);
        }
        printf("\n");
    }

    printf("\nMaior valor: %d\n", maior);
    printf("Localizacao: linha %d, coluna %d\n", linhaMaior, colunaMaior);

    return 0;
}
```

**Exemplo de execução:**
```
Digite os valores da matriz 5x5:
mat[0][0]: 3
mat[0][1]: 8
...

Matriz:
  3   8   1   6   2
  5   4   9   0   7
  2   1   3   5   4
  7   6   8   2   9
  0   5   3   1   4

Maior valor: 9
Localizacao: linha 1, coluna 2
```

---

### Questão 7
**Considerando a matriz abaixo, escreva um programa que calcule e exiba a soma dos elementos de cada linha da matriz.**

```
2, 5, 7, 3, 2
3, 5, 6, 2, 6
1, 8, 9, 3, 5
3, 5, 6, 2, 1
4, 9, 9, 0, 4
```

```c
#include <stdio.h>

int main() {
    int mat[5][5] = {
        {2, 5, 7, 3, 2},
        {3, 5, 6, 2, 6},
        {1, 8, 9, 3, 5},
        {3, 5, 6, 2, 1},
        {4, 9, 9, 0, 4}
    };

    int i, j, soma;

    for (i = 0; i < 5; i++) {
        soma = 0;
        for (j = 0; j < 5; j++) {
            soma += mat[i][j];
        }
        printf("Soma da Linha %d: %d\n", i + 1, soma);
    }

    return 0;
}
```

**Exemplo de execução:**
```
Soma da Linha 1: 19
Soma da Linha 2: 22
Soma da Linha 3: 26
Soma da Linha 4: 17
Soma da Linha 5: 26
```
