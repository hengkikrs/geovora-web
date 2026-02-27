import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  // State untuk mengontrol jendela Pop-up WhatsApp
  const [isWaModalOpen, setIsWaModalOpen] = useState(false);
  const [waData, setWaData] = useState({ nama: "", pesan: "" });

  // Fungsi untuk mengirim pesan ke API WhatsApp
  const handleWaSubmit = (e) => {
    e.preventDefault();
    // PENTING: Ganti dengan nomor WhatsApp aktif Anda (Gunakan kode negara 62 tanpa + atau 0)
    const phone = "6281234567890";

    // Format pesan otomatis
    const text = `Halo tim GeoVora, saya *${waData.nama}*.\n\nSaya ingin berkonsultasi mengenai:\n${waData.pesan}`;

    // Membuat Link API WA dan membukanya di tab baru
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // Reset dan tutup modal
    setIsWaModalOpen(false);
    setWaData({ nama: "", pesan: "" });
  };

  const dots = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white bg-contour"
      >
        <div className="absolute inset-0 z-0 opacity-40">
          {dots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute w-2 h-2 rounded-full bg-teal/30"
              initial={{ left: `${dot.x}%`, top: `${dot.y}%`, opacity: 0.2 }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                ease: "linear",
                delay: dot.delay,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal font-medium text-sm mb-6 border border-teal/20"
            >
              Pionir Intelijen Spasial
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-extrabold text-navy leading-tight mb-6">
              Solusi Spasial Cerdas <br className="hidden md:block" /> untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-emerald-400">
                Keputusan Modern
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              GeoVora mengubah data spasial menjadi intelijen strategis untuk
              kebutuhan infrastruktur, pertambangan, pertanian, dan perencanaan
              tata ruang.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* TOMBOL 1: Langsung pindah ke halaman Portofolio menggunakan <Link> */}
              <Link
                to="/portofolio"
                className="group flex items-center gap-2 bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:-translate-y-1"
              >
                Lihat Portofolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* TOMBOL 2: Membuka Jendela Pop-up Modal WhatsApp */}
              <button
                onClick={() => setIsWaModalOpen(true)}
                className="px-8 py-4 rounded-xl font-semibold text-navy bg-white border border-gray-200 hover:border-teal hover:text-teal transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Minta Konsultasi
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* JENDELA POP-UP WHATSAPP */}
      <AnimatePresence>
        {isWaModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
            {/* Background Gelap blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWaModalOpen(false)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />

            {/* Kotak Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <div>
                  <h3 className="text-xl font-bold text-navy">
                    Konsultasi via WhatsApp
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Admin kami akan segera merespon pesan Anda.
                  </p>
                </div>
                <button
                  onClick={() => setIsWaModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-teal hover:bg-teal/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <form onSubmit={handleWaSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      required
                      value={waData.nama}
                      onChange={(e) =>
                        setWaData({ ...waData, nama: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal outline-none transition-all"
                      placeholder="Masukkan nama Anda..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Topik Konsultasi
                    </label>
                    <textarea
                      required
                      rows="3"
                      value={waData.pesan}
                      onChange={(e) =>
                        setWaData({ ...waData, pesan: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-teal outline-none transition-all resize-none"
                      placeholder="Apa yang ingin Anda diskusikan?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mt-2"
                  >
                    Lanjutkan ke WhatsApp <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
