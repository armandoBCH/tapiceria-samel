'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Award, Users, Clock, Heart, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Clock, label: "Años de Experiencia", value: "20+" },
  { icon: Users, label: "Clientes Satisfechos", value: "500+" },
  { icon: Award, label: "Proyectos Completados", value: "1000+" },
  { icon: Heart, label: "Satisfacción Cliente", value: "98%" }
]

const team = [
  {
    name: "Samuel Rodríguez",
    role: "Fundador y Maestro Tapicero",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    experience: "25 años de experiencia",
    description: "Especialista en restauración de muebles antiguos y técnicas tradicionales de tapicería."
  },
  {
    name: "María González",
    role: "Diseñadora de Interiores",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    experience: "15 años de experiencia",
    description: "Experta en selección de telas y combinaciones de colores para crear ambientes únicos."
  },
  {
    name: "Carlos Martínez",
    role: "Especialista en Cuero",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    experience: "18 años de experiencia",
    description: "Maestro en trabajos con cuero y materiales premium para muebles ejecutivos."
  }
]

const values = [
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Utilizamos solo materiales de primera calidad y técnicas artesanales perfeccionadas durante décadas."
  },
  {
    icon: Heart,
    title: "Pasión por el Detalle",
    description: "Cada proyecto recibe atención personalizada, cuidando hasta el más mínimo detalle."
  },
  {
    icon: Users,
    title: "Servicio Personalizado",
    description: "Trabajamos de cerca con cada cliente para entender sus necesidades y superar expectativas."
  },
  {
    icon: CheckCircle,
    title: "Garantía Total",
    description: "Respaldamos nuestro trabajo con garantía completa porque confiamos en nuestra calidad."
  }
]

export default function Nosotros() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Conoce <span className="text-[#c3a8ec]">Nuestra Historia</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Desde 2004, Tapicería Samel ha sido sinónimo de calidad, tradición y excelencia 
                en el arte de la tapicería. Nuestra pasión por renovar muebles ha transformado 
                miles de hogares y oficinas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/presupuesto"
                  className="bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  Trabajar con Nosotros
                </Link>
                <Link
                  href="/galeria"
                  className="border-2 border-[#c3a8ec] text-[#c3a8ec] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#c3a8ec] hover:text-white transition-all duration-300 text-center"
                >
                  Ver Nuestro Trabajo
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Taller de tapicería"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">20+ Años</p>
                    <p className="text-sm text-gray-600">de Experiencia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#c3a8ec]" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c3a8ec] mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nuestra <span className="text-[#c3a8ec]">Historia</span>
            </h2>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Los Inicios (2004)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Todo comenzó en un pequeño taller familiar donde Samuel Rodríguez, con más de 25 años 
                de experiencia en tapicería, decidió fundar Tapicería Samel. Su visión era simple pero 
                poderosa: devolver la vida a los muebles favoritos de las familias con la más alta calidad.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Los primeros años fueron desafiantes, pero la dedicación al detalle y la satisfacción 
                del cliente pronto se convirtieron en nuestra carta de presentación.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Crecimiento y Expansión (2010-2015)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                El boca a boca de nuestros clientes satisfechos nos permitió crecer. Incorporamos nuevos 
                especialistas al equipo y ampliamos nuestros servicios para incluir muebles de oficina 
                y restauración de piezas vintage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Durante este período, establecimos alianzas con proveedores premium de telas y materiales, 
                garantizando siempre la mejor calidad para nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Innovación y Modernización (2016-Presente)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hoy, Tapicería Samel combina técnicas tradicionales con tecnología moderna. Hemos 
                digitalizado nuestros procesos para ofrecer mejor servicio al cliente, pero mantenemos 
                el toque artesanal que nos caracteriza.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Con más de 1000 proyectos completados y un 98% de satisfacción del cliente, seguimos 
                comprometidos con la excelencia y la innovación en cada trabajo que realizamos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nuestro <span className="text-[#c3a8ec]">Equipo</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a los artesanos y especialistas que hacen posible cada transformación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#c3a8ec] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nuestros <span className="text-[#c3a8ec]">Valores</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada proyecto y cada relación con nuestros clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
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
                  <value.icon className="w-8 h-8 text-[#c3a8ec]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Lo que dicen <span className="text-[#c3a8ec]">nuestros clientes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                name: "María González",
                text: "El trabajo que hicieron con mi sofá superó todas mis expectativas. La atención al detalle y la calidad son excepcionales.",
                rating: 5
              },
              {
                name: "Carlos Rodríguez", 
                text: "Profesionales de primera. Mi juego de comedor quedó como nuevo. Definitivamente los recomiendo.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
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
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
              Únete a los cientos de clientes satisfechos que han confiado en nuestra experiencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/presupuesto"
                className="bg-white text-[#c3a8ec] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-center"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                href="/contacto"
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 text-center"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}