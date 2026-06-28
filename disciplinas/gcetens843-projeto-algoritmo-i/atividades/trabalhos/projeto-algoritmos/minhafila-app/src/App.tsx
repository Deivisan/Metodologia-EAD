import { useState } from 'react'
import type { ViewState } from './sectors/types'
import Hub from './components/Hub'
import Prototype from './components/Prototype'

export default function App() {
  const [view, setView] = useState<ViewState>({ screen: 'hub', sector: 'clinica' })

  const handleNavigate = (screen: ViewState['screen'], sector?: string) => {
    setView({ screen, sector: sector || view.sector })
  }

  if (view.screen === 'hub') {
    return <Hub onNavigate={handleNavigate} />
  }

  return (
    <Prototype
      currentSector={view.sector}
      onNavigate={handleNavigate}
    />
  )
}
