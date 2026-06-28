import type { SectorConfig } from './types'

export const sectors: Record<string, SectorConfig> = {
  clinica: {
    id: 'clinica',
    name: 'Clínica',
    icon: 'Stethoscope',
    description: 'Consultas particulares, exames laboratoriais e atendimentos ambulatoriais',
    primaryColor: '#10B981',
    secondaryColor: '#059669',
    gradient: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    contextInfo: {
      title: 'Clínica Bem-Estar',
      services: ['Consulta Geral', 'Exames Laboratoriais', 'Vacinação', 'Curativos', 'Pré-Natal'],
      estimatedWaitNote: 'Tempo médio de consulta: 15 min',
      accessibilityFeatures: ['Atendimento prioritário (Lei 10.048/2000)', 'Guia de acesso para PCD visual', 'Sinalização em Braille', 'Comunicação em Libras disponível'],
    }
  },
  hospital: {
    id: 'hospital',
    name: 'Hospital',
    icon: 'HeartPulse',
    description: 'Pronto-socorro, UTIs, internações e emergências 24h',
    primaryColor: '#EF4444',
    secondaryColor: '#DC2626',
    gradient: 'from-red-500 to-rose-600',
    badgeBg: 'bg-red-500/10 text-red-400 border-red-500/20',
    contextInfo: {
      title: 'Hospital São Lucas',
      services: ['Pronto-Socorro', 'Triagem (Manchester)', 'Internação', 'Raio-X', 'Cirurgias Eletivas'],
      estimatedWaitNote: 'Protocolo de Manchester: vermelho (imediato), laranja (<10min), amarelo (<60min)',
      accessibilityFeatures: ['Acolhimento humanizado', 'Tradutor Libras 24h', 'Sinalização tátil no piso', 'Aplicativo com notificação visual'],
    }
  },
  universidade: {
    id: 'universidade',
    name: 'Universidade',
    icon: 'GraduationCap',
    description: 'Matrículas, secretaria acadêmica, biblioteca e restaurante universitário',
    primaryColor: '#3B82F6',
    secondaryColor: '#2563EB',
    gradient: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    contextInfo: {
      title: 'UFRB — Campus Universitário',
      services: ['Secretaria Acadêmica', 'Biblioteca', 'RU - Refeição', 'Estágio e Extensão', 'NAP - Acessibilidade'],
      estimatedWaitNote: 'Horário de pico: 11h-13h (RU) e 18h-20h (Secretaria)',
      accessibilityFeatures: ['NAP - Núcleo de Acessibilidade', 'Atendimento prioritário', 'Materiais em formato acessível', 'Guia intérprete disponível'],
    }
  },
  banco: {
    id: 'banco',
    name: 'Banco',
    icon: 'Landmark',
    description: 'Atendimento bancário, caixas, gerência de conta e seguros',
    primaryColor: '#8B5CF6',
    secondaryColor: '#7C3AED',
    gradient: 'from-violet-500 to-purple-600',
    badgeBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    contextInfo: {
      title: 'Banco Central do Futuro',
      services: ['Caixa Rápido', 'Gerência de Conta', 'Abertura de Conta', 'Seguros', 'Crédito e Financiamento'],
      estimatedWaitNote: 'Lei 13.726/2018: prioridade para idosos, gestantes e PCDs',
      accessibilityFeatures: ['Terminais com interface simplificada', 'Caixas adaptados para cadeirantes', 'Leitor de tela nos terminais', 'Atendimento preferencial (Lei 10.048)'],
    }
  }
}
