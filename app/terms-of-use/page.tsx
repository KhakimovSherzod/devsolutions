export const metadata = {
  title: 'Foydalanish shartlari | Vido Dev Solution',
  description:
    'Vido Dev Solution veb-saytidan foydalanish qoidalari, foydalanuvchi majburiyatlari va javobgarlik to‘g‘risida maʼlumot.',
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:py-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Sarlavha */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Foydalanish shartlari
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Ushbu sahifa <span className="text-blue-400 font-semibold">Vido Dev Solution</span>{' '}
            veb-saytidan va xizmatlaridan foydalanish tartibini belgilaydi.
          </p>
        </div>

        {/* Kontent */}
        <div className="space-y-10 text-gray-300 leading-relaxed text-base md:text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Umumiy maʼlumot</h2>
            <p>
              Ushbu foydalanish shartlari (“Shartlar”) sizning{' '}
              <span className="text-blue-400 font-semibold">Vido Dev Solution</span> veb-sayti va
              xizmatlaridan foydalanishingizni tartibga soladi. Saytdan foydalanish orqali siz ushbu
              Shartlarga rozilik bildirgan hisoblanasiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Xizmatlardan foydalanish</h2>
            <p>
              Siz veb-saytdan faqat qonuniy maqsadlarda va ushbu Shartlarga muvofiq
              foydalanishingiz mumkin. Quyidagi harakatlar taqiqlanadi:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Sayt infratuzilmasiga zarar yetkazuvchi har qanday faoliyat;</li>
              <li>Ruxsatsiz maʼlumot yig‘ish yoki avtomatlashtirilgan dasturlar (bot, scraper) orqali foydalanish;</li>
              <li>Boshqa foydalanuvchilarni aldash, tahdid qilish yoki huquqlarini buzish.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. Intellektual mulk huquqlari</h2>
            <p>
              Saytdagi barcha kontent — logotip, dizayn, matn, dasturiy kod va boshqa materiallar{' '}
              <span className="text-blue-400">Vido Dev Solution</span> yoki uning hamkorlariga
              tegishli bo‘lib, mualliflik huquqi bilan himoyalangan. Ruxsatsiz nusxalash yoki
              tarqatish taqiqlanadi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Javobgarlikni cheklash</h2>
            <p>
              Biz xizmatlarimizni “bor holicha” taqdim etamiz va ularning uzluksiz yoki xatosiz
              ishlashini kafolatlamaymiz. <span className="text-blue-400">Vido Dev Solution</span>{' '}
              sayt yoki xizmatlardan foydalanish natijasida yuzaga kelgan har qanday to‘g‘ridan
              to‘g‘ri yoki bilvosita zararlarga javobgar emas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. Foydalanuvchi majburiyatlari</h2>
            <p>
              Siz sayt orqali yuboriladigan barcha maʼlumotlarning to‘g‘riligini taʼminlash va
              uchinchi tomon huquqlarini buzmaslik uchun masʼulsiz. Har qanday noqonuniy
              faoliyat aniqlansa, sizning hisobingiz yoki kirish huquqingiz cheklanishi mumkin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Tashqi havolalar</h2>
            <p>
              Saytda uchinchi tomon veb-saytlarga havolalar bo‘lishi mumkin. Biz ushbu tashqi
              saytlardagi kontent yoki xavfsizlik uchun javobgar emasmiz. Foydalanuvchi bunday
              manbalarga o‘z xavfi bilan kiradi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">7. O‘zgarishlar</h2>
            <p>
              <span className="text-blue-400 font-semibold">Vido Dev Solution</span> ushbu
              Shartlarni istalgan vaqtda yangilash huquqini saqlab qoladi. O‘zgarishlar saytga
              joylashtirilgan paytdan eʼtiboran kuchga kiradi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">8. Qo‘llaniladigan qonunchilik</h2>
            <p>
              Ushbu shartlar O‘zbekiston Respublikasining amaldagi qonunlariga muvofiq
              tartibga solinadi. Har qanday nizolar O‘zbekiston sudlarida ko‘rib chiqiladi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">9. Biz bilan bog‘lanish</h2>
            <p>
              Agar ushbu shartlar bo‘yicha savollaringiz bo‘lsa, biz bilan quyidagi manzillar
              orqali bog‘lanishingiz mumkin:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>
                <span className="text-white font-semibold">Telefon:</span> +998 99 818 42 00 (Sherzod)
              </li>
              <li>
                <span className="text-white font-semibold">Telegram:</span>{' '}
                <a
                  href="https://t.me/tritonium"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  @tritonium
                </a>
              </li>
            </ul>
          </section>

          <p className="text-sm text-gray-500 pt-10">
            Oxirgi yangilanish: 2025-yil 13-noyabr
          </p>
        </div>
      </div>
    </div>
  )
}
