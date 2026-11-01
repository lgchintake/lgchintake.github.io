/**
 * Regenerates public/og-image.png (1200×630), public/apple-touch-icon.png (180×180)
 * and public/icon-32.png using Next's built-in ImageResponse (Satori).
 * Run after changing your photo or title:  npm run images
 */
import { ImageResponse } from "next/og.js";
import { readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";

const root = new URL("../", import.meta.url);
const photo = await readFile(new URL("public/images/profile.jpg", root)).catch(() => null);
const photoSrc = photo ? `data:image/jpeg;base64,${photo.toString("base64")}` : null;

async function save(element, width, height, file) {
  const res = new ImageResponse(element, { width, height });
  await writeFile(new URL(`public/${file}`, root), Buffer.from(await res.arrayBuffer()));
  console.log("wrote public/" + file);
}

const monogram = (size, radius) =>
  h(
    "div",
    {
      style: {
        width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(135deg,#6366f1,#06b6d4)", borderRadius: radius,
        color: "#fff", fontSize: size, fontWeight: 800,
      },
    },
    "LC",
  );

await save(monogram(80, 0), 180, 180, "apple-touch-icon.png");
await save(monogram(15, 7), 32, 32, "icon-32.png");

const chip = (t) =>
  h("div", { style: { display: "flex", padding: "8px 18px", borderRadius: 999, border: "1px solid rgba(165,180,252,.35)", color: "#c7d2fe", fontSize: 24 } }, t);

await save(
  h(
    "div",
    {
      style: {
        width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 80px", gap: 60,
        background: "radial-gradient(circle at 15% 0%, rgba(99,102,241,.35), transparent 55%), radial-gradient(circle at 100% 20%, rgba(34,211,238,.25), transparent 50%)", backgroundColor: "#0b0f17",
        color: "#e8ecf4", fontFamily: "sans-serif",
      },
    },
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", flex: 1 } },
      h("div", { style: { fontSize: 28, color: "#67e8f9", letterSpacing: 4 } }, "PORTFOLIO"),
      h("div", { style: { fontSize: 68, fontWeight: 800, marginTop: 16, lineHeight: 1.05 } }, "Laxminarayan Chintake"),
      h("div", { style: { fontSize: 32, marginTop: 20, color: "#a3adc2" } }, "Technical Lead · Senior Java Backend & Blockchain Engineer"),
      h("div", { style: { display: "flex", gap: 12, marginTop: 36 } }, chip("11+ years"), chip("Certified Blockchain Architect"), chip("Fintech")),
    ),
    photoSrc
      ? h("img", {
          src: photoSrc, width: 300, height: 375,
          style: { borderRadius: 32, objectFit: "cover", objectPosition: "46% 30%", border: "4px solid #818cf8" },
        })
      : null,
  ),
  1200, 630, "og-image.png",
);
