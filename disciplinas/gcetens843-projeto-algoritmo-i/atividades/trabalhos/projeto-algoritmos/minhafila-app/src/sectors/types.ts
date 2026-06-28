export interface SectorConfig {
  id: string
  name: string
  icon: string
  description: string
  primaryColor: string
  secondaryColor: string
  gradient: string
  badgeBg: string
  contextInfo: {
    title: string
    services: string[]
    estimatedWaitNote: string
    accessibilityFeatures: string[]
  }
}

export interface ViewState {
  screen: 'hub' | 'prototype' | 'admin'
  sector: string
}
