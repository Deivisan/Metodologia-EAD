import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText, Lightbulb, GitBranch, Smartphone, Presentation,
  X, Users, ArrowUpRight, ExternalLink
} from 'lucide-react'

interface HubProps {
  onNavigate: (screen: 'prototype' | 'admin' | 'hub', sector?: string) => void
}

const team = [
  { name: 'Deivison de Lima Santana', role: 'Proposta, Documentação, Protótipo' },
  { name: 'Ausiane de Oliveira Costa', role: 'Casos, Protótipo (Acessibilidade)' },
  { name: 'Raimon Rios da Silva', role: 'Pesquisa, Proposta' },
  { name: 'Nubia de Asiká', role: 'Pesquisa, Casos' },
  { name: 'Artur Campos', role: 'Fluxograma' },
  { name: 'Marcos Vinícius dos Santos Sena', role: 'Fluxograma' },
  { name: 'Uélinton Cardoso Santana', role: 'Protótipo, Slides' },
  { name: 'Wallace Ribeiro Lima', role: 'Slides, Apresentação' },
]

export default function Hub({ onNavigate }: HubProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showTeam, setShowTeam] = useState(false)

  const cards = [
    {
      id: 'problema',
      title: 'Problema Real',
      icon: FileText,
      color: 'from-rose-500 to-pink-600',
      glow: 'shadow-rose-500/20',
      description: 'Tempo excessivo em filas presenciais em múltiplos setores — saúde, educação, bancos e serviços públicos.',
      details: [
        'Brasileiros perdem em média 1,5h/dia em filas (IBGE)',
        'Ansiedade e stress por falta de previsibilidade',
        'Pessoas com deficiência são as mais afetadas',
        'Sistemas atuais são isolados por setor',
      ],
      link: 'https://github.com/Deivisan/Metodologia-EAD/blob/main/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/problema-real.md',
    },
    {
      id: 'proposta',
      title: 'Proposta',
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-600',
      glow: 'shadow-amber-500/20',
      description: 'MinhaFila: sistema inteligente e acessível de gerenciamento de filas para qualquer setor, com senha virtual, notificação em tempo real e múltiplos canais de acompanhamento.',
      details: [
        'Senha virtual com QR Code e notificação push',
        'Painéis adaptados por setor (saúde, educação, bancos)',
        'Acessibilidade: Libras, contraste, leitores de tela',
        'Estimativa de espera baseada em tempo real',
      ],
      link: 'https://github.com/Deivisan/Metodologia-EAD/blob/main/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/proposta.md',
    },
    {
      id: 'fluxograma',
      title: 'Fluxograma',
      icon: GitBranch,
      color: 'from-cyan-500 to-teal-600',
      glow: 'shadow-cyan-500/20',
      description: 'Fluxo completo do sistema: desde a chegada do usuário até o atendimento, passando por geração de senha, chamada e feedback.',
      details: [
        'Fluxo de usuário: chegada → senha → espera → atendimento',
        'Fluxo de administrador: chamar próximo → gerenciar fila',
        'Notificações automáticas via push/SMS',
        'Painel de monitoramento em tempo real',
      ],
      link: 'https://github.com/Deivisan/Metodologia-EAD/blob/main/disciplinas/gcetens843-projeto-algoritmo-i/atividades/trabalhos/projeto-algoritmos/fluxograma.md',
      image: 'assets/fluxograma.jpeg',
    },
    {
      id: 'prototipo',
      title: 'Protótipo',
      icon: Smartphone,
      color: 'from-violet-500 to-purple-600',
      glow: 'shadow-violet-500/20',
      description: 'Interface funcional do MinhaFila com versões para Clínica, Hospital, Universidade e Banco — cada uma adaptada ao seu contexto.',
      details: [
        'Painel de senhas com animações em tempo real',
        'Seletor de setores com temas visuais distintos',
        'Painel administrativo para gerenciamento',
        'Design responsivo e acessível',
      ],
      link: '#',
      action: () => onNavigate('prototype', 'clinica'),
    },
    {
      id: 'slides',
      title: 'Apresentação',
      icon: Presentation,
      color: 'from-emerald-500 to-green-600',
      glow: 'shadow-emerald-500/20',
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

  const selectedCard = cards.find(c => c.id === selected)

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-surface/80 border-b border-surface-3">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-xs font-bold text-white">
              MF
            </div>
            <div>
              <h1 className="text-sm font-semibold text-text-primary">MinhaFila</h1>
              <p className="text-[10px] text-text-muted">GCETENS843 — Projeto Algoritmo I</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTeam(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors"
            >
              <Users size={14} />
              Equipe
            </button>
            <a
              href="https://deivisan.github.io/Metodologia-EAD/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-500/10 text-brand-400 hover:bg-brand-500/20 transition-colors"
            >
              GitHub Pages
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Apresentação Final — 29/06/2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Minha<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">Fila</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              Sistema inteligente e acessível de gerenciamento de filas para
              <span className="text-text-primary font-medium"> múltiplos setores</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-text-muted">
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-surface-3">🏥 Saúde</span>
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-surface-3">🎓 Educação</span>
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-surface-3">🏦 Bancos</span>
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-surface-3">🏛️ Serviços</span>
              <span className="px-3 py-1 rounded-full bg-surface-2 border border-surface-3">♿ Acessível</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <motion.button
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              onClick={() => card.action ? card.action() : setSelected(card.id)}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-surface-2 border border-surface-3 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg ${card.glow} group-hover:scale-110 transition-transform duration-300`}>
                <card.icon size={26} className="text-white" />
              </div>
              
              <h3 className="text-base font-bold text-text-primary mb-1.5">{card.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed flex-1">{card.description}</p>
              
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Abrir</span>
                <ArrowUpRight size={12} />
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Modal for card details */}
      <AnimatePresence>
        {selected && selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl bg-surface-2 border border-surface-3 shadow-2xl overflow-hidden"
            >
              {/* Header gradient */}
              <div className={`h-2 w-full bg-gradient-to-r ${selectedCard.color}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedCard.color} flex items-center justify-center`}>
                      <selectedCard.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-text-primary">{selectedCard.title}</h2>
                      <p className="text-xs text-text-muted">MinhaFila — GCETENS843</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-1.5 rounded-lg hover:bg-surface-3 transition-colors"
                  >
                    <X size={18} className="text-text-muted" />
                  </button>
                </div>

                <p className="text-sm text-text-secondary mb-4">{selectedCard.details}</p>

                <ul className="space-y-2 mb-6">
                  {selectedCard.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${selectedCard.color} flex-shrink-0`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {selectedCard.image && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-surface-3">
                    <img
                      src={selectedCard.image}
                      alt={`Fluxograma do ${selectedCard.title}`}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {selectedCard.link && selectedCard.link !== '#' && (
                  <a
                    href={selectedCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium hover:bg-brand-500/20 transition-colors"
                  >
                    <span>Abrir documento completo</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Team Modal */}
      <AnimatePresence>
        {showTeam && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowTeam(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-surface-2 border border-surface-3 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-text-primary">Equipe</h2>
                      <p className="text-xs text-text-muted">GCETENS843 — 2026.1</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowTeam(false)}
                    className="p-1.5 rounded-lg hover:bg-surface-3 transition-colors"
                  >
                    <X size={18} className="text-text-muted" />
                  </button>
                </div>
                <div className="space-y-1">
                  {team.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-3/50 transition-colors"
                    >
                      <span className="text-sm font-medium text-text-primary">{m.name}</span>
                      <span className="text-[11px] text-text-muted text-right max-w-[180px]">{m.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-surface-3">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
