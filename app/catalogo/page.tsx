'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Search, Filter, Grid, List, Star } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { id: 'all', name: 'Todos', count: 24 },
  { id: 'sofas', name: 'Sofás', count: 8 },
  { id: 'sillas', name: 'Sillas', count: 6 },
  { id: 'sillones', name: 'Sillones', count: 4 },
  { id: 'oficina', name: 'Oficina', count: 6 }
]

const products = [
  {
    id: 1,
    name: "Sofá 3 Plazas Premium",
    category: "sofas",
    price: 450,
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    description: "Tapizado completo con tela premium resistente",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    name: "Sillón Ejecutivo Cuero",
    category: "oficina",
    price: 320,
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
    description: "Renovación completa en cuero sintético de alta calidad",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    name: "Set 6 Sillas Comedor",
    category: "sillas",
    price: 280,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    description: "Tapizado conjunto con tela coordinada",
    rating: 4,
    featured: true
  },
  {
    id: 4,
    name: "Butaca Vintage Restaurada",
    category: "sillones",
    price: 220,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Restauración completa estilo retro",
    rating: 5,
    featured: false
  },
  {
    id: 5,
    name: "Sofá Esquinero L",
    category: "sofas",
    price: 580,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    description: "Tapizado modular con telas premium",
    rating: 5,
    featured: true
  },
  {
    id: 6,
    name: "Silla Giratoria Oficina",
    category: "oficina",
    price: 180,
    image: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
    description: "Renovación ergonómica con materiales duraderos",
    rating: 4,
    featured: false
  }
]

export default function Catalogo() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nuestro <span className="text-[#c3a8ec]">Catálogo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestros servicios de tapizado y restauración. 
              Cada pieza es única y refleja nuestro compromiso con la excelencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#c3a8ec] focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-[#c3a8ec] text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-[#c3a8ec] text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#c3a8ec] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={`overflow-hidden ${
                  viewMode === 'list' ? 'md:w-1/3 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-[#c3a8ec] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </div>
                  )}
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-[#c3a8ec]/10 text-[#c3a8ec] px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {categories.find(cat => cat.id === product.category)?.name || product.category}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < product.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Precio desde</p>
                      <p className="text-2xl font-bold text-[#c3a8ec]">${product.price}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={`/producto/${product.id}`}
                        className="bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center text-sm"
                      >
                        Ver Detalles
                      </Link>
                      <Link
                        href={`/presupuesto?product=${product.id}`}
                        className="border border-[#c3a8ec] text-[#c3a8ec] hover:bg-[#c3a8ec] hover:text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 text-center text-sm"
                      >
                        Presupuesto
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}