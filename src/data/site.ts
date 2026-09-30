// Sumber tunggal isi situs. Ubah di sini, bukan di komponen.
// Data bertanda ISI tidak ada di file profil; tampil sebagai XXXX sampai diisi.

export const usaha = {
  nama: 'CV Muria Struktura Teknik',
  berdiri: 2025,
  kota: 'Gresik',
  provinsi: 'Jawa Timur',
  bidang: 'Perbaikan dan perkuatan beton',
  skala: 'Kecil hingga besar',
  titik: { lat: -7.155, lon: 112.655 }, // pusat kota Gresik; titik nol grafik jangkauan
};

export const kontak = {
  whatsapp: '', // ISI: 628xxxxxxxxxx (tanpa + dan spasi)
  email: '', // ISI
  alamat: '', // ISI: alamat lengkap kantor
};

export const tampil = {
  whatsapp: kontak.whatsapp ? `+${kontak.whatsapp}` : '+62 8XX-XXXX-XXXX',
  email: kontak.email || 'halo@XXXX.co.id',
  alamat: kontak.alamat || 'Jl. XXXX No. XX, Gresik, Jawa Timur',
};

/** Tautan WhatsApp berisi pesan awal; sebelum nomor diisi, menuju bagian kontak. */
export const wa = (pesan: string) =>
  kontak.whatsapp ? `https://wa.me/${kontak.whatsapp}?text=${encodeURIComponent(pesan)}` : '#kontak';
export const pesanInspeksi =
  'Halo Muria, saya ingin minta inspeksi retak. Lokasi: … Jenis bangunan: … Foto retak saya lampirkan.';

export const menu = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'cara-kerja', label: 'Cara kerja' },
  { id: 'keunggulan', label: 'Keunggulan' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'badan-usaha', label: 'Badan usaha' },
  { id: 'lokasi', label: 'Lokasi' },
];

/** Jam kerja (WIB). `hari` mengikuti Date.getDay(): 0 = Minggu. */
export const jam = [
  { nama: 'Senin sampai Jumat', waktu: '08.00 – 16.30', hari: [1, 2, 3, 4, 5] },
  { nama: 'Sabtu', waktu: '08.00 – 12.00', hari: [6] },
  { nama: 'Minggu dan tanggal merah', waktu: 'Tutup', hari: [0] },
];

export const visi =
  'Menjadi perusahaan penyedia solusi beton terpercaya di Indonesia yang unggul dalam kualitas, inovasi, dan tanggung jawab kerja.';

export const misi = [
  { judul: 'Mutu yang bisa diuji', isi: 'Memperbaiki beton dengan mutu yang bisa diuji dan hasil yang tahan lama.' },
  {
    judul: 'Kerja yang terbuka',
    isi: 'Rincian biaya, laporan progres, dan hubungan yang berlanjut setelah serah terima dengan setiap mitra.',
  },
  { judul: 'Selamat dulu', isi: 'Mengutamakan keselamatan kerja dan kepuasan pelanggan di setiap proyek.' },
];

