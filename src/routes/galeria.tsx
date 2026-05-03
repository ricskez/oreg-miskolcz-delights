import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament } from "@/components/Ornament";
import g1 from "@/assets/hero-halaszle.jpg";
import g2 from "@/assets/dish-gulyas.jpg";
import g3 from "@/assets/dish-sztrapacska.jpg";
import g4 from "@/assets/dish-harcsa.jpg";
import g5 from "@/assets/dish-szarvas.jpg";
import g6 from "@/assets/dish-somloi.jpg";
import g7 from "@/assets/interior.jpg";
import g8 from "@/assets/dish-turos.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galéria — Öreg Miskolcz Étterem" },
      { name: "description", content: "Pillanatképek az Öreg Miskolcz Étterem ételeiből és belső tereiből." },
      { property: "og:title", content: "Galéria — Öreg Miskolcz Étterem" },
      { property: "og:description", content: "Ételek, terek, hangulat — egy pillantás belénk." },
    ],
  }),
  component: Galeria,
});

const images = [
  { src: g1, alt: "Bajai harcsahalászlé bográcsban", span: "row-span-2" },
  { src: g7, alt: "Az étterem boltíves belső tere", span: "" },
  { src: g2, alt: "Magyaros gulyás" },
  { src: g4, alt: "Sült harcsa galuskával", span: "row-span-2" },
  { src: g3, alt: "Juhtúrós sztrapacska" },
  { src: g5, alt: "Szarvasragú erdei gombával" },
  { src: g8, alt: "Túrós csusza" },
  { src: g6, alt: "Somlói galuska" },
];

function Galeria() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="container-x pt-40 pb-12 text-center">
        <div className="eyebrow">Galéria</div>
        <h1 className="mt-4 font-display text-6xl md:text-7xl text-burgundy text-balance">Pillanatképek nálunk</h1>
        <Ornament className="mt-6" />
      </section>

      <section className="container-x pb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden ${img.span ?? ""}`}>
              <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={1024}
                className="h-full w-full object-cover transition duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
