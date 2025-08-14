'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import { Upload, X, Check, Phone, Mail, User, MessageSquare } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase'

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  email: z.string().email('Por favor ingresa un email válido'),
  category: z.string().min(1, 'Selecciona una categoría'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres')
})

type FormData = z.infer<typeof formSchema>

const categories = [
  { id: 'sofas', name: 'Sofás' },
  { id: 'sillas', name: 'Sillas' },
  { id: 'sillones', name: 'Sillones' },
  { id: 'oficina', name: 'Muebles de Oficina' },
  { id: 'otro', name: 'Otro' }
]

export default function Presupuesto() {
  const supabase = typeof window !== 'undefined' ? getSupabaseClient() : null
  const [images, setImages] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showSavedQuotes, setShowSavedQuotes] = useState(false)
  const [savedQuotes, setSavedQuotes] = useState<any[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  // Función para cargar presupuestos guardados
  const loadSavedQuotes = () => {
    const quotes = JSON.parse(localStorage.getItem('tapiceria_quotes') || '[]')
    setSavedQuotes(quotes)
    setShowSavedQuotes(true)
  }

  // Función para limpiar presupuestos guardados
  const clearSavedQuotes = () => {
    localStorage.removeItem('tapiceria_quotes')
    setSavedQuotes([])
    console.log('Presupuestos eliminados del localStorage')
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter(file => 
        file.type.startsWith('image/') && file.size < 5 * 1024 * 1024 // 5MB limit
      )
      setImages(prev => [...prev, ...newFiles].slice(0, 4)) // Max 4 images
    }
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const uploadImages = async (files: File[]) => {
    const uploadPromises = files.map(async (file, index) => {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${index}.${fileExt}`
      const filePath = `quotes/${fileName}`

      if (!supabase) throw new Error('Supabase no disponible en el servidor')
      const { error } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (error) throw error

      const { data } = supabase.storage
        .from('images')
        .getPublicUrl(filePath)

      return data.publicUrl
    })

    return Promise.all(uploadPromises)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // LOCAL STORAGE MODE: Guardar datos localmente para demostración
      const quote = {
        id: Date.now().toString(),
        name: data.name,
        phone: data.phone,
        email: data.email,
        category: data.category,
        description: data.description,
        images: images.length > 0 ? `${images.length} imagen(es) adjunta(s)` : 'Sin imágenes',
        created_at: new Date().toISOString()
      }
      
      // Obtener presupuestos existentes del localStorage
      const existingQuotes = JSON.parse(localStorage.getItem('tapiceria_quotes') || '[]')
      
      // Agregar nuevo presupuesto
      existingQuotes.push(quote)
      
      // Guardar en localStorage
      localStorage.setItem('tapiceria_quotes', JSON.stringify(existingQuotes))
      
      // Log para demostración
      console.log('📋 PRESUPUESTO GUARDADO LOCALMENTE:', quote)
      console.log('📊 Total presupuestos guardados:', existingQuotes.length)
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1500))

      setIsSuccess(true)
      reset()
      setImages([])
    } catch (error) {
      console.error('Error guardando presupuesto:', error)
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <>
        <Navbar />
        
        {/* Banner de Modo Demo - Local Storage */}
         <div className="bg-green-50 border-l-4 border-green-400 p-4">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <div className="flex-shrink-0">
                   <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <div className="ml-3">
                   <p className="text-sm text-green-700">
                     <strong>Modo Demostración - Almacenamiento Local:</strong> Los datos se guardan en el navegador para demostración.
                   </p>
                 </div>
               </div>
               <div className="flex gap-2">
                 <button
                   onClick={loadSavedQuotes}
                   className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
                 >
                   Ver Presupuestos ({JSON.parse(localStorage.getItem('tapiceria_quotes') || '[]').length})
                 </button>
                 <button
                   onClick={clearSavedQuotes}
                   className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                 >
                   Limpiar
                 </button>
               </div>
             </div>
           </div>
         </div>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20">
          <motion.div
            className="max-w-md mx-auto text-center p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Solicitud Enviada!</h2>
            <p className="text-gray-600 mb-6">
              Gracias por tu solicitud de presupuesto. Nos pondremos en contacto contigo dentro de las próximas 24 horas.
            </p>
            <div className="space-y-4">
              <a
                href="/"
                className="block bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Volver al Inicio
              </a>
              <a
                href="https://wa.me/1234567890?text=Hola, acabo de enviar una solicitud de presupuesto"
                className="block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        </section>
        <Footer />
      </>
    )
  }

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
              Solicita tu <span className="text-[#c3a8ec]">Presupuesto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completa el formulario y recibe una cotización personalizada para tu proyecto de tapicería. 
              Respuesta garantizada en 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#c3a8ec] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">+1 234 567 890</p>
                      <p className="text-sm text-gray-500">Lun - Sáb: 9:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#c3a8ec] mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@tapiceriasamel.com</p>
                      <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#c3a8ec]/10 to-[#c6aaf0]/20 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">¿Por qué elegirnos?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Más de 20 años de experiencia</li>
                  <li>✓ Materiales de primera calidad</li>
                  <li>✓ Trabajo garantizado</li>
                  <li>✓ Presupuesto sin compromiso</li>
                  <li>✓ Servicio a domicilio</li>
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c3a8ec] focus:border-transparent"
                        placeholder="Ingresa tu nombre"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c3a8ec] focus:border-transparent"
                        placeholder="Número de teléfono"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c3a8ec] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoría del Producto *
                  </label>
                  <select
                    {...register('category')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c3a8ec] focus:border-transparent"
                  >
                    <option value="">Selecciona una categoría</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del Trabajo *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      {...register('description')}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c3a8ec] focus:border-transparent resize-none"
                      placeholder="Describe detalladamente el trabajo que necesitas..."
                    />
                  </div>
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fotos del Mueble (Opcional)
                  </label>
                  <p className="text-sm text-gray-500 mb-4">
                    Sube hasta 4 fotos para una cotización más precisa (máx. 5MB por foto)
                  </p>
                  
                  <div className="space-y-4">
                    {/* Upload Button */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#c3a8ec] transition-colors group"
                    >
                      <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#c3a8ec] mx-auto mb-2" />
                      <p className="text-gray-600 group-hover:text-[#c3a8ec]">
                        Haz clic para seleccionar imágenes
                      </p>
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />

                    {/* Image Preview */}
                    {images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Presupuesto'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal para mostrar presupuestos guardados */}
      {showSavedQuotes && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Presupuestos Guardados ({savedQuotes.length})</h3>
                <button
                  onClick={() => setShowSavedQuotes(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {savedQuotes.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No hay presupuestos guardados</p>
              ) : (
                <div className="space-y-4">
                  {savedQuotes.map((quote, index) => (
                    <div key={quote.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{quote.name}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(quote.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Teléfono:</strong> {quote.phone}</p>
                          <p><strong>Email:</strong> {quote.email}</p>
                        </div>
                        <div>
                          <p><strong>Categoría:</strong> {quote.category}</p>
                          <p><strong>Imágenes:</strong> {quote.images}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p><strong>Descripción:</strong></p>
                        <p className="text-gray-700 mt-1">{quote.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}