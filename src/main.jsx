import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Multi } from './pages'
import { Telas, MultiPropositos } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorias' element={<Telas />} />
        <Route path='/multipropositos' element={<Multi />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
