import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let cachedClient: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (cachedClient) return cachedClient

  if (typeof window === 'undefined') {
    throw new Error('Supabase client solo está disponible en el navegador')
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Faltan variables de entorno NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }

  cachedClient = createClient(supabaseUrl, supabaseAnonKey)
  return cachedClient
}

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          description: string | null
          price: number
          category: string
          image_url: string
          created_at: string
          featured: boolean
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          price: number
          category: string
          image_url: string
          created_at?: string
          featured?: boolean
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          price?: number
          category?: string
          image_url?: string
          created_at?: string
          featured?: boolean
        }
      }
      quotes: {
        Row: {
          id: number
          name: string
          phone: string
          email: string
          product_category: string | null
          description: string
          image_urls: string[] | null
          created_at: string
          status: string
        }
        Insert: {
          id?: number
          name: string
          phone: string
          email: string
          product_category?: string | null
          description: string
          image_urls?: string[] | null
          created_at?: string
          status?: string
        }
        Update: {
          id?: number
          name?: string
          phone?: string
          email?: string
          product_category?: string | null
          description?: string
          image_urls?: string[] | null
          created_at?: string
          status?: string
        }
      }
      testimonials: {
        Row: {
          id: number
          name: string
          testimonial: string
          rating: number
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          testimonial: string
          rating: number
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          testimonial?: string
          rating?: number
          image_url?: string | null
          created_at?: string
        }
      }
    }
  }
}