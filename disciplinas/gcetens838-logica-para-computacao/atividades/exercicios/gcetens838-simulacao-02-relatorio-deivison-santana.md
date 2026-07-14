UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA — UFRB
CENTRO DE CIÊNCIA E TECNOLOGIA — CETENS
BACHARELADO EM SISTEMAS DE INFORMAÇÃO (EAD)

---

DISCIPLINA: GCETENS838 — Lógica para Computação
DOCENTE: Nilmar de Souza
DISCENTE: Deivison de Lima Santana
DATA: 13/07/2026
ATIVIDADE: Simulação 02 — Controle de Segurança de Misturador Industrial

---

**LINK DO VÍDEO: [INSERIR LINK AQUI APÓS GRAVAÇÃO]**

---

## 1. Tabela-Verdade

O sistema tem 4 sensores:
- A (Abastecimento): tanque cheio = 1
- B (Batedor): motor girando = 1
- C (Cobertura): tampa fechada = 1
- T (Temperatura): temperatura acima do limite = 1

A válvula de emergência (S) abre quando:
- (T=1 E A=1) -> temperatura alta e tanque cheio
- OU (B=1 E C=0) -> motor ligado e tampa aberta

Expressão: S = A·T + B·¬C

| A | B | C | T | S |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 |

S=1 nas linhas: 5, 6, 10, 12, 13, 14, 16 (7 combinações ativam o alarme).

## 2. Expressão Lógica (Soma de Produtos)

Pegando as linhas onde S=1 (mintermos):

S = (¬A·B·¬C·¬T) + (¬A·B·¬C·T) + (A·¬B·¬C·T) + (A·¬B·C·T) + (A·B·¬C·¬T) + (A·B·¬C·T) + (A·B·C·T)

## 3. Simplificação pelo Mapa de Karnaugh

Mapa de Karnaugh (variaveis AB nas colunas, CT nas linhas):

```
         AB
         00   01   11   10
CT  00    0    1    1    0
    01    0    1    1    1
    11    0    0    1    1
    10    0    0    0    0
```

Agrupamento 1 (linhas CT=00 e 01, colunas AB=01 e 11):
- B=1, C=0, A e T tanto faz
- Resultado: B·¬C

Agrupamento 2 (linhas CT=01 e 11, colunas AB=10 e 11):
- A=1, T=1, B e C tanto faz
- Resultado: A·T

**Expressão final simplificada: S = A·T + B·¬C**

Não há mais simplificações possíveis porque os dois termos não compartilham variáveis e o mapa não tem mais agrupamentos.

## 4. Conversão para portas NAND (opcional, usando apenas NAND)

Aplicando De Morgan:

S = A·T + B·¬C
S = ¬(¬(A·T) · ¬(B·¬C))
S = NAND( NAND(A,T), NAND(B, NAND(C,C)) )

Circuito com 4 portas NAND de 2 entradas:

1. U1: NAND(C, C) -> ¬C
2. U2: NAND(A, T) -> ¬(A·T)
3. U3: NAND(B, ¬C) -> ¬(B·¬C)
4. U4: NAND(¬(A·T), ¬(B·¬C)) -> S = A·T + B·¬C

## 5. Simulação

[ESPAÇO PARA INSERIR OS 16 PRINTS DO SIMULADOR]
(prints numerados de 1 a 16, um para cada combinação A,B,C,T)

## 6. Conclusão

A atividade aplicou os conceitos de tabela-verdade, simplificação booleana e simulação de circuitos lógicos. A maior dificuldade foi organizar o circuito no simulador para manter a clareza visual. O uso do Mapa de Karnaugh facilitou a simplificação da expressão.

---

*Relatório entregue em 13 de julho de 2026*
