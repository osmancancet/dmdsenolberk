import ProfileFrameGenerator from "@/components/ProfileFrameGenerator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Fotoğrafını Düzenle | Şenol Berk DMD",
  description:
    "Profil fotoğrafına Şenol Berk destek çerçevesi ekle. Gönüllü Ablası veya Gönüllü Abisi çerçevesiyle farkındalık oluştur.",
};

export default function DestekPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Profil Fotoğrafını{" "}
                <span className="text-primary">Düzenle</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profil fotoğrafına Şenol Berk destek çerçevesi ekleyerek
                farkındalık oluşturmaya yardımcı ol!
              </p>
              <div className="w-20 h-1 bg-red-500 mx-auto rounded-full mt-4" />
            </div>

            <ProfileFrameGenerator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
