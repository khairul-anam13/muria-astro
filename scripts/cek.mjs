// Pemeriksaan sesudah build: `npm run cek`. Gagal = keluar dengan kode 1.
// Menegakkan aturan mutlak dari brief dan menjaga hitungan yang bisa diam-diam salah.
import { readFileSync, readdirSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const css = readdirSync('dist/_astro')
  .filter((f) => f.endsWith('.css'))
  .map((f) => readFileSync(`dist/_astro/${f}`, 'utf8'))
  .join('\n');
const sumberCss = readFileSync('src/styles/global.css', 'utf8');
const gagal = [];
const cek = (ok, pesan) => ok || gagal.push(pesan);

// Struktur
cek((html.match(/<h1[\s>]/g) || []).length === 1, 'harus ada tepat satu <h1>');
for (const id of ['beranda', 'tentang', 'layanan', 'cara-kerja', 'keunggulan', 'testimoni', 'badan-usaha', 'lokasi', 'kontak'])
  cek(html.includes(`id="${id}"`), `bagian #${id} tidak ada`);
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
for (const [, h] of html.matchAll(/href="#([^"]+)"/g)) cek(ids.has(h), `tautan #${h} tidak punya sasaran`);
cek(!html.includes('NaN'), 'ada NaN di HTML (hitungan geometri rusak)');

// Aturan mutlak
cek(!/\b(Inter|Roboto|Arial|system-ui)\b/.test(css + html), 'font terlarang (Inter/Roboto/Arial/system-ui) ditemukan');
cek(!/\p{Emoji_Presentation}|️/u.test(html), 'emoji ditemukan di HTML');
cek(!/border-radius/.test(css), 'ada border-radius (aturan: tanpa sudut bulat)');
cek(!/box-shadow/.test(css), 'ada box-shadow (aturan: tanpa bayangan)');
cek(!/hero.*text-center|text-center/.test(html), 'ada teks rata tengah (aturan: rata kiri)');
for (const k of ['solusi terbaik', 'berkualitas tinggi', 'kualitas terbaik', 'profesional dan terpercaya', 'terdepan'])
  cek(!html.toLowerCase().includes(k), `frasa klise: "${k}"`);

// Kontras: token warna dibaca dari global.css, pasangan yang benar-benar dipakai diperiksa >= 4,5:1
const warna = Object.fromEntries([...sumberCss.matchAll(/--color-([a-z-]+):\s*(#[0-9a-f]{6})/gi)].map(([, n, h]) => [n, h]));
const lum = (h) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const rasio = (a, b) => {
  const [x, y] = [lum(warna[a]), lum(warna[b])].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
for (const [f, b] of [
  ['beton-tua', 'beton'], ['debu', 'beton'], ['beton-tua', 'semen'], ['debu', 'semen'],
  ['semen', 'beton-tua'], ['kabut', 'beton-tua'], ['resin', 'beton-tua'],
  ['semen', 'beton-dalam'], ['kabut', 'beton-dalam'], ['resin', 'beton-dalam'], ['beton-dalam', 'resin'],
]) cek(rasio(f, b) >= 4.5, `kontras ${f} di atas ${b} hanya ${rasio(f, b).toFixed(2)}:1`);

// Hitungan jarak: Gresik–Surabaya sekitar 14 km garis lurus, Gresik–Malang sekitar 91 km
const km = (kota) => Number(html.match(new RegExp(`${kota}\\s*<tspan[^>]*>(\\d+) km`))?.[1]);
cek(km('Surabaya') >= 10 && km('Surabaya') <= 20, `jarak Surabaya tidak masuk akal: ${km('Surabaya')} km`);
cek(km('Malang') >= 80 && km('Malang') <= 100, `jarak Malang tidak masuk akal: ${km('Malang')} km`);

if (gagal.length) {
  console.error('GAGAL:\n- ' + gagal.join('\n- '));
  process.exit(1);
}
console.log(`Lulus. Kontras ${Object.keys(warna).length} warna, ${ids.size} id, ${(html.length / 1024).toFixed(0)} KB HTML, ${(css.length / 1024).toFixed(0)} KB CSS.`);

// Pengingat, bukan kegagalan: isi yang masih milik pemilik
const sisa = (html.match(/XXXX/g) || []).length;
if (sisa) console.log(`Belum diisi: ${sisa} tempat bertanda XXXX (WhatsApp, email, alamat di src/data/site.ts).`);
if (html.includes('Contoh isi')) console.log('Belum diganti: testimoni masih contoh (src/data/site.ts, set contoh: false setelah diganti).');
