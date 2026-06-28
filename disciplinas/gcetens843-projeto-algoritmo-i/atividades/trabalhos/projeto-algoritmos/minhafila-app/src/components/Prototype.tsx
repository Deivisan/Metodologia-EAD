import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Settings, Monitor, Clock, Users, Bell,
  Smartphone, QrCode, Info,
  Stethoscope, HeartPulse, GraduationCap, Landmark,
  AlertTriangle, CheckCircle2
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

// Mock queue state
function useQueue(_sectorId: string) {
  const [currentTicket, setCurrentTicket] = useState('A001')
  const [queueSize, setQueueSize] = useState(12)
  const [ticketNumber, setTicketNumber] = useState(1)
  const [lastCalled, setLastCalled] = useState<string | null>(null)
  const [waitTime, setWaitTime] = useState(8)
  const [showAlert, setShowAlert] = useState(false)

  const callNext = useCallback(() => {
    if (queueSize <= 0) return
    const nextNum = ticketNumber + 1
    const nextTicket = `A${String(nextNum).padStart(3, '0')}`
    setLastCalled(nextTicket)
    setCurrentTicket(nextTicket)
    setTicketNumber(nextNum)
    setQueueSize(prev => Math.max(0, prev - 1))
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
    setWaitTime(prev => Math.max(3, prev - 1))
  }, [queueSize, ticketNumber])

  // Simulate new tickets arriving
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setQueueSize(prev => prev + 1)
        setWaitTime(prev => prev + 1)
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return { currentTicket, queueSize, ticketNumber, lastCalled, waitTime, showAlert, callNext, setShowAlert }
}

export default function Prototype({ currentSector, onNavigate }: PrototypeProps) {
  const sector = sectors[currentSector] || sectors.clinica
  const Icon = sectorIcons[currentSector] || Stethoscope
  const queue = useQueue(currentSector)
  const [showInfo, setShowInfo] = useState(false)
  const [selectedSector, setSelectedSector] = useState(currentSector)

  const handleSectorChange = (id: string) => {
    setSelectedSector(id)
    onNavigate('prototype', id)
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-surface/80 border-b border-surface-3">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => onNavigate('hub')}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-[8px] font-bold text-white">
              MF
            </div>
            <span className="text-sm font-semibold text-text-primary">MinhaFila</span>
          </div>

          <button
            onClick={() => onNavigate('admin', selectedSector)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-500/10 text-brand-400 text-xs font-medium hover:bg-brand-500/20 transition-colors"
          >
            <Settings size={14} />
            Painel Admin
          </button>
        </div>
      </header>

      {/* Sector selector */}
      <div className="border-b border-surface-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto">
            {Object.entries(sectors).map(([id, cfg]) => {
              const SecIcon = sectorIcons[id] || Stethoscope
              const isActive = id === selectedSector
              return (
                <button
                  key={id}
                  onClick={() => handleSectorChange(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? 'bg-surface-2 border border-surface-3 text-text-primary shadow-sm'
                      : 'text-text-muted hover:text-text-secondary hover:bg-surface-2/50'
                  }`}
                >
                  <SecIcon size={14} />
                  {cfg.name}
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Alert overlay */}
      <AnimatePresence>
        {queue.showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-emerald-400 animate-bounce" />
              <span className="text-sm font-medium text-emerald-300">
                Chamando senha <span className="font-bold text-emerald-200">{queue.lastCalled}</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Main display */}
          <div className="lg:col-span-2 space-y-6">
            {/* Now serving card */}
            <motion.div
              key={selectedSector}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-2xl bg-surface-2 border border-surface-3"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-5`} />
              
              <div className="relative p-6 sm:p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Monitor size={14} className="text-text-muted" />
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Em Atendimento</span>
                </div>
                
                <div className="relative inline-flex mb-4">
                  <div className="text-7xl sm:text-8xl font-black tracking-tight text-white font-mono">
                    {queue.currentTicket}
                  </div>
                  <motion.div
                    key={queue.currentTicket}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 -right-4"
                  >
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </motion.div>
                </div>

                <p className="text-sm text-text-muted mb-2">
                  Dirija-se ao <span className="text-text-primary font-semibold">Guichê 03</span>
                </p>
                <p className="text-xs text-text-muted">
                  {sector.contextInfo.estimatedWaitNote}
                </p>
              </div>
            </motion.div>

            {/* Queue stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Na Fila', value: queue.queueSize, icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                { label: 'Tempo Estimado', value: `${queue.waitTime} min`, icon: Clock, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                { label: 'Chamadas Hoje', value: queue.ticketNumber, icon: Bell, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="p-4 rounded-xl bg-surface-2 border border-surface-3"
                >
                  <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-2`}>
                    <stat.icon size={16} className={stat.color} />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono">{stat.value}</div>
                  <div className="text-[11px] text-text-muted mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Service list */}
            <div className="p-4 rounded-xl bg-surface-2 border border-surface-3">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Serviços Disponíveis</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sector.contextInfo.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-3/30 text-xs text-text-secondary"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Context + mobile view */}
          <div className="space-y-6">
            {/* Sector context card */}
            <motion.div
              key={selectedSector}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-5 rounded-2xl bg-surface-2 border border-surface-3"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">{sector.contextInfo.title}</h3>
                  <p className="text-[11px] text-text-muted">{sector.name}</p>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed mb-4">{sector.description}</p>

              {/* Sector-specific contextual info */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Acessibilidade</h4>
                {sector.contextInfo.accessibilityFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                    <CheckCircle2 size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mobile queue card */}
            <div className="p-5 rounded-2xl bg-surface-2 border border-surface-3">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone size={16} className="text-brand-400" />
                <span className="text-xs font-semibold text-text-primary">Acompanhe pelo celular</span>
              </div>

              <div className="flex items-center justify-center p-4 rounded-xl bg-surface-3/30 border border-dashed border-surface-3 mb-3">
                <div className="text-center">
                  <QrCode size={48} className="text-brand-400 mx-auto mb-2" />
                  <p className="text-[10px] text-text-muted">Escaneie para entrar na fila</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-text-secondary">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-3/20">
                  <span>Sua senha</span>
                  <span className="font-mono font-bold text-brand-400">A{String(queue.ticketNumber + 1).padStart(3, '0')}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-3/20">
                  <span>Posição</span>
                  <span className="font-mono font-bold text-amber-400">{queue.queueSize + 1}º</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-3/20">
                  <span>Previsão</span>
                  <span className="font-mono font-bold text-emerald-400">~{queue.waitTime + 5} min</span>
                </div>
              </div>
            </div>

            {/* Info button */}
            <button
              onClick={() => setShowInfo(true)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-surface-2 border border-surface-3 text-text-muted hover:text-text-secondary hover:border-surface-3/80 transition-colors text-xs font-medium"
            >
              <Info size={14} />
              Sobre este setor
            </button>
          </div>
        </div>
      </main>

      {/* Info modal */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowInfo(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl bg-surface-2 border border-surface-3 shadow-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-text-primary">{sector.contextInfo.title}</h2>
                  <p className="text-xs text-text-muted">{sector.name}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-text-secondary">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Serviços</h4>
                  <div className="space-y-1.5">
                    {sector.contextInfo.services.map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-brand-400" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Acessibilidade</h4>
                  <div className="space-y-1.5">
                    {sector.contextInfo.accessibilityFeatures.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs text-amber-300/80">
                  <AlertTriangle size={14} className="inline mr-1.5" />
                  {sector.contextInfo.estimatedWaitNote}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
