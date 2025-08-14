'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Star, ChevronLeft, ChevronRight, Heart, Share2, Truck, Shield, Clock, Check, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Mock product data - In real app, this would come from Supabase
const products = [
  {
    id: '1',
    name: "Sofá 3 Plazas Premium",
    category: "sofas",
    price: 450,
    originalPrice: 580,
    images: [
      "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    ],
    description: "Transformación completa de sofá de 3 plazas con materiales premium. Incluye cambio completo de tapizado, renovación de espuma, reparación de estructura y garantía extendida.",
    longDescription: "Nuestro servicio de tapizado premium para sofás de 3 plazas incluye una renovación completa que devolverá la vida a tu mueble favorito. Utilizamos únicamente telas de primera calidad, espumas de alta densidad y técnicas artesanales perfeccionadas durante más de 20 años de experiencia.",
    features: [
      "Cambio completo de tapizado con telas premium",
      "Renovación de espuma de alta densidad",
      "Reparación y refuerzo de estructura",
      "Limpieza profunda del armazón",
      "Garantía de 12 meses en mano de obra",
      "Servicio de recolección y entrega incluido"
    ],
    specifications: {
      "Tiempo de trabajo": "5-7 días hábiles",
      "Garantía": "12 meses",
      "Materiales": "Telas premium importadas",
      "Espuma": "Alta densidad 35kg/m³",
      "Estructura": "Refuerzo incluido",
      "Servicio": "Recolección y entrega gratuita"
    },
    rating: 4.9,
    reviews: 127,
    featured: true,
    beforeAfter: {
      before: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      after: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg"
    }
  },
  {
    id: '2',
    name: "Sillón Ejecutivo Cuero Premium",
    category: "oficina",
    price: 320,
    originalPrice: 420,
    images: [
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg"
    ],
    description: "Renovación completa de sillón ejecutivo en cuero sintético de alta calidad con mejoras ergonómicas.",
    longDescription: "Especializado en la renovación de sillones ejecutivos, este servicio incluye tapizado en cuero sintético premium, ajustes ergonómicos y reparación de mecanismos.",
    features: [
      "Cuero sintético premium resistente",
      "Mejoras ergonómicas incluidas",
      "Reparación de mecanismos",
      "Limpieza y desinfección completa",
      "Garantía de 12 meses",
      "Colores corporativos disponibles"
    ],
    specifications: {
      "Tiempo de trabajo": "3-4 días hábiles",
      "Garantía": "12 meses",
      "Material": "Cuero sintético premium",
      "Ergonomía": "Ajustes incluidos",
      "Mecanismos": "Reparación completa",
      "Colores": "Variedad disponible"
    },
    rating: 4.8,
    reviews: 89,
    featured: false,
    beforeAfter: {
      before: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
      after: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg"
    }
  }
]

const relatedProducts = [
  {
    id: '3',
    name: "Set 6 Sillas Comedor",
    price: 280,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    rating: 4.7
  },
  {
    id: '4',
    name: "Butaca Vintage",
    price: 220,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    rating: 4.9
  }
]

export default function ProductPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [selectedTab, setSelectedTab] = useState('description')

  const product = products.find(p => p.id === params.id)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
            <Link href="/catalogo" className="text-[#c3a8ec] hover:underline">
              Volver al catálogo
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? product.images.length - 1 : prev - 1)
  }

  return (
    <>
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#c3a8ec]">Inicio</Link>
            <span className="text-gray-400">/</span>
            <Link href="/catalogo" className="text-gray-500 hover:text-[#c3a8ec]">Catálogo</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Images */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Like Button */}
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-[#c3a8ec] ring-2 ring-[#c3a8ec]/20' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Before/After Toggle */}
              {product.beforeAfter && (
                <button
                  onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                  className="w-full bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {showBeforeAfter ? 'Ver Resultado Final' : 'Ver Antes y Después'}
                </button>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <div>
                {product.featured && (
                  <span className="inline-block bg-[#c3a8ec] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    Destacado
                  </span>
                )}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-[#c3a8ec]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      Ahorro ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Qué incluye?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-[#c3a8ec]" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Envío Gratis</p>
                    <p className="text-gray-600 text-xs">Recolección y entrega</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-[#c3a8ec]" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Garantía</p>
                    <p className="text-gray-600 text-xs">12 meses incluidos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-[#c3a8ec]" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Entrega Rápida</p>
                    <p className="text-gray-600 text-xs">5-7 días hábiles</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link
                  href={`/presupuesto?product=${product.id}`}
                  className="block w-full bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white py-4 rounded-xl font-semibold text-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Presupuesto
                </Link>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={`https://wa.me/1234567890?text=Hola, me interesa el servicio: ${product.name}`}
                    className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-center transition-all duration-300"
                  >
                    WhatsApp
                  </a>
                  <button className="border-2 border-[#c3a8ec] text-[#c3a8ec] hover:bg-[#c3a8ec] hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Modal */}
      <AnimatePresence>
        {showBeforeAfter && product.beforeAfter && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBeforeAfter(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Antes y Después</h3>
                  <button
                    onClick={() => setShowBeforeAfter(false)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-3">ANTES</h4>
                    <img
                      src={product.beforeAfter.before}
                      alt="Antes"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-600 mb-3">DESPUÉS</h4>
                    <img
                      src={product.beforeAfter.after}
                      alt="Después"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Details Tabs */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b border-gray-200 mb-8">
            {[
              { id: 'description', label: 'Descripción' },
              { id: 'specifications', label: 'Especificaciones' },
              { id: 'reviews', label: 'Reseñas' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 sm:px-6 py-3 font-semibold border-b-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-[#c3a8ec] text-[#c3a8ec]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            {selectedTab === 'description' && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Descripción Detallada</h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {product.longDescription}
                </p>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Especificaciones Técnicas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-900">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Reseñas de Clientes</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "María González",
                      rating: 5,
                      comment: "Excelente trabajo, mi sofá quedó como nuevo. Muy recomendado.",
                      date: "Hace 2 semanas"
                    },
                    {
                      name: "Carlos Rodríguez",
                      rating: 5,
                      comment: "Profesionales de primera, cumplieron con los tiempos prometidos.",
                      date: "Hace 1 mes"
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex space-x-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Servicios <span className="text-[#c3a8ec]">Relacionados</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/producto/${relatedProduct.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#c3a8ec]">${relatedProduct.price}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${
                            i < Math.floor(relatedProduct.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}