export const layanan = [
  {
    id: 'perbaikan',
    nama: 'Perbaikan retak dan patah',
    en: 'Concrete crack repair',
    isi: 'Retak dibuka membentuk alur V, dibersihkan dari debu semen, lalu ditutup mortar perbaikan bermodifikasi polimer. Beton yang patah atau mengelupas dipahat sampai bertemu beton sehat, sekitar 20 mm di belakang tulangan. Tulangan yang berkarat digosok sampai mengilap dan diberi primer anti-karat sebelum ditambal.',
    bahan: 'Mortar perbaikan polymer-modified, primer anti-karat, bonding agent epoxy',
    untuk: 'Lantai gudang, balok, pelat, tangga, kolom',
    gambar: 'Tambalan pada beton yang mengelupas, potongan',
  },
  {
    id: 'perkuatan',
    nama: 'Perkuatan struktur beton',
    en: 'Concrete strengthening',
    isi: 'Ketika kapasitas elemen tak lagi cukup, karena retak geser, beban bertambah, atau tulangan menyusut dimakan karat, elemen diperkuat, bukan dibongkar. Kolom dibalut lembaran carbon fiber (CFRP) yang direkatkan dengan epoxy; balok dan pelat bisa diperbesar penampangnya atau ditempeli pelat baja. Setiap perkuatan diawali perhitungan kapasitas, bukan perkiraan.',
    bahan: 'Lembaran CFRP, epoxy saturant, angkur kimia, grout untuk pembesaran penampang',
    untuk: 'Kolom pabrik, balok yang berubah fungsi, pelat dengan beban mesin',
    gambar: 'Kolom dibalut CFRP, potongan melintang',
  },
  {
    id: 'injeksi',
    nama: 'Grouting dan injeksi epoxy',
    en: 'Grouting and epoxy injection',
    isi: 'Retak sehalus 0,05 mm pun bisa diisi epoxy berviskositas rendah lewat packer yang dipasang berselang-seling. Resin disuntik dari packer terbawah ke atas dengan tekanan rendah, sampai keluar di packer berikutnya. Retak yang masih rembes diinjeksi polyurethane, dan rongga di bawah base plate atau dudukan mesin diisi non-shrink grout yang tidak menyusut saat mengeras.',
    bahan: 'Epoxy injeksi dua komponen, polyurethane injeksi, non-shrink grout, packer',
    untuk: 'Retak lantai dan dinding, sambungan pengecoran, dudukan mesin, rongga di bawah base plate',
    gambar: 'Injeksi epoxy pada retak vertikal, tampak depan',
  },
  {
    id: 'waterproofing',
    nama: 'Waterproofing dan pelapisan permukaan',
    en: 'Waterproofing and surface coating',
    isi: 'Sumber air dicari dulu: retak, sambungan pengecoran, atau pori beton. Permukaan digerinda dan dibersihkan, lalu dilapis kristalin yang tumbuh ke dalam pori atau membran cair berpenguat kain, dan ditutup screed pelindung. Lantai yang terkena bahan kimia dilapis coating epoxy.',
    bahan: 'Waterproofing kristalin, membran cair poliuretan, coating epoxy, sealant sambungan',
    untuk: 'Dak atap, basement, kolam dan tandon air, lantai area kimia',
    gambar: 'Lapisan waterproofing pada dak beton, potongan',
  },
  {
    id: 'inspeksi',
    nama: 'Konsultasi teknis dan inspeksi beton',
    en: 'Technical consultation and concrete inspection',
    isi: 'Sebelum menawarkan cara, kami mengukur: lebar retak dengan kartu retak, kekerasan permukaan dengan rebound hammer, kedalaman retak dengan ultrasonic pulse velocity, kedalaman karbonasi dengan larutan fenolftalein, dan letak tulangan dengan rebar scanner. Hasilnya laporan berpeta yang bisa dicek, bukan sekadar pendapat.',
    bahan: 'Kartu retak, rebound hammer, UPV, rebar scanner, larutan fenolftalein',
    untuk: 'Audit gedung lama, jual-beli bangunan, sebelum renovasi, sengketa kerusakan',
    gambar: 'Titik uji pada dinding dan kartu retak',
  },
];

export const langkah = [
  {
    judul: 'Baca',
    isi: 'Setiap retak diberi nomor, diukur dengan kartu retak, difoto, dan digambar pada denah. Hasilnya peta retak: patokan sebelum dan sesudah.',
  },
  {
    judul: 'Cari sebabnya',
    isi: 'Beban berlebih, susut, penurunan tanah, atau korosi tulangan? Retak yang penyebabnya belum berhenti akan membuka lagi, serapat apa pun disuntik. Bila perlu, retak dipantau dulu beberapa minggu.',
  },
  {
    judul: 'Siapkan',
    isi: 'Permukaan disikat dan debunya disedot. Tulangan yang berkarat dirawat. Packer dipasang di sepanjang retak dan permukaannya disegel.',
  },
  {
    judul: 'Suntik',
    isi: 'Dari packer terbawah ke atas dengan tekanan rendah, sampai resin keluar di packer berikutnya. Packer itu ditutup, lalu pindah ke yang berikutnya.',
  },
  {
    judul: 'Uji',
    isi: 'Setelah resin mengeras, permukaan diketuk untuk mencari rongga yang belum terisi. Bila disepakati, diambil inti (core) untuk melihat sedalam apa resin masuk.',
  },
  {
    judul: 'Bukukan',
    isi: 'Berita acara memuat panjang dan lebar tiap retak, volume resin teoretis dan yang terpakai, foto sebelum dan sesudah, serta peta retak akhir.',
  },
];

/** Contoh isi berita acara. Volume teoretis = panjang × lebar × dalam, dihitung saat build. */
export const beritaAcara = [
  { id: 'R-01', panjang: 3.2, lebar: 0.4, dalam: 120, terpakai: 0.19 },
  { id: 'R-02', panjang: 1.85, lebar: 0.25, dalam: 150, terpakai: 0.09 },
  { id: 'R-03', panjang: 5.4, lebar: 0.15, dalam: 200, terpakai: 0.19 },
  { id: 'R-04', panjang: 0.9, lebar: 0.8, dalam: 100, terpakai: 0.09 },
];

