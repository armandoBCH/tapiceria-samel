'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Star } from 'lucide-react'
import Link from 'next/link'

export default function Contacto() {
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
              <span className="text-[#c3a8ec]">Contáctanos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte con todos tus proyectos de tapicería. 
              Contáctanos por tu medio preferido y recibe atención personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                
                {/* Contact Cards */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#c3a8ec]/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#c3a8ec]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h3>
                        <p className="text-gray-600 mb-2">Av. Principal 123, Ciudad</p>
                        <p className="text-sm text-gray-500">Zona Centro, fácil acceso</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#c3a8ec]/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-[#c3a8ec]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
                        <a href="tel:+1234567890" className="text-[#c3a8ec] hover:underline font-semibold">
                          +1 234 567 890
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Llamadas y mensajes</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#c3a8ec]/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[#c3a8ec]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <a href="mailto:info@tapiceriasamel.com" className="text-[#c3a8ec] hover:underline font-semibold">
                          info@tapiceriasamel.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Respuesta en 24 horas</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#c3a8ec]/10 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[#c3a8ec]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Horarios</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Lunes a Viernes: 9:00 - 18:00</p>
                          <p>Sábados: 9:00 - 14:00</p>
                          <p className="text-red-600">Domingos: Cerrado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & CTA */}
              <div className="bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos en Redes</h3>
                <div className="flex space-x-4 mb-6">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://wa.me/1234567890?text=Hola, me gustaría solicitar información sobre sus servicios"
                    className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contactar por WhatsApp</span>
                  </a>
                  <Link
                    href="/presupuesto"
                    className="block text-center bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar Presupuesto
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96 lg:h-full min-h-[400px] relative">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8071738854!2d-74.07184368571712!3d4.650155743703119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a24b2ca8a67%3A0x1e2b8b2b2b2b2b2b!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sco!4v1629874521234!5m2!1sen!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Tapicería Samel</h4>
                          <p className="text-sm text-gray-600">Av. Principal 123</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Preguntas <span className="text-[#c3a8ec]">Frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "¿Cuánto tiempo toma el proceso de tapizado?",
                answer: "El tiempo varía según el tipo de mueble y la complejidad del trabajo. Generalmente, un sofá toma entre 5-7 días hábiles, mientras que sillas individuales pueden estar listas en 2-3 días."
              },
              {
                question: "¿Ofrecen servicio a domicilio?",
                answer: "Sí, ofrecemos servicio de recolección y entrega a domicilio sin costo adicional dentro de la ciudad. Para áreas fuera de la ciudad, aplicamos una tarifa especial."
              },
              {
                question: "¿Qué garantía ofrecen en su trabajo?",
                answer: "Todos nuestros trabajos incluyen garantía de 12 meses en mano de obra y 6 meses en materiales. Esto cubre defectos de fabricación y problemas relacionados con la calidad del trabajo."
              },
              {
                question: "¿Puedo elegir mi propia tela?",
                answer: "Por supuesto! Puedes traer tu propia tela o elegir de nuestro extenso catálogo de telas premium. Te asesoramos para que elijas la mejor opción según tu estilo y uso."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}