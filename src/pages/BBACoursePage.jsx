import React, { useEffect, useRef } from "react";

/* Subtle surfaces with tasteful color accents */
const Stat = ({ label, value, highlight = false }) => (
  <div className="flex flex-col rounded-xl border border-white/30 bg-white/70 p-4 shadow-sm backdrop-blur-sm ring-1 ring-inset ring-indigo-100">
    <span className="text-sm text-slate-600">{label}</span>
    <span
      className={`mt-1 text-xl ${
        highlight
          ? "font-semibold text-indigo-700"
          : "font-medium text-slate-900"
      }`}
    >
      {value}
    </span>
  </div>
);

const Card = ({ title, desc, icon }) => (
  <div className="group rounded-2xl border border-white/30 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md backdrop-blur-sm ring-1 ring-indigo-100">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 text-indigo-700 ring-1 ring-inset ring-indigo-100">
      {icon ?? <span className="text-lg">★</span>}
    </div>
    <h4 className="text-base font-semibold text-slate-900">{title}</h4>
    {desc && <p className="mt-1 text-sm text-slate-600">{desc}</p>}
  </div>
);

const Section = ({ title, subtitle, children, id }) => (
  <section
    id={id}
    className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
  >
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      </div>
      <div className="hidden gap-2 sm:flex">
        <a
          href="#counselor"
          className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:from-indigo-700 hover:to-violet-700"
        >
          Talk to Counselor
        </a>
      </div>
    </div>
    {children}
  </section>
);

/* Institute card (unchanged API) */
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

