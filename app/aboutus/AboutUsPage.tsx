'use client'
import { motion } from 'framer-motion'

import Image from 'next/image'

function AboutUsPage() {
  return (
    <>
      <section className='relative w-full bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20'>
        <div className='max-w-6xl mx-auto px-6'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Biz Haqimizda</h1>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
              VIDO DevSolutions — bu innovatsion dasturiy yechimlar orqali biznesingizni keyingi
              bosqichga olib chiqadigan ishonchli IT hamkoringiz.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src='/images/about-team.jpg'
                alt='VIDO DevSolutions jamoasi'
                width={600}
                height={400}
                className='rounded-2xl shadow-lg object-cover'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className='text-2xl md:text-3xl font-semibold mb-4'>Kim Bizmiz?</h2>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                Biz — tajribali dasturchilar, dizaynerlar va IT mutaxassislardan iborat jamoamiz.
                Maqsadimiz — sizning biznesingiz uchun eng samarali, xavfsiz va innovatsion dasturiy
                yechimlarni yaratish.
              </p>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                Har bir loyiha — bu ijod, texnologiya va strategiyaning uyg‘unligi. Biz nafaqat kod
                yozamiz, balki g‘oyalarni hayotga tatbiq etamiz.
              </p>
            </motion.div>
          </div>

          <div className='grid md:grid-cols-3 gap-10 mt-20'>
            {[
              {
                title: 'Missiyamiz',
                desc: 'Bizning maqsad — mijozlarimizga innovatsion, barqaror va oson kengaytiriladigan dasturiy yechimlar taklif etish.',
              },
              {
                title: 'Qadriyatlarimiz',
                desc: 'Halollik, sifat, va ijodkorlik — bizning ustuvor qadriyatlarimiz. Har bir loyiha biz uchun mas’uliyat.',
              },
              {
                title: 'Vizyonimiz',
                desc: 'O‘zbekistondagi eng ishonchli va global miqyosda tan olingan dasturiy kompaniyaga aylanish.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className='bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-700 transition-colors'
              >
                <h3 className='text-xl font-semibold mb-3'>{item.title}</h3>
                <p className='text-gray-300'>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mt-20'
          >
            <h2 className='text-3xl font-bold mb-4'>Birgalikda kelajakni yarataylik 🚀</h2>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              Biz bilan bog‘laning va loyihangiz uchun individual yechim ishlab chiqamiz. Har bir
              biznes — bu yangi imkoniyat!
            </p>
            <a
              href='/contact'
              className='inline-block bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-xl transition'
            >
              Bog‘lanish
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage
