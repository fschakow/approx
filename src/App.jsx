import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Orbit, Radar, Sparkles, PlayCircle, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Why', href: '#proof' },
  { label: 'Our Approach', href: '#process' },
  { label: 'What You Get', href: '#model' }
];
const calendlyUrl = 'https://calendly.com/frederik-approx-leads/discovery';

const whatYouGet = [
  {
    title: 'Compounding System',
    body:
      'One good video can bring you qualified leads for months. That\'s true leverage.',
    icon: Orbit
  },
  {
    title: 'Niche Authority',
    body:
      'You build a channel with niche authority that positions you ahead of competitors.',
    icon: Radar
  },
  {
    title: 'Content Library',
    body:
      'You create a library of answers to your ideal clients biggest problems that attracts high-intent leads.',
    icon: Sparkles
  },
  {
    title: 'Done-for-you Execution',
    body:
      'Script writing, editing, packaging and channel optimization are handled end-to-end so your time investment stays lean.',
    icon: PlayCircle
  }
];

const buyerStats = [
  { value: '70%', label: 'of B2B buyer research is done before first contact' },
  { value: '90%', label: 'of B2B buying journeys begin online' },
  { value: '75%', label: 'of B2B buyers prefer independent research' }
];

const processSteps = [
  {
    title: 'Analyze',
    description: 'We analyze your business, sales process, and ideal customer profile so strategy reflects reality.'
  },
  {
    title: 'Outline',
    description: 'We define what buyers need at each buying stage and map it into a clear, structured content system.'
  },
  {
    title: 'Create',
    description: 'We create relevant video assets that educate buyers and support your sales process.'
  }
];

