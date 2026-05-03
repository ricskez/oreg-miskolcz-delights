import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament } from "@/components/Ornament";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/etterem")({
  head: () => ({
    meta: [
      { title: "Az étterem — Öreg Miskolcz" },
      { name: "description", content: "Az Öreg Miskolcz Étterem története, filozófiája és értékei a miskolci belváros szívében." },
      { property: "og:title", content: "Az étterem — Öreg Miskolcz" },
      { property: "og:description", content: "144 év vendéglátói hagyomány Miskolc történelmi belvárosában." },
    ],
  }),
  component: Etterem,
});

function Etterem() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="relative isolate text-cream pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={interior} alt="" className="h-full w-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0 bg-burgundy/80" />
        </div>
        <div className="relative container-x text-center">
          <div className="eyebrow text-gold">Az étterem</div>
          <h1 className="mt-4 font-display text-6xl md:text-7xl text-balance">Történelmi falak,<br />élő hagyomány</h1>
          <Ornament className="mt-6" />
        </div>
      </section>

      <section className="container-x py-24">
        <div className="mx-auto max-w-3xl space-y-10 text-lg leading-relaxed text-muted-foreground">
          <p className="text-2xl text-foreground font-display leading-snug text-balance">
            Az Öreg Miskolcz Étterem a város egyik legpatinásabb épületében,
            az Öreg Miskolcz Hotelben, a Horváth Lajos utca 11. szám alatt
            várja vendégeit.
          </p>
          <p>
            Boltíves termeink és kovácsoltvas csillárjaink alatt a magyar
            vendéglátás legjavát kínáljuk: kemencében sült húsokat, bográcsban
            főzött halászlét, vadételeket és kézzel formált házi desszerteket.
          </p>
          <p>
            Konyhánk vezetője a hagyományt tiszteli, de nem áll meg ott:
            szezonális alapanyagokkal és helyi termelők munkájával dolgozik,
            hogy minden tányér saját történetet meséljen.
          </p>

          <div className="grid gap-10 sm:grid-cols-3 pt-10">
            <Pillar title="Hagyomány" text="Régi receptek, autentikus magyar ízek, kézzel készítve." />
            <Pillar title="Minőség" text="Helyi termelők, friss alapanyagok, kézműves párosítások." />
            <Pillar title="Vendégszeretet" text="Figyelmes felszolgálás és meghitt, családias hangulat." />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="text-gold font-display text-3xl">{title}</div>
      <div className="mt-2 h-px w-12 bg-gold" />
      <p className="mt-4 text-base text-muted-foreground">{text}</p>
    </div>
  );
}
