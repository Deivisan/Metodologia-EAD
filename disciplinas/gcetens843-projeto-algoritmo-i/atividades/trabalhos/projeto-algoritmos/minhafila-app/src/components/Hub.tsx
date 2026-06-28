import { motion } from 'framer-motion'
import {
  FileText, Lightbulb, GitBranch, Smartphone, Presentation, Search, Users
} from 'lucide-react'

const team = [
  { name: 'Deivison de Lima Santana', role: 'Proposta, Documentação, Protótipo' },
  { name: 'Ausiane de Oliveira Costa', role: 'Casos Existentes' },
  { name: 'Raimon Rios da Silva', role: 'Pesquisa, Proposta' },
  { name: 'Núbia Rosália de Souza Ramos', role: 'Pesquisa, Casos' },
  { name: 'Artur Campos', role: 'Fluxograma' },
  { name: 'Marcos Vinícius dos Santos Sena', role: 'Fluxograma' },
  { name: 'Uélinton Cardoso Santana', role: 'Protótipo, Slides' },
  { name: 'Wallace Ribeiro Lima', role: 'Slides, Apresentação' },
]

export default function Hub() {

  const cards = [
    {
      id: 'problema',
      title: 'Problema Real',
      icon: FileText,
      description: 'Tempo excessivo em filas presenciais em múltiplos setores — saúde, educação, bancos e serviços públicos.',
      details: [
        'Brasileiros perdem em média 1,5h/dia em filas (IBGE)',
        'Ansiedade e stress por falta de previsibilidade',
        'Pessoas com deficiência são as mais afetadas',
        'Sistemas atuais são isolados por setor',
      ],
      link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/main/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/problema-real.docx&wdDownloadButton=1',
    },
    {
      id: 'proposta',
      title: 'Proposta',
      icon: Lightbulb,
      description: 'MinhaFila: sistema inteligente e acessível de gerenciamento de filas para qualquer setor, com senha virtual, notificação em tempo real e múltiplos canais de acompanhamento.',
      details: [
        'Senha virtual com QR Code e notificação push',
        'Painéis adaptados por setor (saúde, educação, bancos)',
        'Acessibilidade: Libras, contraste, leitores de tela',
        'Estimativa de espera baseada em tempo real',
      ],
      link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/main/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/proposta.docx&wdDownloadButton=1',
    },
    {
      id: 'fluxograma',
      title: 'Fluxograma',
      icon: GitBranch,
      description: 'Fluxo completo do sistema: desde a chegada do usuário até o atendimento, passando por geração de senha, chamada e feedback.',
      details: [
        'Fluxo de usuário: chegada → senha → espera → atendimento',
        'Fluxo de administrador: chamar próximo → gerenciar fila',
        'Notificações automáticas via push/SMS',
        'Painel de monitoramento em tempo real',
      ],
      link: 'https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/main/minhafila/assets/fluxograma.jpeg',
    },
    {
      id: 'casos',
      title: 'Casos Existentes',
      icon: Search,
      description: 'Análise de soluções de mercado e iniciativas governamentais: QMS, TOTVS, Wavetec, Senha Fácil e mais.',
      details: [
        '5 sistemas QMS de mercado analisados',
        '3 iniciativas governamentais brasileiras',
        'Critérios comparativos por setor',
        'Diferenciais competitivos do MinhaFila',
      ],
      link: 'https://view.officeapps.live.com/op/view.aspx?src=https://raw.githubusercontent.com/Deivisan/Metodologia-EAD/main/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/casos-existentes.docx&wdDownloadButton=1',
    },
    {
      id: 'prototipo',
      title: 'Protótipo',
      icon: Smartphone,
      description: 'Interface funcional do MinhaFila com versões para Clínica, Hospital, Universidade e Banco — cada uma adaptada ao seu contexto.',
      details: [
        'Painel de senhas com animações em tempo real',
        'Seletor de setores com temas visuais distintos',
        'Visão do paciente e visão do funcionário',
        'Design responsivo e acessível',
      ],
      link: '/Metodologia-EAD/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/prototipo-minhafila/',
    },
    {
      id: 'slides',
      title: 'Slides',
      icon: Presentation,
      description: 'Slides colaborativos da apresentação final do projeto — 29/06/2026 às 20h.',
      details: [
        'Contexto do problema real',
        'Casos existentes e lacunas de mercado',
        'Proposta MinhaFila com diferencial de acessibilidade',
        'Demonstração do protótipo ao vivo',
      ],
      link: 'https://docs.google.com/presentation/d/1tiaZ7SRLPvVglSnaWAuX7mTcRaERZuAtp9iSgXoPR6Q/edit',
    },
  ]

  const handleCardClick = (card: typeof cards[0]) => {
    if (card.link && card.link !== '#') {
      window.open(card.link, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(90,127,186,0.06),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Apresentação Final — 29/06/2026
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">
              Minha<span className="text-brand-400">Fila</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Sistema inteligente e acessível de gerenciamento de filas para múltiplos setores
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['Saúde', 'Educação', 'Bancos', 'Serviços Públicos', 'Acessível'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-surface-2 border border-surface-3 text-[11px] text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {cards.map((card, i) => (
            <motion.button
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.06 * i }}
              onClick={() => handleCardClick(card)}
              className="group relative flex flex-col items-center text-center p-6 rounded-xl bg-surface-2 border border-surface-3 hover:border-brand-400/25 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-3 flex items-center justify-center mb-3 group-hover:bg-brand-500/15 group-hover:text-brand-400 transition-all duration-200">
                <card.icon size={22} className="text-text-muted group-hover:text-brand-400 transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">{card.title}</h3>
              <p className="text-[11px] text-text-muted leading-relaxed">{card.description}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <Users size={16} className="text-brand-400" />
          <h2 className="text-sm font-semibold text-text-primary tracking-wide uppercase">Equipe</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
              className="p-3 rounded-lg bg-surface-2 border border-surface-3 text-center"
            >
              <p className="text-xs font-medium text-text-primary leading-tight">{m.name}</p>
              <p className="text-[10px] text-text-muted mt-0.5">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-3">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            UFRB — CETENS — Bacharelado em Sistemas de Informação (EAD)
          </p>
          <p className="text-xs text-text-muted">
            Prof. Luis Paulo Morais Conceição — 29 de junho de 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
