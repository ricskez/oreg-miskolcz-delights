import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament } from "@/components/Ornament";
import hero from "@/assets/hero-halaszle.jpg";

export const Route = createFileRoute("/etlap")({
  head: () => ({
    meta: [
      { title: "Étlap — Öreg Miskolcz Étterem" },
      { name: "description", content: "Hagyományos magyar fogások: halászlé, gulyás, vadételek, házi desszertek. Tekintsd meg teljes étlapunkat." },
      { property: "og:title", content: "Étlap — Öreg Miskolcz Étterem" },
      { property: "og:description", content: "Levesek, halételek, vadételek, magyaros fogások és házi desszertek." },
    ],
  }),
  component: Etlap,
});

const sections = [
  {
    title: "Levesek",
    items: [
      ["Bajai harcsahalászlé", "Bográcsban főzve, gyufatésztával", "3 290"],
      ["Magyaros marhagulyás", "Csipetkével, friss zöldfűszerekkel", "2 990"],
      ["Húsleves házi cérnametélttel", "Tanyasi tyúkból, gyökérzöldségekkel", "1 990"],
      ["Korhely halászlé", "Savanyú káposztával, füstölt csülökkel", "3 490"],
    ],
  },
  {
    title: "Halételek",
    items: [
      ["Sült harcsa galuskával", "Paprikás mártással, friss kapor", "4 590"],
      ["Roston sült pisztráng", "Citromos vajban, párolt zöldségekkel", "4 290"],
      ["Rántott pontyfilé", "Petrezselymes burgonyával, tartárral", "3 890"],
    ],
  },
  {
    title: "Magyaros fogások",
    items: [
      ["Juhtúrós sztrapacska", "Pirított szalonnával, tejföllel", "2 690"],
      ["Töltött káposzta", "Házi savanyú káposztában, tejföllel", "3 190"],
      ["Csülök Pékné módra", "Kemencében sütve, fokhagymás burgonyával", "4 190"],
      ["Cigánypecsenye", "Steak burgonyával és lecsóval", "3 990"],
    ],
  },
  {
    title: "Vadételek",
    items: [
      ["Szarvasragú erdei gombával", "Vörösboros mártásban, zsemlegombóccal", "5 290"],
      ["Vaddisznó pörkölt", "Áfonyaszósszal, tarhonyával", "4 890"],
    ],
  },
  {
    title: "Desszertek",
    items: [
      ["Somlói galuska", "Csokoládéöntettel, dióval, tejszínhabbal", "1 890"],
      ["Túrós csusza", "Pirított szalonnával és tejföllel", "1 690"],
      ["Gundel palacsinta", "Diós töltelékkel, lángoló rumos öntettel", "2 190"],
    ],
  },
];

function Etlap() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* PAGE HEADER */}
      <section className="relative isolate text-cream pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0 bg-burgundy/80" />
        </div>
        <div className="relative container-x text-center">
          <div className="eyebrow text-gold">Étlap</div>
          <h1 className="mt-4 font-display text-6xl md:text-7xl text-balance">Konyhánk kínálata</h1>
          <Ornament className="mt-6" />
          <p className="mt-6 max-w-xl mx-auto text-cream/80">
            Hagyományos magyar receptek, helyi alapanyagok, kézi készítés.
            Az árak forintban értendők.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section className="container-x py-24">
        <div className="mx-auto max-w-3xl space-y-20">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="flex items-center gap-5">
                <h2 className="font-display text-4xl text-burgundy">{s.title}</h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <ul className="mt-8 divide-y divide-border">
                {s.items.map(([name, desc, price]) => (
                  <li key={name} className="grid grid-cols-[1fr_auto] gap-x-6 py-5">
                    <div>
                      <div className="font-display text-xl text-foreground">{name}</div>
                      <div className="text-sm text-muted-foreground mt-1">{desc}</div>
                    </div>
                    <div className="text-gold font-medium">{price} Ft</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-20 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Az étlap változhat · Allergén információért érdeklődj a felszolgálónál
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
