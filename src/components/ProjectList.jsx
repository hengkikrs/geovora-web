import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  List,
  Image as ImageIcon,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [filterYear, setFilterYear] = useState("Semua");
  const [sortBy, setSortBy] = useState("terbaru");

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://geovora-api.vercel.app/api/projects")
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setProjects(result.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Gagal menarik data proyek:", error);
        setIsLoading(false);
      });

    fetch("https://geovora-api.vercel.app/api/articles")
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setArticles(result.data.slice(0, 3));
        }
      })
      .catch((error) => console.error("Gagal menarik data artikel:", error));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterStatus, filterYear, sortBy]);

  const availableYears = [
    ...new Set(projects.map((p) => p.tahun).filter((y) => y)),
  ].sort((a, b) => b - a);

  let filteredProjects = [...projects];

  if (searchQuery) {
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.keterangan &&
          p.keterangan.toLowerCase().includes(searchQuery.toLowerCase())),
    );
  }
  if (filterStatus !== "Semua") {
    filteredProjects = filteredProjects.filter(
      (p) => p.status === filterStatus,
    );
  }
  if (filterYear !== "Semua") {
    filteredProjects = filteredProjects.filter((p) => p.tahun === filterYear);
  }
  if (sortBy === "terbaru") {
    filteredProjects.sort((a, b) => b.id - a.id);
  } else if (sortBy === "terlama") {
    filteredProjects.sort((a, b) => a.id - b.id);
  }

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Project Geovora
            </h2>
            <p className="text-gray-500 mt-2">
              Menampilkan rekam jejak penyelesaian proyek pemetaan kami.
            </p>
          </div>

          <div className="flex bg-white p-1 rounded-lg shadow-sm border border-gray-200 shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${viewMode === "grid" ? "bg-teal text-white shadow-sm" : "text-gray-500 hover:text-navy hover:bg-gray-50"}`}
            >
              <LayoutGrid size={18} /> Kotak
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${viewMode === "list" ? "bg-teal text-white shadow-sm" : "text-gray-500 hover:text-navy hover:bg-gray-50"}`}
            >
              <List size={18} /> Baris
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari nama proyek, lokasi, atau keterangan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent py-2.5 outline-none text-sm text-gray-700 w-full cursor-pointer"
              >
                <option value="Semua">Semua Status</option>
                <option value="Berjalan">Berjalan</option>
                <option value="Selesai">Selesai</option>
                <option value="Tertunda">Tertunda</option>
              </select>
            </div>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 w-full sm:w-auto">
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="bg-transparent py-2.5 outline-none text-sm text-gray-700 w-full cursor-pointer"
              >
                <option value="Semua">Semua Tahun</option>
                {availableYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent py-2.5 outline-none text-sm text-gray-700 w-full cursor-pointer"
              >
                <option value="terbaru">Terbaru</option>
                <option value="terlama">Terlama</option>
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-teal border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 font-medium">
                Memuat data project dari server...
              </p>
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="bg-white p-12 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">
              Tidak ada proyek ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah kata kunci pencarian atau sesuaikan filter Anda.
            </p>
          </div>
        ) : (
          <>
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "flex flex-col gap-5"
              }
            >
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className={`bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-teal/30 transition-all duration-300 overflow-hidden group ${viewMode === "list" ? "flex flex-col md:flex-row" : "flex flex-col"}`}
                >
                  <div
                    className={`${viewMode === "list" ? "md:w-[40%] lg:w-1/3 h-56 md:h-auto" : "h-56"} bg-gray-100 relative shrink-0 border-b md:border-b-0 md:border-r border-gray-100 overflow-hidden`}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50/50">
                        <ImageIcon size={36} className="mb-3 opacity-30" />
                        <span className="text-sm font-medium">
                          Tidak Ada Foto
                        </span>
                      </div>
                    )}
                    {viewMode === "grid" && (
                      <div className="absolute top-4 right-4 z-10">
                        <span
                          className={`px-3 py-1.5 text-xs font-bold rounded-md shadow-sm backdrop-blur-md ${project.status === "Selesai" ? "bg-green-500/90 text-white" : project.status === "Berjalan" ? "bg-blue-500/90 text-white" : "bg-yellow-500/90 text-white"}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`p-6 md:p-8 flex flex-col justify-center ${viewMode === "list" ? "md:w-[60%] lg:w-2/3" : "flex-grow"}`}
                  >
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-navy leading-tight group-hover:text-teal transition-colors">
                        {project.title}
                      </h3>
                      {viewMode === "list" && (
                        <span
                          className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap border ${project.status === "Selesai" ? "bg-green-50 text-green-700 border-green-200" : project.status === "Berjalan" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}`}
                        >
                          {project.status}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-y-2 gap-x-6 mb-5 text-sm text-gray-600">
                      <p className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-md">
                        <span className="font-semibold text-gray-800">
                          Lokasi:
                        </span>{" "}
                        {project.location}
                      </p>
                      <p className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-md">
                        <span className="font-semibold text-gray-800">
                          Tahun:
                        </span>{" "}
                        {project.tahun || "-"}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-2 line-clamp-3">
                      {project.keterangan ||
                        "Tidak ada deskripsi tersedia untuk proyek ini."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`w-10 h-10 rounded-lg font-bold transition-colors ${currentPage === index + 1 ? "bg-teal text-white shadow-md" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}

        {/* BAGIAN DAFTAR ARTIKEL BAWAH */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-teal font-bold mb-3 uppercase tracking-wider text-sm">
                <BookOpen size={18} /> Wawasan Geovora
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Artikel & Berita Terbaru
              </h2>
            </div>
            {/* TOMBOL LIHAT SEMUA ARTIKEL YANG SUDAH MENJADI LINK AKTIF */}
            <Link
              to="/artikel"
              className="text-teal font-bold hover:text-navy transition-colors flex items-center gap-2 group"
            >
              Lihat Semua Artikel{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                to={`/artikel/${article.id}`}
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon size={40} className="text-gray-300" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-navy text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-gray-400 text-sm mb-3 font-medium">
                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                    {article.content.replace(/<[^>]+>/g, "")}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 text-teal font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Baca Selengkapnya <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}

            {articles.length === 0 && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10 border border-dashed border-gray-300 rounded-xl">
                <p className="text-gray-500">
                  Belum ada artikel yang diterbitkan. Tambahkan di halaman
                  Admin.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
