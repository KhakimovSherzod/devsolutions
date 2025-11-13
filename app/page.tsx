'use client'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('vebsaytlar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  // Three.js Scene Setup
  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Floating geometric objects
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.9),
      new THREE.TetrahedronGeometry(1),
      new THREE.DodecahedronGeometry(0.7),
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0x10b981, transparent: true, opacity: 0.7 }),
    ]

    const objects: THREE.Mesh[] = []

    geometries.forEach((geometry, index) => {
      const material = materials[index % materials.length]
      const mesh = new THREE.Mesh(geometry, material)

      mesh.position.x = (Math.random() - 0.5) * 15
      mesh.position.y = (Math.random() - 0.5) * 15
      mesh.position.z = (Math.random() - 0.5) * 10

      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI

      scene.add(mesh)
      objects.push(mesh)
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x4f46e5, 0.8, 100)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    camera.position.z = 8

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      objects.forEach((object, index) => {
        object.rotation.x += 0.005
        object.rotation.y += 0.008

        // Floating animation
        const time = Date.now() * 0.001
        object.position.y += Math.sin(time + index * 2) * 0.003
        object.position.x += Math.cos(time + index * 1.5) * 0.002
        object.position.z += Math.sin(time + index) * 0.001
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  const xizmatlar = {
    vebsaytlar: {
      title: '🌐 Vebsaytlar',
      items: [
        'Biznes vebsaytlari',
        'Landing sahifalar',
        'Kompaniya portallari',
        "Ko'p tilli vebsaytlar",
        'SEO optimallashtirilgan sahifalar',
        'Zamonaviy freymvorklar bilan juda tez ishlash',
        'Mijozlarni jalb qilish va brending uchun mukammal',
      ],
    },
    savdo: {
      title: "🛒 Onlayn Do'konlar & Bozorlar",
      items: [
        "Ko'p sotuvchi bozorlari",
        "Onlayn do'konlar",
        "To'lov tizimlari integratsiyasi",
        'Inventar boshqaruvi',
        'Sotuvchi paneli',
        'Mijoz paneli',
        'Masshtablanadigan onlayn biznes platformasi',
      ],
    },
    dasturlar: {
      title: '📱 Maxsus Veb Dasturlar',
      items: [
        'Admin panellari',
        'Boshqaruv paneli',
        'Analitika vositalari',
        'Mijoz portallari',
        'Bron qilish tizimlari',
        'Kontent boshqaruvi vositalari',
        'Tasavvur qila olsangiz — men qucha olaman',
      ],
    },
    botlar: {
      title: '🤖 Botlar & Avtomatlashtirish',
      items: [
        'Telegram botlari',
        'WhatsApp botlari',
        'Instagram avtomatlashtirish',
        'Biznes jarayonlarini avtomatlashtirish',
        "Sun'iy intellekt bilan ishlovchi yordamchilar",
        'Takroriy vazifalarni avtomatlashtirish orqali vaqtni tejang',
      ],
    },
    crm: {
      title: '🏢 CRM Tizimlari',
      items: [
        'Mijozlarni kuzatish',
        'Xodimlarni boshqarish',
        'Loyihalar boshqaruvi',
        'Sotuv funneli avtomatlashtirish',
        'Bildirishnoma tizimi',
        'Hujjat va fayl boshqaruvi',
        'Ichki aloqa vositalari',
        'Biznes operatsiyalaringiz markazlashtirilgan va optimallashtirilgan',
      ],
    },
    dasturiy: {
      title: "💼 Firmalar & Tashkilotlar uchun Dasturiy Ta'minot",
      items: [
        'Ombor tizimlari',
        'Moliyaviy vositalar',
        'HR vositalari',
        'Ish vaqtini kuzatish',
        'ERP komponentlari',
        'Biznes jarayoningizga moslashtirilgan yechimlar',
        'Kompaniyangiz ish jarayoniga maxsus qurilgan',
      ],
    },
    ai: {
      title: "🤖 Sun'iy Intellekt Yechimlari",
      items: [
        'AI chatbotlar',
        'AI kontent yaratish',
        "Avtomatlashtirilgan mijoz qo'llab-quvvatlash",
        'AI shakl yordamchilari',
        'Tavsiya tizimlari',
        'AI bilan video/foto qayta ishlash',
        'Raqobatdosh ustunlik uchun kelajakga tayyor vositalar',
      ],
    },
    media: {
      title: '🎥 Media & Streaming Platformalar',
      items: [
        'Video hosting',
        'Obuna asosidagi kontent',
        "To'lovli ko'rish tizimlari",
        'Xavfsiz striming',
        'Kurs platformalari (LMS)',
        "Ta'lim, ko'ngilochar va media yaratuvchilari uchun mukammal",
      ],
    },
  }

  const tavsiyalar = [
    {
      text: "A'lo xizmat, biznesimiz uchun aynan kerakli narsani taqdim etdi. Vebsayt konvertatsiyamizni 40% ga oshirdi.",
      author: "Onlayn Do'kon Egasi",
      company: "Moda Do'koni",
    },
    {
      text: "CRM tizimi bizning ish jarayonimizni butunlay o'zgartirdi. Jamoa samaradorligi 60% ga oshdi.",
      author: 'Operatsion Menejer',
      company: 'Logistika Kompaniyasi',
    },
    {
      text: 'Ajoyib AI chatbot amalga oshirildi. Mijozlarga javob berish vaqti soatlardan minutlarga qisqardi.',
      author: 'Mijozlar Xizmati Direktori',
      company: 'Texnologik Startap',
    },
  ]

  const texnologiyalar = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Docker',
    'AWS',
    'Google Cloud',
    'Firebase',
    'Redis',
    'Stripe',
    'FastAPI',
    'AI API',
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const handleContactClick = () => {
    window.open('https://t.me/tritonium', '_blank')
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      <Head>
        {/* Basic SEO */}

        {/* Optional structured data (JSON-LD for Google) */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'VIDO DevSolutions',
                alternateName: 'DevSolutions',
                url: 'https://vido.uz',
                logo: 'https://vido.uz/og-image.png',
                image: 'https://vido.uz/og-image.png',
                description:
                  "VIDO DevSolutions — professional veb dasturlash, maxsus dasturiy ta'minot, CRM tizimlari, AI yechimlari, botlar va onlayn do'konlar ishlab chiqish xizmatlari.",
                foundingDate: '2022',
                founder: {
                  '@type': 'Person',
                  name: 'VIDO Team',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'UZ',
                  addressLocality: 'Tashkent',
                  postalCode: '100000',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+998998184200',
                  contactType: 'customer support',
                  availableLanguage: ['Uzbek', 'English', 'Russian'],
                },
                areaServed: 'Worldwide',
                brand: 'VIDO DevSolutions',
                knowsAbout: [
                  'Web development',
                  'CRM systems',
                  'AI solutions',
                  'Chatbots',
                  'Mobile applications',
                  'ERP systems',
                  'Automation',
                  'E-commerce platforms',
                  'SaaS development',
                ],
                serviceType: 'Custom software development',
                services: [
                  {
                    '@type': 'Service',
                    name: 'Veb dasturlash',
                    description: 'Zamonaviy veb saytlar va onlayn platformalar ishlab chiqish.',
                  },
                  {
                    '@type': 'Service',
                    name: 'AI yechimlari',
                    description:
                      "Sun'iy intellekt asosidagi dasturlar va avtomatlashtirilgan tizimlar.",
                  },
                  {
                    '@type': 'Service',
                    name: 'CRM tizimlari',
                    description: 'Biznes jarayonlarini boshqarish uchun maxsus CRM ishlab chiqish.',
                  },
                  {
                    '@type': 'Service',
                    name: 'Telegram va WhatsApp botlar',
                    description: 'Avtomatik mijoz bilan aloqa uchun aqlli botlar yaratish.',
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'VIDO DevSolutions',
                url: 'https://vido.uz',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://vido.uz/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </Head>

      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className='fixed top-0 left-0 w-full h-full pointer-events-none z-0'
      />

      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-3 md:py-4'>
            <div className='text-white font-bold text-xl md:text-2xl'>
              VIDO Dev<span className='text-blue-400'>Solutions</span>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex space-x-6 lg:space-x-8'>
              {['xizmatlar', 'afzalliklar', 'jarayon', 'texnologiyalar', 'mijozlar'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className='text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base capitalize'
                >
                  {item === 'afzalliklar'
                    ? 'Afzalliklar'
                    : item === 'jarayon'
                    ? 'Jarayon'
                    : item === 'mijozlar'
                    ? 'Mijozlar'
                    : item}
                </button>
              ))}
            </div>

            {/* Contact Button */}
            <button
              onClick={handleContactClick}
              className='hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-semibold transition-all duration-300 text-sm lg:text-base'
            >
              Bog&apos;lanish
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden text-white p-2'
              aria-label='Toggle menu'
            >
              <div className='w-6 h-6 relative'>
                <span
                  className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'top-3'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden py-4 border-t border-white/10 bg-black/95 backdrop-blur-lg'>
              <div className='flex flex-col space-y-3'>
                {['xizmatlar', 'afzalliklar', 'jarayon', 'texnologiyalar', 'mijozlar'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className='text-gray-300 hover:text-white transition-colors duration-300 font-medium text-left py-3 capitalize text-base'
                  >
                    {item === 'afzalliklar'
                      ? 'Afzalliklar'
                      : item === 'jarayon'
                      ? 'Jarayon'
                      : item === 'mijozlar'
                      ? 'Mijozlar'
                      : item}
                  </button>
                ))}
                <button
                  onClick={handleContactClick}
                  className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-left mt-2'
                >
                  Bog&apos;lanish
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 text-center z-10'>
        <div className='absolute inset-0 bg-linear-to-b from-black/50 to-transparent z-0'></div>
        <div className='relative z-10 max-w-6xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight'>
            Biznesingizni
            <span className='block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-cyan-400 mt-2'>
              Rivojlantiring
            </span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4'>
            Zamonaviy texnologiyalar yordamida biznesingiz uchun mukammal dasturiy yechimlar
            yaratamiz.
          </p>

          {/* Services / Features List */}
          <ul className='flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 mb-8 px-2'>
            {[
              'Websaytlar',
              'Botlar',
              'AI',
              'Xar qanday programma yasash',
              'Biznesingizni avtomatlashtiramiz',
            ].map((item, index) => (
              <h2
                key={index}
                className='bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-base sm:text-lg md:text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg cursor-default'
              >
                {item}
              </h2>
            ))}
          </ul>

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4'>
            <button
              onClick={() => scrollToSection('xizmatlar')}
              className='bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto'
            >
              Bepul Konsultatsiya
            </button>

            <button
              onClick={handleContactClick}
              className='border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 hover:border-white/50 w-full sm:w-auto'
            >
              Bog&apos;lanish
            </button>
          </div>
        </div>
        <div className='mt-20'>
          <div className='max-w-5xl mx-auto text-center mb-12 md:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-linear-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent'>
              Biz bilan Aloqa
            </h2>
            <p className='text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
              Biz bilan bog‘laning va biznesingiz uchun zamonaviy
              <span className='text-blue-400 font-semibold'> dasturiy yechimlar </span>
              yaratish imkoniyatini muhokama qiling. Sizdan kelgan murojaatlar biz uchun muhim.
            </p>
          </div>

          <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 mx-auto max-w-2xl'>
            <form action='https://formspree.io/f/mrbrbrge' method='POST' className='space-y-6'>
              {/* Name */}
              <div>
                <label htmlFor='name' className='block text-gray-300 text-sm font-semibold mb-2'>
                  Ismingiz
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Ismingizni kiriting'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full bg-black/40 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all'
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor='phone' className='block text-gray-300 text-sm font-semibold mb-2'>
                  Telefon raqamingiz
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder='+998 90 123 45 67'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full bg-black/40 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all'
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-gray-300 text-sm font-semibold mb-2'>
                  Xabar
                </label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Yordam, xizmat yoki taklif haqida yozing...'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full bg-black/40 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none'
                />
              </div>

              {/* Submit */}
              <button
                type='submit'
                className='w-full bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 hover:opacity-90 text-white font-bold text-lg py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-105'
              >
                Murojaatni yuborish
              </button>
            </form>

            {/* Contact Info */}
            <div className='mt-10 text-center text-gray-300 text-sm sm:text-base space-y-2'>
              <p>Yoki bevosita bog‘laning:</p>
              <p>
                <span className='font-semibold text-white'>Telefon:</span> +998 99 818 42 00
                (Sherzod)
              </p>
              <p>
                <span className='font-semibold text-white'>Telegram:</span>{' '}
                <a
                  href='https://t.me/tritonium'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:text-blue-300 transition-colors'
                >
                  @tritonium
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Xizmatlar Bo&apos;limi */}
      <section id='xizmatlar' className='py-16 md:py-20 px-4 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
              Xizmatlarimiz
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
              Biznesingizning barcha ehtiyojlarini qondiradigan keng qamrovli dasturiy yechimlar
            </p>
          </div>

          {/* Mobile Tab Scroller */}
          <div className='mb-8 md:mb-12 px-2'>
            <div className='flex overflow-x-auto pb-4 gap-2 scrollbar-hide snap-x'>
              {Object.keys(xizmatlar).map(key => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-3 sm:px-6 sm:py-4 rounded-xl md:rounded-2xl font-bold transition-all duration-300 z-10 whitespace-nowrap shrink-0 snap-start ${
                    activeTab === key
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {xizmatlar[key as keyof typeof xizmatlar].title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className='bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl mx-2 md:mx-0'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8'>
              {xizmatlar[activeTab as keyof typeof xizmatlar].title}
            </h3>
            <div className='grid gap-4 sm:gap-6 md:gap-8'>
              {xizmatlar[activeTab as keyof typeof xizmatlar].items.map((item, index) => (
                <div key={index} className='flex items-start gap-3 md:gap-4 group'>
                  <div className='shrink-0 w-6 h-6 md:w-8 md:h-8 bg-linear-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-white font-bold text-xs md:text-sm'>✓</span>
                  </div>
                  <p className='text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300 flex-1'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Afzalliklar */}
      <section
        id='afzalliklar'
        className='py-16 md:py-20 px-4 bg-linear-to-r from-white/5 to-white/10 relative z-10'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
              Nega Bizni Tanlashadi?
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
              Sifat, tezlik va ishonchlilik orqali ajoyib qadriyatni taqdim etish
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
            {[
              {
                title: 'Tez Yetkazib Berish',
                description: 'Sifatsiz kompromislashtirmasdan, rejalashtirish va tez bajarish.',
                icon: '⚡',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                title: 'Masshtablanadigan Arxitektura',
                description: 'Loyihangiz biznesingiz bilan birga o&apos;sish uchun quriladi.',
                icon: '📈',
                color: 'from-green-500 to-blue-500',
              },
              {
                title: 'Kuchli Kommunikatsiya',
                description: 'Aniq yangilanishlar, shaffof progress va faol muammo yechish.',
                icon: '💬',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Zamonaviy Texnologiyalar',
                description: 'Eng so&apos;ngi texnologiyalar va eng yaxshi amaliyotlar.',
                icon: '🛠️',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Xavfsizlikga Qaratilgan',
                description:
                  'Xavfsiz autentifikatsiya, himoyalangan ma&apos;lumotlar va eng yaxshi amaliyotlar.',
                icon: '🔒',
                color: 'from-red-500 to-orange-500',
              },
              {
                title: 'Pixel Perfect Dizayn',
                description:
                  'Chiroyli, responsiv dizaynlar mobil va kompyuterlar uchun optimallashtirilgan.',
                icon: '🎨',
                color: 'from-pink-500 to-purple-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='group relative bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105'
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-linear-to-r ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>{feature.title}</h3>
                <p className='text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ishlab Chiqish Jarayoni */}
      <section id='jarayon' className='py-16 md:py-20 px-4 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
              Ishlab Chiqish Jarayoni
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
              Loyihangiz muvaffaqiyatini ta&apos;minlash uchun tuzilgan yondashuv
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6'>
            {[
              { step: '1', title: 'Bepul Maslahat', desc: 'Ehtiyojlarni tushunish', icon: '💬' },
              { step: '2', title: 'Talablar', desc: 'Batafsil spetsifikatsiyalar', icon: '📋' },
              { step: '3', title: 'UI/UX Dizayn', desc: 'Chiroyli interfeyslar', icon: '🎨' },
              { step: '4', title: 'Ishlab Chiqish', desc: 'Frontend + backend qurish', icon: '⚙️' },
              {
                step: '5',
                title: 'Test & Qo&apos;llab-quvvatlash',
                desc: 'Deploy va saqlash',
                icon: '🚀',
              },
            ].map((process, index) => (
              <div key={index} className='text-center group relative'>
                <div className='absolute inset-0 bg-linear-to-b from-blue-500/10 to-purple-500/10 rounded-2xl md:rounded-3xl transform group-hover:scale-105 transition-all duration-500' />
                <div className='relative z-10 p-4 md:p-6'>
                  <div className='w-14 h-14 md:w-20 md:h-20 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg md:text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl'>
                    {process.icon}
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors'>
                    {process.title}
                  </h3>
                  <p className='text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors'>
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texnologiyalar */}
      <section id='texnologiyalar' className='py-16 md:py-20 px-4 bg-white/5 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
              Ishlatadigan Texnologiyalar
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
              Mustahkam va masshtablanadigan yechimlar uchun zamonaviy texnologiya steki
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 px-2'>
            {texnologiyalar.map((tech, index) => (
              <div
                key={index}
                className='bg-linear-to-r from-white/10 to-white/5 backdrop-blur-lg px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/20 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group'
              >
                <span className='text-white font-bold text-sm md:text-base lg:text-lg group-hover:text-blue-200 transition-colors'>
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mijozlar Sharhlari */}
      <section id='mijozlar' className='py-16 md:py-20 px-4 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
              Mijozlarimiz Fikrlari
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
              Mijozlarimiz xizmatlarimiz haqida nima deyishadi
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
            {tavsiyalar.map((testimonial, index) => (
              <div
                key={index}
                className='bg-white/5 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 hover:transform hover:scale-105 transition-all duration-500 group'
              >
                <div className='text-yellow-400 text-xl md:text-2xl mb-4 md:mb-6'>★★★★★</div>
                <p className='text-gray-300 text-base md:text-lg mb-4 md:mb-6 italic leading-relaxed group-hover:text-white'>
                  &quot;{testimonial.text}&quot;
                </p>
                <div className='border-t border-white/10 pt-4 md:pt-6 group-hover:border-white/20'>
                  <p className='text-white font-bold text-lg md:text-xl'>{testimonial.author}</p>
                  <p className='text-gray-400 text-base md:text-lg'>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bo&apos;limi */}
      <section className='py-16 md:py-20 px-4 relative z-10'>
        <div className='max-w-5xl mx-auto text-center px-4'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8'>
            Loyihangizni Boshlashga Tayyormisiz?
          </h2>
          <p className='text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed'>
            G&apos;oyalaringizni muhokama qilaylik va birgalikda ajoyib narsa quramiz
          </p>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'>
            <button
              onClick={handleContactClick}
              className='bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto'
            >
              Bepul Konsultatsiya
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {/* FAQ Section */}
      <section
        id='faq'
        className='py-16 md:py-20 px-4 relative z-10 bg-linear-to-r from-white/5 to-white/10'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16 px-4'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
              Tez-tez So&apos;raladigan Savollar (FAQ)
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto'>
              Bizga eng ko&apos;p beriladigan savollar va **veb dasturlash**, **AI yechimlari**,
              **CRM tizimi** hamda **maxsus dasturiy ta&apos;minot** haqida javoblar
            </p>
          </div>

          <div className='flex flex-col gap-4 md:gap-6'>
            {[
              {
                question: "Vebsayt, onlayn do'kon yoki maxsus dastur yaratish qancha vaqt oladi?",
                answer:
                  'Loyiha murakkabligiga qarab, oddiy biznes vebsaytlari 1-2 hafta, landing sahifalar 1-3 hafta, murakkab **CRM tizimi**, **AI yechimlari** yoki **ERP tizimi** 4-8 hafta davom etadi. Bizning tajribali jamoamiz har doim tez va sifatli natija beradi.',
              },
              {
                question: 'Dastur yoki vebsayt narxlari qancha va qanday hisoblanadi?',
                answer:
                  "Narxlar loyiha talablariga, funksionallik, texnologiyalar (Next.js, React, Python, AI integratsiyalari) va biznes ehtiyojlariga qarab belgilanadi. Batafsil narx va **maxsus dasturiy ta'minot** uchun bepul konsultatsiya olish mumkin.",
              },
              {
                question: 'Mavjud tizimlarim bilan integratsiya qilasizmi?',
                answer:
                  "Ha, biz sizning mavjud **CRM**, **ERP tizimi**, yoki boshqa biznes dasturlaringiz bilan integratsiya qilish va ma'lumotlarni uzluksiz uzatish imkoniyatini ta'minlaymiz. Shu bilan birga, **AI yechimlari** va avtomatlashtirilgan botlar bilan ishni yanada samarali qilamiz.",
              },
              {
                question: "Xizmatdan keyingi qo'llab-quvvatlash va texnik yordam mavjudmi?",
                answer:
                  "Ha, barcha loyihalarimiz uchun xizmatdan keyingi qo'llab-quvvatlash, texnik yordam va yangilanishlar taqdim etamiz. Shu jumladan, **vazifalarni avtomatlashtirish**, **CRM tizimi** va **Telegram botlar** uchun ham xizmat mavjud.",
              },
              {
                question: "AI va botlarni biznes jarayonlariga qanday qo'llash mumkin?",
                answer:
                  "Biz **Telegram, WhatsApp, Instagram botlar** va **AI chatbotlar** orqali mijozlar bilan samarali aloqani ta'minlaymiz, takroriy vazifalarni avtomatlashtiramiz va biznes jarayonlarini tezlashtiramiz.",
              },
              {
                question: "Onlayn do'kon yoki veb platforma yaratish xavfsizmi?",
                answer:
                  "Biz barcha **onlayn do'konlar**, **vazifa boshqarish tizimlari** va **CRM integratsiyalari** uchun xavfsiz autentifikatsiya, ma'lumotlarni shifrlash va zamonaviy xavfsizlik amaliyotlarini ta'minlaymiz.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className='group bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer'
              >
                <summary className='flex justify-between items-center text-white font-semibold text-base md:text-lg list-none'>
                  {faq.question}
                  <span className='transition-transform duration-300 group-open:rotate-45'>+</span>
                </summary>
                <p className='mt-2 text-gray-300 md:text-base leading-relaxed'>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className='py-8 md:py-12 px-4 border-t border-white/10 relative z-10 bg-black/20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8'>
            <div className='sm:col-span-2 lg:col-span-1'>
              <h3 className='text-white font-bold text-xl md:text-2xl mb-3 md:mb-4'>
                VIDO Dev<span className='text-blue-400'>Solutions</span>
              </h3>
              <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
                Biznesingizni keyingi bosqichga olib chiqadigan mukammal dasturiy yechimlar.
              </p>
            </div>
            <div>
              <h4 className='text-white font-bold text-lg mb-3 md:mb-4'>Xizmatlar</h4>
              <ul className='space-y-2'>
                {Object.keys(xizmatlar)
                  .slice(0, 4)
                  .map(key => (
                    <li key={key}>
                      <button
                        onClick={() => {
                          setActiveTab(key)
                          scrollToSection('xizmatlar')
                        }}
                        className='text-gray-400 hover:text-white transition-colors text-sm md:text-base'
                      >
                        {xizmatlar[key as keyof typeof xizmatlar].title}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className='text-white font-bold text-lg mb-3 md:mb-4'>Aloqa</h4>
              <ul className='space-y-2 text-gray-400 text-sm   md:text-base'>
                <li>Telefon: +998 99 818 42 00 (Sherzod)</li>
                <li>
                  Telegram:{' '}
                  <button
                    onClick={handleContactClick}
                    className='hover:underline text-blue-500 cursor-pointer'
                  >
                    @tritonium
                  </button>
                </li>
                <li className='hover:underline'>
                  <Link href={'/contact'}>Aloqa (Kontakt)</Link>
                </li>
                <li className='hover:underline'>
                  <Link href={'/privacy-policy'}>Maxfiylik siyosati</Link>
                </li>
                <li className='hover:underline'>
                  <Link href={'/terms-of-use'}>Foydalanish shartlari</Link>
                </li>
              </ul>
            </div>
            <div className='sm:col-span-2 lg:col-span-1'>
              <h4 className='text-white font-bold text-lg mb-3 md:mb-4'>Sahifalar</h4>
              <div className='flex flex-wrap gap-3 md:gap-4'>
                {[
                  { title: 'Kontakt', link: '/contact' },
                  { title: 'Biz Haqimizda', link: '/aboutus' },
                ].map((pages, index) => (
                  <Link
                    href={pages.link}
                    key={index}
                    className='text-gray-400 hover:text-white transition-colors text-sm md:text-base hover:underline'
                  >
                    {pages.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='border-t border-white/10 pt-6 md:pt-8 text-center'>
            <p className='text-gray-400 text-sm md:text-base'>
              © 2025 VIDO DevSolutions. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
