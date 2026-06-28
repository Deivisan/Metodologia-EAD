import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, SkipForward, Users, CheckCircle2,
  X, Bell, UserCheck,
  RefreshCw, List, Monitor, Timer,
  AlertTriangle, Volume2
} from 'lucide-react'
import { sectors } from '../sectors/data'

interface AdminProps {
  sector: string
  onBack: () => void
}

interface Ticket {
  id: string
  number: string
  type: 'normal' | 'prioritario' | 'pcd'
  status: 'waiting' | 'called' | 'serving' | 'completed' | 'missed'
  createdAt: number
  name?: string
}

function generateTicketNumber(index: number, type: string): string {
  const prefix = type === 'prioritario' ? 'P' : type === 'pcd' ? 'D' : 'A'
  return `${prefix}${String(index).padStart(3, '0')}`
}

function generateMockTickets(): Ticket[] {
  const types: Array<'normal' | 'prioritario' | 'pcd'> = ['normal', 'prioritario', 'normal', 'normal', 'pcd', 'normal', 'normal', 'prioritario', 'normal', 'normal', 'normal', 'normal']
  return types.map((type, i) => ({
    id: `ticket-${i}`,
    number: generateTicketNumber(i + 1, type),
    type,
    status: i === 0 ? 'serving' : 'waiting' as 'waiting',
    createdAt: Date.now() - (types.length - i) * 120000,
    name: i === 0 ? 'Maria S.' : undefined,
  }))
}

