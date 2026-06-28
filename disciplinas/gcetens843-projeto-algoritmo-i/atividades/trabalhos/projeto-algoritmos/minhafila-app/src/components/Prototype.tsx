import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Bell, QrCode,
  Stethoscope, HeartPulse, GraduationCap, Landmark,
  User, UserCog, CheckCircle2, SkipForward,
  List, X, RefreshCw, Monitor, Volume2
} from 'lucide-react'
import { sectors } from '../sectors/data'
import type { ViewState } from '../sectors/types'

interface PrototypeProps {
  currentSector: string
  onNavigate: (screen: ViewState['screen'], sector?: string) => void
}

const sectorIcons: Record<string, any> = {
  clinica: Stethoscope,
  hospital: HeartPulse,
  universidade: GraduationCap,
  banco: Landmark,
}

// ========== HOOKS ==========

interface Ticket {
  id: string
  number: string
  type: 'normal' | 'prioritario' | 'pcd'
  status: 'waiting' | 'serving' | 'completed' | 'missed'
  createdAt: number
}

function generateTicketNumber(index: number, type: string): string {
  const prefix = type === 'prioritario' ? 'P' : type === 'pcd' ? 'D' : 'A'
  return `${prefix}${String(index).padStart(3, '0')}`
}

function useQueue(_sectorId: string) {
  const [tickets, setTickets] = useState<Ticket[]>(() => {
    const types: Array<'normal' | 'prioritario' | 'pcd'> = [
      'normal', 'prioritario', 'normal', 'normal', 'pcd',
      'normal', 'normal', 'prioritario', 'normal', 'normal',
    ]
    return types.map((type, i) => ({
      id: `t-${i}`,
      number: generateTicketNumber(i + 1, type),
      type,
      status: i === 0 ? 'serving' : 'waiting' as const,
      createdAt: Date.now() - (types.length - i) * 120000,
    }))
  })

  const waitingTickets = tickets.filter(t => t.status === 'waiting')
  const servingTicket = tickets.find(t => t.status === 'serving')
  const [lastCalled, setLastCalled] = useState<string | null>(null)
  const [showCallAlert, setShowCallAlert] = useState(false)
  const [isCalling, setIsCalling] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [stats, setStats] = useState({
    attended: 45,
    averageWait: '8:32',
    missed: 3,
  })

  const callNext = useCallback(() => {
    if (waitingTickets.length === 0) return
    setIsCalling(true)

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
      setLastCalled(nextTicket.number)
      setShowCallAlert(true)
      setShowSuccess(true)
      setStats(prev => ({ ...prev, attended: prev.attended + 1 }))

      setTimeout(() => {
        setShowCallAlert(false)
        setIsCalling(false)
      }, 3000)
      setTimeout(() => setShowSuccess(false), 1500)
    }, 600)
  }, [waitingTickets])

  const markMissed = useCallback((ticketId: string) => {
    setTickets(prev =>
      prev.map(t =>
        t.id === ticketId ? { ...t, status: 'missed' as const } : t
      )
    )
    setStats(prev => ({ ...prev, missed: prev.missed + 1 }))
  }, [])

  // Simulate new tickets
  useEffect(() => {
    const interval = setInterval(() => {
      const types: Array<'normal' | 'prioritario' | 'pcd'> = ['normal', 'normal', 'normal', 'prioritario', 'normal', 'pcd']
      const type = types[Math.floor(Math.random() * types.length)]
      const newIndex = tickets.length + 1
      const newTicket: Ticket = {
        id: `t-${newIndex}`,
        number: generateTicketNumber(newIndex, type),
        type,
        status: 'waiting',
        createdAt: Date.now(),
      }
      setTickets(prev => [...prev, newTicket])
    }, 15000)
    return () => clearInterval(interval)
  }, [tickets.length])

  const waitTime = Math.max(3, waitingTickets.length * 2)
  const queueSize = waitingTickets.length
  const ticketNumber = tickets.length

  return {
    tickets, waitingTickets, servingTicket,
    lastCalled, showCallAlert, isCalling, showSuccess,
    stats, callNext, markMissed, setShowCallAlert,
    queueSize, ticketNumber, waitTime,
  }
}

