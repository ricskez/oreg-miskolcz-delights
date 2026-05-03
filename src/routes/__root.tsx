import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-burgundy">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Az oldal nem található</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A keresett oldal nem létezik vagy elköltözött.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-burgundy px-5 py-2.5 text-sm text-cream transition hover:bg-ember"
          >
            Vissza a kezdőlapra
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Öreg Miskolcz Étterem — Hagyományos magyar konyha Miskolcon" },
      { name: "description", content: "Öreg Miskolcz Étterem a történelmi belváros szívében. Bajai harcsahalászlé, juhtúrós sztrapacska, vadételek meghitt környezetben." },
      { name: "author", content: "Öreg Miskolcz Étterem" },
      { property: "og:title", content: "Öreg Miskolcz Étterem — Hagyományos magyar konyha Miskolcon" },
      { property: "og:description", content: "Öreg Miskolcz Étterem a történelmi belváros szívében. Bajai harcsahalászlé, juhtúrós sztrapacska, vadételek meghitt környezetben." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Öreg Miskolcz Étterem — Hagyományos magyar konyha Miskolcon" },
      { name: "twitter:description", content: "Öreg Miskolcz Étterem a történelmi belváros szívében. Bajai harcsahalászlé, juhtúrós sztrapacska, vadételek meghitt környezetben." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9e27230f-e930-441e-8153-ef9750b2fb5a" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9e27230f-e930-441e-8153-ef9750b2fb5a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
