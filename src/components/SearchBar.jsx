import React, { useState, useEffect } from 'react'

export default function SearchBar({value = '', onChange}){
  const [q, setQ] = useState(value)

  useEffect(()=>{ setQ(value) },[value])

  // Debounce updates to avoid rapid URL updates
  useEffect(()=>{
    const t = setTimeout(()=> onChange(q), 300)
    return ()=>clearTimeout(t)
  },[q, onChange])

  return (
    <div className="flex items-center">
      <input
        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-200 placeholder:italic"
        placeholder="Search products..."
        value={q}
        onChange={(e)=>setQ(e.target.value)}
      />
      {q && (
        <button onClick={()=>setQ('')} className="ml-2 px-3 py-2">✕</button>
      )}
    </div>
  )
}
