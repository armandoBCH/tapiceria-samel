'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c3a8ec] to-[#c6aaf0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tapicería Samel</h3>
                <p className="text-[#c3a8ec] text-sm font-semibold">Renovamos tus muebles</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Más de 20 años transformando muebles con la mejor calidad y diseño. 
              Tu satisfacción es nuestra prioridad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/1234567890" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Catálogo', href: '/catalogo' },
                { name: 'Servicios', href: '/servicios' },
                { name: 'Galería', href: '/galeria' },
                { name: 'Nosotros', href: '/nosotros' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#c3a8ec] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                'Tapizado de Sofás',
                'Restauración de Sillas',
                'Muebles de Oficina',
                'Sillones Vintage',
                'Servicio a Domicilio',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#c3a8ec] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Av. Principal 123</p>
                  <p className="text-gray-300 text-sm">Ciudad, País</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#c3a8ec] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-[#c3a8ec] transition-colors text-sm">
                  +1 234 567 890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#c3a8ec] flex-shrink-0" />
                <a href="mailto:info@tapiceriasamel.com" className="text-gray-300 hover:text-[#c3a8ec] transition-colors text-sm">
                  info@tapiceriasamel.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#c3a8ec] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Tapicería Samel. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacidad" className="text-gray-400 hover:text-[#c3a8ec] transition-colors text-sm">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-[#c3a8ec] transition-colors text-sm">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}