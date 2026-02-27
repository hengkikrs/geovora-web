import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Trash2,
  Plus,
  Lock,
  LogOut,
  Database,
  Edit,
  Image as ImageIcon,
  FileText,
  LayoutDashboard,
  PenTool,
} from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState("projects");

  // --- STATE PROYEK & FILE ---
  const [dbProjects, setDbProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectTahun, setProjectTahun] = useState("");
  const [projectKeterangan, setProjectKeterangan] = useState("");
  const [projectStatus, setProjectStatus] = useState("Berjalan");
  const [projectImage, setProjectImage] = useState(null);
  const [projectMessage, setProjectMessage] = useState("");
  const [editProjectId, setEditProjectId] = useState(null);

  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    size: "",
    link: "",
  });

  // --- STATE ARTIKEL / BLOG ---
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState("Agrikultur");
  const [articleContent, setArticleContent] = useState("");
  const [articleImage, setArticleImage] = useState(null);
  const [articleMessage, setArticleMessage] = useState("");

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"],
    ],
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem("geovora_admin_auth");
    if (authStatus === "true") setIsAuthenticated(true);
    const storedFiles = localStorage.getItem("geovora_downloads");
    if (storedFiles) setFiles(JSON.parse(storedFiles));

    fetchDatabaseProjects();
    fetchArticles();
  }, []);

  const fetchDatabaseProjects = async () => {
    try {
      const response = await fetch(
        "https://geovora-api.vercel.app/api/projects",
      );
      const result = await response.json();
      if (result.status === "success") setDbProjects(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://geovora-api.vercel.app/api/articles",
      );
      const result = await response.json();
      if (result.status === "success") setArticles(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://geovora-api.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        setIsAuthenticated(true);
        sessionStorage.setItem("geovora_admin_auth", "true");
        sessionStorage.setItem("geovora_token", result.token);
        setLoginError("");
      } else {
        setLoginError("Username/password salah!");
      }
    } catch (error) {
      setLoginError("Gagal terhubung ke server.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("geovora_admin_auth");
    sessionStorage.removeItem("geovora_token");
    setLoginData({ username: "", password: "" });
  };

  // --- FUNGSI CRUD PROYEK ---
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setProjectMessage("Menyimpan data...");
    const url = editProjectId
      ? `https://geovora-api.vercel.app/api/projects/${editProjectId}`
      : "https://geovora-api.vercel.app/api/projects";
    const method = editProjectId ? "PUT" : "POST";
    const submitData = new FormData();
    submitData.append("title", projectTitle);
    submitData.append("location", projectLocation);
    submitData.append("status", projectStatus);
    submitData.append("tahun", projectTahun);
    submitData.append("keterangan", projectKeterangan);
    if (projectImage) submitData.append("image", projectImage);

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("geovora_token")}`,
        },
        body: submitData,
      });
      const result = await response.json();
      if (result.status === "success") {
        setProjectMessage("✅ Proyek berhasil disimpan!");
        fetchDatabaseProjects();
        setProjectTitle("");
        setProjectLocation("");
        setProjectTahun("");
        setProjectKeterangan("");
        setProjectImage(null);
        setEditProjectId(null);
        document.getElementById("fileInputProj").value = "";
      } else {
        setProjectMessage("❌ Gagal menyimpan.");
      }
    } catch (error) {
      setProjectMessage("❌ Terjadi kesalahan server.");
    }
  };

  const handleEditClick = (project) => {
    setEditProjectId(project.id);
    setProjectTitle(project.title);
    setProjectLocation(project.location);
    setProjectStatus(project.status);
    setProjectTahun(project.tahun || "");
    setProjectKeterangan(project.keterangan || "");
    setProjectImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm("Hapus proyek ini secara permanen?")) {
      try {
        await fetch(`https://geovora-api.vercel.app/api/projects/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("geovora_token")}`,
          },
        });
        fetchDatabaseProjects();
        setProjectMessage("✅ Proyek dihapus.");
      } catch (error) {
        alert("Gagal menghapus.");
      }
    }
  };

  // --- FUNGSI CRUD ARTIKEL ---
  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    setArticleMessage("Menerbitkan artikel...");
    const submitData = new FormData();
    submitData.append("title", articleTitle);
    submitData.append("category", articleCategory);
    submitData.append("content", articleContent);
    if (articleImage) submitData.append("image", articleImage);

    try {
      const response = await fetch(
        "https://geovora-api.vercel.app/api/articles",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("geovora_token")}`,
          },
          body: submitData,
        },
      );
      const result = await response.json();
      if (result.status === "success") {
        setArticleMessage("✅ Artikel berhasil diterbitkan!");
        fetchArticles();
        setArticleTitle("");
        setArticleContent("");
        setArticleImage(null);
        document.getElementById("fileInputArt").value = "";
      } else {
        setArticleMessage("❌ Gagal.");
      }
    } catch (error) {
      setArticleMessage("❌ Error.");
    }
  };

  const handleDeleteArticle = async (id) => {
    if (window.confirm("Hapus artikel ini?")) {
      try {
        await fetch(`https://geovora-api.vercel.app/api/articles/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("geovora_token")}`,
          },
        });
        fetchArticles();
        setArticleMessage("✅ Artikel dihapus.");
      } catch (error) {
        alert("Gagal");
      }
    }
  };

  // --- FUNGSI MANAJEMEN FILE LOKAL ---
  const saveToDB = (newData) => {
    setFiles(newData);
    localStorage.setItem("geovora_downloads", JSON.stringify(newData));
  };
  const handleAddFile = (e) => {
    e.preventDefault();
    saveToDB([...files, { ...formData, id: Date.now() }]);
    setFormData({ title: "", type: "", size: "", link: "" });
  };
  const handleDeleteFile = (id) => {
    if (window.confirm("Hapus file unduhan ini?"))
      saveToDB(files.filter((f) => f.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
        >
          <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-navy text-center mb-8">
            Admin Portal
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            {loginError && (
              <div className="text-red-500 text-sm text-center font-medium">
                {loginError}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                required
                type="text"
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-xl focus:outline-teal"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                required
                type="password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-xl focus:outline-teal"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-navy text-white rounded-xl font-bold hover:bg-teal transition-colors"
            >
              Masuk Sistem
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER & NAVIGASI TAB */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
              <LayoutDashboard className="text-teal" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy">Geovora CMS</h1>
              <p className="text-sm text-gray-500">
                Pusat Kendali Konten Website
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeTab === "projects" ? "bg-white text-navy shadow-sm" : "text-gray-500 hover:text-navy"}`}
            >
              <Database size={18} /> Manajemen Proyek & Peta
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeTab === "articles" ? "bg-white text-navy shadow-sm" : "text-gray-500 hover:text-navy"}`}
            >
              <PenTool size={18} /> Publikasi Artikel
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 text-red-500 hover:bg-red-50 rounded-lg font-bold text-sm ml-auto whitespace-nowrap"
            >
              <LogOut size={18} /> Keluar
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: MANAJEMEN PROYEK & FILE */}
        {/* ========================================================= */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* FORM PROYEK (Sudah Dirapikan & Dikembalikan Placeholdernya) */}
            <div className="mb-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <Database className="w-6 h-6 text-teal" />
                <h2 className="text-xl font-bold text-navy">
                  {editProjectId
                    ? "Edit Project Geovora"
                    : "Tambah Project Baru"}
                </h2>
                {editProjectId && (
                  <button
                    onClick={() => {
                      setEditProjectId(null);
                      setProjectTitle("");
                      setProjectLocation("");
                      setProjectTahun("");
                      setProjectKeterangan("");
                      setProjectImage(null);
                    }}
                    className="ml-auto text-sm text-red-500 underline"
                  >
                    Batal Edit
                  </button>
                )}
              </div>

              {projectMessage && (
                <div
                  className={`mb-6 p-4 rounded-md font-medium ${projectMessage.includes("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  {projectMessage}
                </div>
              )}

              <form
                onSubmit={handleProjectSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Proyek
                  </label>
                  <input
                    type="text"
                    required
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="cth. Proyek Pertambangan"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    required
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    placeholder="cth. Kalimantan Timur"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tahun
                  </label>
                  <input
                    type="text"
                    required
                    value={projectTahun}
                    onChange={(e) => setProjectTahun(e.target.value)}
                    placeholder="cth. 2026"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keterangan
                  </label>
                  <textarea
                    required
                    value={projectKeterangan}
                    onChange={(e) => setProjectKeterangan(e.target.value)}
                    placeholder="cth. Pemetaan topografi seluas 500 hektar..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal h-14"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status Pengerjaan
                  </label>
                  <select
                    value={projectStatus}
                    onChange={(e) => setProjectStatus(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal bg-white cursor-pointer"
                  >
                    <option value="Berjalan">Berjalan</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Tertunda">Tertunda</option>
                  </select>
                </div>

                <div className="lg:col-span-3 mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Foto Proyek (Opsional)
                  </label>
                  {/* Desain Input File Smooth */}
                  <input
                    type="file"
                    id="fileInputProj"
                    accept="image/*"
                    onChange={(e) => setProjectImage(e.target.files[0])}
                    className="w-full text-gray-500 cursor-pointer file:cursor-pointer file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-teal/10 file:text-teal hover:file:bg-teal/20 transition-all"
                  />
                  {editProjectId && (
                    <p className="text-xs text-gray-500 mt-2">
                      *Abaikan jika tidak ingin mengubah foto sebelumnya.
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 lg:col-span-3 mt-4">
                  <button
                    type="submit"
                    className={`font-bold py-3.5 px-8 rounded-xl transition-colors w-full sm:w-auto text-white flex items-center justify-center gap-2 shadow-md ${editProjectId ? "bg-blue-600 hover:bg-blue-700" : "bg-teal hover:bg-teal-600"}`}
                  >
                    {editProjectId
                      ? "Simpan Perubahan Proyek"
                      : "Simpan Proyek Baru"}
                  </button>
                </div>
              </form>
            </div>

            {/* Tabel Proyek */}
            <div className="mb-14 overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-teal text-white">
                  <tr>
                    <th className="p-4">Media</th>
                    <th className="p-4">Nama Proyek</th>
                    <th className="p-4">Lokasi</th>
                    <th className="p-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dbProjects.map((p) => (
                    <tr key={p.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        {p.image ? (
                          <img
                            src={p.image}
                            className="w-16 h-12 object-cover rounded shadow-sm"
                            alt=""
                          />
                        ) : (
                          <div className="w-16 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            <ImageIcon size={20} />
                          </div>
                        )}
                      </td>
                      <td className="p-4 font-medium text-navy">{p.title}</td>
                      <td className="p-4 text-gray-600">{p.location}</td>
                      <td className="p-4 flex gap-2 justify-center pt-5">
                        <button
                          onClick={() => handleEditClick(p)}
                          className="p-2 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(p.id)}
                          className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MANAJEMEN FILE LOKAL (Dikembalikan Ke Format Grid Lengkap) */}
            <div className="mt-16 mb-4">
              <h2 className="text-xl font-bold text-navy">
                Manajemen File Unduhan Peta (Lokal)
              </h2>
              <p className="text-gray-500 text-sm mt-1 mb-6">
                Tambahkan tautan file (Google Drive) yang dapat diunduh klien.
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleAddFile}
              className="bg-white p-6 rounded-xl border border-gray-200 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 shadow-sm"
            >
              <input
                required
                type="text"
                placeholder="Judul File"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
              />
              <input
                required
                type="text"
                placeholder="Tipe (cth: ZIP, PDF)"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
              />
              <input
                required
                type="text"
                placeholder="Ukuran (cth: 15 MB)"
                value={formData.size}
                onChange={(e) =>
                  setFormData({ ...formData, size: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
              />
              <input
                required
                type="url"
                placeholder="Link Download"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                className="px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
              />
              <button
                type="submit"
                className="sm:col-span-2 lg:col-span-4 py-3 bg-navy text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-navy/90 transition-colors"
              >
                <Plus className="w-5 h-5" /> Tambah File Unduhan
              </button>
            </motion.form>

            <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm mb-10">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="p-4 font-semibold">Judul File</th>
                    <th className="p-4 font-semibold">Tipe</th>
                    <th className="p-4 font-semibold">Ukuran</th>
                    <th className="p-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr
                      key={file.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="p-4 font-medium text-navy">
                        {file.title}
                      </td>
                      <td className="p-4 text-gray-600">
                        <span className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">
                          {file.type}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">{file.size}</td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleDeleteFile(file.id)}
                          className="p-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                          title="Hapus File"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {files.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="p-8 text-center text-gray-400 font-medium"
                      >
                        Belum ada data unduhan. Silakan tambahkan file baru.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: MANAJEMEN ARTIKEL & BLOG */}
        {/* ========================================================= */}
        {activeTab === "articles" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="mb-8 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <FileText className="w-6 h-6 text-teal" />
                <h2 className="text-xl font-bold text-navy">
                  Tulis Artikel Baru
                </h2>
              </div>

              {articleMessage && (
                <div
                  className={`mb-6 p-4 rounded-md font-medium ${articleMessage.includes("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  {articleMessage}
                </div>
              )}

              <form onSubmit={handleArticleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Judul Berita/Artikel
                    </label>
                    <input
                      type="text"
                      required
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      placeholder="Ketik judul artikel..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Kategori Topik
                    </label>
                    <select
                      value={articleCategory}
                      onChange={(e) => setArticleCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-teal bg-white cursor-pointer"
                    >
                      <option value="Agrikultur">Agrikultur & Kehutanan</option>
                      <option value="Pertambangan">Pertambangan</option>
                      <option value="Teknologi">Teknologi Spasial</option>
                      <option value="Berita Geovora">Berita Geovora</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Thumbnail Artikel (Wajib Foto HD)
                  </label>
                  <input
                    type="file"
                    id="fileInputArt"
                    required
                    accept="image/*"
                    onChange={(e) => setArticleImage(e.target.files[0])}
                    className="w-full text-gray-500 cursor-pointer file:cursor-pointer file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-teal/10 file:text-teal hover:file:bg-teal/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Isi Artikel
                  </label>
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                    <ReactQuill
                      theme="snow"
                      value={articleContent}
                      onChange={setArticleContent}
                      modules={quillModules}
                      placeholder="Mulai menulis cerita Anda di sini..."
                      className="h-64 mb-12"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto py-3.5 px-8 rounded-xl bg-teal text-white font-bold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <PenTool size={18} /> Terbitkan Artikel
                </button>
              </form>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm mb-10">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="p-4 font-semibold">Thumbnail</th>
                    <th className="p-4 font-semibold">Judul & Kategori</th>
                    <th className="p-4 font-semibold">Tanggal Rilis</th>
                    <th className="p-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((art) => (
                    <tr key={art.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        {art.image ? (
                          <img
                            src={art.image}
                            className="w-20 h-14 object-cover rounded-lg border shadow-sm"
                            alt=""
                          />
                        ) : (
                          <div className="w-20 h-14 bg-gray-100 rounded-lg"></div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-navy truncate w-64">
                          {art.title}
                        </div>
                        <span className="text-xs font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded mt-1 inline-block">
                          {art.category}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500 text-sm">
                        {new Date(art.created_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="p-4 flex justify-center items-center h-full pt-6">
                        <button
                          onClick={() => handleDeleteArticle(art.id)}
                          className="p-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                          title="Hapus Artikel"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {articles.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-400">
                        Belum ada artikel yang diterbitkan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Admin;
