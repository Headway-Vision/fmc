import React, { useEffect, useRef } from "react";

const Stat = ({ label, value, highlight = false }) => (
  <div className="flex flex-col rounded-xl border border-white/30 bg-white/70 p-4 shadow-sm backdrop-blur-sm ring-1 ring-inset ring-indigo-100">
    <span className="text-sm text-slate-600">{label}</span>
    <span className={`mt-1 text-xl ${highlight ? "font-semibold text-indigo-700" : "font-medium text-slate-900"}`}>
      {value}
    </span>
  </div>
);

const Card = ({ title, desc, icon, imgSrc }) => (
  <div className="group rounded-2xl border border-white/30 bg-indigo-100 p-0 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md backdrop-blur-sm ring-1 ring-indigo-100 overflow-hidden">
    {imgSrc ? (
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>
    ) : null}
    <div className="p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 text-indigo-700 ring-1 ring-inset ring-indigo-100">
        {icon ?? <span className="text-lg">★</span>}
      </div>
      <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      {desc && <p className="mt-1 text-sm text-slate-600">{desc}</p>}
    </div>
  </div>
);

const InstituteCard = ({ title, desc, img }) => (
  <div className="snap-center shrink-0 w-80">
    <div className="group overflow-hidden rounded-2xl border border-white/30 bg-white/90 shadow-sm transition hover:shadow-md backdrop-blur-sm ring-1 ring-indigo-100">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
        {desc && <p className="mt-1 text-sm text-slate-600">{desc}</p>}
      </div>
    </div>
  </div>
);

const Section = ({ title, subtitle, children, id }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      </div>
      <div className="hidden gap-2 sm:flex">
        <a href="#counselor" className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-indigo-700 hover:to-violet-700">
          Talk to Counselor
        </a>
      </div>
    </div>
    {children}
  </section>
);