export default function BBACoursePage() {
  // Replace these image URLs with your own assets
  const INSTITUTE_IMAGES = {
    iimi:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    sscbs:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
    nmims:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    symbiosis:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    christ:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
    amity:
      "https://images.unsplash.com/photo-1553701275-27c0a1a67bb9?q=80&w=1200&auto=format&fit=crop",
    nmcollege:
      "https://images.unsplash.com/photo-1559027615-5a1a1f2c4b59?q=80&w=1200&auto=format&fit=crop",
    manipal:
      "https://images.unsplash.com/photo-1496307042754-41f2d1f2103c?q=80&w=1200&auto=format&fit=crop",
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-fuchsia-50/40 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full border-b border-white/30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-sm">
              BBA
            </div>
            <span className="hidden text-sm font-medium text-slate-700 sm:inline">
              Course Guide
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#overview" className="hover:text-indigo-700">
              Overview
            </a>
            <a href="#specializations" className="hover:text-indigo-700">
              Specializations
            </a>
            <a href="#eligibility" className="hover:text-indigo-700">
              Eligibility
            </a>
            <a href="#curriculum" className="hover:text-indigo-700">
              Curriculum
            </a>
            <a href="#institutes" className="hover:text-indigo-700">
              Top Institutes
            </a>
            <a href="#careers" className="hover:text-indigo-700">
              Careers
            </a>
            <a href="#faqs" className="hover:text-indigo-700">
              FAQs
            </a>
          </nav>
          <a
            href="#brochure"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black"
          >
            Download Brochure
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="overview"
        className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="mx-auto max-w-6xl">
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute right-8 -top-6 h-56 w-56 rounded-full bg-fuchsia-200/40 blur-3xl" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
              Business Administration
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              BBA — Bachelor of Business Administration
            </h1>
            <p className="mt-3 text-slate-800">
              A comprehensive undergraduate program focused on management,
              finance, marketing, analytics, and entrepreneurship to build
              versatile business leaders.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Duration" value="3 years" highlight />
              <Stat label="Avg Fees" value="₹1.5–4 Lakh/year" />
              <Stat label="Mode" value="Full-time" />
              <Stat label="Level" value="Undergraduate" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#counselor"
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
              >
                Talk to Counselor
              </a>
              <a
                href="#brochure"
                className="rounded-lg bg-gradient-to-r from-gray-900 to-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:from-black hover:to-slate-950"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-100 blur-2xl" />
              <h3 className="text-lg font-semibold text-slate-900">
                Key Highlights
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-800">
                - Case-based learning
                - Industry internships
                - Cross-functional projects
                - Career mentoring
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Stat label="Internship" value="8–12 weeks" />
                <Stat label="Placement" value="Assistance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <Section
        id="specializations"
        title="Specializations"
        subtitle="Choose a focus area to align with career goals."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Marketing" desc="Branding, digital, consumer behavior" />
          <Card title="Finance" desc="Corporate finance, markets, risk" />
          <Card title="HR Management" desc="Talent, L&D, org behavior" />
          <Card title="Business Analytics" desc="Data-driven decision making" />
          <Card title="Operations" desc="Supply chain, quality, systems" />
          <Card title="International Business" desc="Global strategy & trade" />
          <Card title="Entrepreneurship" desc="Venture creation & growth" />
          <Card title="Retail & E‑Commerce" desc="Merchandising & CX" />
        </div>
      </Section>

      {/* Eligibility & Admission */}
      <Section
        id="eligibility"
        title="Eligibility & Admission"
        subtitle="Check requirements, exams, and application timelines."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Eligibility</h4>
            <ul className="mt-3 space-y-2 text-slate-800 text-sm">
              - Completed 10+2 from a recognized board
              - Minimum aggregate typically 50% (varies by institute)
              - Background in any stream (Commerce preferred but not mandatory)
              - English proficiency as per institute norms
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">
              Entrance & Admission
            </h4>
            <ul className="mt-3 space-y-2 text-slate-800 text-sm">
              - Common exams: CUET-UG, IPU CET, NPAT, SET, Christ Entrance (varies by college)
              - Selection: Entrance score and/or merit, interview, SOP
              - Deadlines: Typically Mar–Jun for most universities
              - Lateral entries as per institute policy
            </ul>
          </div>
        </div>
      </Section>

      {/* Application Guide */}
      <Section
        id="application-guide"
        title="Application Guide"
        subtitle="Step-by-step overview of the process."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="1. Register" desc="Create applicant profile" />
          <Card title="2. Apply" desc="Fill form, upload documents" />
          <Card title="3. Exam/Shortlist" desc="Entrance/merit-based shortlist" />
          <Card title="4. Interview" desc="PI/WAT/GD as applicable" />
          <Card title="5. Offer" desc="Provisional admission" />
          <Card title="6. Enroll" desc="Fee payment & onboarding" />
        </div>
      </Section>

      {/* Curriculum */}
      <Section
        id="curriculum"
        title="Curriculum Snapshot"
        subtitle="Foundations, core management, and specialization electives."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Year 1</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Principles of Management
              - Financial Accounting
              - Business Economics
              - Quantitative Techniques
              - Business Communication
              - IT for Managers
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Year 2</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Marketing Management
              - Corporate Finance
              - Human Resource Management
              - Operations Management
              - Business Law
              - Research Methods
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Year 3</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Business Analytics
              - Strategic Management
              - International Business
              - Electives in chosen specialization
              - Capstone Project / Internship
              - Entrepreneurship & Innovation
            </ul>
          </div>
        </div>
      </Section>

      {/* Top Institutes - Horizontal scroll with images + auto scroll */}
      <Section
        id="institutes"
        title="Top Institutes"
        subtitle="Popular universities and colleges offering BBA."
      >
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50" />
          <div className="rounded-3xl border border-white/30 bg-white/90 p-4 backdrop-blur-sm shadow-sm ring-1 ring-indigo-100">
            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-2 [scrollbar-width:thin]"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
              }}
            >
              {/* Show 3 cards per view on large screens using responsive width overrides */}
              <div className="contents lg:[&>*]:w-[calc((100vw-2rem-2rem-2rem)/3)] xl:[&>*]:w-[calc((72rem-2rem-2rem-2rem)/3)]">
                <InstituteCard
                  title="IIM Indore (IPM)"
                  desc="Integrated program"
                  img={INSTITUTE_IMAGES.iimi}
                />
                <InstituteCard
                  title="Shaheed Sukhdev College of Business Studies"
                  desc="Delhi University"
                  img={INSTITUTE_IMAGES.sscbs}
                />
                <InstituteCard
                  title="NMIMS Mumbai"
                  desc="BBA & allied programs"
                  img={INSTITUTE_IMAGES.nmims}
                />
                <InstituteCard
                  title="Symbiosis (SCMS)"
                  desc="SET-based admissions"
                  img={INSTITUTE_IMAGES.symbiosis}
                />
                <InstituteCard
                  title="Christ University"
                  desc="Multiple campuses"
                  img={INSTITUTE_IMAGES.christ}
                />
                <InstituteCard
                  title="Amity University"
                  desc="Wide specializations"
                  img={INSTITUTE_IMAGES.amity}
                />
                <InstituteCard
                  title="NM College (Mithibai/UPG)"
                  desc="Mumbai"
                  img={INSTITUTE_IMAGES.nmcollege}
                />
                <InstituteCard
                  title="Manipal University"
                  desc="Industry exposure"
                  img={INSTITUTE_IMAGES.manipal}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Career Opportunities */}
      <Section
        id="careers"
        title="Career Opportunities"
        subtitle="Roles across functions with strong growth potential."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Popular Roles</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Marketing Executive, Brand Associate
              - Financial Analyst, Equity Research Associate
              - HR Generalist, Talent Acquisition
              - Business Analyst, Operations Associate
              - Sales/BD Executive, Customer Success
              - Entrepreneur / Startup roles
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">
              Compensation & Pathways
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Entry-level salaries vary by city and institute
              - Internships improve placement outcomes
              - Many graduates pursue MBA/PGDM after 2–3 years
              - Certifications: FMVA, Digital Marketing, HR Analytics
            </ul>
          </div>
        </div>
      </Section>

      {/* Scholarships & Abroad */}
      <Section
        id="scholarships"
        title="Scholarships & Abroad Options"
        subtitle="Merit-based aid, need-based support, and exchange programs."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">Scholarships</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Institute merit and need-based schemes
              - Govt scholarships as per category/policy
              - Private foundations and CSR programs
              - Fee waivers for high performers
            </ul>
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="text-lg font-semibold text-slate-900">
              Study Abroad & Exchange
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              - Semester exchange with partner universities
              - Global immersion/short study tours
              - Credit transfer as per MoUs
              - English proficiency: IELTS/TOEFL as needed
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section id="faqs" title="FAQs" subtitle="Quick answers to common queries.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/30 bg-white/90 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">
              What is the duration of BBA?
            </h4>
            <p className="mt-1 text-sm text-slate-800">
              Typically 3 years (6 semesters), varying by university.
            </p>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/90 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">
              Is BBA open to non-Commerce students?
            </h4>
            <p className="mt-1 text-sm text-slate-800">
              Yes, students from any stream can apply unless specified otherwise.
            </p>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/90 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">
              Are internships mandatory?
            </h4>
            <p className="mt-1 text-sm text-slate-800">
              Most programs include an internship or capstone in later semesters.
            </p>
          </div>
          <div className="rounded-xl border border-white/30 bg-white/90 p-5 shadow-sm backdrop-blur-sm ring-1 ring-indigo-100">
            <h4 className="font-semibold text-slate-900">Is BBA valid abroad?</h4>
            <p className="mt-1 text-sm text-slate-800">
              Recognition depends on institution and country; many graduates
              pursue master’s abroad.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section
        id="apply"
        className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-sm">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"></div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">
                Ready to begin your BBA journey?
              </h3>
              <p className="mt-1 text-white/90">
                Apply now or speak with a counselor to clarify admissions, fees,
                and specialization choices.
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <a
                href="#counselor"
                className="rounded-lg bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/30 backdrop-blur hover:bg-white/25"
              >
                Talk to Counselor
              </a>
              <a
                href="#apply-form"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                Start Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-700 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} BBA Course Guide</p>
          <div className="flex items-center gap-4">
            <a href="#brochure" className="hover:text-indigo-700">
              Brochure
            </a>
            <a href="#counselor" className="hover:text-indigo-700">
              Counselor
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
