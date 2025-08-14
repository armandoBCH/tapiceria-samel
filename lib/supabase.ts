import { createClient } from '@supabase/supabase-js'

// DEMO MODE: Supabase functionality temporarily disabled for client presentation
// This file contains mock functions for demonstration purposes

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'

// Mock Supabase client for demo
export const getSupabaseClient = () => {
  console.log('🔧 DEMO MODE: Using mock Supabase client')
  return null // Return null to indicate demo mode
}

// Database types for when Supabase is enabled
export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          category: string
          price: number
          image_url: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          category: string
          price: number
          image_url: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          category?: string
          price?: number
          image_url?: string
          created_at?: string
        }
      }
      quotes: {
        Row: {
          id: string
          name: string
          phone: string
          email: string
          category: string
          description: string
          images: string[]
          status: 'pending' | 'in_progress' | 'completed'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email: string
          category: string
          description: string
          images?: string[]
          status?: 'pending' | 'in_progress' | 'completed'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string
          category?: string
          description?: string
          images?: string[]
          status?: 'pending' | 'in_progress' | 'completed'
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          content: string
          rating: number
          image_url?: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          content: string
          rating: number
          image_url?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          content?: string
          rating?: number
          image_url?: string
          created_at?: string
        }
      }
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Inserts<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type Updates<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']