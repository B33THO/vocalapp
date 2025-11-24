import { Routes, Route } from 'react-router-dom'
import BodyParts from './components/BodyParts.jsx'
import MainMenu from './components/MainMenu.jsx'
import BodyPartsTest from './components/BodyPartsTest.jsx'

function App() {
  
  return (
    <>
      <header className="bg-slate-300 shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          <h1 className="text-xl font-bold">Elías Salvador García Castellanos</h1>          
        </div>
      </header>

      <main className="bg-gray-200 p-4">
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/bodyparts' element={<BodyParts />} />
          <Route path='/bodypartstest' element={<BodyPartsTest />} />
        </Routes>
        
      </main>
    </>
  )
}

export default App
