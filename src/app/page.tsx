export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-200 to-rose-400" />
            <p className="font-semibold">Skinfluence Skinstitute</p>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#behandelingen" className="hover:text-rose-600">Behandelingen</a>
            <a href="#over" className="hover:text-rose-600">Over</a>
            <a href="#contact" className="hover:text-rose-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow hover:shadow-md"
          >
            Afspraak maken
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585238342028-4bbc88f1e9ae?q=80&w=1600&auto=format&fit=crop"
          alt="Ontspannende gezichtsbehandeling"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-300/30 via-rose-400/25 to-white -z-10" />
        <div className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
          <div className="max-w-2xl rounded-[28px] bg-white/60 backdrop-blur p-6 sm:p-8 shadow-lg ring-1 ring-white/40">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Ontspannende massages &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-600">
                huidverbeterende
              </span>{" "}
              gezichtsbehandelingen
            </h1>
            <p className="mt-4 text-gray-700">
              Kom tot rust met persoonlijke behandelingen van{" "}
              <strong>Elina Schuurman</strong> — premium producten, aandacht en zichtbaar resultaat.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-white font-medium bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow hover:shadow-lg"
              >
                Maak een afspraak
              </a>
              <a
                href="#behandelingen"
                className="rounded-full px-6 py-3 font-medium border border-rose-200 bg-white/70 hover:bg-white"
              >
                Bekijk behandelingen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Behandelingen */}
      <section id="behandelingen" className="py-16 bg-gradient-to-b from-white to-rose-50/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold">Behandelingen</h2>
          <p className="mt-2 text-gray-600">Rust, aandacht en een stralende huid.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ontspanningsmassage",
                desc: "Volledige lichaamsmassage met zachte druk en aromatische oliën.",
              },
              {
                title: "Huidverbeterende Gezichtsbehandeling",
                desc: "Reiniging, peeling, massage & masker afgestemd op jouw huid.",
              },
              {
                title: "Deep Cleanse Facial",
                desc: "Intensieve reiniging met zachte extractie en kalmerende verzorging.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl p-6 bg-white/80 backdrop-blur ring-1 ring-rose-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-block rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow hover:shadow-md"
                >
                  Afspraak aanvragen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Over */}
      <section id="over" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Over Elina</h2>
            <p className="mt-4 text-gray-700">
              Ik ben <strong>Elina Schuurman</strong>, specialist in ontspanning en huidverbetering.
              Met aandachtige technieken en hoogwaardige producten creëer ik rust en een gezonde glow.
            </p>
          </div>
          <div>
            <div className="rounded-[28px] overflow-hidden ring-1 ring-rose-100 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
                alt="Salon sfeer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-rose-50/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl bg-white/80 backdrop-blur ring-1 ring-rose-100 p-6 shadow">
            <h2 className="text-2xl font-semibold">Afspraak & Contact</h2>
            <form className="mt-4 space-y-4">
              <input className="w-full rounded-xl border border-gray-200 px-3 py-2" placeholder="Naam" />
              <input className="w-full rounded-xl border border-gray-200 px-3 py-2" type="email" placeholder="E-mail" />
              <textarea className="w-full rounded-xl border border-gray-200 px-3 py-2 h-28" placeholder="Bericht" />
              <button
                type="button"
                className="w-full rounded-full px-6 py-3 text-white font-medium bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow hover:shadow-lg"
              >
                Verstuur
              </button>
            </form>
          </div>

          <div className="rounded-3xl ring-1 ring-rose-100 bg-gradient-to-br from-rose-100 to-white p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li><strong>Locatie:</strong> Nederland (adres volgt)</li>
              <li><strong>Openingstijden:</strong> Op afspraak</li>
              <li><strong>E-mail:</strong> info@skinfluenceskinstitute.nl</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-rose-100 py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Skinfluence Skinstitute — Alle rechten voorbehouden.
      </footer>
    </main>
  );
}
