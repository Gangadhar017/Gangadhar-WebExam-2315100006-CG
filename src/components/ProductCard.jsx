import React from 'react'

export default function ProductCard({product}){
  return (
    <article className="bg-white rounded-xl shadow-sm border p-6 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="max-h-64 object-contain" />
      </div>

      <div className="mt-6 text-center">
        <h3 className="font-semibold text-sm md:text-base leading-tight">{product.title}</h3>
        <p className="text-slate-500 mt-2">${product.price.toFixed(2)} USD</p>

        <button className="mt-4 w-full bg-black text-white rounded-lg py-3">View Details</button>
      </div>
    </article>
  )
}
