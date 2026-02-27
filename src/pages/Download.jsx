import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download as DownloadIcon,
  FileArchive,
  Map as MapIcon,
  LayoutGrid,
  List,
} from "lucide-react";

const Download = () => {
  const [files, setFiles] = useState([]);

  // State baru untuk menyimpan preferensi tampilan ('grid' atau 'list')
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    // Mengambil data dari localStorage (Database Mock)
    const storedFiles = localStorage.getItem("geovora_downloads");
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles));
    } else {
      // Data dummy awal jika kosong
      const initialData = [
        {
          id: 1,
          title: "Batas Administrasi Desa 2026",
          type: "Shapefile (.shp)",
          size: "12 MB",
          link: "#",
        },
        {
          id: 2,
          title: "Peta Jaringan Jalan Nasional",
          type: "GeoJSON",
          size: "5 MB",
          link: "#",
        },
      ];
      setFiles(initialData);
      localStorage.setItem("geovora_downloads", JSON.stringify(initialData));
    }
  }, []);

  return (
    <section className="pt-32 pb-24 min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Pusat Unduhan Data
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akses dataset spasial publik, file template, dan peta dasar
            berkualitas tinggi dari GeoVora.
          </p>
        </motion.div>

        {/* Action Bar (Toggle Mode Tampilan) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-end mb-6"
        >
          <div className="bg-gray-200/60 p-1 rounded-lg flex gap-1 shadow-inner">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-md transition-all flex items-center justify-center ${
                viewMode === "grid"
                  ? "bg-white text-teal shadow-sm font-semibold scale-100"
                  : "text-gray-500 hover:text-navy hover:bg-gray-200/50 scale-95"
              }`}
              title="Tampilan Kotak"
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-md transition-all flex items-center justify-center ${
                viewMode === "list"
                  ? "bg-white text-teal shadow-sm font-semibold scale-100"
                  : "text-gray-500 hover:text-navy hover:bg-gray-200/50 scale-95"
              }`}
              title="Tampilan Baris"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Data Container */}
        <motion.div
          layout // Memungkinkan transisi mulus saat berpindah dari grid ke flex
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          }
        >
          <AnimatePresence>
            {files.map((file, index) => (
              <motion.div
                key={file.id}
                layout // Memungkinkan kartu beranimasi saat lebarnya berubah
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
                  viewMode === "grid"
                    ? "p-6 flex flex-col h-full" // Styling untuk Mode Kotak
                    : "p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6" // Styling untuk Mode Baris
                }`}
              >
                {/* 1. Bagian Info (Ikon, Judul, Tipe) */}
                <div
                  className={`flex ${viewMode === "grid" ? "flex-col" : "flex-row items-center gap-5"}`}
                >
                  {/* Ikon */}
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-lg flex items-center justify-center shrink-0 mb-4 sm:mb-0">
                    {file.type.toLowerCase().includes("shp") ? (
                      <MapIcon className="w-6 h-6" />
                    ) : (
                      <FileArchive className="w-6 h-6" />
                    )}
                  </div>

                  {/* Teks */}
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2 sm:mb-1">
                      {file.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                        {file.type}
                      </span>
                      <span className="flex items-center gap-1 before:content-['•'] before:mr-1 before:text-gray-300">
                        {file.size}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Bagian Tombol Unduh */}
                <a
                  href={file.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`bg-navy text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-teal transition-colors shrink-0 ${
                    viewMode === "grid"
                      ? "mt-8 py-3 w-full" // Tombol penuh di bawah jika mode kotak
                      : "mt-2 sm:mt-0 px-8 py-3 w-full sm:w-auto" // Tombol di samping jika mode baris
                  }`}
                >
                  <DownloadIcon className="w-4 h-4" /> Unduh File
                </a>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Tampilan jika data kosong */}
          {files.length === 0 && (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
              <FileArchive className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">
                Belum Ada File
              </h3>
              <p className="text-gray-500">
                Tidak ada data unduhan yang tersedia saat ini.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