const audiences = ['Consultants', 'B2B SaaS companies', 'Agencies and expert-led firms'];

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !appRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .from('[data-hero-eyebrow]', { y: 28, opacity: 0, duration: 0.8 })
        .from('[data-hero-title] span', { yPercent: 110, opacity: 0, duration: 1.1, stagger: 0.12 }, '-=0.45')
        .from('[data-hero-copy]', { y: 22, opacity: 0, duration: 0.9 }, '-=0.55')
        .from('[data-hero-cta]', { y: 18, opacity: 0, duration: 0.8 }, '-=0.6');

      gsap.utils.toArray('[data-reveal]').forEach((item) => {
        gsap.from(item, {
          y: 64,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 86%'
          }
        });
      });

      gsap.utils.toArray('[data-card]').forEach((card, index) => {
        gsap.from(card, {
          y: 45,
          opacity: 0,
          duration: 1,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 84%'
          }
        });
      });
    }, appRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="relative isolate min-h-screen overflow-x-hidden bg-base text-ink">
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0" />
      <div className="vignette-overlay pointer-events-none fixed inset-0 z-0" />
      <div className="grid-overlay pointer-events-none fixed inset-0 z-0" />

      <header className="relative z-10 sticky top-0 border-b border-line/60 bg-base/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#" className="font-display text-xl font-semibold tracking-[0.12em] text-white">
            APPROX
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-body text-sm font-medium text-ink/85 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan/60 bg-cyan/10 px-4 py-2 font-body text-sm font-semibold text-cyan transition-all hover:-translate-y-0.5 hover:bg-cyan/20"
          >
            Book a Call
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 md:px-8 md:pt-32" id="top">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-14 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2" data-hero-eyebrow>
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_16px_rgba(50,240,255,0.95)]" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/70">Attention: Consultants, B2B SaaS & Agencies</p>
            </div>
            <h1
              className="font-display text-4xl font-semibold leading-[0.92] text-white sm:text-5xl md:text-6xl lg:text-[5.3rem]"
              data-hero-title
            >
              <span className="block overflow-hidden">Turn Content Into</span>
              <span className="block overflow-hidden text-cyan">Inbound Leads</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-body text-lg leading-relaxed text-ink/80 md:text-xl" data-hero-copy>
              We help B2B brands scale client acquisition through YouTube ecosystems.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4" data-hero-cta>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-base transition-transform hover:-translate-y-0.5"
              >
                Book a Strategy Call
                <ChevronRight size={16} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-body text-sm font-semibold text-ink/90 transition hover:border-cyan/60 hover:text-cyan"
              >
                <PlayCircle size={16} />
                Our Approach
              </a>
            </div>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-line bg-black/35 p-2 shadow-glow">
              <iframe
                src="https://www.youtube.com/embed/T5N0O5B3AP0?si=QatkG0Me0almahRZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24" id="proof">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div data-reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan/80">Why?</p>
              <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                B2B Buyer behavior have changed. Your content strategy should too.
              </h2>
              <p className="mt-5 max-w-md font-body text-lg text-ink/80">
                We design content around how B2B buying decisions are actually made today.
              </p>
            </div>

            <div className="grid gap-4" data-reveal>
              <div className="rounded-2xl border border-line bg-panel/50 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan/85">B2B Market Reality</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {buyerStats.map((stat) => (
                    <div key={stat.value + stat.label}>
                      <p className="font-display text-3xl text-white md:text-4xl">{stat.value}</p>
                      <p className="mt-2 font-body text-xs uppercase tracking-[0.12em] text-ink/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-white/[0.02] p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan/85">Who We Build For</p>
                <ul className="mt-4 space-y-3">
                  {audiences.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-ink/82">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-magenta shadow-[0_0_14px_rgba(248,106,255,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8 md:pb-28" id="process">
          <div className="overflow-hidden rounded-3xl border border-line bg-panel/60 p-6 md:p-10" data-reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan/85">Our Approach</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Analyze. Outline. Create.
                </h2>
                <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-ink/80">
                  We start with business reality, map buyer information needs, and produce content assets that support acquisition and conversion.
                </p>
                <div className="mt-8 grid gap-3 text-sm text-ink/84 md:grid-cols-3">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="rounded-xl border border-line bg-white/[0.02] px-4 py-3">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-cyan/80">
                        {index + 1}. {step.title}
                      </p>
                      <p className="mt-2 font-body text-sm text-ink/80">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src="https://unsplash.com/photos/j8oxkeN1A10/download?force=true&w=1600"
                alt="Chess pieces on a board representing strategic planning"
                className="h-64 w-full rounded-2xl object-cover object-center md:h-80 lg:h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20" id="model">
          <div className="mb-12 max-w-3xl" data-reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan/80">What You Get</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              Outcomes that compound, not one-off deliverables.
            </h2>
          </div>
          <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
            {whatYouGet.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                data-card
                className="group rounded-2xl border border-line bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan/50 hover:bg-cyan/5"
              >
                <div className="mb-6 inline-flex rounded-xl border border-cyan/40 p-2 text-cyan">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight text-white">{title}</h3>
                <p className="mt-4 font-body text-base leading-relaxed text-ink/80">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8 md:pb-28" id="cta">
          <div className="relative overflow-hidden rounded-3xl border border-cyan/35 bg-gradient-to-r from-cyan/15 via-transparent to-magenta/15 px-6 py-12 text-center md:px-10 md:py-16" data-reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Ready to Build Your Content Engine?</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              Turn your expertise into a long-term growth asset.
            </h2>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-base transition-transform hover:-translate-y-0.5"
            >
              Book a Call
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-line/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-display text-lg tracking-[0.12em] text-white">APPROX</p>
            <p className="mt-2 font-body text-sm text-ink/65">YouTube ecosystems for consultants, B2B SaaS companies & agencies.</p>
          </div>
          <div className="flex items-center gap-5 font-body text-sm text-ink/75">
            <a href="#proof" className="transition hover:text-cyan">
              Why
            </a>
            <a href="#process" className="transition hover:text-cyan">
              Our Approach
            </a>
            <a href="#model" className="transition hover:text-cyan">
              What You Get
            </a>
            <a href={calendlyUrl} target="_blank" rel="noreferrer" className="transition hover:text-cyan">
              Book a Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
