import Image from "next/image";
import Navbar from "@/components/Navbar";
import CopyIban from "@/components/CopyIban";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-red-900" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Fotoğraf */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image
                src="/images/senolberk.png"
                alt="Şenol Berk Çivgın"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Metin */}
          <div className="text-center md:text-left text-white">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-4">
              Valilik İzinli Yardım Kampanyası
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Şenol Berk İçin
              <br />
              <span className="text-red-400">Bir Hayat Ver</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
              12 yaşındaki Şenol Berk, DMD (Duchenne Musküler Distrofi) ile
              mücadele ediyor. Babasını kaybetmiş, yürüyemiyor ama{" "}
              <strong>umudunu kaybetmedi.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#bagis"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 animate-pulse-glow text-center"
              >
                Bağış Yap
              </a>
              <a
                href="#hikaye"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 text-center"
              >
                Hikayesini Oku
              </a>
            </div>
          </div>
        </div>

        {/* Alt dalga */}
        <div className="relative">
          <svg viewBox="0 0 1440 80" className="w-full text-white">
            <path
              fill="currentColor"
              d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      {/* ==================== BAĞIŞ ==================== */}
      <section id="bagis" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bağış <span className="text-accent">Yap</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              IBAN numarasına tıklayarak kopyalayabilir, banka uygulamanıza
              yapıştırabilirsiniz. Her katkı Şenol Berk&apos;in hayatını
              değiştirebilir.
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Alıcı bilgisi */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-center">
            <p className="text-sm text-blue-700">
              <strong>Alıcı:</strong> Şenol Berk Çıvgın |{" "}
              <strong>Banka:</strong> Ziraat Bankası |{" "}
              <strong>SWIFT:</strong> TCZBTR2A
            </p>
          </div>

          {/* IBAN'lar */}
          <div className="space-y-4 mb-8">
            <CopyIban
              label="Türk Lirası (TL)"
              iban="TR98 0001 0090 1090 1748 4050 01"
              flag="🇹🇷"
            />
            <CopyIban
              label="Euro (EUR)"
              iban="TR44 0001 0090 1090 1748 4050 03"
              flag="🇪🇺"
            />
            <CopyIban
              label="Amerikan Doları (USD)"
              iban="TR71 0001 0090 1090 1748 4050 02"
              flag="🇺🇸"
            />
          </div>

          {/* WhatsApp butonları */}
          <div className="space-y-3 mb-8">
            <WhatsAppButton
              href="https://chat.whatsapp.com/LUMoHGYG6wS89bQiOYJM5f"
              label="Gönüllü WhatsApp Grubu"
              subtitle="Kampanyaya destek olmak için gruba katılın"
              icon="group"
            />
            <WhatsAppButton
              href="https://wa.me/905417275725?text=Merhaba%2C%20%C5%9EENOL%20BERK%20%C3%87IVGIN%20i%C3%A7in%20dekont%20iletmek%20istiyorum."
              label="Dekont İlet (Serpil Çıvgın - Annesi)"
              subtitle="Bağış dekontu göndermek için tıklayın - 0541 727 57 25"
              icon="chat"
            />
          </div>

          {/* e-Devlet Doğrulama */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4 text-center">
            <p className="text-sm text-green-800 mb-1">
              <strong>e-Devlet Doğrulama:</strong> Kampanyamızı e-Devlet
              üzerinden doğrulayabilirsiniz.
            </p>
            <p className="text-xs text-green-700">
              e-Devlet &rarr; Yardım Toplama İzinleri Sorgulama &rarr;{" "}
              <strong>Ad Soyad: Serpil Çıvgın</strong> &rarr; Faaliyet No:{" "}
              <strong>45.2025.3277</strong>
            </p>
          </div>

          {/* Uyarı */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-sm text-amber-800">
              <strong>Güvenlik:</strong> Bu kampanya T.C. Manisa Valiliği
              izniyle yürütülmektedir. (Faaliyet No: 45.2025.3277) Lütfen
              sadece yukarıdaki resmi IBAN numaralarına bağış yapın.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== HİKAYE ==================== */}
      <section id="hikaye" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Şenol Berk&apos;in <span className="text-primary">Hikayesi</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/senolberk2.png"
                alt="Şenol Berk"
                width={600}
                height={700}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-800 font-semibold">
                  &quot;Babasını yeni kaybetmiş bir çocuk, babasının acısıyla
                  hâlâ DMD&apos;ye karşı hayata tutunmaya çalışıyor.&quot;
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <strong>Şenol Berk Çivgın</strong>, 25 Aralık 2014&apos;te
                Manisa&apos;da doğdu. Küçük yaşta{" "}
                <strong>Duchenne Musküler Distrofi (DMD)</strong> teşhisi kondu.
                DMD, kas dokusunun ilerleyici şekilde zayıfladığı genetik bir
                hastalıktır.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Genetik testlerde <strong>Ekzon 56 Hemizigot delesyonu</strong>{" "}
                tespit edildi. Şenol Berk artık{" "}
                <strong>
                  yürüyemiyor, koşamıyor, arkadaşlarıyla top oynayamıyor, okula
                  gidemiyor.
                </strong>{" "}
                Tekerlekli sandalyeye bağımlı yaşıyor.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Annesi <strong>Serpil Çıvgın</strong>, oğlunun tedavisi için
                mücadele ediyor. Yurt dışında uygulanan{" "}
                <strong>gen tedavisi (Elevidys)</strong> Şenol Berk için umut
                ışığı.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-sm text-gray-600">Yaşında</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary">DMD</p>
                  <p className="text-sm text-gray-600">Kas Hastalığı</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary">Manisa</p>
                  <p className="text-sm text-gray-600">Memleket</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary">Ekzon 56</p>
                  <p className="text-sm text-gray-600">Gen Mutasyonu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DMD NEDİR ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DMD <span className="text-accent">Nedir?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🧬
              </div>
              <h3 className="font-bold text-lg mb-2">Genetik Hastalık</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Duchenne Musküler Distrofi, distrofin proteininin eksikliğine
                yol açan X&apos;e bağlı resesif genetik bir hastalıktır.
                Genellikle erkek çocuklarda görülür.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
                💪
              </div>
              <h3 className="font-bold text-lg mb-2">Kas Erimesi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kaslar zamanla zayıflar ve erir. Hastalar önce yürüme
                yetisini, sonra üst vücut kas gücünü kaybeder. Tekerlekli
                sandalyeye bağımlı hale gelirler.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🔬
              </div>
              <h3 className="font-bold text-lg mb-2">Gen Tedavisi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Elevidys (delandistrogene moxeparvovec), FDA onaylı ilk DMD gen
                tedavisidir. Eksik distrofin genini vücuda aktararak kas
                fonksiyonlarını iyileştirmeyi hedefler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEDAVİ ==================== */}
      <section id="tedavi" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tedavi <span className="text-primary">Planı</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  MEDCARE Women & Children Hospital
                </h3>
                <p className="text-blue-200">Dubai, BAE</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-200 mb-3 uppercase text-sm tracking-wide">
                  Tedavi Detayları
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>
                      Elevidys İnfüzyon Terapisi (Gen Tedavisi) - 1 doz
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>
                      Pediatrik Nörolog, Pulmonolog, Kardiyolog konsültasyonları
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>16 seans özel fizyoterapi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>PICU + Özel oda yatışı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <span>İlaçlar ve kan testleri dahil</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-200 mb-3 uppercase text-sm tracking-wide">
                  Tahmini Maliyet
                </h4>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-4xl md:text-5xl font-bold mb-1">
                    ~$2.9M
                  </p>
                  <p className="text-blue-200">
                    AED 10,650,000 (yaklaşık 2.9 milyon USD)
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-blue-200">
                      Referans No: DMD-A22-ŞENOLÇIVGIN-27012025
                    </p>
                    <p className="text-sm text-blue-200">
                      Teklif Tarihi: 27.01.2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BELGELER ==================== */}
      <section id="belgeler" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resmi <span className="text-primary">Belgeler</span>
            </h2>
            <p className="text-gray-600">
              Kampanyanın şeffaflığı ve güvenilirliği için tüm resmi belgeler
            </p>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Valilik İzni */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow hover:border-primary/20">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 text-2xl">
                🏛️
              </div>
              <h3 className="font-bold text-lg mb-2">Valilik İzin Belgesi</h3>
              <p className="text-gray-600 text-sm mb-4">
                T.C. Manisa Valiliği tarafından Türkiye geneli yardım toplama
                izni verilmiştir.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>
                  <strong>Tarih:</strong> 20.06.2025
                </li>
                <li>
                  <strong>Faaliyet No:</strong> 45.2025.3277
                </li>
                <li>
                  <strong>Geçerlilik:</strong> 19.06.2026
                </li>
                <li>
                  <strong>İmza:</strong> Tekin Gözel - İl Sivil Toplumla
                  İlişkiler Müdürü
                </li>
              </ul>
            </div>

            {/* Gen Raporu */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow hover:border-primary/20">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4 text-2xl">
                🧬
              </div>
              <h3 className="font-bold text-lg mb-2">Genetik Test Raporu</h3>
              <p className="text-gray-600 text-sm mb-4">
                SBÜ Tepecik Eğitim ve Araştırma Hastanesi Genetik Hastalıklar
                Değerlendirme Merkezi
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>
                  <strong>Test:</strong> DMD Delesyon/Duplikasyon Analizi
                </li>
                <li>
                  <strong>Sonuç:</strong> Ekzon 56 Hemizigot delesyonu
                </li>
                <li>
                  <strong>Doktor:</strong> Doç. Dr. Berk Özyılmaz
                </li>
                <li>
                  <strong>Tarih:</strong> 17.05.2022
                </li>
              </ul>
            </div>

            {/* Hastane Teklifi */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow hover:border-primary/20">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4 text-2xl">
                🏥
              </div>
              <h3 className="font-bold text-lg mb-2">Hastane Teklifi</h3>
              <p className="text-gray-600 text-sm mb-4">
                MEDCARE Women & Children Hospital (Dubai) - Elevidys İnfüzyon
                Terapisi
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>
                  <strong>Tedavi:</strong> Elevidys Gen Tedavisi
                </li>
                <li>
                  <strong>Maliyet:</strong> AED 10,650,000 (~$2.9M)
                </li>
                <li>
                  <strong>Ref:</strong> DMD-A22-ŞENOLÇIVGIN-27012025
                </li>
                <li>
                  <strong>Tarih:</strong> 27.01.2025
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INSTAGRAM ==================== */}
      <InstagramFeed />

      {/* ==================== İLETİŞİM ==================== */}
      <section id="iletisim" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              İletişim <span className="text-primary">Bilgileri</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:+905417275725"
              className="flex items-center gap-4 bg-gray-50 hover:bg-blue-50 p-6 rounded-2xl border border-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                📞
              </div>
              <div>
                <p className="font-semibold">Telefon</p>
                <p className="text-gray-600">0541 727 57 25</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/dmd.senolberk.45/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-50 hover:bg-pink-50 p-6 rounded-2xl border border-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center text-xl">
                📸
              </div>
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-gray-600">@dmd.senolberk.45</p>
              </div>
            </a>

            <a
              href="mailto:manisali4528@gmail.com"
              className="flex items-center gap-4 bg-gray-50 hover:bg-green-50 p-6 rounded-2xl border border-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl">
                ✉️
              </div>
              <div>
                <p className="font-semibold">E-posta</p>
                <p className="text-gray-600">manisali4528@gmail.com</p>
              </div>
            </a>

            <a
              href="https://chat.whatsapp.com/LUMoHGYG6wS89bQiOYJM5f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-50 hover:bg-green-50 p-6 rounded-2xl border border-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl">
                💬
              </div>
              <div>
                <p className="font-semibold">WhatsApp Grubu</p>
                <p className="text-gray-600">Gönüllü grubuna katıl</p>
              </div>
            </a>
          </div>

          {/* Veli bilgisi */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
            <p className="text-sm text-gray-600">
              <strong>Veli / Yasal Temsilci:</strong> Serpil Çıvgın (Annesi)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Kampanya, yasal veli Serpil Çıvgın tarafından yürütülmektedir.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sabit Bağış Butonu (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a
          href="#bagis"
          className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-xl animate-pulse-glow"
          aria-label="Bağış Yap"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
