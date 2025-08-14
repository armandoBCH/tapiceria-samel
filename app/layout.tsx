import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BackToTop from '@/components/ui/back-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tapicería Samel - Renovamos tus muebles como nuevos',
  description: 'Especialistas en tapizado y restauración de muebles con más de 20 años de experiencia. Transformamos tus piezas favoritas con la mejor calidad, diseño premium y garantía total. Servicio a domicilio incluido.',
  keywords: 'tapicería, tapizado, restauración muebles, sofás, sillas, sillones, muebles oficina, tapicería premium, renovación muebles, servicio domicilio',
  authors: [{ name: 'Tapicería Samel' }],
  creator: 'Tapicería Samel',
  publisher: 'Tapicería Samel',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tapiceriasamel.com',
    title: 'Tapicería Samel - Renovamos tus muebles como nuevos',
    description: 'Especialistas en tapizado y restauración de muebles con más de 20 años de experiencia.',
    siteName: 'Tapicería Samel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tapicería Samel - Renovamos tus muebles como nuevos',
    description: 'Especialistas en tapizado y restauración de muebles con más de 20 años de experiencia.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}