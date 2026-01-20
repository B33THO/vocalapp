import { Routes, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu.jsx'
import BodyParts from './pages/BodyParts.jsx'
import BodyPartsTest from './pages/BodyPartsTest.jsx'
import Alphabet from './pages/Alphabet.jsx'
import AlphabetPractice from './pages/AlphabetPractice.jsx'
//import Read from './pages/Read.jsx'
import Body from './pages/Body.jsx'

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
          <Route path='/body' element={<Body />} />
          <Route path='/alphabet' element={<Alphabet />} />
          <Route path='/alphabetpractice' element={<AlphabetPractice />} />
          {/* <Route path='/read' element={<Read />} /> */}
        </Routes>

      </main>
    </>
  )
}

export default App
