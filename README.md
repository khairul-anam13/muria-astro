# Muria-Web

Situs profil CV Muria Struktura Teknik (Gresik). Astro + Tailwind CSS v4, satu halaman statis. Arah desain ada di [DESIGN.md](DESIGN.md).

```bash
npm install     # lihat catatan npm di bawah bila muncul "Cannot find native binding"
npm run dev     # http://localhost:4321
npm run build   # hasil di dist/, bisa ditaruh di hosting statis mana pun
npm run cek     # build + pemeriksaan aturan desain, kontras, tautan, hitungan jarak
```

## Yang harus Anda isi

Semua isi ada di `src/data/site.ts`; komponen tidak perlu disentuh.

| Data | Sekarang | Aksi |
|---|---|---|
| `kontak.whatsapp`, `kontak.email`, `kontak.alamat` | kosong, tampil `XXXX` | isi; tombol WhatsApp langsung berfungsi |
| `testimoni` | tiga **contoh**, diberi cap "Contoh isi" di halaman | ganti dengan kutipan klien asli, set `contoh: false` |
| `jam`, janji 1×24 jam, daftar alat dan material, bagan organisasi, wilayah layanan | tulisan saya, bukan dari file profil | periksa dan koreksi |
| Logo, foto proyek | belum ada (wordmark tipografis + favicon sementara) | tambahkan; foto asli paling cocok masuk di bagian Layanan |
| `og:image` untuk pratinjau tautan | belum ada | tambahkan gambar 1200×630 di `public/` dan tag-nya di `Base.astro` |

`npm run cek` mengingatkan bila masih ada `XXXX` atau testimoni contoh.

## Catatan npm di mesin ini

`~/.npmrc` berisi `os=linux`, sehingga `npm install` memasang binary Linux (Rolldown, Tailwind, sharp) dan Astro gagal jalan di Windows. Untuk proyek ini pakai:

```bash
npm install --os=win32 --cpu=x64
```

Jangan menaruh `.npmrc` berisi `os=win32` di proyek ini: build di Netlify/Vercel (Linux) akan rusak.
