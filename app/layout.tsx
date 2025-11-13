import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata = {
  metadataBase: new URL('https://vido.uz'),
  title: "Professional Dasturiy Ta'minot Ishlab Chiqish Xizmatlari | VIDO DevSolutions",
  description:
    "VIDO DevSolutions: Professional veb dasturlash, maxsus dasturiy ta'minot, CRM tizimlari, AI yechimlari, botlar va onlayn do'konlar yaratish xizmatlari.",
  keywords:
    "veb dasturlash, maxsus dasturiy ta'minot, CRM tizimi, AI yechimlari, Telegram bot, WhatsApp bot, onlayn do'kon, ERP tizimi, biznesni avtomatlashtirish, dasturchi, DevSolutions, veb dastur, dasturiy ta'minot ishlab chiqish",
  authors: [{ name: 'VIDO DevSolutions' }],
  creator: 'VIDO DevSolutions',
  publisher: 'VIDO DevSolutions',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vido.uz' },
  manifest: '/site.webmanifest',
  applicationName: 'VIDO DevSolutions',
  generator: 'Next.js',
  appleWebApp: {
    capable: true,
    title: 'VIDO DevSolutions',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    locale: 'uz_UZ',
    type: 'website',
    siteName: 'VIDO DevSolutions',
    url: 'https://vido.uz',
    title: "Professional Dasturiy Ta'minot Ishlab Chiqish Xizmatlari | VIDO DevSolutions",
    description:
      "VIDO DevSolutions: Veb saytlar, onlayn do'konlar, CRM tizimlari, AI yechimlari va botlar orqali biznesingizni rivojlantiring.",
    images: [
      {
        url: 'https://vido.uz/og-image.png',
        width: 1200,
        height: 630,
        alt: "VIDO DevSolutions – Professional Dasturiy Ta'minot Xizmatlari",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vido_devsolutions',
    creator: '@vido_devsolutions',
    title: "Professional Dasturiy Ta'minot Ishlab Chiqish Xizmatlari | VIDO DevSolutions",
    description:
      "VIDO DevSolutions: Veb saytlar, onlayn do'konlar, CRM tizimlari, AI yechimlari va botlar orqali biznesingizni rivojlantiring.",
    images: ['https://vido.uz/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'revisit-after': '7 days',
    rating: 'General',
    distribution: 'global',
    copyright: '© 2025 VIDO DevSolutions',
  },
}

export const viewport = {
  themeColor: '#0A0D1A',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='uz'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
