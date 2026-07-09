<div class="cabecalho-atividade">
<img src="templates/logo-ufrb-20-anos.png" alt="UFRB" style="max-width: 55%;" />
<span class="inst">UNIVERSIDADE FEDERAL DO RECÔNCAVO DA BAHIA — UFRB</span><br/>
<span class="sub">CENTRO DE CIÊNCIA E TECNOLOGIA — CETENS</span><br/>
<span class="curso">BACHARELADO EM SISTEMAS DE INFORMAÇÃO (EAD)</span>
<hr/>
</div>

# RELATÓRIO DE ATIVIDADE PRÁTICA — SIMULAÇÃO 01

<div class="tabela-dados">
| | |
|---|---|
| **Componente:** | GCETENS838 — Lógica para Computação |
| **Docente:** | Nilmar de Souza |
| **Discente:** | Deivison de Lima Santana |
| **Data:** | 08/07/2026 |
| **Atividade:** | Simulação 01 — Projeto de Circuitos Lógicos com Portas Universais |
</div>

---

## 1. Tabela-Verdade

Montei a tabela-verdade a partir das regras do alarme da estufa:

- O alarme ativa (S = 1) quando a temperatura está alta **E** a umidade está baixa
- **OU** quando a janela está aberta **E** a temperatura está alta

| T | H | J | S (Alarme) | Descrição |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | Tudo normal |
| 0 | 0 | 1 | 0 | Janela aberta mas temperatura normal |
| 0 | 1 | 0 | 0 | Umidade baixa mas temperatura normal |
| 0 | 1 | 1 | 0 | Os dois mas temperatura normal |
| 1 | 0 | 0 | 0 | Temperatura alta mas umidade normal e janela fechada |
| 1 | 0 | 1 | **1** | Temperatura alta + janela aberta |
| 1 | 1 | 0 | **1** | Temperatura alta + umidade baixa |
| 1 | 1 | 1 | **1** | Temperatura alta + ambas condições |

---

## 2. Expressão Lógica

Pegando as linhas onde S = 1 (6, 7 e 8):

S = (T · H · J̅) + (T · H̅ · J) + (T · H · J)

Aplicando a simplificação:

S = T · H · J̅ + T · H̅ · J + T · H · J
S = T · (H · J̅ + H̅ · J + H · J)
S = T · [H · (J̅ + J) + H̅ · J]
S = T · (H · 1 + H̅ · J)
S = T · (H + H̅ · J)
S = T · (H + J)

**Resultado final:** S = T · (H + J) ou expandindo S = T · H + T · J

---

## 3. Conversão para Portas NAND

Pra usar só portas NAND de 2 entradas, usei as equivalências:

- A̅ = A NAND A
- A · B = (A NAND B) NAND (A NAND B)
- A + B = (A NAND A) NAND (B NAND B)

Aplicando De Morgan duplo em S = T · H + T · J:

S = (T NAND H) NAND (T NAND J)

O circuito ficou com 3 portas NAND:

```
         ┌──────┐
T ───────┤      │
         │ NAND ├──①──┐
H ───────┤  ①   │     │
         └──────┘     │
                      ├───┐
         ┌──────┐     │   │
T ───────┤      │     │   │
         │ NAND ├──②──┘   ├──③ ─── S
J ───────┤  ②   │         │
         └──────┘         │
                    ┌──────┐
                    │NAND  │
                    │  ③   │
                    └──────┘
```

| Porta | Entradas | Saída |
|-------|----------|-------|
| NAND ① | T, H | (T·H)̅ = T̅ + H̅ |
| NAND ② | T, J | (T·J)̅ = T̅ + J̅ |
| NAND ③ | ①, ② | T·H + T·J |

---

## 4. Simulação no CircuitVerse

Montei o circuito no simulador online CircuitVerse usando 3 entradas nomeadas T, H e J, 3 portas NAND de 2 entradas e 1 LED de saída nomeado S (Alarme). A figura abaixo é a captura de tela do circuito montado no simulador (print do autor). Em seguida, os dois prints mostram o circuito rodando em estados distintos, conforme exigido no roteiro.

**Circuito montado no CircuitVerse (captura de tela do autor):**

![Circuito NAND montado no CircuitVerse — captura do autor](disciplinas/gcetens842-logica/atividades/exercicios/circuito-nand-print-usuario.png)

**Estado ativo (S = 1):** T = 1, H = 0, J = 1 — temperatura alta e janela aberta (alarme acende).

![Circuito NAND — Alarme ativo (S = 1)](disciplinas/gcetens842-logica/atividades/exercicios/circuito-nand-ativo.png)

**Estado inativo (S = 0):** T = 0, H = 0, J = 0 — situação normal, alarme desligado.

![Circuito NAND — Alarme inativo (S = 0)](disciplinas/gcetens842-logica/atividades/exercicios/circuito-nand-inativo.png)

### 4.1 Ligação dos componentes

| Origem | Destino |
|--------|---------|
| T | entrada 1 da NAND ① |
| H | entrada 2 da NAND ① (portanto NAND ① = T NAND H) |
| T | entrada 1 da NAND ② |
| J | entrada 2 da NAND ② (portanto NAND ② = T NAND J) |
| saída NAND ① | entrada 1 da NAND ③ |
| saída NAND ② | entrada 2 da NAND ③ |
| saída NAND ③ | LED (saída S) |

### 4.2 Verificação lógica

Com T = H = J = 1:

- NAND ① = T NAND H = 0
- NAND ② = T NAND J = 0
- NAND ③ = (NAND ①) NAND (NAND ②) = 0 NAND 0 = 1 → LED aceso ✅

Aplicando De Morgan duplo na porta ③:

`S = (T NAND H) NAND (T NAND J) = ((T·H)̅ · (T·J)̅)̅ = T·H + T·J = T·(H + J)`

O circuito de 3 NANDs implementa exatamente a mesma função da tabela-verdade (`S = T·(H+J)`).

### 4.3 Checagem completa no simulador

Rodei a própria lógica de avaliação do CircuitVerse para os 8 estados e o LED reproduziu a tabela-verdade sem erro:

| T | H | J | S (simulador) |
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

## 5. Validação

Testei todas as 8 combinações e o circuito com portas NAND bateu certinho com a tabela-verdade original:

| T | H | J | S (Tabela) | S (Circuito) |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 |

Deu tudo certo, o circuito funciona como esperado.

---

<div style="text-align:center;">
<em>Relatório entregue em 08 de julho de 2026</em>
</div>
