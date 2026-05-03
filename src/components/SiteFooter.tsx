import { Link } from "@tanstack/react-router";
import { Ornament } from "./Ornament";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.18_0.04_30)] text-cream/80">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-cream">Öreg Miskolcz Étterem</div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/65">
              Történelmi belváros, hagyományos magyar konyha, bajai harcsahalászlé és
              meghitt vendégszeretet a Horváth Lajos utcában.
            </p>
            <Ornament className="mt-6" />
          </div>

          <div>
            <div className="eyebrow mb-4 text-gold">Elérhetőség</div>
            <p className="text-sm leading-relaxed">
              Miskolc, Horváth Lajos u. 11.<br />
              3525 · Magyarország
            </p>
            <a href="tel:+3646000000" className="mt-3 block text-sm hover:text-gold">+36 46 000 000</a>
            <a href="mailto:info@oregmiskolcz.hu" className="block text-sm hover:text-gold">info@oregmiskolcz.hu</a>
          </div>

          <div>
            <div className="eyebrow mb-4 text-gold">Nyitvatartás</div>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between"><span>Hétfő–Csüt.</span><span>11:30 – 22:00</span></li>
              <li className="flex justify-between"><span>Péntek–Szo.</span><span>11:30 – 23:00</span></li>
              <li className="flex justify-between"><span>Vasárnap</span><span>11:30 – 22:00</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:justify-between">
          <div>© {new Date().getFullYear()} Öreg Miskolcz Étterem. Minden jog fenntartva.</div>
          <div className="flex gap-5">
            <Link to="/kapcsolat" className="hover:text-gold">Kapcsolat</Link>
            <a href="https://www.foodora.hu" target="_blank" rel="noreferrer" className="hover:text-gold">Foodora</a>
            <a href="https://www.oregmiskolcz.hu" target="_blank" rel="noreferrer" className="hover:text-gold">Hotel</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
