# ROTEIRO DO VIDEO — SIMULACAO 02
## Controle de Seguranca de Misturador Industrial

> **Duracao:** 3 a 5 minutos
> **Ferramentas:** Captura de tela (OBS Studio / Loom / Clipchamp) + Camera ligada
> **Plataforma:** YouTube (Modo Nao Listado) — colocar link no relatorio

---

## 1. INTRODUCAO (~30 segundos)

**Apresentacao:**
- "Ola, meu nome e Deivison de Lima Santana, sou aluno do Bacharelado em Sistemas de Informacao — EAD da UFRB."
- "Esta e a Simulacao 02 da disciplina Logica para Computacao, sobre o Controle de Seguranca de um Misturador Industrial."

**O problema:**
- "O sistema possui 4 sensores: Abastecimento (A), Batedor (B), Cobertura (C) e Temperatura (T)."
- "A valvula de emergencia deve abrir quando: temperatura alta com tanque cheio, OU motor ligado com tampa aberta."

---

## 2. TABELA-VERDADE E EXPRESSAO LOGICA (~1 minuto)

**Mostrar a tabela-verdade** (pode exibir na tela ou num papel):
- "Construi a tabela-verdade com 16 linhas. Desses 16 estados, 7 ativam o alarme."
- "As condicoes sao: T=1 e A=1 (linhas 10, 12, 14, 16), e B=1 e C=0 (linhas 5, 6, 13, 14)."

**Expressao logica:**
- "Pela tabela, a expressao logica e: S = A·T + B·C̅"
- (Apontar na tela) "Aqui, C̅ significa 'tampa aberta' — invertemos o sensor C."

**Mapa de Karnaugh:**
- "No Mapa de Karnaugh, visualizamos dois grupos bem definidos."
- (Mostrar o K-map na tela) "Grupo laranja = B·C̅, grupo azul = A·T."
- "A expressao ja esta simplificada — nao ha mais reducao possivel."

---

## 3. CONVERSAO PARA PORTAS NAND (~30 segundos)

- "A atividade pede para usar portas universais NAND. Vamos converter:"
- (Mostrar a transformacao na tela)
  - "S = A·T + B·C̅"
  - "Aplicando De Morgan: S = NAND( NAND(A,T), NAND(B, NAND(C,C)) )"
- "Usamos 4 portas NAND de 2 entradas."

---

## 4. DEMONSTRACAO PRATICA NO SIMULADOR (~2 minutos)

> **Abra o CircuitVerse com o circuito ja montado**

**Mostrar o circuito montado:**
- "Aqui esta o circuito completo com 4 entradas, 4 portas NAND e o LED de saida."

**Cenario 1 — Tudo seguro (S=0):**
- "Vou colocar A=0, B=0, C=1, T=0 — tudo desligado ou seguro."
- "O LED permanece apagado. Saida = 0."

**Cenario 2 — Emergencia por Temperatura (A=1 e T=1):**
- "Agora: A=1, B=0, C=1, T=1 — tanque cheio e temperatura alta."
- "LED acende! Saida = 1. A valvula de descarte abriria."

**Cenario 3 — Emergencia por Tampa Aberta (B=1 e C=0):**
- "Agora: A=0, B=1, C=0, T=0 — motor ligado com tampa aberta."
- "LED acende! Saida = 1."

(Se quiser, pode mostrar mais alguns estados rapidamente)

---

## 5. CONCLUSAO (~30 segundos)

- "A maior dificuldade foi organizar os fios no simulador para manter o circuito legivel."
- "O uso do Mapa de Karnaugh facilitou muito a simplificacao."
- "Este exercicio mostra como a logica booleana se aplica diretamente a problemas reais de seguranca industrial."
- "Obrigado!"

---

## 6. CHECKLIST PRE-GRAVACAO

- [ ] Camera ligada e aparecendo no canto da tela
- [ ] Circuito ja montado e aberto no CircuitVerse
- [ ] Tabela-verdade pronta pra mostrar (PDF ou papel)
- [ ] Mapa de Karnaugh visivel na tela
- [ ] Audio testado (microfone funcionando)
- [ ] Gravacao em 1080p (se possivel)
- [ ] Duração entre 3 e 5 minutos (cronometrar)
- [ ] Ao final, fazer upload como **Nao Listado** no YouTube
- [ ] Copiar o link e colar no relatorio

---

*Roteiro gerado em 13/07/2026*
