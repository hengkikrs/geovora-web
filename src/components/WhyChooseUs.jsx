import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    "Pemrosesan Data Akurat",
    "Perangkat Standar Industri",
    "Platform WebGIS Kustom",
    "Pengerjaan Tepat Waktu",
    "Komunikasi yang Responsif",
    "Solusi Cloud Terukur",
  ];

  // Daftar 4 gambar HD (Cukup 4 saja, tidak perlu digandakan lagi)
  const sliderImages = [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
  ];

  // State untuk melacak urutan gambar yang sedang aktif
  const [currentImage, setCurrentImage] = useState(0);

  // Timer otomatis untuk mengganti slide setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % sliderImages.length);
    }, 4000); // 4000 ms = 4 detik per gambar
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* BAGIAN KIRI: SLIDE SHOW GAYA POWERPOINT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="relative w-full aspect-square md:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-navy flex items-center group">
              {/* Gambar Slideshow dengan Transisi Fade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage} // Key penting agar React tahu kapan gambar berubah
                  src={sliderImages[currentImage]}
                  alt="Visualisasi Geovora"
                  className="absolute inset-0 w-full h-full object-cover"
                  // Efek masuk (memudar dari transparan + sedikit efek zoom elegan)
                  initial={{ opacity: 0, scale: 1.05 }}
                  // Kondisi saat tampil
                  animate={{ opacity: 1, scale: 1 }}
                  // Efek keluar (memudar menjadi transparan)
                  exit={{ opacity: 0 }}
                  // Durasi transisi
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Overlay Gradient agar teks di bawah tetap terbaca jelas */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent z-10 pointer-events-none"></div>

              {/* Teks Melayang di Atas Slider (Tetap Sama) */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md leading-tight">
                  Memaksimalkan Potensi Ruang Anda
                </h3>
                <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-white font-bold text-sm flex items-center gap-3 tracking-wide">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse"></span>
                    Presisi & Akurasi Tinggi
                  </p>
                </div>
              </div>

              {/* Indikator Titik (Dots) di Pojok Kanan Atas */}
              <div className="absolute top-6 right-6 z-20 flex gap-2">
                {sliderImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentImage === index ? "w-6 bg-teal" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* BAGIAN KANAN: KONTEN ASLI (TIDAK ADA YANG DIUBAH) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-navy mb-6">
              Mengapa Memilih GeoVora?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kami memadukan keahlian teknis yang mendalam dengan pendekatan
              modern dalam pemecahan masalah spasial, memastikan proyek Anda
              dieksekusi dengan presisi tinggi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-teal shrink-0" />
                  <span className="font-medium text-navy">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