// ========== PATIENT VIEW ==========

function PatientView({ sector, queue }: { sector: any; queue: any }) {
  const myPosition = queue.queueSize + 1
  const myTicket = `A${String(queue.ticketNumber + 1).padStart(3, '0')}`
  return (
    <div className="flex flex-col h-full">
      {/* Status card */}
      <div className="bg-surface-2/80 rounded-lg p-3 text-center mb-2">
        <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Em Atendimento</p>
        <p className="text-2xl font-bold text-text-primary font-mono tracking-tight">
          {queue.servingTicket?.number || '---'}
        </p>
        <p className="text-[10px] text-text-muted mt-0.5">Guichê 03</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="bg-surface-2/80 rounded-lg p-2.5 text-center">
          <p className="text-lg font-bold text-text-primary font-mono">{queue.queueSize}</p>
          <p className="text-[9px] text-text-muted">Na Fila</p>
        </div>
        <div className="bg-surface-2/80 rounded-lg p-2.5 text-center">
          <p className="text-lg font-bold text-amber-400 font-mono">~{queue.waitTime} min</p>
          <p className="text-[9px] text-text-muted">Tempo Estimado</p>
        </div>
      </div>

      {/* Your ticket */}
      <div className="bg-surface-2/80 rounded-lg p-3 mb-2">
        <p className="text-[9px] text-text-muted uppercase tracking-wider mb-2">Sua Senha</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-brand-400 font-mono">{myTicket}</p>
            <p className="text-[10px] text-text-muted">Posição: {myPosition}º</p>
          </div>
          <div className="w-10 h-10 bg-surface-3 rounded flex items-center justify-center">
            <QrCode size={20} className="text-text-muted" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-surface-2/80 rounded-lg p-3 flex-1">
        <p className="text-[9px] text-text-muted uppercase tracking-wider mb-2">Serviços</p>
        <div className="space-y-1">
          {sector.contextInfo.services.slice(0, 4).map((s: string, i: number) => (
            <div key={i} className="flex items-center gap-1.5 text-[11px] text-text-secondary">
              <div className="w-1 h-1 rounded-full bg-brand-400" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ========== EMPLOYEE VIEW ==========

function EmployeeView({ queue }: { sector?: any; queue: any }) {
  const {
    waitingTickets, servingTicket, callNext, isCalling,
    lastCalled, showCallAlert, showSuccess, markMissed,
  } = queue

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'prioritario':
        return { bg: 'bg-amber-500/15', text: 'text-amber-300', dot: 'bg-amber-400', label: 'Prioritário' }
      case 'pcd':
        return { bg: 'bg-blue-500/15', text: 'text-blue-300', dot: 'bg-blue-400', label: 'PCD' }
      default:
        return { bg: 'bg-surface-3/50', text: 'text-text-muted', dot: 'bg-text-muted', label: 'Normal' }
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Call next + serving */}
      <button
        onClick={callNext}
        disabled={waitingTickets.length === 0 || isCalling}
        className={`w-full py-3 rounded-lg text-center transition-all mb-2 ${
          waitingTickets.length === 0 || isCalling
            ? 'bg-surface-3/50 opacity-50 cursor-not-allowed'
            : 'bg-brand-500/15 border border-brand-500/25 hover:bg-brand-500/20'
        }`}
      >
        {isCalling ? (
          <div className="flex items-center justify-center gap-2 text-brand-400">
            <RefreshCw size={14} className="animate-spin" />
            <span className="text-xs font-medium">Chamando...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <SkipForward size={18} className="text-brand-400" />
            <span className="text-sm font-semibold text-text-primary">Chamar Próximo</span>
          </div>
        )}
      </button>

      {/* Current serving */}
      <div className="bg-surface-2/80 rounded-lg p-3 mb-2">
        <div className="flex items-center gap-2 mb-2">
          <Monitor size={12} className="text-brand-400" />
          <span className="text-[9px] text-text-muted uppercase tracking-wider">Em Atendimento</span>
        </div>
        {servingTicket ? (
          <div className="text-center">
            <p className="text-xl font-bold text-text-primary font-mono">{servingTicket.number}</p>
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded ${getTypeStyle(servingTicket.type).bg} ${getTypeStyle(servingTicket.type).text} text-[9px] mt-1`}>
              <div className={`w-1 h-1 rounded-full ${getTypeStyle(servingTicket.type).dot}`} />
              {getTypeStyle(servingTicket.type).label}
            </div>
          </div>
        ) : (
          <p className="text-xs text-text-muted text-center py-2">Nenhum</p>
        )}
      </div>

      {/* Queue list */}
      <div className="flex-1 bg-surface-2/80 rounded-lg overflow-hidden">
        <div className="px-3 py-2 border-b border-surface-3/50 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <List size={11} className="text-brand-400" />
            <span className="text-[9px] text-text-muted uppercase tracking-wider">Fila</span>
          </div>
          <span className="text-[9px] text-text-muted">{waitingTickets.length}</span>
        </div>
        <div className="divide-y divide-surface-3/50 max-h-[220px] overflow-y-auto">
          {waitingTickets.length === 0 ? (
            <div className="py-6 text-center">
              <CheckCircle2 size={18} className="text-emerald-400 mx-auto mb-1" />
              <p className="text-[10px] text-text-muted">Fila vazia</p>
            </div>
          ) : (
            waitingTickets.map((ticket: Ticket, i: number) => {
              const ts = getTypeStyle(ticket.type)
              const waitMinutes = Math.floor((Date.now() - ticket.createdAt) / 60000)
              return (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between px-3 py-2 hover:bg-surface-3/30 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-text-primary font-mono w-14">{ticket.number}</span>
                    <span className={`px-1.5 py-0.5 rounded ${ts.bg} ${ts.text} text-[8px] font-medium`}>
                      {ts.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-text-muted">
                      {waitMinutes < 1 ? '<1m' : `${waitMinutes}m`}
                    </span>
                    {i === 0 && (
                      <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">
                        Próx
                      </span>
                    )}
                    <button
                      onClick={() => markMissed(ticket.id)}
                      className="p-0.5 rounded text-text-muted hover:text-red-400 hover:bg-red-500/15 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <X size={10} />
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Alert */}
      <AnimatePresence>
        {showCallAlert && lastCalled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <Bell size={16} className="text-emerald-400" />
              <span className="text-xs text-emerald-300">
                Senha <strong>{lastCalled}</strong> — Guichê 03
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && lastCalled && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="fixed bottom-4 right-4 z-40 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2">
              <Volume2 size={12} className="text-emerald-400" />
              <span className="text-xs text-emerald-300">{lastCalled} chamada</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ========== PROTOTYPE (MAIN) ==========

export default function Prototype({ currentSector, onNavigate }: PrototypeProps) {
  const queue = useQueue(currentSector)
  const [selectedSector, setSelectedSector] = useState(currentSector)
  const [viewMode, setViewMode] = useState<'patient' | 'employee'>('patient')

  const handleSectorChange = (id: string) => {
    setSelectedSector(id)
    onNavigate('prototype', id)
  }

  const currentSectorCfg = sectors[selectedSector] || sectors.clinica
  const Icon = sectorIcons[selectedSector] || Stethoscope

  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-surface/80 border-b border-surface-3">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => onNavigate('hub')}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Voltar</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-surface-3 flex items-center justify-center text-[8px] font-bold text-brand-400">
              MF
            </div>
            <span className="text-sm font-semibold text-text-primary">Protótipo</span>
          </div>

          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${queue.queueSize > 0 ? 'bg-emerald-400 animate-pulse' : 'bg-text-muted'}`} />
            <span className="text-xs text-text-muted">{queue.queueSize} na fila</span>
          </div>
        </div>
      </header>

      {/* Sector selector */}
      <div className="border-b border-surface-3">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {Object.entries(sectors).map(([id, cfg]) => {
              const SecIcon = sectorIcons[id] || Stethoscope
              const isActive = id === selectedSector
              return (
                <button
                  key={id}
                  onClick={() => handleSectorChange(id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-surface-2 border border-surface-3 text-text-primary'
                      : 'text-text-muted hover:text-text-secondary hover:bg-surface-2/50'
                  }`}
                >
                  <SecIcon size={13} />
                  {cfg.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main area: phone + info */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
          {/* iPhone Frame */}
          <div className="flex-shrink-0">
            <div className="relative mx-auto">
              {/* Phone frame */}
              <div className="w-[300px] h-[620px] bg-[#1a1a1a] rounded-[40px] p-2 shadow-2xl shadow-black/40 border border-[#333]">
                {/* Notch area */}
                <div className="relative h-6 flex items-center justify-center mb-1">
                  <div className="w-24 h-5 bg-[#111] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
                  </div>
                </div>
                {/* Screen */}
                <div className="h-[calc(100%-32px)] bg-surface rounded-[28px] overflow-hidden relative">
                  {/* Screen content */}
                  <div className="h-full flex flex-col">
                    {/* App header */}
                    <div className="flex-shrink-0 px-3 pt-3 pb-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded bg-brand-500/20 flex items-center justify-center text-[7px] font-bold text-brand-400">
                          MF
                        </div>
                        <span className="text-xs font-semibold text-text-primary">MinhaFila</span>
                      </div>
                      {/* View toggle */}
                      <div className="flex bg-surface-3/50 rounded-lg p-0.5">
                        <button
                          onClick={() => setViewMode('patient')}
                          className={`px-2.5 py-1 rounded-md text-[9px] font-medium transition-all ${
                            viewMode === 'patient'
                              ? 'bg-surface-3 text-text-primary shadow-sm'
                              : 'text-text-muted hover:text-text-secondary'
                          }`}
                        >
                          <User size={11} className="inline mr-1" />
                          Paciente
                        </button>
                        <button
                          onClick={() => setViewMode('employee')}
                          className={`px-2.5 py-1 rounded-md text-[9px] font-medium transition-all ${
                            viewMode === 'employee'
                              ? 'bg-surface-3 text-text-primary shadow-sm'
                              : 'text-text-muted hover:text-text-secondary'
                          }`}
                        >
                          <UserCog size={11} className="inline mr-1" />
                          Funcionário
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-3 h-px bg-surface-3/50 mb-2" />

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-2">
                      {viewMode === 'patient' ? (
                        <PatientView sector={currentSectorCfg} queue={queue} />
                      ) : (
                        <EmployeeView queue={queue} />
                      )}
                    </div>

                    {/* Bottom bar */}
                    <div className="flex-shrink-0 pb-1 pt-1 flex justify-center">
                      <div className="w-20 h-1 bg-surface-3 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side info */}
          <div className="flex-1 max-w-sm space-y-4">
            {/* Sector info */}
            <div className="p-4 rounded-xl bg-surface-2 border border-surface-3">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-surface-3 flex items-center justify-center">
                  <Icon size={16} className="text-brand-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{currentSectorCfg.contextInfo.title}</h3>
                  <p className="text-[10px] text-text-muted">{currentSectorCfg.name}</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{currentSectorCfg.description}</p>
              <div className="space-y-1.5">
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Acessibilidade</p>
                {currentSectorCfg.contextInfo.accessibilityFeatures.map((f: string, i: number) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-text-secondary">
                    <CheckCircle2 size={10} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4 rounded-xl bg-surface-2 border border-surface-3">
              <h4 className="text-xs font-semibold text-text-primary mb-2">{viewMode === 'patient' ? 'Visão do Paciente' : 'Visão do Funcionário'}</h4>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                {viewMode === 'patient'
                  ? 'Acompanhe sua senha, veja a posição na fila, tempo estimado de espera e serviços disponíveis no estabelecimento.'
                  : 'Gerencie a fila de atendimento: chame o próximo paciente, visualize a lista de espera com priorização automática de idosos e PCDs.'}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-surface-2 border border-surface-3 text-center">
                <p className="text-lg font-bold text-text-primary font-mono">{queue.queueSize}</p>
                <p className="text-[9px] text-text-muted">Na Fila</p>
              </div>
              <div className="p-3 rounded-xl bg-surface-2 border border-surface-3 text-center">
                <p className="text-lg font-bold text-amber-400 font-mono">~{queue.waitTime} min</p>
                <p className="text-[9px] text-text-muted">Tempo Médio</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
