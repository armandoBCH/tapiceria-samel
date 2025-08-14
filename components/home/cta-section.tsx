'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              ¿Listo para transformar <br />
              <span className="text-white/90">tus muebles?</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Contáctanos hoy mismo y comencemos a darle nueva vida a tus muebles favoritos. 
              Presupuesto gratuito y asesoramiento personalizado.
            </p>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-white mb-3" />
                <h3 className="font-semibold text-white mb-1">Nuestra Ubicación</h3>
                <p className="text-white/90 text-sm">Av. Principal 123, Ciudad</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-white mb-3" />
                <h3 className="font-semibold text-white mb-1">Horarios</h3>
                <p className="text-white/90 text-sm">Lun - Sáb: 9:00 - 18:00</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/1234567890?text=Hola, me gustaría solicitar información sobre sus servicios de tapicería"
                className="group flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+1234567890"
                className="group flex items-center justify-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Llamar</span>
              </a>
            </div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Tapicería profesional"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Respuesta inmediata</p>
                  <p className="text-sm text-gray-600">Te contactamos en minutos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}