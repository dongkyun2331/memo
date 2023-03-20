import Header from './components/Header'
import NoteList from './components/NoteList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NoteList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
