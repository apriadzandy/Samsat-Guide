export interface ServiceStep {
  id: number;
  title: string;
  description: string;
  location: string;
  isCompleted: boolean;
  action?: string;
}

export interface SamsatService {
  id: string;
  title: string;
  description: string;
  icon: string;
  estimatedTime: string;
  requirements: string[];
  steps: ServiceStep[];
}

export const samsatServices: SamsatService[] = [
  {
    id: 'perpanjang-pajak 1 tahunan',
    title: 'Perpanjang Pajak Kendaraan 1tahunan ',
    description: 'Perpanjangan STNK dan bayar pajak kendaraan bermotor',
    icon: '🚗',
    estimatedTime: '30-45 menit',
    requirements: [
      'STNK asli dan fotocopy',
      'KTP asli dan fotocopy',
      'BPKB (jika STNK habis masa berlaku > 1 tahun)',
      'Kendaraan untuk cek fisik'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar dan ambil nomor antrian di meja pendaftaran',
        location: 'Loket Pendaftaran (Depan)',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Cek Fisik Kendaraan',
        description: 'Lakukan pemeriksaan fisik kendaraan dan kelengkapan dokumen',
        location: 'Loket Cek Fisik (Sebelah Kanan)',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 3,
        title: 'Penyerahan Berkas',
        description: 'Serahkan berkas persyaratan yang sudah lengkap',
        location: 'Loket A (Penyerahan Berkas)',
        isCompleted: false,
        action: 'submit_documents'
      },
      {
        id: 4,
        title: 'Pembayaran',
        description: 'Lakukan pembayaran pajak dan biaya administrasi',
        location: 'Kasir B (Pembayaran)',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 5,
        title: 'Pengambilan STNK',
        description: 'Ambil STNK baru yang sudah diperpanjang',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  {
    id: 'balik-nama',
    title: 'Balik Nama Kendaraan',
    description: 'Proses mutasi kepemilikan kendaraan bermotor',
    icon: '📋',
    estimatedTime: '60-90 menit',
    requirements: [
      'BPKB asli',
      'STNK asli',
      'KTP penjual dan pembeli',
      'Surat jual beli bermeterai',
      'Formulir mutasi'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar dan ambil nomor antrian untuk mutasi',
        location: 'Loket Pendaftaran (Depan)',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Verifikasi Dokumen',
        description: 'Verifikasi kelengkapan dan keaslian dokumen',
        location: 'Loket Verifikasi (Tengah)',
        isCompleted: false,
        action: 'verify_documents'
      },
      {
        id: 3,
        title: 'Cek Fisik Kendaraan',
        description: 'Pemeriksaan fisik kendaraan untuk mutasi',
        location: 'Area Cek Fisik (Belakang)',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 4,
        title: 'Input Data',
        description: 'Input data pemilik baru ke sistem',
        location: 'Loket Input Data',
        isCompleted: false,
        action: 'data_input'
      },
      {
        id: 5,
        title: 'Pembayaran',
        description: 'Bayar biaya balik nama dan pajak',
        location: 'Kasir Mutasi',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 6,
        title: 'Pengambilan Dokumen',
        description: 'Ambil BPKB dan STNK atas nama baru',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  {
    id: 'ganti-nopol',
    title: 'Ganti Nomor Polisi',
    description: 'Penggantian plat nomor kendaraan bermotor',
    icon: '🔢',
    estimatedTime: '45-60 menit',
    requirements: [
      'STNK asli',
      'BPKB asli',
      'KTP asli dan fotocopy',
      'Plat nomor lama',
      'Kendaraan'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar untuk penggantian nomor polisi',
        location: 'Loket Pendaftaran',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Pilih Nomor',
        description: 'Pilih nomor polisi yang tersedia',
        location: 'Loket Pemilihan Nomor',
        isCompleted: false,
        action: 'choose_number'
      },
      {
        id: 3,
        title: 'Cek Fisik',
        description: 'Pemeriksaan fisik kendaraan',
        location: 'Area Cek Fisik',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 4,
        title: 'Pembayaran',
        description: 'Bayar biaya ganti plat dan administrasi',
        location: 'Kasir',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 5,
        title: 'Pengambilan',
        description: 'Ambil STNK baru dan plat nomor',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  {
    id: 'stnk-hilang',
    title: 'STNK Hilang',
    description: 'Penerbitan STNK pengganti karena hilang/rusak',
    icon: '📄',
    estimatedTime: '30-45 menit',
    requirements: [
      'BPKB asli',
      'KTP asli dan fotocopy',
      'Surat kehilangan dari Polsek',
      'Kendaraan untuk cek fisik'
    ],
    steps: [
      {
        id: 1,
        title: 'Pendaftaran',
        description: 'Daftar dengan membawa surat kehilangan',
        location: 'Loket Pendaftaran',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 2,
        title: 'Verifikasi BPKB',
        description: 'Verifikasi keaslian BPKB',
        location: 'Loket Verifikasi',
        isCompleted: false,
        action: 'verify_bpkb'
      },
      {
        id: 3,
        title: 'Cek Fisik',
        description: 'Pemeriksaan fisik kendaraan',
        location: 'Area Cek Fisik',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 4,
        title: 'Pembayaran',
        description: 'Bayar biaya penerbitan STNK baru',
        location: 'Kasir',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 5,
        title: 'Pengambilan STNK',
        description: 'Ambil STNK pengganti',
        location: 'Loket Pengambilan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  
   {
  id: 'Blokir',
  title: 'Blokir STNK',
  description: 'Pemblokiran data kendaraan dari NIK pemilik lama (dijual/hilang/penghapusan).',
  icon: '🧾',
  estimatedTime: '15–30 menit',
  requirements: [
    'KTP asli dan fotokopi pemilik lama',
    'Fotokopi STNK dan BPKB (jika ada)',
    'Surat Pernyataan Pemblokiran bermeterai',
    'Kwitansi/Bukti Jual Beli atau Surat Kehilangan dari Kepolisian (sesuai alasan)',
    'Surat Kuasa bermeterai + KTP penerima kuasa (jika diwakilkan)',
    'Data kendaraan: nomor polisi, nomor rangka/mesin',
    'Formulir permohonan (disediakan di loket/online)'
  ],
  steps: [
    {
      id: 1,
      title: 'Pendaftaran',
      description: 'Ambil & isi formulir, pilih alasan blokir (dijual/hilang/penghapusan), serahkan berkas.',
      location: 'Loket Pendaftaran',
      isCompleted: false,
      action: 'register'
    },
    {
      id: 2,
      title: 'Verifikasi Berkas',
      description: 'Petugas memeriksa kecocokan identitas dan dokumen pendukung.',
      location: 'Loket Verifikasi',
      isCompleted: false,
      action: 'verify_documents'
    },
    {
      id: 3,
      title: 'Pemblokiran Sistem',
      description: 'Petugas memutus keterkaitan kendaraan dari NIK pemilik lama di sistem.',
      location: 'Loket Administrasi/Back Office',
      isCompleted: false,
      action: 'system_block'
    },
    {
      id: 4,
      title: 'Cetak Bukti Blokir',
      description: 'Ambil tanda terima/surat keterangan pemblokiran untuk arsip.',
      location: 'Loket Layanan/Arsip',
      isCompleted: false,
      action: 'print_receipt'
    },
    {
      id: 5,
      title: 'Selesai',
      description: 'Proses pemblokiran selesai. Simpan bukti. (Pemilik baru melanjutkan balik nama di pihaknya).',
      location: 'Kembali ke Beranda',
      isCompleted: false,
      action: 'finish'
    }
  ]
},
{
  id: 'KendaraanBaru',
  title: 'Pendaftaran Kendaraan Baru',
  description: 'Registrasi pertama kali kendaraan: penerbitan STNK/TNKB dan penetapan BBN-KB/PKB.',
  icon: '🚗',
  estimatedTime: '60–120 menit',
  requirements: [
    'KTP asli & fotokopi pemilik',
    'Faktur/Invoice pembelian (asli & fotokopi)',
    'SRUT (Surat Registrasi Uji Tipe) dari ATPM/dealer',
    'Formulir permohonan registrasi (disediakan di loket/online)',
    'Hasil cek fisik: gesek nomor rangka & mesin',
    'Kwitansi/berita acara perolehan (dari dealer)',
    'NPWP (jika diminta)',
    'Surat kuasa bermeterai + KTP penerima kuasa (bila diwakilkan)'
  ],
  steps: [
    {
      id: 1,
      title: 'Pendaftaran',
      description: 'Ambil/isi formulir & serahkan berkas (KTP, faktur, SRUT).',
      location: 'Loket Pendaftaran',
      isCompleted: false,
      action: 'register'
    },
    {
      id: 2,
      title: 'Cek Fisik',
      description: 'Gesek nomor rangka & mesin; lampirkan hasilnya.',
      location: 'Area Cek Fisik',
      isCompleted: false,
      action: 'physical_check'
    },
    {
      id: 3,
      title: 'Verifikasi Dokumen',
      description: 'Validasi KTP, faktur, SRUT, dan hasil cek fisik.',
      location: 'Loket Verifikasi',
      isCompleted: false,
      action: 'verify_documents'
    },
    {
      id: 4,
      title: 'Penetapan BBN-KB/PKB',
      description: 'Perhitungan BBN-KB, PKB, dan SWDKLLJ.',
      location: 'Loket Penetapan',
      isCompleted: false,
      action: 'tax_assessment'
    },
    {
      id: 5,
      title: 'Pembayaran',
      description: 'Bayar PNBP, BBN-KB, PKB, SWDKLLJ sesuai ketetapan.',
      location: 'Kasir',
      isCompleted: false,
      action: 'payment'
    },
    {
      id: 6,
      title: 'Penerbitan STNK/SKPD',
      description: 'Pencetakan STNK dan SKPD setelah pembayaran.',
      location: 'Loket Penerbitan',
      isCompleted: false,
      action: 'issue_stnk'
    },
    {
      id: 7,
      title: 'Pengambilan TNKB',
      description: 'Ambil plat nomor (TNKB) dan selesai.',
      location: 'Loket TNKB/Pengambilan',
      isCompleted: false,
      action: 'pickup'
    }
  ]
},
{
  id: 'MutasiKeluar',
  title: 'Mutasi Keluar',
  description: 'Registrasi perubahan identitas/pemilik kendaraan untuk pindah Samsat asal ke tujuan (mutasi keluar daerah).',
  icon: '📤',
  estimatedTime: '14 hari kerja',
  requirements: [
    'E-KTP (WNI) atau KITAP/KITAS (WNA)',
    'Surat Kuasa bermeterai + fotokopi KTP penerima kuasa (jika diwakilkan)',
    'BPKB asli & fotokopi',
    'STNK asli & fotokopi',
    'Bukti pemindahtanganan kepemilikan (jual beli/waris/lelang/hibah/dll sesuai kasus)',
    'Surat Mutasi Keluar: Pengantar Mutasi, Surat Keterangan Fiskal, bukti pembayaran PNBP',
    'Surat Keterangan Badan Hukum, Akta Perusahaan, NPWP, NIB, Domisili (untuk badan usaha)',
    'Dokumen tambahan untuk plat kuning/angkutan umum (NIB, sertifikat standar, izin trayek, rekomendasi Dishub)',
    'Hasil cek fisik kendaraan & blangko cek fisik (Noka/Nosin)',
    'Formulir permohonan registrasi mutasi keluar'
  ],
  steps: [
    {
      id: 1,
      title: 'Pengambilan Formulir',
      description: 'Ambil formulir & nomor antrian untuk mutasi keluar.',
      location: 'Loket Formulir',
      isCompleted: false,
      action: 'register'
    },
    {
      id: 2,
      title: 'Cek Fisik',
      description: 'Lakukan pemeriksaan fisik kendaraan (gesek nomor rangka & mesin).',
      location: 'Area Cek Fisik',
      isCompleted: false,
      action: 'physical_check'
    },
    {
      id: 3,
      title: 'Pengesahan Cek Fisik',
      description: 'Sahkan hasil cek fisik kendaraan.',
      location: 'Loket Pengesahan',
      isCompleted: false,
      action: 'verify_documents'
    },
    {
      id: 4,
      title: 'Pengecekan Status Kendaraan',
      description: 'Petugas memeriksa status kendaraan di database.',
      location: 'Loket Verifikasi/Back Office',
      isCompleted: false,
      action: 'verify_documents'
    },
    {
      id: 5,
      title: 'Pengecekan Persyaratan',
      description: 'Periksa kelengkapan berkas & dokumen sesuai ketentuan.',
      location: 'Loket Verifikasi',
      isCompleted: false,
      action: 'verify_documents'
    },
    {
      id: 6,
      title: 'Pendaftaran Fiskal',
      description: 'Registrasi fiskal kendaraan untuk mutasi keluar.',
      location: 'Loket Pendaftaran Fiskal',
      isCompleted: false,
      action: 'tax_assessment'
    },
    {
      id: 7,
      title: 'Pembayaran',
      description: 'Bayar biaya administrasi mutasi keluar di kasir.',
      location: 'Kasir Lantai 1',
      isCompleted: false,
      action: 'payment'
    },
    {
      id: 8,
      title: 'Arsip Berkas',
      description: 'Berkas dimasukkan ke arsip Samsat.',
      location: 'Loket Arsip',
      isCompleted: false,
      action: 'archive'
    },
    {
      id: 9,
      title: 'Mutasi Keluar',
      description: 'Penerbitan Surat Mutasi Keluar untuk dibawa ke Samsat tujuan.',
      location: 'Loket Mutasi Keluar',
      isCompleted: false,
      action: 'pickup'
    }
  ]
}



];