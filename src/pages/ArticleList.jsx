import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Image as ImageIcon, Search } from "lucide-react";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman dibuka
    fetch("https://geovora-api.vercel.app/api/articles")
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          setArticles(result.data); // Menarik SEMUA artikel, tanpa di-slice
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  // Fitur pencarian artikel
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Halaman Artikel */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-teal font-bold mb-4 uppercase tracking-wider text-sm">
            <BookOpen size={20} /> Wawasan Geovora
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">
            Pusat Artikel & Berita Terkini
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Eksplorasi wawasan mendalam seputar teknologi pemetaan, drone,
            sistem informasi geografis, dan transformasi spasial di berbagai
            industri.
          </p>
        </div>

        {/* Kolom Pencarian */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari judul artikel atau kategori (cth: Agrikultur)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all bg-white"
          />
        </div>

        {/* Area Daftar Artikel */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-teal border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 font-medium">
                Memuat pustaka artikel...
              </p>
            </div>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center shadow-sm max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">
              Artikel tidak ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah kata kunci pencarian Anda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                to={`/artikel/${article.id}`}
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="h-52 overflow-hidden relative bg-gray-100">
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
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-gray-400 text-sm mb-3 font-medium">
                    {new Date(article.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-navy mb-4 group-hover:text-teal transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {article.content.replace(/<[^>]+>/g, "")}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 text-teal font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Baca Selengkapnya <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
