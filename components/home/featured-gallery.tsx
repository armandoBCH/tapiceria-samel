'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const featuredWorks = [
  {
    id: 1,
    title: "Sofá Clásico Restaurado",
    category: "Sofás",
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    description: "Tapizado completo con tela premium"
  },
  {
    id: 2,
    title: "Sillón Ejecutivo",
    category: "Oficina",
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
    description: "Renovación de cuero sintético"
  },
  {
    id: 3,
    title: "Set de Comedor",
    category: "Sillas",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    description: "6 sillas tapizadas a juego"
  },
  {
    id: 4,
    title: "Butaca Vintage",
    category: "Sillones",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Restauración completa estilo retro"
  }
]

export default function FeaturedGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-[#c3a8ec]">Trabajos Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada proyecto es único y refleja nuestro compromiso con la excelencia. 
            Descubre algunas de nuestras transformaciones más impresionantes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#c3a8ec]/10 text-[#c3a8ec] px-3 py-1 rounded-full text-sm font-semibold">
                    {work.category}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{work.description}</p>
                
                <Link
                  href={`/producto/${work.id}`}
                  className="block w-full bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center"
                >
                  Ver Detalles
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/catalogo"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}