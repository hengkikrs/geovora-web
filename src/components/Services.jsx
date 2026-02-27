import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Map,
  Satellite,
  Globe,
  MapPin,
  BarChart3,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  Pickaxe,
  Leaf,
  Building2,
  Layout,
  ShieldCheck,
  MessageSquare,
  Crosshair,
  Cpu,
  CheckCircle,
  Rocket,
  Layers,
} from "lucide-react";

export default function Services() {
  // Data Layanan
  const servicesData = [
    {
      icon: (
        <Map className="w-6 h-6 text-teal transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Analisis Spasial",
      desc: "Pemrosesan geospasial tingkat lanjut untuk mengekstraksi intelijen lokasi, mendeteksi pola tersembunyi, dan pemodelan prediktif.",
      bullets: [
        "Analisis Kesesuaian Lahan",
        "Pemodelan Hidrologi & DAS",
        "Kalkulasi Volume Cut & Fill",
      ],
    },
    {
      icon: (
        <Satellite className="w-6 h-6 text-teal transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Penginderaan Jauh",
      desc: "Akuisisi dan pemrosesan citra satelit resolusi tinggi serta data LiDAR untuk ekstraksi informasi tanpa kontak langsung.",
      bullets: [
        "Klasifikasi Tutupan Lahan",
        "Ekstraksi Topografi (DEM/DSM)",
        "Analisis Kesehatan Vegetasi (NDVI)",
      ],
    },
    {
      icon: (
        <Globe className="w-6 h-6 text-teal transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Pengembangan WebGIS",
      desc: "Rekayasa platform peta interaktif kustom berbasis cloud yang terintegrasi penuh dengan arsitektur data enterprise Anda.",
      bullets: [
        "Dashboard Spasial Real-time",
        "Manajemen Aset Berbasis Cloud",
        "Integrasi API Geospasial",
      ],
    },
    {
      icon: (
        <MapPin className="w-6 h-6 text-teal transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Pemetaan & Survei",
      desc: "Akuisisi data lapangan dengan presisi tinggi menggunakan armada UAV (Drone) dan instrumen survei geodetik standar industri.",
      bullets: [
        "Fotogrametri UAV/Drone",
        "Survei Topografi RTK/PPK",
        "Pemetaan Batas Kadastral",
      ],
    },
    {
      icon: (
        <BarChart3 className="w-6 h-6 text-teal transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Visualisasi Data",
      desc: "Transformasi kumpulan data spasial mentah menjadi representasi metrik visual 2D dan 3D yang komunikatif dan siap dipresentasikan.",
      bullets: [
        "Pemodelan 3D Interaktif",
        "Peta Tematik Resolusi Tinggi",
        "Animasi Progres Konstruksi",
      ],
    },
    {
      icon: (
        <Lightbulb className="w-6 h-6 text-teal transition-transform duration-300 group-hover:scale-110" />
      ),
      title: "Konsultasi GIS",
      desc: "Panduan strategis komprehensif dalam merancang, mengimplementasikan, dan mengelola infrastruktur data spasial perusahaan.",
      bullets: [
        "Audit Sistem Spasial",
        "Penyusunan Masterplan GIS",
        "Pelatihan & Transfer Knowledge",
      ],
    },
  ];

  // Data Industri
  const industries = [
    { icon: <Pickaxe className="w-8 h-8" />, name: "Pertambangan" },
    { icon: <Leaf className="w-8 h-8" />, name: "Agrikultur" },
    { icon: <Building2 className="w-8 h-8" />, name: "Infrastruktur" },
    { icon: <Layout className="w-8 h-8" />, name: "Tata Ruang" },
    { icon: <ShieldCheck className="w-8 h-8" />, name: "Lingkungan" },
  ];

  // Data Proses Kerja
  const workProcess = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Konsultasi",
      desc: "Identifikasi masalah dan penetapan spesifikasi teknis.",
    },
    {
      icon: <Crosshair className="w-6 h-6" />,
      title: "Akuisisi",
      desc: "Pengumpulan data lapangan menggunakan drone & alat geodetik.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Pemrosesan",
      desc: "Pengolahan data mentah menjadi orthophoto & model 3D.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Validasi",
      desc: "Quality control ketat (QA/QC) terhadap akurasi koordinat.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Penyerahan",
      desc: "Penyampaian hasil akhir dan integrasi ke sistem klien.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-navy">
      {/* ========================================== */}
      {/* 1. HERO SECTION (GAYA EDITORIAL ASIMETRIS) */}
      {/* ========================================== */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 max-w-7xl mx-auto relative">
        {/* Dekorasi halus background */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl -z-10"></div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start lg:items-end border-b border-gray-100 pb-12">
          {/* Kolom Kiri: Judul Utama */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5"
          >
            <div className="flex items-center gap-2 text-teal font-bold mb-5 uppercase tracking-wider text-sm">
              <Layers size={18} /> Katalog Layanan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.15] tracking-tight">
              Solusi Spasial <span className="text-teal">Presisi</span> untuk
              Industri Modern
            </h1>
          </motion.div>

          {/* Kolom Kanan: Deskripsi & Tombol */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Kami mentransformasi data spasial mentah menjadi intelijen lokasi
              yang <i>actionable</i>. Mendukung sektor pertambangan, lingkungan,
              dan infrastruktur dengan akurasi tingkat *enterprise*.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-white px-6 py-3.5 rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-md shadow-teal/20 flex items-center justify-center gap-2"
              >
                Konsultasi <ArrowRight size={18} />
              </a>
              <Link
                to="/portofolio"
                className="bg-gray-50 text-navy border border-gray-200 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Lihat Portofolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. GRID LAYANAN UTAMA */}
      {/* ========================================== */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-teal/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-teal transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {srv.desc}
                </p>

                {/* 3 Bullet Points Tambahan */}
                <div className="border-t border-gray-100 pt-5 mt-auto">
                  <ul className="space-y-3">
                    {srv.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <ChevronRight className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. SECTION BARU: INDUSTRI YANG DILAYANI */}
      {/* ========================================== */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-teal tracking-widest uppercase mb-10">
              Industri Yang Kami Layani
            </h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 group cursor-default p-4"
                >
                  <div className="w-20 h-20 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-teal group-hover:text-white group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                    {ind.icon}
                  </div>
                  <span className="font-bold text-gray-600 group-hover:text-navy transition-colors">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. SECTION BARU: PROSES KERJA */}
      {/* ========================================== */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Proses Kerja Terintegrasi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Standar operasional ketat untuk memastikan pengiriman data yang
              tepat waktu dengan margin kesalahan (error) mendekati nol.
            </p>
          </div>

          <div className="relative">
            {/* Garis horizontal penghubung (hanya terlihat di layar besar) */}
            <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {workProcess.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-teal mb-6 relative z-10 group hover:bg-teal hover:text-white transition-colors duration-300">
                    {step.icon}
                    {/* Nomor Urut */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-navy text-white text-sm font-bold rounded-full flex items-center justify-center border-4 border-gray-50 shadow-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed px-2">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. SECTION BARU: PREMIUM CTA BOTTOM */}
      {/* ========================================== */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            {/* Hiasan Latar Belakang */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Tingkatkan Efisiensi Operasional dengan Presisi Spasial
              </h2>
              <p className="text-teal text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                Dapatkan proposal teknis dan penawaran kustom untuk kebutuhan
                proyek spesifik perusahaan Anda.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-teal text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-navy transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" /> Hubungi Tim Ahli Kami
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
