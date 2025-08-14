'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Sofa, Armchair, Building2, Sparkles, Clock, Shield, Truck, Star } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 1,
    icon: Sofa,
    title: "Tapizado de Sofás",
    description: "Renovación completa de sofás de 2, 3 plazas y esquineros con telas premium",
    features: ["Cambio completo de tapizado", "Reparación de estructura", "Cambio de espuma", "Garantía 12 meses"],
    price: "Desde $350",
    image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
    popular: true
  },
  {
    id: 2,
    icon: Armchair,
    title: "Restauración de Sillas",
    description: "Tapizado y restauración de sillas de comedor, oficina y decorativas",
    features: ["Tapizado individual o conjunto", "Reparación de patas", "Refuerzo de estructura", "Variedad de telas"],
    price: "Desde $45",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    popular: false
  },
  {
    id: 3,
    icon: Building2,
    title: "Muebles de Oficina",
    description: "Renovación de sillas ejecutivas, sillones de recepción y mobiliario corporativo",
    features: ["Cuero sintético premium", "Ergonomía mejorada", "Colores corporativos", "Servicio empresarial"],
    price: "Desde $180",
    image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
    popular: false
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Sillones Vintage",
    description: "Restauración especializada en muebles antiguos y de época",
    features: ["Conservación del estilo original", "Telas de época", "Técnicas tradicionales", "Asesoría especializada"],
    price: "Desde $280",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    popular: false
  }
]

const additionalServices = [
  {
    icon: Truck,
    title: "Servicio a Domicilio",
    description: "Recolección y entrega gratuita en toda la ciudad"
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Trabajos completados en 3-7 días hábiles"
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "12 meses de garantía en mano de obra"
  }
]

export default function Servicios() {
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
              Nuestros <span className="text-[#c3a8ec]">Servicios</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos servicios completos de tapicería y restauración con más de 20 años de experiencia. 
              Cada proyecto es único y recibe atención personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative">
                  <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-[#c3a8ec] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </div>
                  )}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#c3a8ec]" />
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Precio</p>
                      <p className="text-lg sm:text-xl font-bold text-[#c3a8ec]">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#c3a8ec] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={`/presupuesto?service=${service.id}`}
                    className="block w-full bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white py-3 sm:py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                  >
                    Solicitar Presupuesto
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Servicios <span className="text-[#c3a8ec]">Adicionales</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Complementamos nuestro trabajo principal con servicios que hacen la diferencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#c3a8ec]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nuestro <span className="text-[#c3a8ec]">Proceso</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y transparente para garantizar los mejores resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Consulta",
                description: "Evaluamos tu mueble y te asesoramos sobre las mejores opciones"
              },
              {
                step: "02", 
                title: "Presupuesto",
                description: "Recibe una cotización detallada sin compromiso en 24 horas"
              },
              {
                step: "03",
                title: "Trabajo",
                description: "Nuestros expertos trabajan con materiales de primera calidad"
              },
              {
                step: "04",
                title: "Entrega",
                description: "Te entregamos tu mueble renovado con garantía incluida"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-white font-bold text-lg sm:text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              ¿Listo para renovar tus muebles?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Solicita tu presupuesto gratuito y descubre cómo podemos transformar tus muebles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/presupuesto"
                className="bg-white text-[#c3a8ec] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-center"
              >
                Solicitar Presupuesto
              </Link>
              <a
                href="https://wa.me/1234567890?text=Hola, me gustaría información sobre sus servicios"
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 text-center"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}