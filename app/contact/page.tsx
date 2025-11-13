'use client'

import { useState } from 'react'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert('Murojaatingiz yuborildi! Tez orada siz bilan bog‘lanamiz.')
  }

  return (
    <div className='min-h-screen bg-black text-white py-16 px-4 md:py-24 relative z-10'>
      <div className='max-w-4xl mx-auto'>
        {/* Sarlavha */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6'>
            Biz bilan Aloqa
          </h1>
          <p className='text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto'>
            Quyidagi shakl orqali bizga murojaat qiling. Ushbu forma orqali siz
            <span className='text-blue-400 font-semibold'>
              {' '}
              xizmat so‘rashi, texnik yordam olish, maslahat so‘rashi yoki taklif yuborishi{' '}
            </span>
            mumkin. Sizning murojaatingiz biz uchun muhim!
          </p>
        </div>

        {/* Aloqa shakli */}
        <form
          onSubmit={handleSubmit}
          className='bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 space-y-6 shadow-2xl'
        >
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
              className='w-full bg-black/40 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300'
            />
          </div>

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
              className='w-full bg-black/40 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300'
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-gray-300 text-sm font-semibold mb-2'>
              Xabar
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Yordam, xizmat, taklif yoki boshqa murojaatingizni yozing...'
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className='w-full bg-black/40 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none'
            />
          </div>

          <button
            type='submit'
            className='w-full sm:w-auto bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl'
          >
            Murojaatni Yuborish
          </button>
        </form>

        {/* Qo‘shimcha aloqa ma’lumotlari */}
        <div className='text-center mt-12 md:mt-16 text-gray-400 text-base md:text-lg'>
          <p>Yoki bevosita bog‘laning:</p>
          <p className='mt-2'>
            <span className='text-white font-semibold'>Telefon:</span> +998 99 818 42 00 (Sherzod)
          </p>
          <p>
            <span className='text-white font-semibold'>Telegram:</span>{' '}
            <a
              href='https://t.me/tritonium'
              target='_blank'
              className='text-blue-400 hover:text-blue-300 transition-colors'
            >
              @tritonium
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
