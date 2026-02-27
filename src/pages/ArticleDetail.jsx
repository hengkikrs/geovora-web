import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
// Import CSS Quill agar format teks (bold, list, dll) dari admin dirender dengan benar
import "react-quill/dist/quill.snow.css";

export default function ArticleDetail() {
  const { id } = useParams(); // Mengambil ID artikel dari URL (contoh: /artikel/1)
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat halaman dibuka
    fetch(`https://geovora-api.vercel.app/api/articles/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") setArticle(result.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center text-teal font-bold animate-pulse">
        Memuat Artikel...
      </div>
    );
  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-xl">
        Artikel tidak ditemukan.
      </div>
    );

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Tombol Kembali */}
        <Link
          to="/portofolio"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-teal font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Kembali ke Portofolio
        </Link>

        {/* Header Artikel */}
        <header className="mb-10 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium text-gray-500 mb-4">
            <span className="flex items-center gap-1.5 text-teal bg-teal/10 px-3 py-1.5 rounded-full">
              <Tag size={16} /> {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} />{" "}
              {new Date(article.created_at).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-8">
            {article.title}
          </h1>
        </header>

        {/* Foto / Thumbnail Utama */}
        {article.image && (
          <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Isi Artikel (Dirender dengan style bawaan Quill) */}
        <article
          className="ql-editor !px-0 !pb-10 max-w-none text-gray-700 text-lg leading-relaxed border-b border-gray-100"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></article>
      </div>
    </main>
  );
}
