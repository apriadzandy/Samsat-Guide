import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import samsatLogo from "@/assets/samsat-logo.png";
import samsatBuilding from "@/assets/image.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* HERO: full 1 layar, footer di bawah (scroll) */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${samsatBuilding})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Logo kiri atas */}
        <div className="absolute top-6 left-6 z-10">
          <img
            src={samsatLogo}
            alt="Logo Samsat"
            className="h-16 w-auto drop-shadow-lg"
          />
        </div>

        {/* Konten utama */}
        <div className="relative z-10 text-center text-white px-90 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Panduan Layanan Digital KB SAMSAT Surabaya Barat
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Solusi mudah untuk memahami proses perpanjangan pajak, balik nama,
            mutasi, hingga pendaftaran kendaraan baru. Ikuti langkah demi langkah
            dengan jelas dan cepat.
          </p>
          <Button
            size="lg"
            className="bg-blue-400 text-black hover:bg-gray-300 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg transition"
            onClick={() => navigate("/home")}
          >
            Mulai Sekarang
          </Button>
        </div>
      </section>

      {/* FOOTER: berada di bawah hero, harus scroll untuk melihat */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <p className="text-sm text-white/70">
            © 2025 SAMSAT Digital Service – Surabaya Barat
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-sky-400 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
