import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  ArrowRight,
} from "lucide-react";

export default function CTA() {
  // State untuk menangani input form (Ditambah Email)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "", // <--- STATE BARU UNTUK EMAIL
    service: "Pemetaan Topografi 2D/3D",
    message: "",
  });

  // Fungsi untuk mengirim pesan langsung ke WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    // Teks WhatsApp diupdate agar menyertakan Email
    const text = `Halo Tim GeoVora, saya ${formData.name} dari ${formData.company}.%0AEmail: ${formData.email}%0A%0ASaya tertarik berdiskusi mengenai layanan *${formData.service}*. %0A%0ADetail pesan/proyek: %0A"${formData.message}"`;
    const waUrl = `https://wa.me/6281234567890?text=${text}`;
    window.open(waUrl, "_blank");
  };

  // Fungsi scroll mulus ke form saat tombol banner diklik
  const scrollToForm = () => {
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans">
      {/* ========================================== */}
      {/* 1. HERO BANNER */}
      {/* ========================================== */}
      <section className="relative py-24 md:py-32 flex items-center justify-center text-center px-6 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="GeoVora Contact Background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-gray-50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Siap Meningkatkan Strategi Spasial Anda?
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Mari berdiskusi bagaimana GeoVora dapat memetakan jalan kesuksesan
            untuk proyek besar Anda selanjutnya.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-teal text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal/30 flex items-center justify-center gap-2 mx-auto transform hover:-translate-y-1"
          >
            Mulai Proyek Anda <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* 2. BAGIAN UTAMA: FORM KONTAK & INFO */}
      {/* ========================================== */}
      <section
        id="contact-form"
        className="py-20 px-6 max-w-7xl mx-auto relative z-20 -mt-10 md:-mt-20"
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- KOLOM KIRI: INFO KONTAK CARD --- */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-navy mb-6 border-b border-gray-100 pb-4">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Kantor Pusat</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Gedung Spasial Nusantara, Jl. Sudirman No. 123, Kawasan
                      Bisnis Terpadu, Jakarta Selatan 12190
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Telepon & WA</h4>
                    <p className="text-sm text-gray-600">+62 812 7222 6567</p>
                    <p className="text-sm text-gray-600">+62 21-9876-5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Email Resmi</h4>
                    <p className="text-sm text-gray-600">halo@geovora.com</p>
                    <p className="text-sm text-gray-600">proyek@geovora.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">
                      Jam Operasional
                    </h4>
                    <p className="text-sm text-gray-600">
                      Senin - Jumat: 08:00 - 17:00
                    </p>
                    <p className="text-sm text-gray-600">
                      Sabtu: 09:00 - 14:00
                    </p>
                    <p className="text-sm text-gray-600">
                      Minggu: Tutup (Kecuali Janji Temu)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- KOLOM KANAN: FORMULIR PROYEK --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            delay={0.2}
            className="lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="text-teal w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-navy">
                Kirim Detail Proyek
              </h2>
            </div>
            <p className="text-gray-500 mb-8">
              Isi formulir di bawah ini, tim ahli kami akan segera menghubungi
              Anda dengan penawaran dan solusi teknis.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">
                    Perusahaan / Instansi *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Contoh: PT. Agraria Makmur"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  />
                </div>
              </div>

              {/* KOLOM EMAIL BARU */}
              <div>
                <label className="block text-sm font-bold text-navy mb-2">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Contoh: budi@perusahaan.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">
                  Layanan yang Dibutuhkan
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all cursor-pointer text-gray-700"
                >
                  <option value="Pemetaan Topografi 2D/3D">
                    Pemetaan Topografi 2D/3D
                  </option>
                  <option value="Survei Fotogrametri Drone">
                    Survei Fotogrametri Drone
                  </option>
                  <option value="Pengembangan Dashboard WebGIS">
                    Pengembangan Dashboard WebGIS
                  </option>
                  <option value="Analisis Penginderaan Jauh">
                    Analisis Penginderaan Jauh (Satelit/LiDAR)
                  </option>
                  <option value="Konsultasi & Pelatihan GIS">
                    Konsultasi & Pelatihan GIS
                  </option>
                  <option value="Lainnya">Lainnya / Custom Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">
                  Ceritakan Tentang Proyek Anda *
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Ceritakan lokasi, estimasi luas lahan (hektar), dan output (peta/3D) yang Anda harapkan..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy text-white rounded-xl font-bold text-lg hover:bg-teal transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} /> Kirim Pesan ke WhatsApp Ahli Kami
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. BAGIAN BAWAH: PETA LOKASI (GOOGLE MAPS) */}
      {/* ========================================== */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-inner border border-gray-100 relative">
            {/* Ini adalah Embed Iframe Google Maps asli (Koordinat area Jakarta sebagai ilustrasi) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24056247926!2d106.74052516421375!3d-6.229746487739575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Geovora"
            ></iframe>

            {/* Badge Melayang di atas Peta */}
            <div className="absolute top-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">GeoVora HQ</h4>
                  <p className="text-xs text-gray-500">
                    Kunjungi kami untuk kopi & diskusi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
