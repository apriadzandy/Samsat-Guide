import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Phone } from "lucide-react";
import samsatLogo from "@/assets/samsat-logo.png"; 

export const Header = () => {
  return (
    <Card className="gradient-primary text-white shadow-primary">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          {/* Logo di atas */}
          <img
            src={samsatLogo}
            alt="Logo Samsat"
            className="h-16 w-auto mx-auto drop-shadow-md mb-2"
          />
          <h1 className="text-4xl font-bold">KB SAMSAT SURABAYA BARAT</h1>
          <p className="text-white/300 text-sm">
            Sistem Administrasi Manunggal Satu Atap
          </p>

          {/* Deskripsi */}
          <div className="max-w-2xl mx-auto mt-2">
            <h2 className="text-xl font-semibold mb-2">
              Layanan Terpadu Kendaraan Bermotor
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Pilih layanan yang Anda butuhkan dan ikuti panduan langkah demi langkah 
              untuk menyelesaikan urusan kendaraan bermotor Anda dengan mudah dan cepat.
            </p>
          </div>

          {/* Info Kontak */}
          <div className="flex flex-wrap justify-center gap-4 text-sm mt-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Senin - Kamis: 08:00 - 13:00</span>
              <span>| Jumat: 08:00 - 11:00</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Jl. Raya Tandes Lor No 1, Surabaya</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>082234226900</span>
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center gap-2 mt-2">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Pelayanan Cepat
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Digital Service
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Satu Atap
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
