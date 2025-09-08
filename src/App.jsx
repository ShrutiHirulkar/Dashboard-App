import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import AddWidgetModal from './components/AddWidgetModal'

export default function App(){
  const [open, setOpen] = useState(false)
  return (
    <div className="app-shell">
      <Navbar onOpenAdd={() => setOpen(true)} />
      <Dashboard onOpenAdd={() => setOpen(true)} />
      {open && <AddWidgetModal onClose={() => setOpen(false)} />}
    </div>
  )
}
