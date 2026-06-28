# Proposta de Solução — MinhaFila

> **Documento de Proposta** — Gerenciamento Inteligente de Filas para Múltiplos Setores
> **Última atualização:** 26/06/2026
> **Status:** Proposta consolidada
> **Elaboração:** Esta proposta foi desenvolvida com base no documento "Projeto Algoritmo I V2" elaborado por Raimon Rios da Silva (2026), com contribuições de todos os integrantes do grupo MinhaFila.

---

## 1. Identificação

**Nome do Projeto:** MinhaFila  
**Tema:** Gerenciamento Inteligente de Filas para Múltiplos Setores  
**Disciplina:** GCETENS843 — Projeto Algoritmo I  
**Instituição:** UFRB — CETENS — Bacharelado em Sistemas de Informação (EAD)

---

## 2. O Problema

Filas presenciais são uma realidade comum em bancos, hospitais, faculdades, comércios e repartições públicas. Em todos esses setores, o funcionamento é similar:

1. O usuário chega ao local, dirige-se a um guichê e recebe uma senha física (ordem de chegada).
2. Permanece no local aguardando ser chamado, sem saber quantas pessoas estão à sua frente.
3. Depende de chamadas por alto-falante ou painéis com códigos de difícil compreensão.
4. Não tem visibilidade do tempo estimado de espera nem da sua posição atual.
5. Não pode se ausentar do local com segurança — corre o risco de perder a vez.
6. Pessoas com deficiência auditiva perdem chamadas sonoras; pessoas com baixa visão têm dificuldade para ler painéis; pessoas com TEA sofrem com o excesso de estímulos em ambientes lotados.

Consequências observadas:

- Sensação de injustiça e opacidade no atendimento
- Ansiedade gerada pela imprevisibilidade da espera
- Aglomeração desnecessária nas áreas de espera
- Desistência e absenteísmo
- Experiência negativa independentemente da qualidade do serviço prestado
- Exclusão de pessoas com deficiência que não conseguem acompanhar o sistema tradicional

Problemas existentes nas soluções atuais:

- Sistemas de senha física não fornecem informações em tempo real
- Painéis eletrônicos têm alcance limitado e não são acessíveis
- Aplicativos existentes são setoriais (funcionam apenas para saúde ou apenas para bancos)
- Nenhuma solução popular permite que o usuário aguarde fora do local com segurança

---

## 3. A Solução

O MinhaFila é um sistema de senha virtual com acompanhamento em tempo real, notificações e painéis de gestão, projetado para funcionar em **múltiplos setores**: bancos, unidades de saúde, instituições de ensino, comércio e repartições governamentais.

### Conceito Central

O usuário chega ao local, realiza um cadastro rápido e recebe uma senha virtual diretamente no celular. A partir daí, acompanha sua posição na fila, o tempo estimado de espera e recebe notificações quando estiver próximo de ser chamado — tudo pelo próprio dispositivo.

### Como Funciona na Prática

1. **Chegada** — O usuário abre o app ou escaneia um QR Code na recepção.
2. **Cadastro rápido** — Informa nome, telefone e o serviço desejado (opcionalmente, necessidades de acessibilidade).
3. **Senha virtual** — Recebe imediatamente uma senha e entra na fila.
4. **Acompanhamento** — Visualiza no celular:
   - "Sua posição: 7º lugar"
   - "Tempo estimado: 25 minutos"
   - Quantidade de pessoas à frente por categoria/serviço
5. **Notificação** — Recebe alerta quando estiver próximo de ser chamado (push, vibração, som).
6. **Atendimento** — Dirige-se ao guichê indicado quando for sua vez.

### Jornada do Gestor (Painel Administrativo)

1. Visualiza a fila em tempo real com todas as senhas ativas.
2. Gerencia múltiplos guichês e serviços simultaneamente.
3. Chama o próximo usuário com um clique.
4. Acessa histórico de atendimentos e relatórios analíticos.
5. Configura horários de pico, capacidade e regras de prioridade.

---

## 4. Diferenciais

O MinhaFila apresenta os seguintes diferenciais em relação às soluções existentes:

- **Transparência:** O usuário vê exatamente sua posição e o tempo estimado, eliminando a sensação de injustiça.
- **Mobilidade:** O usuário pode aguardar fora do local e ser notificado quando estiver próximo.
- **Multissetorial:** Funciona em bancos, saúde, educação, comércio e governo com um único sistema.
- **Dados Analíticos:** Gestores obtêm relatórios de fluxo, horários de pico, tempo médio de espera e desempenho.
- **Acessibilidade:** Modos para baixa visão, alto contraste, surdos (alertas visuais) e TEA (baixo estímulo).
- **Baixa Fricção:** Cadastro rápido sem burocracia; QR Code elimina necessidade de digitar URLs.

