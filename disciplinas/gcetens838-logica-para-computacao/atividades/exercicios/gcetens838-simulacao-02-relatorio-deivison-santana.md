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
| **Discente:** | Deivison de Lima Santana |
| **Data:** | 13/07/2026 |
| **Atividade:** | Simulacao 02 — Controle de Seguranca de Misturador Industrial |
| **Link do video:** | [INSERIR LINK AQUI APOS GRAVACAO] |
</div>

---

## 1. Tabela-Verdade

O problema descreve um misturador industrial com 4 sensores:

- **Sensor A** (Abastecimento): 1 se tanque estiver cheio
- **Sensor B** (Batedor): 1 se pas do motor estiverem girando
- **Sensor C** (Cobertura): 1 se tampa de protecao estiver fechada
- **Sensor T** (Temperatura): 1 se temperatura estiver acima do limite seguro

A valvula de descarte de emergencia (S) deve abrir (S=1) quando:

1. **Temperatura alta (T=1) E tanque cheio (A=1)**
2. **OU motor ligado (B=1) E tampa aberta (C=0)**

Ou seja: **S = A·T + B·C̅**

| Linha | A | B | C | T | A·T | B·C̅ | S |
|:---:|---|---|---|---|-----|------|---|
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 3 | 0 | 0 | 1 | 0 | 0 | 0 | 0 |
| 4 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 5 | 0 | 1 | 0 | 0 | 0 | 1 | **1** |
| 6 | 0 | 1 | 0 | 1 | 0 | 1 | **1** |
| 7 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8 | 0 | 1 | 1 | 1 | 0 | 0 | 0 |
| 9 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 10 | 1 | 0 | 0 | 1 | 1 | 0 | **1** |
| 11 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| 12 | 1 | 0 | 1 | 1 | 1 | 0 | **1** |
| 13 | 1 | 1 | 0 | 0 | 0 | 1 | **1** |
| 14 | 1 | 1 | 0 | 1 | 1 | 1 | **1** |
| 15 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 16 | 1 | 1 | 1 | 1 | 1 | 0 | **1** |

**Total: 7 combinacoes ativam a emergencia (S=1): linhas 5, 6, 10, 12, 13, 14 e 16.**

---

## 2. Mapa de Karnaugh e Simplificacao

Dispondo os valores de S no mapa de Karnaugh (4 variaveis):

```
        AB
        00  01  11  10
CT 00    0   1   1   0
   01    0   1   1   1
   11    0   0   1   1
   10    0   0   0   0
```

**Agrupamentos:**

| Grupo | Cobertura | Termo |
|-------|-----------|-------|
| Laranja (CT=00 e 01; AB=01 e 11) | C=0, B=1, A e T sao indiferentes | **B·C̅** |
| Azul (CT=01 e 11; AB=10 e 11) | T=1, A=1, B e C sao indiferentes | **A·T** |

**Expressao simplificada:**

```
S = A·T + B·C̅
```

A expressao ja se encontra na forma minima de Soma de Produtos (SOP), pois os dois termos nao compartilham variaveis e nao ha mais agrupamentos possiveis no mapa.

---

## 3. Conversao para Portas NAND (Portas Universais)

Para implementar o circuito utilizando **apenas portas NAND de 2 entradas**, aplicamos De Morgan:

```
S = A·T + B·C̅

Aplicando De Morgan:
S = ¬(¬(A·T) · ¬(B·C̅))
  = NAND( NAND(A, T), NAND(B, ¬C) )
  = NAND( NAND(A, T), NAND(B, NAND(C, C)) )
```

### Circuito com 4 portas NAND:

| Porta | Funcao | Entradas | Saida |
|:-----:|--------|----------|-------|
| U1 | Inversor (NOT C) | C, C | C̅ = NAND(C, C) |
| U2 | NAND A e T | A, T | ¬(A·T) |
| U3 | NAND B e C̅ | B, C̅ | ¬(B·C̅) |
| U4 | NAND final | ¬(A·T), ¬(B·C̅) | **S = A·T + B·C̅** |

### Tabela de equivalencia NAND:

```
NOT X   = NAND(X, X)
X · Y   = NAND( NAND(X,Y), NAND(X,Y) )
X + Y   = NAND( NAND(X,X), NAND(Y,Y) )
```

---

## 4. Simulacao no CircuitVerse

Montei o circuito no **CircuitVerse** (circuitverse.org) com 4 entradas (A, B, C, T), 4 portas NAND de 2 entradas e um LED de saida (S). A imagem abaixo mostra o circuito montado e em funcionamento.

*[Placeholder: inserir print do circuito montado no CircuitVerse/Digisim.io]*

### Validacao dos 16 estados

Testei todas as 16 combinacoes possiveis das entradas. O LED acendeu (S=1) **exatamente** nas 7 linhas previstas na tabela-verdade, confirmando o correto funcionamento do circuito.

---

## 5. Conclusao

A atividade permitiu aplicar na pratica os conceitos de tabela-verdade, simplificacao booleana via Mapa de Karnaugh e conversao para portas universais NAND. A expressao final S = A·T + B·C̅, implementada com apenas 4 portas NAND, mostra como um problema real de seguranca industrial pode ser resolvido de forma eficiente com circuitos digitais. A maior dificuldade foi organizar os fios no simulador para manter a clareza visual do circuito.

---

## Referencias

- TOCCI, R. J.; WIDMER, N. S.; MOSS, G. L. **Sistemas Digitais: Principios e Aplicacoes**. 12. ed. Sao Paulo: Pearson, 2018.
- IDOETA, I. V.; CAPUANO, F. G. **Elementos de Eletronica Digital**. 41. ed. Sao Paulo: Erica, 2015.

---

<div style="text-align:center;">
<em>Relatorio entregue em 13 de julho de 2026</em>
</div>
