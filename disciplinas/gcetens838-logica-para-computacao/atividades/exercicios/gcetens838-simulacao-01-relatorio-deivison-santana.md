<div class="cabecalho-atividade">
<img src="templates/logo-ufrb-20-anos.png" alt="UFRB" style="max-width: 55%;" />
<span class="inst">UNIVERSIDADE FEDERAL DO RECONCAVO DA BAHIA — UFRB</span><br/>
<span class="sub">CENTRO DE CIENCIA E TECNOLOGIA — CETENS</span><br/>
<span class="curso">BACHARELADO EM SISTEMAS DE INFORMACAO (EAD)</span>
<hr/>
</div>

# RELATORIO DE ATIVIDADE PRATICA — SIMULACAO 01

<div class="tabela-dados">
| | |
|---|---|
| **Componente:** | GCETENS838 — Logica para Computacao |
| **Docente:** | Nilmar de Souza |
| **Discente:** | Deivison de Lima Santana |
| **Data:** | 08/07/2026 |
| **Atividade:** | Simulacao 01 — Projeto de Circuitos Logicos com Portas Universais |
</div>

---

## 1. Tabela-Verdade

A partir das regras do problema, o alarme (S) ativa quando:

- Temperatura alta (T=1) E umidade baixa (H=1)
- OU janela aberta (J=1) E temperatura alta (T=1)

| T | H | J | S |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 |
| 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 |

---

## 2. Expressao Logica e Simplificacao

Pegando as linhas onde S = 1 (6, 7 e 8):

S = (T · H · J) + (T · H · J) + (T · H · J)

Simplificando:

S = T · H · J + T · H · J + T · H · J

S = T · (H · J + H · J + H · J)

S = T · [H · (J + J) + H · J]

S = T · (H + H · J)

S = T · (H + J)

**Resultado:** S = T · (H + J)

---

## 3. Conversao para Portas NAND

Para usar apenas portas NAND de 2 entradas, as equivalencias sao:

- A = A NAND A
- A · B = (A NAND B) NAND (A NAND B)
- A + B = (A NAND A) NAND (B NAND B)

Aplicando na expressao S = T · H + T · J:

S = (T NAND H) NAND (T NAND J)

O circuito usa 3 portas NAND:

| Porta | Entradas | Saida |
|---|---|---|
| NAND 1 | T, H | (T·H) = T + H |
| NAND 2 | T, J | (T·J) = T + J |
| NAND 3 | saida 1, saida 2 | T·H + T·J |

---

## 4. Simulacao no CircuitVerse

Montei o circuito no CircuitVerse com 3 entradas (T, H, J), 3 portas NAND de 2 entradas e um LED de saida (S). A imagem abaixo mostra o circuito montado no simulador com os estados ativo e inativo do alarme.

![Circuito montado no CircuitVerse — prints do autor](disciplinas/gcetens838-logica-para-computacao/atividades/exercicios/circuito-nand-print-usuario.png)

Testei as 8 combinacoes de entrada e o LED acendeu exatamente nos casos previstos na tabela-verdade, entao o circuito esta funcionando como esperado.

---

<div style="text-align:center;">
<em>Relatorio entregue em 08 de julho de 2026</em>
</div>
