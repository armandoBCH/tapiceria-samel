'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Catálogo', href: '/catalogo' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Tapicería</h1>
                <p className="text-xs sm:text-sm text-[#c3a8ec] font-semibold -mt-1">Samel</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#c3a8ec] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-700 hover:text-[#c3a8ec] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 234 567 890</span>
            </a>
            <Link
              href="/presupuesto"
              className="bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Presupuesto
            </Link>
          </div>

          {/* Mobile Contact & Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href="https://wa.me/1234567890"
              className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-[#c3a8ec] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-[#c3a8ec] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 234 567 890</span>
                </a>
                <Link
                  href="/presupuesto"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-to-r from-[#c3a8ec] to-[#c6aaf0] text-white px-4 py-3 rounded-lg text-center font-semibold"
                >
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}