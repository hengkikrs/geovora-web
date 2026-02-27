import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  Map,
  CheckCircle,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  Building,
  Leaf,
  Mountain,
  Globe,
  Briefcase,
  Compass,
  X,
  Settings,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT. Agraria Makmur",
      text: "Pemetaan topografi sawit kami selesai 2 minggu lebih cepat dari tenggat waktu. Akurasinya luar biasa!",
    },
    {
      name: "Diana Rahma",
      company: "Dinas Tata Ruang",
      text: "WebGIS kustom dari Geovora sangat membantu tim kami memantau batas desa secara real-time.",
    },
    {
      name: "Arif Wijaya",
      company: "Kontraktor Tambang",
      text: "Hasil 3D model (DEM/DSM) sangat presisi. Membantu kami menghemat biaya operasional ekskavasi.",
    },
    {
      name: "Siti Nurbaya",
      company: "Developer Properti",
      text: "Layanan drone fotogrametrinya sangat profesional. Presentasi ke investor jadi jauh lebih mudah.",
    },
  ];

  const packages = [
    {
      title: "Basic Mapping",
      target: "Lahan Kecil / Peta Dasar",
      price: "Mulai Rp 2,5 Jt",
      features: [
        "Luas lahan s/d 10 Hektar",
        "Peta Topografi 2D",
        "Output format PDF & JPEG",
        "Revisi minor 1 kali",
        "Pengerjaan 3-5 Hari Kerja",
      ],
      recommended: false,
      details: {
        description:
          "Solusi cepat dan hemat untuk kebutuhan dokumentasi visual dan pemetaan batas area berskala kecil.",
        technical: [
          "Resolusi Spasial (GSD): ~5 cm/pixel",
          "Output Utama: Peta Orthophoto 2D resolusi tinggi",
          "Format File: PDF (Layout Cetak) & JPEG",
          "Akurasi: Geotagging standar bawaan drone (Non-RTK)",
        ],
        idealFor:
          "Sertifikasi batas tanah pribadi, dokumentasi progres fisik bangunan/proyek kecil, dan perencanaan layout properti awal.",
      },
    },
    {
      title: "Pro Fotogrametri",
      target: "Perkebunan & Pertambangan",
      price: "Mulai Rp 7,5 Jt",
      features: [
        "Luas lahan s/d 50 Hektar",
        "Pemodelan 3D (DEM, DSM, DTM)",
        "Output SHP, DWG (CAD), TIFF",
        "Akses WebGIS Viewer Basic",
        "Pengerjaan 7-10 Hari Kerja",
      ],
      recommended: true,
      details: {
        description:
          "Paket standar industri untuk rekayasa teknis. Menghasilkan pemodelan elevasi tanah yang sangat akurat untuk kebutuhan desain dan perhitungan volume.",
        technical: [
          "Resolusi Spasial (GSD): ~2-3 cm/pixel",
          "Pemasangan GCP (Ground Control Point): Termasuk (Maks 5 Titik)",
          "Model Elevasi: DSM (Digital Surface Model) & DTM (Terrain)",
          "Data Vektor: Kontur interval 0.5m - 1m (Format DWG/SHP)",
          "Format File: GeoTIFF, LAS/LAZ (Point Cloud), DWG, SHP",
        ],
        idealFor:
          "Perhitungan volume galian/timbunan (cut & fill) tambang, perencanaan drainase perkebunan sawit, desain jalan, dan analisis kemiringan lereng.",
      },
    },
    {
      title: "Custom Enterprise",
      target: "Proyek Skala Besar & Khusus",
      price: "Hubungi Kami",
      features: [
        "Luas lahan > 50 Hektar",
        "Analisis Spesifik (NDVI, Kontur)",
        "Platform WebGIS Kustom (Domain Sendiri)",
        "Konsultasi Ahli Spasial Terpadu",
        "Dukungan Teknis Prioritas",
      ],
      recommended: false,
      details: {
        description:
          "Layanan menyeluruh dari hulu ke hilir. Dirancang khusus untuk korporasi yang membutuhkan integrasi data spasial berkelanjutan ke dalam sistem manajemen mereka.",
        technical: [
          "Resolusi & Wahana: Disesuaikan (Fixed-wing, Multirotor RTK/PPK, LiDAR)",
          "Analisis Tambahan: Kesehatan tanaman (Multispektral/NDVI), Klasifikasi tutupan lahan",
          "WebGIS: Pembuatan Dasbor interaktif dengan domain & server klien",
          "Pelatihan: Training transfer ilmu penggunaan data untuk tim internal klien",
        ],
        idealFor:
          "Inventarisasi aset perkebunan raksasa, pemantauan rehabilitasi daerah aliran sungai (DAS), dan pembangunan platform kota pintar (Smart City).",
      },
    },
  ];

  // DATA LINK LOGO TELAH DIGANTI DENGAN YANG BARU SESUAI PERMINTAAN
  const softwareLogos = [
    {
      name: "QGIS",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/QGIS_logo_new.svg/512px-QGIS_logo_new.svg.png",
    },
    {
      name: "ArcGIS",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/ArcGIS_globe.png/500px-ArcGIS_globe.png",
    },
    {
      name: "AutoCAD",
      url: "https://ridergalau.id/wp-content/uploads/2026/01/Logo-Autocad.png",
    },
    {
      name: "ENVI",
      url: "https://access.tufts.edu/sites/default/files/styles/app_store_product_image/public/2020-03/logo-envi.png?itok=3Sz_W5VQ",
    },
    {
      name: "Geomatica",
      url: "https://pcigeomatics.github.io/PCI-Geomatics-Python-Cookbook/static/pcilogo.png",
    },
    {
      name: "Photoshop",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
    },
    {
      name: "Leaflet.js",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/512px-Leaflet_logo.svg.png",
    },
    {
      name: "Mapbox",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mapbox_logo_2019.svg/512px-Mapbox_logo_2019.svg.png",
    },
    {
      name: "PostGIS",
      url: "https://cdn.shortpixel.ai/spai/w_600+q_glossy+ret_img+to_webp/imasgal.com/wp-content/uploads/2018/04/portada-noticia-charla-paul-ramsey.jpg",
    },
    {
      name: "React Web",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    },
  ];

  const [currentTesti, setCurrentTesti] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTesti((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPackage]);

  return (
    <div className="w-full bg-white overflow-hidden relative">
      {/* ========================================== */}
      {/* 1. HERO SECTION */}
      {/* ========================================== */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div
          className="absolute inset-0 bg-navy/5 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20px 20px, rgba(20, 184, 166, 0.1) 2px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-6"
          >
            Presisi Spasial untuk <br className="hidden md:block" />
            <span className="text-teal">Keputusan Bisnis Terbaik</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Geovora menghadirkan layanan pemetaan drone, topografi, dan WebGIS
            tingkat lanjut untuk memaksimalkan potensi ruang dan lahan Anda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/layanan"
              className="bg-teal text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-colors shadow-lg shadow-teal/30 flex items-center justify-center gap-2"
            >
              Jelajahi Layanan <ArrowRight size={20} />
            </Link>
            <Link
              to="/portofolio"
              className="bg-white text-navy border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              Lihat Portofolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. SEKILAS LAYANAN & TENTANG GEOVORA */}
      {/* ========================================== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h4 className="text-teal font-bold uppercase tracking-widest mb-2 text-sm">
                Mengenal Geovora
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Mitra Strategis Pemetaan Spasial Anda
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kami adalah agensi pemetaan dan analisis geospasial yang
                berdedikasi untuk mengubah data lahan mentah menjadi informasi
                visual yang mudah dipahami. Dengan perpaduan teknologi drone
                mutakhir dan sistem informasi geografis (GIS), kami membantu
                perusahaan mengambil keputusan yang lebih cepat, aman, dan
                efisien.
              </p>
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 text-teal font-bold hover:text-navy transition-colors"
              >
                Pelajari Tentang Kami Lebih Lanjut <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal hover:shadow-md transition-all">
                <Mountain className="w-10 h-10 text-teal mb-4" />
                <h3 className="font-bold text-navy mb-2">Pemetaan Topografi</h3>
                <p className="text-sm text-gray-500">
                  Analisis kontur dan elevasi lahan secara detail.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal hover:shadow-md transition-all">
                <Compass className="w-10 h-10 text-teal mb-4" />
                <h3 className="font-bold text-navy mb-2">Fotogrametri Drone</h3>
                <p className="text-sm text-gray-500">
                  Pemodelan 3D dan akuisisi citra udara resolusi tinggi.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal hover:shadow-md transition-all">
                <Globe className="w-10 h-10 text-teal mb-4" />
                <h3 className="font-bold text-navy mb-2">
                  Pengembangan WebGIS
                </h3>
                <p className="text-sm text-gray-500">
                  Platform digital untuk memantau aset secara real-time.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-teal hover:shadow-md transition-all">
                <Briefcase className="w-10 h-10 text-teal mb-4" />
                <h3 className="font-bold text-navy mb-2">Konsultasi Spasial</h3>
                <p className="text-sm text-gray-500">
                  Solusi khusus untuk tata ruang dan agrikultur.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. DATA VISUALISASI (STATISTIK) */}
      {/* ========================================== */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                150+
              </h3>
              <p className="text-teal font-medium text-xs md:text-sm uppercase tracking-wider">
                Proyek Selesai
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                50<span className="text-teal text-2xl md:text-3xl">Rb</span>
              </h3>
              <p className="text-teal font-medium text-xs md:text-sm uppercase tracking-wider">
                Hektar Dipetakan
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                99<span className="text-teal text-2xl md:text-3xl">%</span>
              </h3>
              <p className="text-teal font-medium text-xs md:text-sm uppercase tracking-wider">
                Tingkat Akurasi
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                10+
              </h3>
              <p className="text-teal font-medium text-xs md:text-sm uppercase tracking-wider">
                Provinsi Terjangkau
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. DIDUKUNG PERANGKAT LUNAK (LOGO) */}
      {/* ========================================== */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Didukung Ekosistem Software Terbaik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Kami memadukan kekuatan platform pemetaan standar industri global
            dengan teknologi web modern untuk memberikan hasil analisis yang
            tajam dan akurat.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            {softwareLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-teal transition-all duration-300 w-28 md:w-36"
              >
                <div className="h-12 w-full flex items-center justify-center mb-3">
                  <img
                    src={logo.url}
                    alt={`Logo ${logo.name}`}
                    className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-navy transition-colors">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. DIPERCAYA OLEH (KLIEN / INSTANSI) */}
      {/* ========================================== */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Telah Dipercaya Oleh Berbagai Sektor
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-2 text-gray-800 hover:text-navy transition-colors">
              <Building className="w-8 h-8" />
              <span className="text-xl font-serif font-bold">
                Kementerian ATR
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 hover:text-green-700 transition-colors">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-black tracking-tighter uppercase">
                Agro<span className="font-light">Tech</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 hover:text-orange-600 transition-colors">
              <Mountain className="w-8 h-8" />
              <span className="text-xl font-bold uppercase tracking-widest">
                MINING<span className="text-teal">CO</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors">
              <Globe className="w-8 h-8" />
              <span className="text-xl font-medium tracking-wide">
                Eco<span className="font-bold">NGO</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-gray-800 hover:text-navy transition-colors">
              <Briefcase className="w-8 h-8" />
              <span className="text-xl font-bold italic">
                Nusantara<span className="text-teal font-normal">Dev</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. SLIDER TESTIMONI (KATA KLIEN) */}
      {/* ========================================== */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Apa Kata Klien Kami?
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[250px] flex flex-col justify-center relative">
            <div className="absolute top-8 left-8 text-teal opacity-20">
              <svg
                width="60"
                height="60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTesti}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center z-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-navy font-medium italic mb-8 leading-relaxed">
                  "{testimonials[currentTesti].text}"
                </p>
                <div>
                  <h4 className="font-bold text-lg text-navy">
                    {testimonials[currentTesti].name}
                  </h4>
                  <p className="text-teal font-medium text-sm">
                    {testimonials[currentTesti].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTesti(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentTesti === idx ? "w-8 bg-teal" : "w-2 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. MOCKUP PETA INTERAKTIF (JANGKAUAN) */}
      {/* ========================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Jangkauan Pemetaan Nasional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari ujung Sumatera hingga pelosok Papua, tim kami siap memetakan
              medan tersulit sekalipun dengan akurasi tinggi.
            </p>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px] bg-navy rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
              alt="Peta Interaktif"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
            <div className="absolute top-[30%] left-[25%]">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-4 h-4 bg-teal rounded-full"
              />
            </div>
            <div className="absolute top-[50%] left-[45%]">
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                className="w-5 h-5 bg-teal rounded-full"
              />
            </div>
            <div className="absolute top-[65%] left-[70%]">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.8, delay: 1 }}
                className="w-3 h-3 bg-teal rounded-full"
              />
            </div>
            <div className="relative z-10 text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <Map className="w-12 h-12 text-teal mx-auto mb-3" />
              <h3 className="text-white font-bold text-xl">
                Sistem WebGIS Geovora
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                Segera Hadir: Pantau aset Anda langsung dari browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 8. PAKET JASA (PRICING) + FUNGSI ONCLICK */}
      {/* ========================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Paket Layanan Fleksibel
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih paket pemetaan yang paling sesuai dengan kebutuhan dan skala
              proyek perusahaan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative rounded-3xl p-8 ${pkg.recommended ? "bg-navy text-white shadow-2xl scale-105 border-2 border-teal z-10" : "bg-white border border-gray-200 text-navy shadow-lg"}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Paling Diminati
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p
                  className={`text-sm mb-6 ${pkg.recommended ? "text-gray-300" : "text-gray-500"}`}
                >
                  {pkg.target}
                </p>
                <div className="text-3xl font-extrabold mb-8 pb-8 border-b border-gray-200/20">
                  {pkg.price}
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-5 h-5 shrink-0 ${pkg.recommended ? "text-teal" : "text-teal"}`}
                      />
                      <span
                        className={`text-sm ${pkg.recommended ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className={`w-full py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] ${pkg.recommended ? "bg-teal text-white hover:bg-teal-600" : "bg-navy text-white hover:bg-navy/90"}`}
                >
                  Pelajari Detail Paket
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MODAL POPUP DETAIL PAKET */}
      {/* ========================================== */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPackage(null)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col z-10"
            >
              <div className="sticky top-0 bg-white/95 backdrop-blur z-20 px-6 py-5 border-b border-gray-100 flex justify-between items-center rounded-t-3xl">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-navy">
                    {selectedPackage.title}
                  </h3>
                  <p className="text-teal font-bold">{selectedPackage.price}</p>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="p-2 bg-gray-100 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <div className="flex items-center gap-2 font-bold text-navy mb-3">
                    <Map className="w-5 h-5 text-teal" /> Ringkasan Layanan
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {selectedPackage.details.description}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 font-bold text-navy mb-4">
                    <Settings className="w-5 h-5 text-teal" /> Spesifikasi
                    Teknis deliverables
                  </div>
                  <ul className="space-y-3">
                    {selectedPackage.details.technical.map((tech, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />{" "}
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 font-bold text-navy mb-3">
                    <Target className="w-5 h-5 text-teal" /> Paling Cocok Untuk:
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                    "{selectedPackage.details.idealFor}"
                  </p>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100 rounded-b-3xl mt-auto">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Geovora,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20paket%20pemetaan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-teal text-white rounded-xl font-bold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Konsultasi Paket via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* 9. KONTAK & FOOTER SECTION */}
      {/* ========================================== */}
      <section className="bg-navy pt-12 pb-8 md:pt-20 md:pb-10 border-t-4 border-teal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-white mb-10 md:mb-16">
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