export default function MBACoursePage() {
  // Replace these local image paths with your actual assets
  const INSTITUTE_IMAGES = {
    iima: "/IIMA.jpeg",
    iimb: "/IIMB.jpeg",
    iimc: "/IIMC.jpeg",
    isb: "/ISB.jpeg",
    xlri: "/XLRI.jpeg",
    spjimr: "/SPJIMR.jpeg",
    fms: "/FMS.jpeg",
    nmims: "/NMIMS.jpeg",
  };

  // Specializations images (add your own asset paths)
  const SPECIALIZATION_IMAGES = {
    marketing: "/Marketing.jpeg",
    finance: "/Finance.jpeg",
    hr: "/HR.jpeg",
    operations: "/Operations.jpeg",
    analytics: "/Analytics.jpeg",
    strategy: "/Strategy.jpeg",
    entrepreneurship: "/Entrepreneurship.jpeg",
    is: "/InformationSystems.jpeg",
  };

  /* Auto-scroll for Top Institutes: 3 cards per stride, smooth loop */
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Measure first child width to adapt if styles change
    const firstCard = el.querySelector(":scope > .contents > *");
    const cardWidth = firstCard?.getBoundingClientRect().width || 320;
    const gap = 16; // gap-4
    const stride = cardWidth * 3 + gap * 3;

    let scrollAmount = 0;
    const step = () => {
      const max = el.scrollWidth - el.clientWidth;
      const next = scrollAmount + stride;

      if (next >= max - 4) {
        scrollAmount = 0;
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollAmount = next;
        el.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const interval = setInterval(step, 3200);

    // Pause on hover/user interaction
    const pause = () => clearInterval(interval);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("mousedown", pause);

    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("mousedown", pause);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 via-purple to-fuchsia-50/40 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full border-b border-white/30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-sm">MBA</div>
            <span className="hidden text-sm font-medium text-slate-700 sm:inline">Course Guide</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#overview" className="hover:text-indigo-700">Overview</a>
            <a href="#specializations" className="hover:text-indigo-700">Specializations</a>
            <a href="#eligibility" className="hover:text-indigo-700">Eligibility</a>
            <a href="#curriculum" className="hover:text-indigo-700">Curriculum</a>
            <a href="#institutes" className="hover:text-indigo-700">Top Institutes</a>
            <a href="#careers" className="hover:text-indigo-700">Careers</a>
            <a href="#faqs" className="hover:text-indigo-700">FAQs</a>
          </nav>
          <a href="#brochure" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black">
            Download Brochure
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="relative bg-indigo-300 mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="mx-auto max-w-6xl">
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute right-8 -top-6 h-56 w-56 rounded-full bg-fuchsia-200/40 blur-3xl" />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
              Management & Leadership
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              MBA — Master of Business Administration
            </h1>
            <p className="mt-3 text-slate-800">
              A postgraduate program designed to accelerate careers in leadership, strategy, finance, marketing, operations, and analytics with immersive industry exposure.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Duration" value="2 years" highlight />
              <Stat label="Avg Fees" value="₹4–25 Lakh total (varies widely)" />
              <Stat label="Mode" value="Full-time / Executive / Online" />
              <Stat label="Level" value="Postgraduate" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#counselor" className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
                Talk to Counselor
              </a>
              <a href="#brochure" className="rounded-lg bg-gradient-to-r from-gray-900 to-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:from-black hover:to-slate-950">
                Download Brochure
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/50 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-100 blur-2xl"></div>
              <h3 className="text-lg font-semibold text-slate-900">Key Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-800">
                <li>- Case method & live projects</li>
                <li>- Summer internships & industry mentors</li>
                <li>- Leadership labs & simulations</li>
                <li>- Campus placements & alumni network</li>
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Stat label="Internship" value="8–10 weeks" />
                <Stat label="Placement" value="Assistance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <Section id="specializations" title="Specializations" subtitle="Tailor the MBA to a target leadership track.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Marketing" desc="Brand, growth, product marketing" imgSrc={SPECIALIZATION_IMAGES.marketing} />
          <Card title="Finance" desc="Corporate finance, IB, markets" imgSrc={SPECIALIZATION_IMAGES.finance} />
          <Card title="Human Resources" desc="People strategy & analytics" imgSrc={SPECIALIZATION_IMAGES.hr} />
          <Card title="Operations" desc="Supply chain & quality" imgSrc={SPECIALIZATION_IMAGES.operations} />
          <Card title="Business Analytics" desc="Data, ML, decision modeling" imgSrc={SPECIALIZATION_IMAGES.analytics} />
          <Card title="Strategy & Consulting" desc="Corporate & advisory roles" imgSrc={SPECIALIZATION_IMAGES.strategy} />
          <Card title="Entrepreneurship" desc="Venture creation & scaling" imgSrc={SPECIALIZATION_IMAGES.entrepreneurship} />
          <Card title="Information Systems" desc="Tech management & product" imgSrc={SPECIALIZATION_IMAGES.is} />
        </div>
      </Section>

      {/* Eligibility & Admission */}
      <Section id="eligibility" title="Eligibility & Admission" subtitle="Check degree requirements, tests, and timelines.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Eligibility</h4>
            <ul className="mt-3 space-y-2 text-slate-800 text-sm">
              <li>- Bachelor’s degree (any discipline) with minimum aggregate as per institute</li>
              <li>- Work experience preferred for Executive MBA</li>
              <li>- English proficiency and WES/NACES evaluation (for some international applicants)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Entrance & Selection</h4>
            <ul className="mt-3 space-y-2 text-slate-800 text-sm">
              <li>- Exams: CAT, XAT, GMAT, GRE, MAT, CMAT (varies by college)</li>
              <li>- Shortlisting via test score; rounds may include GD/PI/WAT</li>
              <li>- Application windows often Sep–Jan; institute-specific deadlines</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Application Guide */}
      <Section id="application-guide" title="Application Guide" subtitle="A quick overview of the application stages.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="1. Register" desc="Create profile on institute/portal" />
          <Card title="2. Apply" desc="Form + transcripts + SOP/LORs" />
          <Card title="3. Test" desc="CAT/XAT/GMAT/GRE, etc." />
          <Card title="4. Shortlist" desc="Profile + score based" />
          <Card title="5. Interview" desc="GD/PI/WAT & composite score" />
          <Card title="6. Offer & Enroll" desc="Seat allocation & onboarding" />
        </div>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum" title="Curriculum Snapshot" subtitle="Foundations, core management, electives, and capstone.">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Term 1–2 (Foundations)</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Accounting & Finance</li>
              <li>- Marketing Management</li>
              <li>- Quantitative Methods</li>
              <li>- Micro/Macroeconomics</li>
              <li>- Organizational Behaviour</li>
              <li>- Business Communication</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Term 3–4 (Core)</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Corporate Finance</li>
              <li>- Operations & Supply Chain</li>
              <li>- Business Analytics & DSS</li>
              <li>- Strategy</li>
              <li>- Business Law & Ethics</li>
              <li>- Summer Internship</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/40 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Term 5–6 (Electives & Capstone)</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Specialization electives</li>
              <li>- Advanced analytics/leadership labs</li>
              <li>- Global immersion (optional)</li>
              <li>- Capstone/Consulting project</li>
              <li>- Placement preparation</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Top Institutes */}
      <Section id="institutes" title="Top Institutes" subtitle="Popular MBA colleges and universities.">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-100 via-violet-50 to-fuchsia-50" />
          <div className="rounded-xl border border-white/30 bg-white/50 p-4 backdrop-blur-sm shadow-sm ring-1 ring-indigo-100">
            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-2 [scrollbar-width:thin]"
              style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
            >
              <div className="contents lg:[&>*]:w-[calc((100vw-2rem-2rem-2rem)/3)] xl:[&>*]:w-[calc((72rem-2rem-2rem-2rem)/3)]">
                <InstituteCard title="IIM Ahmedabad" desc="Flagship PGP/MBA" img={INSTITUTE_IMAGES.iima} />
                <InstituteCard title="IIM Bangalore" desc="PGP, EPGP" img={INSTITUTE_IMAGES.iimb} />
                <InstituteCard title="IIM Calcutta" desc="Finance & analytics strengths" img={INSTITUTE_IMAGES.iimc} />
                <InstituteCard title="ISB (PGP)" desc="1‑year MBA equivalent" img={INSTITUTE_IMAGES.isb} />
                <InstituteCard title="XLRI Jamshedpur" desc="HRM & BM" img={INSTITUTE_IMAGES.xlri} />
                <InstituteCard title="SPJIMR Mumbai" desc="General & specializations" img={INSTITUTE_IMAGES.spjimr} />
                <InstituteCard title="FMS Delhi" desc="High ROI" img={INSTITUTE_IMAGES.fms} />
                <InstituteCard title="NMIMS / Symbiosis / MDI" desc="Well‑known programs" img={INSTITUTE_IMAGES.nmims} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" title="Career Opportunities" subtitle="Leadership tracks across industries and functions.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-indigo-100 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Roles</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Product/Brand Manager</li>
              <li>- Consultant (Strategy/Operations/Tech)</li>
              <li>- Investment/Corporate Banking, Equity Research</li>
              <li>- Supply Chain/Operations Manager</li>
              <li>- HR Business Partner/People Analytics</li>
              <li>- Business/Data Analyst, PM</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-indigo-100 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Pathways</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Pre‑MBA experience boosts placements</li>
              <li>- Internships often convert to PPOs</li>
              <li>- Global roles via exchange/alumni networks</li>
              <li>- Certifications: CFA/FRM, Lean Six Sigma, PM, Analytics</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Scholarships & Abroad */}
      <Section id="scholarships" title="Scholarships & Global Options" subtitle="Merit/need‑based aid, assistantships, and exchanges.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-white/50 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Scholarships</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Institute merit/need‑based scholarships</li>
              <li>- Corporate/CSR and alumni‑funded awards</li>
              <li>- Government category‑based schemes</li>
              <li>- Research/TA/RA assistantships (select institutes)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/50 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Global Exposure</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li>- Exchange programs & dual degrees</li>
              <li>- Study treks and global immersion</li>
              <li>- Company projects with international partners</li>
              <li>- IELTS/TOEFL for select pathways</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" title="FAQs" subtitle="Quick answers to common MBA questions.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/30 bg-indigo-50 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">Is work experience mandatory?</h4>
            <p className="mt-1 text-sm text-slate-800">Not for all programs; Executive MBAs usually require 3–5+ years.</p>
          </div>
          <div className="rounded-xl border border-white/30 bg-indigo-50 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">What is the typical duration?</h4>
            <p className="mt-1 text-sm text-slate-800">Full‑time MBAs are generally 2 years; some programs are 1 year.</p>
          </div>
          <div className="rounded-xl border border-white/30 bg-indigo-50 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">Which exams are accepted?</h4>
            <p className="mt-1 text-sm text-slate-800">CAT, XAT, GMAT, GRE, CMAT, MAT depending on the institute.</p>
          </div>
          <div className="rounded-xl border border-white/30 bg-indigo-50 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">Are placements guaranteed?</h4>
            <p className="mt-1 text-sm text-slate-800">No institute can guarantee; robust assistance and alumni support are typical.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section id="apply" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-sm">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"></div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Ready to level up with an MBA?</h3>
              <p className="mt-1 text-white/90">Apply or connect with a counselor to clarify admissions, exams, and specializations.</p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <a href="#counselor" className="rounded-lg bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-white/25">
                Talk to Counselor
              </a>
              <a href="#apply-form" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50">
                Start Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-700 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} MBA Course Guide</p>
          <div className="flex items-center gap-4">
            <a href="#brochure" className="hover:text-indigo-700">Brochure</a>
            <a href="#counselor" className="hover:text-indigo-700">Counselor</a>
          </div>
        </div>
      </footer>
    </div>
  );
}