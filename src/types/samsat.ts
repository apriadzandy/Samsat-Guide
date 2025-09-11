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
  //Pajak 1 tahunan
  {
    id: 'perpanjang-pajak 1 tahunan',
    title: 'Perpanjang Pajak Kendaraan 1tahunan ',
    description: 'Perpanjangan STNK dan bayar pajak kendaraan bermotor',
    icon: '🚗',
    estimatedTime: '30-45 menit',
    requirements: [
      'STNK asli dan fotocopy',
      'KTP asli dan fotocopy',
      'SURAT KUASA(Bila diwakilkan) Surat Kuasa Bermaterai Cukup dan Fotocopy E-KTP yang diberi kuasa bagi yang mewakilkan (untuk atas nama Perusahaan dan Instansi Wajib Dengan Surat Kuasa)',
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
        title: 'PENETAPAN PKB DAN SWDKLLJ',
        description: 'Penetapan jumlah pajak yang harus dibayar (Menunggu panggilan kasir)',
        location: 'Loket Penetapan ',
        isCompleted: false,
        action: 'tax_assessment'

      },
      {
        id: 3,
        title: 'Pembayaran',
        description: 'Lakukan pembayaran pajak dan biaya administrasi',
        location: 'Kasir 1 & 2 (Sesuai panggilan)',
        isCompleted: false,
        action: 'payment'
      },
    ]
  },
  //Pajak 5 tahunan
  {
    id: 'perpanjangan-stnk-5-tahun',
    title: 'Perpanjangan STNK 5 Tahun',
    description: 'Alur registrasi perpanjangan STNK setiap 5 tahun sekali',
    icon: '📄',
    estimatedTime: '60-90 menit',
    requirements: [
      'IDENTITAS PEMILIK: KTP asli dan fotocopy',
      'SURAT KUASA(Bila diwakilkan)' ,
      'BPKB asli dan fotocopy',
      'STNK asli dan fotocopy',
      'HASIL PEMERIKSAAN CEK FISIK (Noka/Nosin)',
    ],
    steps: [
      {
        id: 1,
        title: 'Pengecekan Persyaratan',
        description: 'Memeriksa kelengkapan berkas yang dibawa',
        location: 'Loket Pengecekan Persyaratan',
        isCompleted: false,
        action: 'check_requirements'
      },
      {
        id: 2,
        title: 'Pengambilan Antrian MTC',
        description: 'Mengambil nomor antrian pelayanan',
        location: 'Loket Antrian MTC',
        isCompleted: false,
        action: 'take_queue'
      },
      {
        id: 3,
        title: 'Loket Formulir',
        description: 'Mengisi dan menyerahkan formulir perpanjangan',
        location: 'Loket Formulir',
        isCompleted: false,
        action: 'submit_form'
      },
      {
        id: 4,
        title: 'Cek Fisik Kendaraan',
        description: 'Petugas melakukan pemeriksaan fisik kendaraan',
        location: 'Area Cek Fisik',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 5,
        title: 'Pengesahan Cek Fisik',
        description: 'Hasil cek fisik kendaraan disahkan',
        location: 'Loket Pengesahan Cek Fisik',
        isCompleted: false,
        action: 'validate_check'
      },
      {
        id: 6,
        title: 'Verifikasi',
        description: 'Petugas melakukan verifikasi data dan dokumen',
        location: 'Loket Verifikasi',
        isCompleted: false,
        action: 'verification'
      },
      {
        id: 7,
        title: 'Pengecekan Status Kendaraan',
        description: 'Pemeriksaan status kendaraan di sistem',
        location: 'Loket Pengecekan Status',
        isCompleted: false,
        action: 'status_check'
      },
      {
        id: 8,
        title: 'Pendaftaran',
        description: 'Melakukan pendaftaran perpanjangan STNK',
        location: 'Loket Pendaftaran',
        isCompleted: false,
        action: 'register'
      },
      {
        id: 9,
        title: 'Penetapan PKB dan SWDKLLJ',
        description: 'Menetapkan jumlah pajak kendaraan bermotor dan SWDKLLJ',
        location: 'Loket Penetapan',
        isCompleted: false,
        action: 'tax_determination'
      },
      {
        id: 10,
        title: 'Pembayaran',
        description: 'Membayar PKB, SWDKLLJ, dan PNBP',
        location: 'Kasir',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 11,
        title: 'Penyerahan STNK dan TNKB',
        description: 'Mengambil STNK dan pelat nomor baru',
        location: 'Loket Penyerahan',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },
  // Mutasi Keluar
  {
    id: 'mutasi-keluar',
    title: 'Mutasi Keluar (Perubahan Identitas/Pemilik Ranmor)',
    description: 'Alur registrasi mutasi keluar kendaraan bermotor',
    icon: '🚗',
    estimatedTime: '14 (EMPAT BELAS) HARI KERJA',
    requirements: [
      'STNK asli',
      'BPKB asli',
      'KTP asli dan fotocopy',
      'Kwitansi Jual Beli Bermaterai',
      'Surat Permohonan Bermaterai',
      'Kendaraan'
    ],
    steps: [
      {
        id: 1,
        title: 'Pengecekan Persyaratan',
        description: 'Memeriksa kelengkapan berkas',
        location: 'Loket Pengecekan Persyaratan',
        isCompleted: false,
        action: 'check_requirements'
      },
      {
        id: 2,
        title: 'Pengambilan Antrian MTC',
        description: 'Mengambil nomor antrian',
        location: 'Loket Antrian MTC',
        isCompleted: false,
        action: 'take_queue'
      },
      {
        id: 3,
        title: 'Loket Formulir',
        description: 'Mengisi dan menyerahkan formulir mutasi keluar',
        location: 'Loket Formulir',
        isCompleted: false,
        action: 'submit_form'
      },
      {
        id: 4,
        title: 'Cek Fisik Kendaraan',
        description: 'Pemeriksaan fisik kendaraan',
        location: 'Area Cek Fisik',
        isCompleted: false,
        action: 'physical_check'
      },
      {
        id: 5,
        title: 'Pengesahan Cek Fisik',
        description: 'Pengesahan hasil cek fisik kendaraan',
        location: 'Loket Pengesahan Cek Fisik',
        isCompleted: false,
        action: 'validate_check'
      },
      {
        id: 6,
        title: 'Verifikasi',
        description: 'Verifikasi data dan dokumen',
        location: 'Loket Verifikasi',
        isCompleted: false,
        action: 'verification'
      },
      {
        id: 7,
        title: 'Pengecekan Status Kendaraan',
        description: 'Pemeriksaan status kendaraan di sistem',
        location: 'Loket Pengecekan Status',
        isCompleted: false,
        action: 'status_check'
      },
      {
        id: 8,
        title: 'Pendaftaran Fiskal',
        description: 'Melakukan pendaftaran fiskal kendaraan',
        location: 'Loket Pendaftaran Fiskal',
        isCompleted: false,
        action: 'fiscal_registration'
      },
      {
        id: 9,
        title: 'Arsip Berkas',
        description: 'Mengarsipkan berkas-berkas mutasi',
        location: 'Loket Arsip Berkas',
        isCompleted: false,
        action: 'archive_documents'
      },
      {
        id: 10,
        title: 'Registrasi Mutasi Keluar',
        description: 'Registrasi mutasi keluar di gudang berkas',
        location: 'Loket Registrasi Mutasi Keluar',
        isCompleted: false,
        action: 'mutation_registration'
      },
      {
        id: 11,
        title: 'Pembayaran',
        description: 'Melakukan pembayaran biaya mutasi',
        location: 'Kasir Lantai 1',
        isCompleted: false,
        action: 'payment'
      },
      {
        id: 12,
        title: 'Loket Mutasi Keluar',
        description: 'Pengambilan dokumen mutasi keluar',
        location: 'Loket Mutasi Keluar',
        isCompleted: false,
        action: 'pickup'
      }
    ]
  },

  // BBN / Mutasi Masuk
  {
  id: 'bbn-mutasi-masuk',
  title: 'Perubahan Identitas/Pemilik Ranmor (BBN / Mutasi Masuk)',
  description: 'Alur registrasi BBN / mutasi masuk kendaraan bermotor',
  icon: '🧾',
  estimatedTime: '90-150 menit',
  requirements: [
    'STNK asli',
    'BPKB asli',
    'KTP pemilik baru (asli & fotokopi)',
    'Kwitansi jual beli bermaterai',
    'Hasil cek fisik kendaraan',
    'Surat permohonan bermaterai',
    'Kendaraan'
  ],
  steps: [
    {
      id: 1,
      title: 'Pengecekan Persyaratan',
      description: 'Pemeriksaan kelengkapan berkas',
      location: 'Loket Pengecekan Persyaratan',
      isCompleted: false,
      action: 'check_requirements'
    },
    {
      id: 2,
      title: 'Pengambilan Antrian MTC',
      description: 'Mengambil nomor antrian pelayanan',
      location: 'Loket Antrian MTC',
      isCompleted: false,
      action: 'take_queue'
    },
    {
      id: 3,
      title: 'Loket Formulir',
      description: 'Mengisi dan menyerahkan formulir BBN/Mutasi Masuk',
      location: 'Loket Formulir',
      isCompleted: false,
      action: 'submit_form'
    },
    {
      id: 4,
      title: 'Cek Fisik Kendaraan',
      description: 'Pemeriksaan fisik kendaraan',
      location: 'Area Cek Fisik',
      isCompleted: false,
      action: 'physical_check'
    },
    {
      id: 5,
      title: 'Loket Pengesahan Cek Fisik',
      description: 'Pengesahan hasil cek fisik',
      location: 'Loket Pengesahan Cek Fisik',
      isCompleted: false,
      action: 'validate_check'
    },
    {
      id: 6,
      title: 'Loket Verifikasi',
      description: 'Verifikasi data dan dokumen',
      location: 'Loket Verifikasi',
      isCompleted: false,
      action: 'verification'
    },
    {
      id: 7,
      title: 'Pengecekan Status Kendaraan',
      description: 'Pengecekan status kendaraan pada sistem',
      location: 'Loket Pengecekan Status',
      isCompleted: false,
      action: 'status_check'
    },
    {
      id: 8,
      title: 'Pendaftaran',
      description: 'Pendaftaran proses BBN/Mutasi Masuk',
      location: 'Loket 1',
      isCompleted: false,
      action: 'register'
    },
    {
      id: 9,
      title: 'Proses Progresif R4 Pribadi & Double Cabin',
      description: 'Perhitungan/proses pajak progresif (jika berlaku)',
      location: 'Loket 1',
      isCompleted: false,
      action: 'progressive_tax'
    },
    {
      id: 10,
      title: 'Penetapan PKB dan SWDKLLJ',
      description: 'Penetapan nilai PKB dan SWDKLLJ',
      location: 'Loket 1',
      isCompleted: false,
      action: 'tax_determination'
    },
    {
      id: 11,
      title: 'Pembayaran',
      description: 'Pembayaran PKB, SWDKLLJ, dan PNBP',
      location: 'Loket 2 / Kasir',
      isCompleted: false,
      action: 'payment'
    },
    {
      id: 12,
      title: 'Penyerahan STNK dan TNKB',
      description: 'Pengambilan STNK dan pelat nomor',
      location: 'Loket 2 / Penyerahan',
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
  id: 'stnk-hilang-rusak',
  title: 'Permohonan STNK Hilang atau Rusak',
  description: 'Alur registrasi penggantian STNK yang hilang atau rusak',
  icon: '🪪',
  estimatedTime: '60-90 menit',
  requirements: [
    'E-KTP (WNI) atas nama STNK',
    'Kartu Izin Tinggal Tetap/Sementara (WNA)',
    'Surat Keterangan Badan Hukum (Kop Surat, tanda tangan pimpinan, stempel)',
    'Izin Usaha/Trayek (jika angkutan barang)',
    'Surat Domisili Perusahaan',
    'NIB',
    'NPWP',
    'Akta Perusahaan',
    'Surat Keterangan Instansi (Kop Surat, tanda tangan pimpinan, stempel)',
    'E-KTP yang dikuasakan',
    'Surat Domisili Instansi',
    'Surat Kuasa bermaterai cukup + fotokopi E-KTP penerima kuasa',
    'E-KTP asli penerima kuasa',
    'Surat tanda penerimaan laporan Polri & berita pemeriksaan penyidik (Polsek/Polres/Polda)',
    'Nota Dinas Rekon STNK/BPKB Duplikat (Gedung RTMC Polda)',
    'STNK asli (jika rusak)',
    'Surat pernyataan bermaterai (BPKB/STNK hilang tidak terkait pidana/perdata)',
    'Bukti pengumuman & kwitansi media cetak (1 lokal + 1 kota)',
    'Surat turunan pajak / bukti lunas pajak / leges (Samsat)',
    'Surat pernyataan pemohon',
    'Tanda bukti pembayaran PNBP'
  ],
  steps: [
    {
      id: 1,
      title: 'Pendaftaran',
      description: 'Mengajukan permohonan penggantian STNK hilang/rusak',
      location: 'Loket Pendaftaran',
      isCompleted: false,
      action: 'register'
    },
    {
      id: 2,
      title: 'Cek Fisik Kendaraan',
      description: 'Melakukan pemeriksaan fisik kendaraan',
      location: 'Area Cek Fisik',
      isCompleted: false,
      action: 'physical_check'
    },
    {
      id: 3,
      title: 'Verifikasi Dokumen',
      description: 'Memeriksa dan mencocokkan dokumen persyaratan',
      location: 'Loket Verifikasi',
      isCompleted: false,
      action: 'verification'
    },
    {
      id: 4,
      title: 'Pembayaran',
      description: 'Melakukan pembayaran biaya administrasi',
      location: 'Kasir',
      isCompleted: false,
      action: 'payment'
    },
    {
      id: 5,
      title: 'Penyerahan STNK',
      description: 'Mengambil STNK pengganti (baru)',
      location: 'Loket Penyerahan',
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
}



];