export const janji = [
  {
    judul: 'Mutu dan volume',
    janji: 'Panjang retak, luas lapisan, dan liter resin tercatat per titik, lalu dibandingkan dengan hitungan teoretis.',
    periksa: 'Minta berita acara dan cocokkan dengan tagihan.',
  },
  {
    judul: 'Tenaga profesional',
    janji: 'Injeksi, grouting, dan perkuatan dikerjakan tim pelaksana khusus. Manajer teknis memeriksa hasilnya sebelum serah terima.',
    periksa: 'Nama personel tertera di penawaran.',
  },
  {
    judul: 'Teknologi dan material',
    janji: 'Material dipilih menurut kondisi retak, bukan menurut stok: epoxy untuk retak kering, polyurethane untuk retak yang masih rembes, non-shrink grout untuk rongga.',
    periksa: 'Lembar data teknis tiap material dilampirkan.',
  },
  {
    judul: 'Keselamatan kerja',
    janji: 'Pengawas K3 bertugas terpisah dari pelaksana dan berhak menghentikan pekerjaan. Ada briefing sebelum kerja, serta izin kerja untuk area terbatas dan ketinggian.',
    periksa: 'Izin kerja dan daftar hadir briefing tersedia di lokasi.',
  },
  {
    judul: 'Layanan responsif dan transparan',
    janji: 'Pesan pertama dibalas dalam 1×24 jam kerja. Penawaran dirinci per meter retak atau per meter persegi, dan foto progres dikirim tiap akhir hari kerja.',
    periksa: 'Penawaran tidak memuat butir "lain-lain" tanpa rincian.',
  },
];

/** CONTOH. Ganti dengan kutipan klien asli, lalu set contoh: false. */
export const testimoni = [
  {
    id: 'R-01',
    kutip: 'Retak di sambungan lantai gudang kami digambar satu per satu, lalu disuntik. Di akhir mereka menyerahkan angka: berapa liter yang masuk di tiap retak. Baru kali ini kontraktor memberi angka, bukan sekadar bilang sudah beres.',
    siapa: 'Kepala gudang, distributor bahan baku',
    tempat: 'Gresik',
    pekerjaan: 'Injeksi epoxy pada lantai gudang',
    contoh: true,
  },
  {
    id: 'R-02',
    kutip: 'Dak kami bocor sejak dua musim hujan. Setelah dilapis kristalin dan membran cair, ruang arsip di bawahnya kering sepanjang musim hujan kemarin.',
    siapa: 'Pengelola gedung kantor',
    tempat: 'Surabaya',
    pekerjaan: 'Waterproofing dak beton',
    contoh: true,
  },
  {
    id: 'R-03',
    kutip: 'Base plate mesin kami diisi ulang dengan grout non-shrink. Mereka mencatat berapa lama grout harus mengeras sebelum mesin boleh dinyalakan, dan kami tidak diminta menebak.',
    siapa: 'Supervisor pemeliharaan, pabrik pengolahan',
    tempat: 'Sidoarjo',
    pekerjaan: 'Grouting dudukan mesin',
    contoh: true,
  },
];

export const legalitas = [
  { nama: 'Akta pendirian perusahaan', isi: 'Dokumen dasar pendirian CV: sekutu serta maksud dan tujuan usaha.' },
  { nama: 'SK pengesahan Kemenkumham', isi: 'Surat keputusan dari kementerian bidang hukum atas pendirian perusahaan.' },
  { nama: 'Nomor Induk Berusaha (NIB)', isi: 'Identitas pelaku usaha di sistem OSS, dasar perizinan berusaha.' },
  { nama: 'NPWP', isi: 'Nomor pokok wajib pajak perusahaan, tercantum pada penawaran dan faktur.' },
];

export const organisasi = {
  nama: 'Direktur Utama',
  tugas: 'Menandatangani penawaran dan kontrak, memutuskan metode dan biaya.',
  anak: [
    {
      nama: 'Pengawasan Lapangan K3',
      tugas: 'Memeriksa alat pelindung diri, izin kerja, dan kondisi area sebelum tim mulai. Berhak menghentikan pekerjaan.',
    },
    {
      nama: 'Manajer Teknis / Operasional',
      tugas: 'Menyusun metode kerja, menjadwalkan tim, dan memeriksa hasil sebelum serah terima.',
      anak: [
        { nama: 'Tim Pelaksana Khusus', tugas: 'Injeksi, grouting, perkuatan, dan waterproofing di lapangan.' },
      ],
    },
    { nama: 'Administrasi dan Keuangan', tugas: 'Penawaran, kontrak, tagihan, dan arsip berita acara.' },
  ],
};

/** Kota tujuan untuk grafik jangkauan; jarak dan arah dihitung dari usaha.titik saat build. */
export const kota = [
  { nama: 'Surabaya', lat: -7.2459, lon: 112.7378 },
  { nama: 'Bangkalan', lat: -7.0451, lon: 112.735 },
  { nama: 'Lamongan', lat: -7.1197, lon: 112.4172 },
  { nama: 'Sidoarjo', lat: -7.4478, lon: 112.7183 },
  { nama: 'Mojokerto', lat: -7.4704, lon: 112.434 },
  { nama: 'Pasuruan', lat: -7.6469, lon: 112.9075 },
  { nama: 'Tuban', lat: -6.8976, lon: 112.0647 },
  { nama: 'Malang', lat: -7.9797, lon: 112.6304 },
];
