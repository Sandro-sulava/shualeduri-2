import ContactForm from "../contact/components/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10  from-indigo-600/20 via-fuchsia-500/10 to-transparent" />

      <header className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
          Get in
          <span className=" from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            touch
          </span>
        </h2>
        <p className="mt-3 text-slate-400">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </header>

      <div className="grid gap-6 rounded-2xl bg-slate-900/30 p-6 ring-1 ring-white/10 backdrop-blur-lg sm:p-8 lg:grid-cols-2">
        <ContactForm />

        <div className="rounded-2xl ring-1 ring-white/10">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1517976487492-576ea6b2936d?q=80&w=1600&auto=format&fit=crop"
              alt="Astronaut resting on a small moon"
              className="h-80 w-full object-cover sm:h-full"
            />
            <div className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm leading-5 text-slate-200">
              <p>
                "Two lunar months revealed Earth's fragile beauty against vast
                silence, transforming my view of our place in the universe."
              </p>
              <p className="text-slate-400">Irinei Traista</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
