import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Cpu,
  Lightbulb,
  Eye,
  Compass,
  Award,
  Milestone,
  CheckCircle,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Map,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const roadmapData = [
    {
      year: "2023",
      title: "Pendirian & Fondasi",
      desc: "Geovora didirikan dengan fokus awal pada layanan pemetaan topografi dasar dan survei batas lahan untuk sektor agrikultur di wilayah lokal.",
    },
    {
      year: "2024",
      title: "Ekspansi Teknologi Drone",
      desc: "Mengadopsi teknologi fotogrametri UAV (Drone) untuk mempercepat akuisisi data dan mulai melayani sektor pertambangan dan infrastruktur.",
    },
    {
      year: "2025",
      title: "Pengembangan Sistem WebGIS",
      desc: "Bertransisi menjadi penyedia solusi spasial digital dengan membangun platform WebGIS kustom untuk manajemen aset perusahaan secara real-time.",
    },
    {
      year: "2026 & Ke Depan",
      title: "Integrasi AI & Skala Nasional",
      desc: "Menerapkan Kecerdasan Buatan (AI) untuk analisis citra otomatis dan memperluas jangkauan layanan pemetaan presisi ke seluruh pelosok Nusantara.",
    },
  ];

  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-teal" />,
      title: "Akurasi Absolut",
      desc: "Data spasial yang presisi adalah harga mati dalam setiap proyek yang kami tangani.",
    },
    {
      icon: <Zap className="w-6 h-6 text-teal" />,
      title: "Inovasi Berkelanjutan",
      desc: "Selalu mengadopsi teknologi GIS dan penginderaan jauh terdepan.",
    },
    {
      icon: <Users className="w-6 h-6 text-teal" />,
      title: "Kolaborasi Klien",
      desc: "Kami bekerja bersama Anda, bukan sekadar bekerja untuk Anda.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal" />,
      title: "Integritas Data",
      desc: "Menjaga kerahasiaan dan keamanan data geospasial perusahaan Anda.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* ========================================== */}
      {/* 1. KONTEN ASLI: TENTANG & FITUR UTAMA */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-8">
              Tentang GeoVora
            </h1>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Sebagai mitra intelijen spasial utama Anda, GeoVora berdedikasi
                untuk menjembatani jarak antara data geografis mentah dan
                pengambilan keputusan berbasis data yang matang.
              </p>
              <p>
                Kami memadukan teknologi GIS modern dengan keahlian industri
                yang mendalam untuk menyediakan solusi yang andal, akurat, dan
                dapat diskalakan bagi perusahaan yang ingin memaksimalkan
                potensi lokasi mereka.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-5"
          >
            {/* Kartu 1 Asli */}
            <div className="flex items-start gap-5 p-6 bg-white border border-teal/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Akurasi Tinggi
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Presisi di setiap piksel dan poligon. Kami memastikan tingkat
                  akurasi standar industri untuk kebutuhan pemetaan kritis Anda.
                </p>
              </div>
            </div>
            {/* Kartu 2 Asli */}
            <div className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Teknologi Terkini
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Memanfaatkan inovasi terbaru dalam penginderaan jauh, pemetaan
                  drone, dan arsitektur WebGIS berbasis cloud.
                </p>
              </div>
            </div>
            {/* Kartu 3 Asli */}
            <div className="flex items-start gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Wawasan Kritis
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kami tidak sekadar membuat peta; kami memberikan wawasan
                  mendalam yang mendorong pertumbuhan dan efisiensi bisnis Anda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. FILOSOFI PERUSAHAAN (Visi, Misi & Nilai) */}
      {/* ========================================== */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Filosofi Perusahaan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip dasar yang mengarahkan setiap langkah kami dalam
              memberikan layanan intelijen spasial terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-teal w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Menjadi pusat keunggulan inovasi geospasial terdepan di
                Indonesia, yang memberdayakan setiap sektor industri untuk
                mengambil keputusan berbasis ruang yang presisi, cerdas, dan
                berkelanjutan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="text-teal w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Misi Kami</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal shrink-0" />{" "}
                  Menyediakan layanan akuisisi data spasial (Drone & Topografi)
                  dengan tingkat akurasi tertinggi.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal shrink-0" />{" "}
                  Membangun ekosistem WebGIS interaktif untuk memudahkan
                  analisis klien.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal shrink-0" />{" "}
                  Mengedukasi industri tentang pentingnya digitalisasi tata
                  ruang.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Nilai Inti / Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-teal transition-colors shadow-sm"
              >
                <div className="flex justify-center mb-4">{val.icon}</div>
                <h4 className="font-bold text-navy mb-2">{val.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. ROADMAP / PERJALANAN PERUSAHAAN */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Perjalanan & Peta Jalan
              </h2>
              <p className="text-gray-600 mb-8">
                Evolusi kami dari agensi pemetaan lokal menjadi penyedia solusi
                geospasial komprehensif skala nasional.
              </p>
              <div className="w-20 h-1 bg-teal rounded-full"></div>
            </div>

            <div className="md:w-2/3 relative">
              {/* Garis Vertikal Timeline */}
              <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gray-100 rounded-full"></div>

              <div className="space-y-12">
                {roadmapData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Titik Timeline */}
                    <div className="absolute left-0 top-1 w-12 h-12 bg-white border-4 border-teal rounded-full flex items-center justify-center shadow-md z-10">
                      <Milestone className="w-5 h-5 text-teal" />
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-teal/10 text-teal font-bold text-sm rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-navy mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. KREDIBILITAS TIM & PERSONAL */}
      {/* ========================================== */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Dekorasi BG */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {/* Ilustrasi Kotak Gambar Tim */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Tim Geovora di Lapangan"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                    <Award className="w-10 h-10 text-teal shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Sertifikasi Resmi</h4>
                      <p className="text-xs text-gray-300">
                        Tim Tersertifikasi Asosiasi Survei Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-teal font-bold uppercase tracking-widest mb-2 text-sm">
                Di Balik Geovora
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Kredibilitas Tim Ahli Spasial
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Kehebatan teknologi tidak akan berarti tanpa tangan ahli yang
                mengendalikannya. Tim GeoVora bukan sekadar operator, melainkan
                analis ruang yang memahami masalah industri Anda.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Surveyor Berlisensi
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Validasi hukum atas setiap data koordinat yang kami
                      petakan di lapangan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Analis GIS Tersertifikasi
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Ahli rekayasa geospasial yang mengubah data mentah menjadi
                      dasbor analitik interaktif.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Pilot UAV Profesional
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Berpengalaman memetakan medan ekstrem dengan jam terbang
                      tinggi secara aman.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. KOMITMEN ARAH MASA DEPAN */}
      {/* ========================================== */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Map className="w-16 h-16 text-teal mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
              Komitmen Membangun Masa Depan Spasial
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              Dunia bergerak terlalu cepat untuk dipetakan dengan cara lama.
              Kami berkomitmen untuk terus menjadi pionir dalam menghadirkan
              teknologi "Digital Twin" (Kembaran Digital) dan infrastruktur
              Smart City untuk mendukung keberlanjutan ekologi dan efisiensi
              ekonomi di Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. CALL TO ACTION (CTA) BOLD */}
      {/* ========================================== */}
      <section className="bg-teal py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-navy p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Hiasan background */}
            <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-teal/10 rounded-full"></div>

            <div className="relative z-10 md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Siap Mendigitalkan Aset Lahan Anda?
              </h2>
              <p className="text-teal text-lg font-medium">
                Jangan biarkan proyek Anda terhambat oleh data spasial yang
                tidak akurat.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-navy transition-colors shadow-lg shadow-teal/30"
              >
                Mulai Konsultasi Gratis <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. KONTAK & FOOTER (GAYA BERANDA) */}
      {/* ========================================== */}
      <section className="bg-navy pt-16 pb-8 md:pt-20 md:pb-10 border-t-4 border-teal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-white mb-10 md:mb-16">
            {/* Info Perusahaan */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 text-xl md:text-2xl font-bold mb-4 md:mb-6">
                <Map className="w-6 h-6 md:w-8 md:h-8 text-teal" /> GeoVora
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6">
                Mitra strategis Anda untuk layanan pemetaan spasial,
                fotogrametri, dan pengembangan WebGIS di Indonesia.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            {/* Hubungi Kami */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
                Hubungi Kami
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal shrink-0 mt-0.5" />
                  <span>
                    Jl. Sudirman No. 123, Kawasan Bisnis Terpadu, Jakarta
                    Selatan 12190
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal shrink-0" />
                  <span>+62 812 7222 6567 (WhatsApp)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal shrink-0" />
                  <span>halo@geovora.com</span>
                </li>
              </ul>
            </div>

            {/* Layanan Utama */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
                Layanan Utama
              </h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm">
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-teal transition-colors"
                  >
                    Pemetaan Topografi 2D/3D
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-teal transition-colors"
                  >
                    Survei Fotogrametri Drone
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-teal transition-colors"
                  >
                    Pengembangan WebGIS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-teal transition-colors"
                  >
                    Analisis Lahan & Pertanian
                  </Link>
                </li>
              </ul>
            </div>

            {/* Jam Operasional */}
            <div>
              <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
                Jam Operasional
              </h4>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Senin - Jumat:</span> <span>08:00 - 17:00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sabtu:</span> <span>09:00 - 14:00</span>
                </li>
                <li className="flex justify-between pb-2 text-teal">
                  <span>Minggu:</span> <span>Tutup</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-xs md:text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} GeoVora Mapping Solutions. Hak
              Cipta Dilindungi Undang-Undang.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
