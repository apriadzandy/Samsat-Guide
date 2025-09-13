import { useState } from "react";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { StepGuide } from "@/components/StepGuide";
import { samsatServices, SamsatService } from "@/types/samsat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Users, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const [selectedService, setSelectedService] = useState<SamsatService | null>(null);

  const handleServiceSelect = (service: SamsatService) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="container mx-auto">
          <StepGuide service={selectedService} onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        

        {/* Services Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Pilih Panduan Layanan SAMSAT yang Anda Butuhkan</h2>
            <p className="text-muted-foreground">
              Klik pada layanan yang Anda butuhkan untuk mendapatkan panduan lengkap
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {samsatServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleServiceSelect}
              />
            ))}
          </div>
        </div>
        <div className="text-left space-y-2">
            <h2 className="text-2xl font-bold">Layanan Tambahan</h2>
            <p className="text-muted-foreground">
              Klik pada layanan yang anda butuhkan
            </p>
          </div>
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <a
            href="https://sempol.theflavare.com/#/bbnkb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="text-center cursor-pointer hover:shadow-lg transition">
              <CardContent className="pt-4">
                <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold">SEMPOL</div>
                <div className="text-xs text-muted-foreground">
                  HITUNG JUMLAH PAJAK KENDARAAN ANDA
                </div>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://bapenda.jatimprov.go.id/info/pkb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="text-center cursor-pointer hover:shadow-lg transition">
              <CardContent className="pt-4">
                <TrendingUp className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <div className="text-2xl font-bold">INFO PKB</div>
                <div className="text-xs text-muted-foreground">Informasi jumlah pajak kendaraan bermotor</div>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://info.dipendajatim.go.id/index.php?page=info_etbpkp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="text-center cursor-pointer hover:shadow-lg transition">
              <CardContent className="pt-4">
                <Shield className="w-8 h-8 mx-auto text-amber-500 mb-2" />
                <div className="text-2xl font-bold">Cetak E-TBPKP</div>
                <div className="text-xs text-muted-foreground">Cetak E-TBPKP</div>
              </CardContent>
            </Card>
          </a>

        </div>
        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5" />
                Catatan Penting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Badge variant="destructive" className="w-fit">Penting</Badge>
                <p className="text-sm">
                  Pastikan semua dokumen asli dan fotocopy sudah disiapkan sebelum datang ke SAMSAT.
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary" className="w-fit">Tips</Badge>
                <p className="text-sm">
                  Datang lebih awal untuk menghindari antrian panjang, terutama di Awal bulan.
                </p>
              </div>
              <div className="space-y-2">
                <Badge className="w-fit">Info</Badge>
                <p className="text-sm">
                  Pembayaran dapat dilakukan tunai atau debit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jam Operasional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium">Hari Kerja</div>
                  <div className="text-muted-foreground">Senin - Sabtu</div>
                  <div className="text-primary font-medium">08:00 - 13.000</div>
                </div>
                <div>
                  <div className="font-medium">Jumat</div>
                  <div className="text-muted-foreground">Layanan Terbatas</div>
                  <div className="text-primary font-medium">08:00 - 11:00</div>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="text-sm">
                  <div className="font-medium text-destructive">Minggu & Hari Libur</div>
                  <div className="text-muted-foreground">TUTUP</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <Card className="mt-8">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 SAMSAT Digital Service. Melayani dengan sepenuh hati untuk kemudahan Anda.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
