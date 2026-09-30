# DESIGN — CV Muria Struktura Teknik

Dokumen ini ditulis sebelum kode. Kalau kode dan dokumen ini berbeda, salah satunya keliru; perbaiki yang keliru.

## 1. Identitas

**Nama, kota, tahun mengikuti file profil**: CV Muria Struktura Teknik, Gresik, berdiri 2025. Permintaan "identitas bisnis fiktif" tidak dijalankan karena file profil sudah memuat identitas nyata; nama karangan akan membuat situs ini bukan milik bisnis yang dimaksud. Yang saya ciptakan hanya yang tidak ada di file: cerita, pembeda, tagline, dan seluruh copy. Kalau ternyata memang butuh identitas rekaan, cukup ganti `src/data/site.ts`.

**Cerita (narasi perusahaan, bukan biografi pendiri).** Gresik kota semen dan pupuk; pabrik, gudang, dermaga, dan tangkinya beton yang bekerja di udara pesisir yang lembap dan berkadar garam. Retak selebar 0,3 mm (batas ACI 224R untuk beton lembap) membuka jalan air dan klorida ke tulangan; baja berkarat memuai 2–6 kali volumenya dan mendorong selimut beton sampai mengelupas. Pemilik bangunan biasanya hanya melihat dua pilihan, biarkan atau bongkar. Muria berdiri di Gresik pada 2025 untuk pilihan ketiga: memperbaiki yang sudah berdiri.

**Pembeda tunggal: Peta Retak.** Sebelum bor pertama, setiap retak diberi nomor (R-01, R-02, …), diukur lebarnya, difoto, dan digambar pada denah. Sesudah injeksi, volume resin yang benar-benar masuk per retak dibukukan di berita acara dan dibandingkan dengan hitungan teoretis (panjang × lebar × kedalaman). Ini wujud konkret dari "quality & quantity responsibility" di file profil: janjinya bisa dihitung dan diperiksa klien.

**Tagline:** "Retak dipetakan. Resin disuntik. Setiap liter dibukukan."

**Framework: Astro + Tailwind CSS v4.** Situs profil bisnis adalah konten statis. Astro menghasilkan HTML statis tanpa JavaScript kecuali yang diminta (di sini hanya dua skrip kecil), jadi cepat di jaringan seluler, ramah mesin pencari, dan bisa ditaruh di hosting statis mana pun. Komponen `.astro` memisahkan tiap bagian. Tailwind dipasang lewat plugin Vite; token desain ada sebagai CSS variables di `src/styles/global.css`. Next.js/Nuxt ditimbang dan ditolak: menambah runtime untuk halaman yang tidak butuh state.

## 2. Konsep visual

Dinding beton ekspos pesisir yang retaknya ditandai, disuntik resin amber, lalu dibukukan; setiap pergantian bagian di halaman adalah retak yang sudah tertutup.

## 3. Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Judul, wordmark, pengenal retak | **Big Shoulders Display** 800/900; wordmark dan "R-01" memakai varian **Stencil Display** | Berasal dari papan nama dan marka industri Chicago: sempit, tinggi, berbahu lebar, sehingga "MURIA" bisa memenuhi lebar ponsel tanpa mengecil. Stensil meniru semprotan penanda di beton dan bekisting; jembatan stensilnya terbaca seperti retak. |
| Teks isi dan data | **Atkinson Hyperlegible Next** 400/600/700 | Dirancang Braille Institute agar tiap karakter tidak bisa tertukar (0/O, 1/l/I). Di situs yang memuat lebar retak, liter resin, dan nomor berita acara, salah baca angka adalah masalah nyata. Netral, jadi display yang keras tetap jadi pusat. |

Dua keluarga, tanpa monospace. Huruf kapital hanya untuk wordmark, judul penanda, nama layanan, dan cap "Contoh"; label kecil memakai huruf biasa.

| Tingkat | Ukuran | Pemakaian |
|---|---|---|
| monumen | `min(100cqw / 2.4, 56svh, 36rem)` | wordmark "MURIA": selebar wadahnya, tapi tak lebih tinggi dari 56% layar agar tagline dan tombol tetap terlihat |
| judul | `clamp(3.25rem, 9.5vw, 9rem)` | judul bagian penanda: Tentang, Layanan, Peta retak, Kontak |
| bab | `clamp(2.5rem, 5.4vw, 5rem)` | judul empat bagian lain, huruf biasa; supaya hierarki tidak monoton |
| seru | `clamp(1.9rem, 3.8vw, 3.5rem)` | pernyataan, tagline, kutipan |
| isi | 1.125rem / 1.6 | paragraf, lebar baris ≤ 62 karakter |
| kecil | 0.9375rem / 1.5 | keterangan, label; tidak ada teks HTML di bawah ini |

