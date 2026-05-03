import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament } from "@/components/Ornament";
import hero from "@/assets/hero-halaszle.jpg";
import dishHalaszle from "@/assets/hero-halaszle.jpg";
import dishGulyas from "@/assets/dish-gulyas.jpg";
import dishHarcsa from "@/assets/dish-harcsa.jpg";
import dishSztrapacska from "@/assets/dish-sztrapacska.jpg";
import dishSzarvas from "@/assets/dish-szarvas.jpg";
import dishSomloi from "@/assets/dish-somloi.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Öreg Miskolcz Étterem — Hagyományos magyar konyha Miskolcon" },
      { name: "description", content: "Bajai harcsahalászlé, juhtúrós sztrapacska, vadételek a Horváth Lajos utcában. Foglalj asztalt online." },
      { property: "og:title", content: "Öreg Miskolcz Étterem — Miskolc" },
      { property: "og:description", content: "Hagyományos magyar konyha a történelmi belváros szívében." },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "Bajai harcsahalászlé", desc: "Verhetetlen ár-érték arányban, vendégeink kedvence.", img: dishHalaszle, price: "3 290 Ft" },
  { name: "Juhtúrós sztrapacska", desc: "Pirított szalonnával és friss tejföllel.", img: dishSztrapacska, price: "2 690 Ft" },
  { name: "Magyaros marhagulyás", desc: "Bográcsban főzve, házi cipóval.", img: dishGulyas, price: "2 990 Ft" },
  { name: "Sült harcsa galuskával", desc: "Paprikás mártással és nokedlivel.", img: dishHarcsa, price: "4 590 Ft" },
  { name: "Szarvasragú erdei gombával", desc: "Vörösboros mártásban, vadász módra.", img: dishSzarvas, price: "5 290 Ft" },
  { name: "Somlói galuska", desc: "Klasszikus házi recept, csokoládé- és diós krémmel.", img: dishSomloi, price: "1 890 Ft" },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden text-cream">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover animate-slow-zoom" width={1600} height={1200} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        </div>

        <div className="relative container-x flex min-h-[100svh] flex-col justify-center pt-24 pb-20">
          <div className="max-w-3xl animate-fade-up">
            <div className="eyebrow text-gold">Miskolc · Horváth Lajos u. 11.</div>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-balance md:text-8xl">
              A város <em className="text-gold">legrégebbi</em> halászléje,<br />egy fedél alatt 1881 óta.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-cream/80">
              Az Öreg Miskolcz Étterem a történelmi belváros szívében várja vendégeit
              hagyományos magyar konyhával, bajai harcsahalászlével és meghitt
              gyertyafényes hangulattal.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/etlap" className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-burgundy transition hover:bg-cream">
                Étlap megtekintése
              </Link>
              <a href="tel:+3646000000" className="rounded-full border border-cream/40 px-7 py-3.5 text-sm text-cream transition hover:border-gold hover:text-gold">
                Asztalfoglalás
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-cream/70">
              <div>
                <div className="font-display text-3xl text-gold">4,8</div>
                <div className="text-xs uppercase tracking-widest">DiningCity · 90 értékelés</div>
              </div>
              <div className="h-10 w-px bg-cream/20" />
              <div>
                <div className="font-display text-3xl text-gold">4,5</div>
                <div className="text-xs uppercase tracking-widest">Google · 41 értékelés</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.4em] uppercase animate-pulse">
          Görgess
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <div className="eyebrow">A mi történetünk</div>
            <h2 className="mt-4 font-display text-5xl text-balance md:text-6xl text-burgundy">
              Konyhánk a magyar vendégszeretet kézjegyével.
            </h2>
            <Ornament className="mt-6" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A megújult Öreg Halász Étterem a történelmi Öreg Miskolcz Hotel
              boltíves termeiben kínálja a legjobb bajai halászlevet a városban,
              mellette pedig a magyar konyha legszebb fogásait — vadételeket,
              kemencés specialitásokat és kézzel készült desszerteket.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Kedves személyzetünk és figyelmes felszolgálásunk gondoskodik róla,
              hogy minden látogatás emlékezetes maradjon.
            </p>
          </div>
          <div className="relative">
            <img src={interior} alt="Az étterem belső tere boltíves mennyezettel" className="rounded-sm object-cover w-full aspect-[4/5] md:aspect-[4/5]" loading="lazy" width={1600} height={1100} style={{ boxShadow: "var(--shadow-soft)" }} />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-burgundy text-cream p-8 max-w-[260px]">
              <div className="font-display text-4xl text-gold">144</div>
              <div className="text-sm mt-1 text-cream/80">év vendéglátói hagyomány a belvárosban</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MENU GRID */}
      <section className="bg-secondary py-28">
        <div className="container-x">
          <div className="flex flex-col items-center text-center">
            <Ornament />
            <div className="eyebrow mt-4">Kínálatunk</div>
            <h2 className="mt-3 font-display text-5xl md:text-6xl text-burgundy text-balance">Vendégeink kedvencei</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Hagyományos receptek, helyi alapanyagok, kézi készítés. Ízelítő az étlapunkról.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((d) => (
              <article key={d.name} className="group bg-background overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy" width={1024} height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-burgundy">{d.name}</h3>
                    <span className="text-sm text-gold whitespace-nowrap">{d.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/etlap" className="inline-flex items-center gap-3 text-burgundy hover:text-ember">
              <span className="h-px w-10 bg-burgundy" />
              <span className="text-sm uppercase tracking-[0.3em]">Teljes étlap</span>
              <span className="h-px w-10 bg-burgundy" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="relative overflow-hidden py-28 text-cream" style={{ background: "var(--gradient-warm)" }}>
        <div className="container-x">
          <div className="text-center">
            <Ornament />
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-balance">Vendégeink mondták</h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { q: "A legjobb bajai harcsahalászlé Miskolcon. A juhtúrós sztrapacska is kiváló. A személyzet szolgálatkész, udvarias.", a: "Sándor Huszár" },
              { q: "Nagyon finom halászlevet ettünk, verhetetlen ár-érték arányban. A kiszolgálás kedves és figyelmes volt.", a: "Bóka Tamás" },
              { q: "Ballagás utáni családi ebédet tartottunk itt. Minden az egyeztetettek szerint történt, finom ételek, udvarias személyzet.", a: "Zsolt Horváth" },
            ].map((t) => (
              <figure key={t.a} className="border-t border-cream/30 pt-8">
                <div className="text-gold-soft text-4xl font-display leading-none">“</div>
                <blockquote className="mt-3 font-display text-2xl leading-snug text-balance">{t.q}</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-cream/70">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / VISIT */}
      <section className="container-x py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="eyebrow">Látogass el hozzánk</div>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-burgundy text-balance">
              A belváros legmeghittebb asztala vár.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Hétköznap menüvel, hétvégén à la carte kínálattal várjuk. Foglalj asztalt
              telefonon vagy nézz be hozzánk a Horváth Lajos utca 11. szám alá.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="eyebrow mb-2">Cím</div>
                <p>Miskolc, Horváth Lajos u. 11.<br />3525</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Nyitva</div>
                <p>Naponta 11:30 – 22:00<br />Péntek–Szombat 23:00-ig</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+3646000000" className="rounded-full bg-burgundy px-7 py-3.5 text-sm text-cream hover:bg-ember">Hívj minket</a>
              <a href="https://www.foodora.hu" target="_blank" rel="noreferrer" className="rounded-full border border-burgundy px-7 py-3.5 text-sm text-burgundy hover:bg-burgundy hover:text-cream">Rendelés Foodorán</a>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden">
            <iframe
              title="Térkép"
              src="https://www.openstreetmap.org/export/embed.html?bbox=20.776%2C48.099%2C20.785%2C48.105&layer=mapnik&marker=48.1023%2C20.7807"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
