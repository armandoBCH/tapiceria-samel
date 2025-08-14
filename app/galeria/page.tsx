'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { X, ChevronLeft, ChevronRight, Star, Filter } from 'lucide-react'
import Link from 'next/link'

const categories = [
  { id: 'all', name: 'Todos', count: 24 },
  { id: 'sofas', name: 'Sofás', count: 8 },
  { id: 'sillas', name: 'Sillas', count: 6 },
  { id: 'sillones', name: 'Sillones', count: 4 },
  { id: 'oficina', name: 'Oficina', count: 6 }
]

const galleryItems = [
  {
    id: 1,
    title: "Sofá 3 Plazas Clásico",
    category: "sofas",
    beforeImage: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    afterImage: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    description: "Transformación completa con tapizado premium en tela gris perla",
    client: "María González",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    title: "Set 6 Sillas Comedor",
    category: "sillas",
    beforeImage: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    afterImage: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    description: "Renovación completa del juego de comedor con tela coordinada",
    client: "Carlos Rodríguez",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    title: "Sillón Ejecutivo Premium",
    category: "oficina",
    beforeImage: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
    afterImage: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
    description: "Restauración en cuero sintético negro de alta calidad",
    client: "Ana Martínez",
    rating: 5,
    featured: true
  },
  {
    id: 4,
    title: "Butaca Vintage Restaurada",
    category: "sillones",
    beforeImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    afterImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Restauración completa manteniendo el estilo original",
    client: "Roberto Silva",
    rating: 5,
    featured: false
  },
  {
    id: 5,
    title: "Sofá Esquinero Moderno",
    category: "sofas",
    beforeImage: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    afterImage: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    description: "Tapizado modular con tela antimanchas",
    client: "Laura Pérez",
    rating: 5,
    featured: true
  },
  {
    id: 6,
    title: "Sillas Oficina Ergonómicas",
    category: "oficina",
    beforeImage: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
    afterImage: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
    description: "Renovación de 12 sillas para oficina corporativa",
    client: "Empresa XYZ",
    rating: 5,
    featured: false
  }
]

export default function Galeria() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)
  const [showBefore, setShowBefore] = useState(true)

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  )

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item)
    setShowBefore(true)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const nextItem = () => {
    if (selectedItem) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
      const nextIndex = (currentIndex + 1) % filteredItems.length
      setSelectedItem(filteredItems[nextIndex])
      setShowBefore(true)
    }
  }

  const prevItem = () => {
    if (selectedItem) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
      const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
      setSelectedItem(filteredItems[prevIndex])
      setShowBefore(true)
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nuestra <span className="text-[#c3a8ec]">Galería</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre las increíbles transformaciones que hemos realizado. 
              Cada proyecto cuenta una historia de renovación y calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-16 sm:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtrar por categoría
            </h2>
            <span className="text-sm text-gray-500">
              {filteredItems.length} proyecto{filteredItems.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
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

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => openModal(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-[#c3a8ec] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destacado
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Ver antes y después</p>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#c3a8ec]/10 text-[#c3a8ec] px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {categories.find(cat => cat.id === item.category)?.name || item.category}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">{item.description}</p>
                  <p className="text-sm text-gray-500">Cliente: {item.client}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                  <p className="text-gray-600">Cliente: {selectedItem.client}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Before/After Toggle */}
              <div className="p-4 sm:p-6 border-b">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      showBefore 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    ANTES
                  </button>
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      !showBefore 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    DESPUÉS
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={showBefore ? selectedItem.beforeImage : selectedItem.afterImage}
                    alt={`${selectedItem.title} - ${showBefore ? 'Antes' : 'Después'}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevItem}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextItem}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-[#c3a8ec]/10 text-[#c3a8ec] px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {categories.find(cat => cat.id === selectedItem.category)?.name || selectedItem.category}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(selectedItem.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedItem.description}</p>
                
                <Link
                  href="/presupuesto"
                  className="block w-full sm:w-auto sm:inline-block bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Solicitar Presupuesto Similar
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              ¿Te gustó algún proyecto?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Podemos crear algo similar para ti. Cada proyecto es único y personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/presupuesto"
                className="bg-white text-[#c3a8ec] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-center"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                href="/catalogo"
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 text-center"
              >
                Ver Catálogo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}