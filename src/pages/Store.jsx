import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'

export default function Store(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''

  useEffect(()=>{
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(r => r.json())
      .then(data => {
        setProducts(data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => setLoading(false))
  },[])

  const filtered = products.filter(p=>{
    if(!searchQuery) return true
    return (
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description || '').toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div>
      <Navbar />

      <main className="py-10 px-6 container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Store</h1>
          <p className="text-slate-500 mt-2">Buy with web3 wallet!</p>
        </div>

        {/* Search bar removed from here */}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && (
            <div className="col-span-full text-center text-slate-500">
              Loading products...
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="col-span-full text-center text-slate-500">
              No products found.
            </div>
          )}

          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </div>
  )
}