export default function Admin({ sector, onBack }: AdminProps) {
  const cfg = sectors[sector] || sectors.clinica
  const [tickets, setTickets] = useState<Ticket[]>(generateMockTickets)
  const [, setCurrentTicket] = useState(tickets[0])
  const [showCallAlert, setShowCallAlert] = useState(false)
  const [lastCalled, setLastCalled] = useState<string | null>(null)
  const [isCalling, setIsCalling] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [stats, setStats] = useState({
    attended: 45,
    averageWait: '8:32',
    missed: 3,
    activeNow: tickets.filter(t => t.status === 'waiting').length,
  })

  const waitingTickets = tickets.filter(t => t.status === 'waiting')
  const servingTicket = tickets.find(t => t.status === 'serving')
  const callNext = useCallback(() => {
    if (waitingTickets.length === 0) return

    setIsCalling(true)

    // Prioritize priority tickets
    const nextTicket = waitingTickets.find(t => t.type === 'prioritario' || t.type === 'pcd') || waitingTickets[0]

    setTimeout(() => {
      setTickets(prev =>
        prev.map(t =>
          t.id === nextTicket.id
            ? { ...t, status: 'serving' as const }
            : t.status === 'serving'
              ? { ...t, status: 'completed' as const }
              : t
        )
      )
      setCurrentTicket(nextTicket)
      setLastCalled(nextTicket.number)
      setShowCallAlert(true)
      setShowSuccess(true)

      setStats(prev => ({
        ...prev,
        attended: prev.attended + 1,
        activeNow: prev.activeNow - 1,
      }))

      setTimeout(() => {
        setShowCallAlert(false)
        setIsCalling(false)
      }, 3000)
      setTimeout(() => setShowSuccess(false), 1500)
    }, 800)
  }, [waitingTickets])

  const markMissed = useCallback((ticketId: string) => {
    setTickets(prev =>
      prev.map(t =>
        t.id === ticketId
          ? { ...t, status: 'missed' as const }
          : t
      )
    )
    setStats(prev => ({
      ...prev,
      missed: prev.missed + 1,
      activeNow: Math.max(0, prev.activeNow - 1),
    }))
  }, [])

  // Simulate new tickets
  useEffect(() => {
    const interval = setInterval(() => {
      const types: Array<'normal' | 'prioritario' | 'pcd'> = ['normal', 'normal', 'normal', 'prioritario', 'normal', 'pcd']
      const type = types[Math.floor(Math.random() * types.length)]
      const newIndex = tickets.length + 1
      const newTicket: Ticket = {
        id: `ticket-${newIndex}`,
        number: generateTicketNumber(newIndex, type),
        type,
        status: 'waiting',
        createdAt: Date.now(),
      }
      setTickets(prev => [...prev, newTicket])
      setStats(prev => ({ ...prev, activeNow: prev.activeNow + 1 }))
    }, 15000)
    return () => clearInterval(interval)
  }, [tickets.length])

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'prioritario':
        return { bg: 'bg-amber-500/10', text: 'text-amber-400', dot: 'bg-amber-400', label: 'Prioritário' }
      case 'pcd':
        return { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400', label: 'PCD' }
      default:
        return { bg: 'bg-surface-3/50', text: 'text-text-muted', dot: 'bg-text-muted', label: 'Normal' }
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Alert overlay */}
      <AnimatePresence>
        {showCallAlert && lastCalled && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell size={24} className="text-emerald-400" />
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.6, repeat: 3 }}
                  className="absolute inset-0 rounded-full bg-emerald-400/20"
                />
              </div>
              <div>
                <p className="text-sm text-emerald-300/80">Próximo</p>
                <p className="text-2xl font-black text-white font-mono">
                  {lastCalled}
                </p>
              </div>
              <div className="text-left pl-4 border-l border-emerald-500/20">
                <p className="text-xs text-emerald-300/60">Guichê 03</p>
                <p className="text-sm font-medium text-emerald-300">
                  {cfg.contextInfo.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-surface/80 border-b border-surface-3">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Protótipo</span>
          </button>
          
          <div className="flex items-center gap-2">
            <Monitor size={14} className="text-brand-400" />
            <span className="text-sm font-semibold text-text-primary">Painel Administrativo</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2 border border-surface-3">
            <div className={`w-2 h-2 rounded-full ${waitingTickets.length > 0 ? 'bg-emerald-400 animate-pulse' : 'bg-text-muted'}`} />
            <span className="text-xs text-text-muted">{waitingTickets.length} na fila</span>
          </div>
        </div>
      </header>

      {/* Sub-header with sector info */}
      <div className="border-b border-surface-3 bg-surface-2/50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-3">
          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${cfg.gradient} flex items-center justify-center`}>
            <span className="text-[8px] font-bold text-white">{cfg.name[0]}</span>
          </div>
          <span className="text-xs font-medium text-text-secondary">{cfg.contextInfo.title}</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Call next button + current serving */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Call next - large button */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: waitingTickets.length > 0 ? 1.01 : 1 }}
              whileTap={{ scale: waitingTickets.length > 0 ? 0.98 : 1 }}
            >
              <button
                onClick={callNext}
                disabled={waitingTickets.length === 0 || isCalling}
                className={`relative w-full py-8 rounded-2xl border-2 text-center transition-all duration-300 overflow-hidden ${
                  waitingTickets.length === 0 || isCalling
                    ? 'bg-surface-3/50 border-surface-3 opacity-50 cursor-not-allowed'
                    : 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/30 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer'
                }`}
              >
                {isCalling && (
                  <div className="absolute inset-0 flex items-center justify-center bg-surface/60 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <RefreshCw size={20} />
                      </motion.div>
                      <span className="text-sm font-medium">Chamando...</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col items-center gap-2">
                  <SkipForward size={32} className="text-emerald-400" />
                  <span className="text-lg font-bold text-white">Chamar Próximo</span>
                  {waitingTickets.length > 0 && (
                    <span className="text-xs text-text-muted">
                      {waitingTickets.length} aguardando · {waitingTickets.filter(t => t.type === 'prioritario' || t.type === 'pcd').length} prioritários
                    </span>
                  )}
                </div>
              </button>
            </motion.div>
          </div>

          {/* Current serving card */}
          <div>
            <div className="h-full p-5 rounded-2xl bg-surface-2 border border-surface-3">
              <div className="flex items-center gap-2 mb-4">
                <UserCheck size={14} className="text-emerald-400" />
                <span className="text-xs font-semibold text-text-primary">Em Atendimento</span>
              </div>
              {servingTicket ? (
                <div className="text-center">
                  <motion.div
                    key={servingTicket.number}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-white font-mono mb-1"
                  >
                    {servingTicket.number}
                  </motion.div>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${getTypeStyle(servingTicket.type).bg} ${getTypeStyle(servingTicket.type).text} text-[10px] font-medium`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${getTypeStyle(servingTicket.type).dot}`} />
                    {getTypeStyle(servingTicket.type).label}
                  </div>
                  {servingTicket.name && (
                    <p className="text-xs text-text-muted mt-2">{servingTicket.name}</p>
                  )}
                </div>
              ) : (
                <div className="text-center text-text-muted text-sm py-4">
                  Nenhum atendimento ativo
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Atendidos Hoje', value: stats.attended, icon: CheckCircle2, color: 'text-emerald-400' },
            { label: 'Tempo Médio', value: stats.averageWait, icon: Timer, color: 'text-amber-400' },
            { label: 'Ausências', value: stats.missed, icon: AlertTriangle, color: 'text-red-400' },
            { label: 'Na Fila', value: stats.activeNow, icon: Users, color: 'text-blue-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="p-4 rounded-xl bg-surface-2 border border-surface-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <stat.icon size={14} className={stat.color} />
                <span className="text-[11px] text-text-muted">{stat.label}</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Ticket queue table */}
        <div className="rounded-2xl bg-surface-2 border border-surface-3 overflow-hidden">
          <div className="px-5 py-3 border-b border-surface-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <List size={14} className="text-brand-400" />
              <span className="text-xs font-semibold text-text-primary">Fila de Espera</span>
            </div>
            <span className="text-[10px] text-text-muted">{waitingTickets.length} tickets</span>
          </div>

          <div className="divide-y divide-surface-3 max-h-[400px] overflow-y-auto">
            {waitingTickets.length === 0 ? (
              <div className="p-8 text-center text-text-muted text-sm">
                <div className="flex justify-center mb-2">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                </div>
                Fila vazia — todos os pacientes foram atendidos
              </div>
            ) : (
              waitingTickets.map((ticket, i) => {
                const typeStyle = getTypeStyle(ticket.type)
                const waitMinutes = Math.floor((Date.now() - ticket.createdAt) / 60000)
                return (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center justify-between px-5 py-3 hover:bg-surface-3/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-white font-mono w-16">{ticket.number}</span>
                      <div className={`px-2 py-0.5 rounded-md ${typeStyle.bg} ${typeStyle.text} text-[10px] font-medium`}>
                        {typeStyle.label}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-muted">
                        {waitMinutes < 1 ? '<1 min' : `${waitMinutes} min`}
                      </span>
                      {i === 0 && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                          Próximo
                        </span>
                      )}
                      <button
                        onClick={() => markMissed(ticket.id)}
                        className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all"
                        title="Marcar como ausente"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>

        {/* Success toast */}
        <AnimatePresence>
          {showSuccess && lastCalled && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Volume2 size={16} className="text-emerald-400" />
                <span className="text-sm text-emerald-300">
                  Senha <strong>{lastCalled}</strong> chamada com sucesso
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