---

## 5. Funcionalidades Principais

### Módulo Usuário

- **Cadastro rápido:** Nome, telefone, serviço desejado e preferências de acessibilidade.
- **Senha virtual:** Geração automática de senha ao entrar na fila.
- **Acompanhamento em tempo real:** Posição atualizada, tempo estimado, pessoas à frente.
- **Notificação push:** Alerta quando faltar 2-3 pessoas para ser chamado.
- **Histórico:** Consulta de atendimentos anteriores.
- **Perfil de acessibilidade:** Configurações de alto contraste, fonte ampliada, modo silencioso.

### Módulo Gestor

- **Painel de fila:** Visualização completa das senhas ativas por serviço/guichê.
- **Chamada:** Botão para chamar próximo usuário.
- **Gestão de guichês:** Abrir/fechar guichês, alocar servidores.
- **Relatórios:** Tempo médio de espera, horários de pico, volume por período.
- **Configurações:** Regras de prioridade, capacidade, categorias de serviço.

### Módulo Painel Público (TV)

- **Senha do momento:** Exibe a senha sendo chamada no guichê.
- **Próximas senhas:** Lista das próximas 5-10 senhas previstas.
- **Informações complementares:** Horário, avisos institucionais.

---

## 6. Fluxos do Sistema

### Fluxo Principal (Usuário)

```
Chegada → Escaneia QR Code / Abre App → Cadastro rápido →
Recebe senha virtual → Acompanha fila no celular →
Recebe notificação → Vai ao guichê → Atendimento concluído
```

### Fluxo de Gestão

```
Abre painel → Visualiza fila atual → Chama próximo →
Usuário é notificado → Usuário chega ao guichê →
Registra atendimento → Fila atualiza automaticamente
```

### Fluxo de Saída Temporária

```
Usuário marca "Vou sair um pouco" → App continua monitorando →
Quando faltarem 2 pessoas → Notificação push →
Usuário retorna → É chamado normalmente
```

---

## 7. Mapa de Telas

### App do Usuário

1. **Tela de Boas-vindas / QR Code Scanner**
2. **Cadastro Rápido** (nome, telefone, serviço)
3. **Minha Fila** (posição, tempo estimado, status)
4. **Detalhes da Fila** (pessoas à frente por categoria)
5. **Notificação / Alerta de Chamada**
6. **Histórico de Atendimentos**
7. **Configurações de Acessibilidade**

### Painel Web do Gestor

1. **Dashboard** (fila ativa, guichês, métricas em tempo real)
2. **Gestão de Guichês** (abrir/fechar, alocar)
3. **Relatórios** (tempo médio, picos, histórico)
4. **Configurações do Estabelecimento**

### Painel para TV

1. **Tela de Chamada** (senha atual + guichê)
2. **Lista de Próximas Chamadas**

---

## 8. Arquitetura Tecnológica

A arquitetura técnica do MinhaFila é composta pelos seguintes componentes e tecnologias:

- **Frontend (usuário):** Web responsivo com tecnologia PWA (instalável como app).
- **Frontend (gestor):** Dashboard web responsivo.
- **Painel TV:** Página web otimizada para telas grandes.
- **Backend:** API REST.
- **Notificações:** Push notification via Service Worker (PWA).
- **Identificação:** QR Code estático por estabelecimento + código único por senha.
- **Banco de Dados:** Relacional (estrutura de fila, usuários, estabelecimentos, atendimentos).

---

## 9. Casos de Uso por Setor

- **Bancos:** Senha para caixa, gerente, serviços específicos (abertura de conta, cartão).
- **Saúde:** Chegada na recepção, aguardo de consulta, exames, retornos.
- **Educação:** Matrícula, secretaria, atendimento ao aluno, protocolo.
- **Comércio:** Atendimento prioritário, retirada de pedidos, SAC.
- **Governo:** Protocolo, atendimento presencial, serviços públicos.

---

## 10. Próximos Passos

1. Detalhamento técnico do fluxograma do sistema.
2. Prototipação das telas principais (usuário + gestor).
3. Definição da identidade visual (cores, tipografia, logotipo).
4. Estruturação do banco de dados e API.
5. Desenvolvimento do protótipo funcional (PWA).
6. Preparação dos slides para apresentação.

---

> **Documento base:** Projeto-Algoritmo-1-V2.docx (Rios, 2026)  
> Repositório: `disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/`
