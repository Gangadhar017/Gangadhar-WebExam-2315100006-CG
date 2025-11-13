import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Routes>
        <Route path="/" element={<Store/>} />
      </Routes>
    </div>
  )
}
