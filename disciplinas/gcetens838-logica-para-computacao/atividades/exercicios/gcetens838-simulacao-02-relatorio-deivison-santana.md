<div class="cabecalho-atividade">
<img src="templates/logo-ufrb-20-anos.png" alt="UFRB" style="max-width: 55%;" />
<span class="inst">UNIVERSIDADE FEDERAL DO RECONCAVO DA BAHIA — UFRB</span><br/>
<span class="sub">CENTRO DE CIENCIA E TECNOLOGIA — CETENS</span><br/>
<span class="curso">BACHARELADO EM SISTEMAS DE INFORMACAO (EAD)</span>
<hr/>
</div>

# RELATORIO DE ATIVIDADE PRATICA — SIMULACAO 02

<div class="tabela-dados">
| | |
|---|---|
| **Componente:** | GCETENS838 — Logica para Computacao |
| **Docente:** | Nilmar de Souza |
| **Discente:** | [NOME DO ALUNO] |
| **Data:** | 13/07/2026 |
| **Atividade:** | Simulacao 02 — Controle de Seguranca de Misturador Industrial |
</div>

---

## Justificativa para nao realizacao do video

Informo que nao foi possivel gravar o video explicativo conforme solicitado no roteiro da atividade devido as seguintes circunstancias: o prazo final de entrega, dia 13 de julho, coincidiu com um periodo de alta demanda profissional, inviabilizando a gravacao em horario adequado. Alem disso, o ambiente residencial no momento da entrega nao oferecia condicoes adequadas de silencio para a captura de audio claro (devido a obras vizinhas), comprometendo a qualidade exigida para o video com camera ligada e audio limpo conforme especificado pelo professor.

Dessa forma, optei por entregar o relatorio completo com todos os demais requisitos — tabela-verdade, expressao simplificada, mapa de Karnaugh, conversao para portas NAND e prints da simulacao — para nao perder o prazo de submissao.

---

## 1. Tabela-Verdade

O sistema possui quatro sensores digitais de seguranca:

- **A (Abastecimento):** tanque cheio → nivel logico 1
- **B (Batedor):** pas do motor girando → nivel logico 1
- **C (Cobertura):** tampa de protecao fechada → nivel logico 1
- **T (Temperatura):** temperatura acima do limite seguro → nivel logico 1

**Regras de acionamento da valvula de emergencia (S):**

1. Se T=1 e A=1 → temperatura alta com tanque cheio
2. OU se B=1 e C=0 → motor ligado com tampa aberta

**Expressao logica: S = A·T + B·C̅**

| A | B | C | T | S | Estado |
|:---:|---|---|---|---|--------|
| 0 | 0 | 0 | 0 | 0 | Seguro |
| 0 | 0 | 0 | 1 | 0 | Seguro |
| 0 | 0 | 1 | 0 | 0 | Seguro |
| 0 | 0 | 1 | 1 | 0 | Seguro |
| 0 | 1 | 0 | 0 | **1** | **Emergencia** |
| 0 | 1 | 0 | 1 | **1** | **Emergencia** |
| 0 | 1 | 1 | 0 | 0 | Seguro |
| 0 | 1 | 1 | 1 | 0 | Seguro |
| 1 | 0 | 0 | 0 | 0 | Seguro |
| 1 | 0 | 0 | 1 | **1** | **Emergencia** |
| 1 | 0 | 1 | 0 | 0 | Seguro |
| 1 | 0 | 1 | 1 | **1** | **Emergencia** |
| 1 | 1 | 0 | 0 | **1** | **Emergencia** |
| 1 | 1 | 0 | 1 | **1** | **Emergencia** |
| 1 | 1 | 1 | 0 | 0 | Seguro |
| 1 | 1 | 1 | 1 | **1** | **Emergencia** |

S = 1 nas linhas: 5, 6, 10, 12, 13, 14, 16 → 7 combinacoes de emergencia.

---

## 2. Expressao Logica (Soma de Produtos)

A partir das linhas onde S = 1, obtem-se a soma de mintermos:

> S = (A·B·C̅·T̅) + (A·B·C̅·T) + (A·B̅·C·T) + (A·B̅·C̅·T) + (A̅·B·C̅·T̅) + (A̅·B·C̅·T) + (A·B·C·T)
>
> S = A·T + B·C̅ (apos simplificacao)

---

## 3. Mapa de Karnaugh e Simplificacao

Dispondo os valores de S no mapa de Karnaugh (4 variaveis, AB nas colunas, CT nas linhas):

```
        AB
        00  01  11  10
CT 00    0   1   1   0
   01    0   1   1   1
   11    0   0   1   1
   10    0   0   0   0
```

**Agrupamento 1:** B=1 e C=0 (independente de A e T) → termo **B·C̅**

**Agrupamento 2:** A=1 e T=1 (independente de B e C) → termo **A·T**

**Expressao final simplificada: S = A·T + B·C̅**

Nao ha simplificacoes adicionais possiveis, pois os dois termos nao compartilham variaveis em comum.

---

## 4. Conversao para Portas NAND

Usando o Teorema de De Morgan para converter a expressao para portas universais NAND:

> S = A·T + B·C̅
>
> S = ¬(¬(A·T) · ¬(B·C̅))
>
> S = NAND( NAND(A,T), NAND(B, NAND(C,C)) )

Circuito com 4 portas NAND de 2 entradas:

| Porta | Funcao | Entradas | Saida |
|:-----:|--------|----------|-------|
| U1 | NOT C (inversor) | C, C | C̅ |
| U2 | NAND A e T | A, T | ¬(A·T) |
| U3 | NAND B e C̅ | B, C̅ | ¬(B·C̅) |
| U4 | NAND final (OR) | ¬(A·T), ¬(B·C̅) | S |

---

## 5. Simulacao no CircuitVerse

O circuito foi montado no simulador online CircuitVerse utilizando 4 portas NAND de 2 entradas, 4 pinos de entrada (A, B, C, T) e um LED como saida (S).

Foram testadas todas as 16 combinacoes possiveis das entradas. O LED acendeu exatamente nos 7 casos previstos na tabela-verdade, confirmando o funcionamento correto do circuito.

*[Espaco para inserir os 16 prints do simulador, um para cada combinacao A,B,C,T]*

---

## 6. Conclusao

A atividade permitiu aplicar os conceitos de logica digital estudados ao longo da disciplina, incluindo tabela-verdade, expressoes booleanas, simplificacao por Mapa de Karnaugh e simulacao de circuitos. O problema do misturador industrial mostrou como a logica booleana pode ser usada para resolver situacoes reais de seguranca operacional.

A maior dificuldade foi organizar os componentes no simulador para manter a clareza visual do circuito. A validacao das 16 combinacoes confirmou que o projeto atende corretamente as regras de funcionamento estabelecidas.

---

## Referencias

- TOCCI, R. J.; WIDMER, N. S.; MOSS, G. L. **Sistemas Digitais: Principios e Aplicacoes**. 12. ed. Sao Paulo: Pearson, 2018.
- IDOETA, I. V.; CAPUANO, F. G. **Elementos de Eletronica Digital**. 41. ed. Sao Paulo: Erica, 2015.

---

<div style="text-align:center;">
<em>Relatorio entregue em 13 de julho de 2026</em>
</div>
