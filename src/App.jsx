import { useState } from 'react'
import Header from './components/Header'
import { Sidebar } from './components/Sidebar'
import { MainContent } from './components/MainContent'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header onMenuClick={handleMenuClick} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
        <MainContent />
      </div>
    </div>
  )
}

export default App