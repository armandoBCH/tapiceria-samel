'use client'

import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "María González",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    testimonial: "Excelente trabajo! Mi sofá quedó como nuevo. El equipo fue muy profesional y el resultado superó mis expectativas. Definitivamente los recomiendo.",
    service: "Tapizado de sofá"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    rating: 5,
    testimonial: "Increíble transformación de mis sillas de comedor. La calidad del trabajo y la atención al detalle son excepcionales. Volveré sin duda.",
    service: "Restauración de sillas"
  },
  {
    id: 3,
    name: "Ana Martínez",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
    testimonial: "Servicio impecable desde el primer contacto. Renovaron mi sillón favorito y ahora es la pieza central de mi sala. ¡Gracias!",
    service: "Tapizado de sillón"
  },
  {
    id: 4,
    name: "Roberto Silva",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    testimonial: "Profesionalismo y calidad excepcional. Mi mueble de oficina quedó mejor que cuando lo compré. Precio justo y trabajo garantizado.",
    service: "Muebles de oficina"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#c3a8ec]/5 to-[#c6aaf0]/10">
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
            Lo que dicen <span className="text-[#c3a8ec]">nuestros clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. 
            Conoce sus experiencias trabajando con nosotros.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mx-auto max-w-4xl"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#c3a8ec]/20">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentIndex].testimonial}"
                </blockquote>

                {/* Customer Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#c3a8ec] font-semibold">
                    {testimonials[currentIndex].service}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#c3a8ec] hover:bg-[#c3a8ec] hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#c3a8ec] hover:bg-[#c3a8ec] hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#c3a8ec] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}