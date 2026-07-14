# ROTEIRO DO VÍDEO — Simulação 02 (3-5 minutos)

**Ferramentas:** OBS Studio ou Win+G (Windows), câmera ligada, áudio claro
**Publicação:** YouTube como "Não listado" (depois colar link no relatório)

---

## 1. INTRODUÇÃO (~30 segundos)

"Oi, meu nome é Deivison de Lima Santana, sou aluno do Bacharelado em Sistemas
de Informação EAD da UFRB. Esta é a Simulação 02 da disciplina Lógica para
Computação, do professor Nilmar de Souza."

"O problema é sobre um misturador industrial de produtos químicos que tem
4 sensores de segurança: A (abastecimento), B (batedor), C (cobertura) e
T (temperatura). A válvula de emergência abre quando tem perigo."

---

## 2. EXPLICAÇÃO LÓGICA (~1 minuto)

"Montei a tabela-verdade com as 16 combinações possíveis de A, B, C e T.
Dessas 16, 7 combinações ativam a emergência."

"A expressão booleana que encontrei foi: S = A·T + B·C̅ (C barrado)."

"Isso significa que o alarme liga quando:
- Temperatura alta (T=1) E tanque cheio (A=1)
- OU motor girando (B=1) E tampa aberta (C=0)"

"Usei o Mapa de Karnaugh pra simplificar a expressão e cheguei nessa forma
mínima. Depois converti pra usar apenas portas NAND."

---

## 3. DEMONSTRAÇÃO NO SIMULADOR (~2 minutos)

(Circuito já aberto no CircuitVerse)

"Aqui está o circuito montado com 4 portas NAND. Vou mostrar três situações:"

**Cenário 1 — Tudo seguro:**
"Coloco A=0, B=0, C=1, T=0. O LED fica apagado, S=0."

**Cenário 2 — Emergência por temperatura:**
"Agora A=1, C=1, T=1. LED acende, S=1. Perigo de superaquecimento
com tanque cheio."

**Cenário 3 — Emergência por tampa aberta:**
"Agora B=1, C=0, A=0, T=0. Motor girando com tampa aberta.
LED acende novamente, S=1."

---

## 4. CONCLUSÃO (~30 segundos)

"Esse exercício mostrou como aplicar tabela-verdade e lógica booleana em
um problema real de segurança industrial. A maior dificuldade foi organizar
os fios no simulador pra manter o circuito legível."

"Obrigado pela atenção."

---

**Total estimado: 4 minutos** (dentro do limite de 3 a 5)

---

**Checklist:**
- [ ] Câmera ligada (aparecendo no canto)
- [ ] Circuito aberto no simulador
- [ ] Falar pausadamente
- [ ] Mostrar 3 cenários no simulador
- [ ] Vídeo entre 3 e 5 minutos
- [ ] YouTube como "Não listado"
- [ ] Testar link em aba anônima
- [ ] Colar link no relatório
