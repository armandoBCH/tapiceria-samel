'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">+500 clientes satisfechos</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Renovamos</span>
              <span className="block text-[#c3a8ec]">tus muebles</span>
              <span className="block">como nuevos</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Especialistas en tapizado y restauración de muebles. Transformamos tus piezas favoritas con la mejor calidad y diseño.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalogo"
                className="group bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/presupuesto"
                className="border-2 border-[#c3a8ec] text-[#c3a8ec] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c3a8ec] hover:text-white transition-all duration-300 text-center"
              >
                Solicitar Presupuesto
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <h3 className="text-3xl font-bold text-[#c3a8ec]">20+</h3>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#c3a8ec]">500+</h3>
                <p className="text-gray-600">Muebles restaurados</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#c3a8ec]">98%</h3>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
            </div>
          </motion.div>

          {/* Before/After Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-8">
              {/* Before */}
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  ANTES
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
                    alt="Sofá antes del tapizado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* After */}
              <div className="relative group -mt-4">
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  DESPUÉS
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg"
                    alt="Sofá después del tapizado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-full opacity-20"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#c4a9ee] to-[#c2a8ec] rounded-full opacity-10"
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}