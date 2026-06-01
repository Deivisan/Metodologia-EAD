UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA
Superintendência de Educação Aberta e a Distância – SEAD
Bacharelado em Sistemas de Informação (EaD) – Algoritmos e Programação I

LISTA 01 — CONCEITOS DE ALGORITMOS

Discente: Deivison de Lima Santana
Docente: Luis Paulo Morais Conceição
Semestre: 2026.1
31/05/2026

Questão 1
Escreva um programa que imprima na tela os padrões de asteriscos.

a) Triângulo crescente

#include <stdio.h>
int main() {
    for (int i = 1; i <= 4; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}

Saída:
*
**
***
****

b) Triângulo decrescente

#include <stdio.h>
int main() {
    for (int i = 5; i >= 1; i--) {
        for (int j = 1; j <= (2 * i - 1); j++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}

Saída:
***********
*********
*******
*****
***
*

Questão 2
Codifique um programa que, dados dois números inteiros, informados pelo usuário, efetue a soma desses números e imprima o resultado na tela, da soma destes dois números.

#include <stdio.h>
int main() {
    int num1, num2, soma;
    printf("Digite o primeiro numero inteiro: ");
    scanf("%d", &num1);
    printf("Digite o segundo numero inteiro: ");
    scanf("%d", &num2);
    soma = num1 + num2;
    printf("A soma de %d + %d = %d\n", num1, num2, soma);
    return 0;
}

Digite o primeiro numero inteiro: 10
Digite o segundo numero inteiro: 25
A soma de 10 + 25 = 35

Questão 3
Uma empresa deseja calcular o salário mensal de um funcionário com base nas horas trabalhadas. Leia o valor da hora e a quantidade de horas trabalhadas. Exiba o salário total.

#include <stdio.h>
int main() {
    float valorHora, horasTrabalhadas, salario;
    printf("Digite o valor da hora de trabalho: R$ ");
    scanf("%f", &valorHora);
    printf("Digite a quantidade de horas trabalhadas: ");
    scanf("%f", &horasTrabalhadas);
    salario = valorHora * horasTrabalhadas;
    printf("Salario total: R$ %.2f\n", salario);
    return 0;
}

Digite o valor da hora de trabalho: R$ 25.50
Digite a quantidade de horas trabalhadas: 160
Salario total: R$ 4080.00

Questão 4
Uma clínica deseja calcular o Índice de Massa Corporal de seus pacientes. Leia o peso e a altura de uma pessoa e calcule o IMC: IMC = peso / (altura * altura).

#include <stdio.h>
int main() {
    float peso, altura, imc;
    printf("Digite o peso (kg): ");
    scanf("%f", &peso);
    printf("Digite a altura (m): ");
    scanf("%f", &altura);
    imc = peso / (altura * altura);
    printf("IMC = %.2f\n", imc);
    return 0;
}

Digite o peso (kg): 70
Digite a altura (m): 1.75
IMC = 22.86

Questão 5
Um técnico quer calcular a potência de um aparelho elétrico. Leia a tensão e a corrente. Exiba a potência: P = V * I.

#include <stdio.h>
int main() {
    float tensao, corrente, potencia;
    printf("Digite a tensao (V): ");
    scanf("%f", &tensao);
    printf("Digite a corrente (A): ");
    scanf("%f", &corrente);
    potencia = tensao * corrente;
    printf("Potencia: %.2f W\n", potencia);
    return 0;
}

Digite a tensao (V): 220
Digite a corrente (A): 5
Potencia: 1100.00 W

Questão 6
Um cronômetro precisa converter minutos em segundos. Leia um valor em minutos e exiba o equivalente em segundos.

#include <stdio.h>
int main() {
    int minutos, segundos;
    printf("Digite o valor em minutos: ");
    scanf("%d", &minutos);
    segundos = minutos * 60;
    printf("%d minuto(s) equivale(m) a %d segundo(s).\n", minutos, segundos);
    return 0;
}

Digite o valor em minutos: 10
10 minuto(s) equivale(m) a 600 segundo(s).

Questão 7
Escreva um programa para ler o raio de um círculo, informado pelo usuário, calcule e imprimir a sua área. A = πR²

#include <stdio.h>
#include <math.h>
#define PI 3.14159
int main() {
    float raio, area;
    printf("Digite o raio do circulo: ");
    scanf("%f", &raio);
    area = PI * pow(raio, 2);
    printf("Area do circulo: %.2f\n", area);
    return 0;
}

Digite o raio do circulo: 5
Area do circulo: 78.54

Questão 8
Escreva um programa que leia uma temperatura em graus Centígrados e apresente a temperatura convertida em Fahrenheit. Fórmula: F = (9C + 160) / 5

#include <stdio.h>
int main() {
    float celsius, fahrenheit;
    printf("DIGITE A TEMPERATURA EM GRAUS CELSIUS: ");
    scanf("%f", &celsius);
    fahrenheit = (9 * celsius + 160) / 5;
    printf("TEMPERATURA EM FAHRENHEIT: %.0f\n", fahrenheit);
    return 0;
}

DIGITE A TEMPERATURA EM GRAUS CELSIUS: 25
TEMPERATURA EM FAHRENHEIT: 77