Rasio ukuran terbesar : terkecil ≈ 34 : 1 pada layar 1440 px (wordmark ± 500 px, teks 15 px). Atkinson memberi angka nol bergaris, sengaja: 0 tidak akan terbaca sebagai O.

## 4. Palet

| Peran | Nama | Hex | Dipakai untuk |
|---|---|---|---|
| Dominan (terang) | beton | `#C9CCC4` | permukaan terang, latar hero |
| Dominan (gelap) | beton-tua | `#2A3230` | permukaan gelap; teks di atas permukaan terang |
| Dominan (terdalam) | beton-dalam | `#1D2422` | footer, celah retak, teks di atas resin |
| Aksen | resin | `#F0A30A` | satu-satunya warna jenuh: retak yang sudah diinjeksi, tombol, garis batas antarbagian, bidang kontak |
| Netral | semen | `#E9EBE4` | teks di atas gelap, kertas berita acara |
| Netral | debu | `#4A524F` | teks sekunder di atas terang |
| Netral | kabut | `#AEB4AD` | teks sekunder di atas gelap |

Kontras (WCAG, dihitung): beton-tua/beton 8,1:1 · debu/beton 4,9:1 · semen/beton-tua 10,9:1 · kabut/beton-tua 6,2:1 · resin/beton-tua 6,2:1 · beton-dalam/resin 7,5:1. Resin tidak pernah dipakai sebagai teks di atas permukaan terang. Semua pasangan diperiksa ulang oleh `npm run cek`.

Sengaja dihindari: krem hangat + karat/terrakota, hitam pekat + hijau asam, gradien.

## 5. Aturan layout

- Rata kiri di semua bagian. Tidak ada blok teks rata tengah.
- Wadah maksimum 1600 px, gutter 20 px (ponsel) dan 40 px (desktop). Baris teks ≤ 62 karakter.
- Permukaan bergantian terang, gelap, dan resin. Batas antarbagian adalah tepi patahan yang tak beraturan dengan garis resin di tepinya, bukan garis lurus.
- Tanpa kartu. Informasi disusun sebagai baris besar (layanan), tabel (kop, berita acara, keunggulan, jam buka), dan pohon (struktur organisasi).
- Tanpa radius dan tanpa bayangan. Satu-satunya bentuk sudut adalah potongan 45° (chamfer), diambil dari list chamfer bekisting; dipakai pada tombol dan satu-dua panel. Kedalaman datang dari lapisan tekstur.
- Penomoran hanya untuk urutan yang nyata (langkah kerja) dan pengenal yang nyata (R-01…). Tidak ada label bagian, tidak ada penomoran lembar.
- Tombol berisi kata kerja apa adanya; tanpa panah.

```
+--------------------------------------------------------------+
| MURIA Struktura Teknik     Tentang Layanan ...  [Minta inspeksi]
+--------------------------------------------------------------+
|                    retak menuruni halaman, resin amber naik   |
| M U R I A   stensil gelap di atas beton, selebar layar        |
| CV           STRUKTURA            TEKNIK                      |
|                                                               |
| Retak dipetakan.                 | Pekerjaan  Perbaikan ...   |
| Resin disuntik.                  | Kantor     Gresik          |
| Setiap liter dibukukan.          | Berdiri    2025            |
| [Minta inspeksi]  Lihat cara kerja                            |
+--------------------------------------------------------------+
| Layanan: nama besar kiri, diagram potongan kanan, per baris   |
| Cara kerja: langkah 1-6 kiri, berita acara (kertas) kanan     |
| Keunggulan: Janji | Cara Anda memeriksanya  (tabel lebar)     |
| Lokasi: grafik jangkauan kutub kiri, jam buka + alamat kanan  |
| Kontak: seluruh bidang resin, satu pernyataan raksasa         |
+--------------------------------------------------------------+
```

## 6. Elemen khas: retak yang disuntik

Satu-satunya animasi. Saat halaman dimuat, retak merambat dari tepi atas menembus huruf-huruf stensil (tersendat-sendat, seperti retak sungguhan), bercabang, lalu packer terpasang di beberapa titik dan resin amber naik dari titik terendah ke atas, sesuai urutan injeksi yang dipakai di lapangan. Terakhir tanda ukur muncul: "R-01  0,3 mm". Total ± 3,5 detik, sekali, tanpa loop, murni CSS. Sesudahnya halaman diam. Tepi patahan antarbagian adalah gema statisnya. Dengan `prefers-reduced-motion`, halaman langsung menampilkan keadaan akhir.

## 7. Gambar dan tekstur

Semua dibuat sendiri, tanpa berkas gambar eksternal:

- Tekstur beton: bintik halus, bercak besar, pori udara (SVG `feTurbulence`), garis sambungan papan bekisting dan lubang pengikat bekisting (gradien CSS).
- Lima gambar potongan teknik (SVG) untuk lima layanan, lima panel kerusakan bertahap di Tentang, dan denah peta retak di Cara kerja. Panjang retak di denah diambil dari data berita acara yang sama dengan tabelnya.
- Grafik jangkauan kutub: jarak dan arah kota dihitung dari koordinat saat build.
- Tidak ada foto stok. Foto konstruksi generik akan dikira proyek Muria, sedangkan foto proyek asli belum ada.

## 8. Yang dihindari

Gradien ungu/biru di atas putih · Inter/Roboto/Arial/system-ui · hero rata tengah + tiga kartu fitur · emoji sebagai ikon · kartu bersudut bulat dengan bayangan halus · label huruf kapital berjarak di atas tiap judul · penomoran dekoratif · frasa "solusi terbaik" / "berkualitas tinggi" · panah di tombol · satu kata beraksen warna dalam judul.

## 9. Yang harus diisi atau dikonfirmasi pemilik

Data ini tidak ada di file profil. Semuanya ada di `src/data/site.ts`.

- WhatsApp, email, alamat lengkap kantor (tampil sebagai `XXXX` sampai diisi).
- Testimoni: tiga kutipan yang ada adalah **contoh** dan diberi cap "Contoh" di halaman. Ganti dengan kutipan klien asli, lalu set `contoh: false`.
- Klaim buatan saya yang harus dibenarkan: jam kerja, "balasan dalam 1×24 jam kerja", daftar alat inspeksi dan material, pengawas K3 boleh menghentikan pekerjaan, salinan legalitas bisa diminta, bagan organisasi (K3 melapor langsung ke direktur), wilayah layanan.
- Logo (yang ada hanya wordmark tipografis dan ikon favicon sementara), foto proyek.

## 10. Catatan revisi rencana (sebelum kode)

Rencana pertama saya periksa terhadap daftar kebiasaan "halaman buatan mesin", lalu diubah:

| Rencana awal | Masalah | Diganti dengan |
|---|---|---|
| Label mono huruf kapital + "Lembar 03/09" di atas tiap judul | Kepala bagian generik; bagian halaman bukan urutan | Judul saja. Angka hanya untuk langkah kerja dan ID retak |
| Font mono untuk data + Big Shoulders + IBM Plex | Tiga suara; mono-label adalah kebiasaan umum | Dua keluarga: Big Shoulders (dengan varian Stencil) + Atkinson Hyperlegible Next |
| Krem + karat sebagai penanda kerusakan | Persis kombinasi krem-terrakota yang lazim | Abu-hijau beton + satu aksen resin; kerusakan cukup hitam |
| Keunggulan sebagai lima kolom dengan judul vertikal | Teks diputar demi gaya, sulit dibaca | Tabel dua kolom: "Janji kami" dan "Cara Anda memeriksanya" |
| Angka "2025" raksasa berkontur di Tentang | Statistik sebagai dekorasi | Tahun masuk ke narasi |
| Panah di tombol, string meta berpisah titik tengah | Kebiasaan template | Dibuang |

## 11. Kritik diri sesudah jadi, dan perbaikannya

Yang saya temukan masih terasa seperti template, lalu saya ubah:

| Terasa seperti template | Perbaikan |
|---|---|
| Tujuh judul KAPITAL raksasa dengan paragraf kecil di kanan, satu pola di hampir tiap bagian | Skala ekstrem hanya di empat bagian penanda; empat bagian lain memakai judul kalimat biasa ukuran menengah |
| Bagian pembeda (Peta retak) hanya daftar langkah dan tabel, padahal itu inti bisnisnya | Ditambah denah peta retak yang digambar dari data tabel yang sama, dengan pelat R-01…R-04, packer, dan skala |
| Baris layanan selang-seling kiri-kanan (pola "fitur berilustrasi") | Selalu teks di kiri, gambar di kanan; ritme dibawa oleh gambar teknik yang berbeda tiap baris |
| Panel kelima infografis kerusakan melebar dan tampak seperti tanda seru | Semua panel sama ukuran, disusun satu baris |
| Tekstur pori terlalu ramai di bawah paragraf | Pori hanya di hero; bagian lain memakai bintik dan bercak, bidang kontak hanya bintik |

Yang masih terasa generik dan saya biarkan dengan sadar: bilah navigasi lengket (orang mengharapkannya), footer yang tenang (kebranian dihabiskan di hero), dan urutan bagian yang konvensional (permintaan brief).

Kekurangan yang tidak bisa saya perbaiki tanpa bahan dari pemilik: tidak ada foto proyek dan logo asli, testimoni masih contoh, kontak masih `XXXX`.
