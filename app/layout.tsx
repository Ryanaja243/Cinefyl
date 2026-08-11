import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Toaster } from 'sonner'
import { AuthProvider, Shell } from '@/components/cinefyl-shell'
import './globals.css'

export const metadata: Metadata = { title: 'Cinefyl — Explore Movies', description: 'Discover movies, build a watchlist, and share your cinematic taste.', generator: 'Cinefyl' }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, colorScheme: 'light', themeColor: '#FFE9CE' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-canvas"><body><AuthProvider><Shell>{children}</Shell></AuthProvider><Toaster position="bottom-center" theme="light" /></body></html> }
