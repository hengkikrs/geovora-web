import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  // 1. State untuk melacak gambar mana yang sedang di-klik (pop-up)
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Peta Infrastruktur Kota Pintar",
      sector: "Perencanaan Kota",
      // Link gambar baru (Kiri)
      image:
        "https://static.wixstatic.com/media/9ad286_2e1dfa73d7334f0ea19e76c3873a9c5c~mv2.png/v1/fill/w_740,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9ad286_2e1dfa73d7334f0ea19e76c3873a9c5c~mv2.png",
      problem:
        "Data utilitas yang terfragmentasi seringkali menyebabkan penundaan konstruksi.",
      solution:
        "Mengembangkan portal WebGIS terpusat yang mengintegrasikan berbagai sumber data utilitas.",
      result:
        "Mengurangi waktu perencanaan hingga 40% dan mencegah kecelakaan penggalian.",
    },
    {
      title: "Dasbor Pertanian Presisi",
      sector: "Agrikultur",
      // Link gambar baru (Tengah)
      image:
        "https://enterprise-insights.dji.com/hs-fs/hubfs/Blog%20Images/Precision%20Agriculture/Precision%20Agriculture%20-%20Live%20NDVI%20View.jpg?width=840&name=Precision%20Agriculture%20-%20Live%20NDVI%20View.jpg",
      problem:
        "Distribusi pupuk yang tidak merata mengakibatkan penurunan hasil panen.",
      solution:
        "Analisis citra drone multispektral untuk memetakan kebutuhan pupuk secara spesifik.",
      result:
        "Meningkatkan hasil panen sebesar 15% sekaligus menghemat biaya bahan kimia.",
    },
    {
      title: "Sistem Pelacakan Rehabilitasi",
      sector: "Pertambangan",
      // Link gambar baru (Kanan)
      image:
        "https://awasmifee.potager.org/uploads/2014/05/boven-digoel-id-1024x624.jpg",
      problem: "Kurangnya transparansi dalam pemantauan lahan pasca-tambang.",
      solution:
        "Analisis perubahan lahan menggunakan citra satelit *time-series* berbasis dasbor.",
      result:
        "Memastikan kepatuhan terhadap regulasi dan meningkatkan kepercayaan publik.",
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-24 bg-white scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">
              Portofolio Pilihan
            </h2>
            <p className="text-lg text-gray-600">
              Memberikan dampak nyata melalui intelijen spasial terapan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                {/* 2. Tambahkan onClick dan cursor-pointer pada area gambar */}
                <div
                  className="h-56 relative overflow-hidden border-b border-gray-100 cursor-zoom-in"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy/90 to-teal/70 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                    <span className="font-mono text-teal font-semibold px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                      {project.sector}
                    </span>
                  </div>
                </div>

                <div className="p-8 relative z-20 bg-gray-50 group-hover:bg-white transition-colors duration-500">
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">
                    {project.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong className="text-navy">Masalah:</strong>{" "}
                      <span className="text-gray-600 leading-relaxed">
                        {project.problem}
                      </span>
                    </p>
                    <p>
                      <strong className="text-navy">Solusi:</strong>{" "}
                      <span className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </span>
                    </p>
                    <p>
                      <strong className="text-navy">Hasil:</strong>{" "}
                      <span className="text-teal font-medium leading-relaxed">
                        {project.result}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MODAL / POP-UP LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Saat background gelap diklik, state dikosongkan (menutup pop-up)
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-navy/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Gambar yang di-pop-up */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged Portfolio"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              // Mencegah klik pada gambar itu sendiri menutup pop-up
              onClick={(e) => e.stopPropagation()}
            />

            {/* Teks bantuan kecil (opsional) */}
            <span className="absolute bottom-6 text-white/50 text-sm font-medium tracking-wider pointer-events-none">
              Klik di luar gambar untuk menutup
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
