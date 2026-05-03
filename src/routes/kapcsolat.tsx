import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat — Öreg Miskolcz Étterem" },
      { name: "description", content: "Asztalfoglalás, elérhetőség és nyitvatartás. Miskolc, Horváth Lajos u. 11." },
      { property: "og:title", content: "Kapcsolat — Öreg Miskolcz Étterem" },
      { property: "og:description", content: "Foglalj asztalt vagy keress fel minket a Horváth Lajos utcában." },
    ],
  }),
  component: Kapcsolat,
});

function Kapcsolat() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="container-x pt-40 pb-12 text-center">
        <div className="eyebrow">Kapcsolat</div>
        <h1 className="mt-4 font-display text-6xl md:text-7xl text-burgundy text-balance">Foglalj asztalt</h1>
        <Ornament className="mt-6" />
      </section>

      <section className="container-x pb-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="bg-secondary p-10">
            <h2 className="font-display text-3xl text-burgundy">Elérhetőségünk</h2>
            <div className="mt-8 space-y-6 text-base">
              <Row label="Cím" value={<>Miskolc, Horváth Lajos u. 11.<br />3525, Magyarország</>} />
              <Row label="Telefon" value={<a href="tel:+3646000000" className="hover:text-ember">+36 46 000 000</a>} />
              <Row label="E-mail" value={<a href="mailto:info@oregmiskolcz.hu" className="hover:text-ember">info@oregmiskolcz.hu</a>} />
              <Row label="Nyitvatartás" value={<>H–Cs: 11:30 – 22:00<br />P–Szo: 11:30 – 23:00<br />V: 11:30 – 22:00</>} />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+3646000000" className="rounded-full bg-burgundy px-7 py-3.5 text-sm text-cream hover:bg-ember">Hívás</a>
              <a href="https://www.foodora.hu" target="_blank" rel="noreferrer" className="rounded-full border border-burgundy px-7 py-3.5 text-sm text-burgundy hover:bg-burgundy hover:text-cream">Rendelés Foodorán</a>
            </div>
          </div>

          <form className="bg-background border border-border p-10" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-display text-3xl text-burgundy">Foglalási kérés</h2>
            <p className="mt-2 text-sm text-muted-foreground">Töltsd ki az űrlapot és kollégáink visszaigazolják.</p>

            <div className="mt-8 grid gap-5">
              <Field label="Név" type="text" />
              <div className="grid grid-cols-2 gap-5">
                <Field label="Telefon" type="tel" />
                <Field label="Fő" type="number" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Field label="Dátum" type="date" />
                <Field label="Időpont" type="time" />
              </div>
              <label className="block">
                <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Megjegyzés</span>
                <textarea rows={3} className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-ember" />
              </label>
              <button className="mt-2 rounded-full bg-burgundy px-7 py-3.5 text-sm text-cream hover:bg-ember">Foglalás elküldése</button>
            </div>
          </form>
        </div>

        <div className="mt-16 aspect-[16/7] overflow-hidden">
          <iframe
            title="Térkép"
            src="https://www.openstreetmap.org/export/embed.html?bbox=20.776%2C48.099%2C20.785%2C48.105&layer=mapnik&marker=48.1023%2C20.7807"
            className="h-full w-full grayscale"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-1">{label}</div>
      <div className="text-foreground leading-relaxed">{value}</div>
    </div>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{label}</span>
      <input type={type} className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-ember" />
    </label>
  );
}
