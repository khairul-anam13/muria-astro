// Generator retak deterministik: build yang sama selalu menghasilkan retak yang sama.
export type Pt = [number, number];

function prng(seed: number) {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Garis retak dari a ke b dalam n ruas, menyimpang acak sebesar amp (ujung tetap). */
export function retak(seed: number, [x0, y0]: Pt, [x1, y1]: Pt, n: number, amp: number): Pt[] {
  const r = prng(seed);
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    const ujung = i === 0 || i === n;
    return [
      x0 + (x1 - x0) * t + (ujung ? 0 : (r() - 0.5) * 2 * amp),
      y0 + (y1 - y0) * t + (ujung ? 0 : (r() - 0.5) * amp * 0.5),
    ] as Pt;
  });
}

export const jalur = (p: Pt[]) => 'M' + p.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L');

/** Poligon retak selebar wmax di tengah dan lancip di kedua ujung, mengikuti garis p. */
export function lebar(p: Pt[], wmax: number, seed: number): string {
  const r = prng(seed);
  const n = p.length - 1;
  const kiri: Pt[] = [];
  const kanan: Pt[] = [];
  p.forEach(([x, y], i) => {
    const [ax, ay] = p[Math.max(i - 1, 0)];
    const [bx, by] = p[Math.min(i + 1, n)];
    const len = Math.hypot(bx - ax, by - ay) || 1;
    const nx = -(by - ay) / len;
    const ny = (bx - ax) / len;
    // max(0, …): sin(π) bisa bernilai −1e-16, dan pangkat pecahan dari bilangan negatif adalah NaN
    const w = (wmax * Math.pow(Math.max(0, Math.sin((Math.PI * i) / n)), 0.6) * (0.5 + 0.5 * r())) / 2;
    kiri.push([x + nx * w, y + ny * w]);
    kanan.push([x - nx * w, y - ny * w]);
  });
  return jalur([...kiri, ...kanan.reverse()]) + 'Z';
}

/** Tepi patahan antarbagian: [x dalam %, tinggi 0..1]. Zig-zag tak beraturan. */
export function patahan(seed: number, n = 18): Pt[] {
  const r = prng(seed);
  return Array.from({ length: n + 1 }, (_, i) => [(i / n) * 100, i % 2 ? 0.5 + r() * 0.5 : r() * 0.5] as Pt);
}
