import React from "react";

const Stat = ({ label, value, highlight = false }) => (
  <div className="flex flex-col rounded-xl border border-gray-200 bg-white/70 p-4 shadow-sm">
    <span className="text-sm text-gray-500">{label}</span>
    <span className={`mt-1 text-xl ${highlight ? "font-semibold text-indigo-700" : "font-medium text-gray-800"}`}>
      {value}
    </span>
  </div>
);

const Card = ({ title, desc, icon }) => (
  <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
      {icon ?? <span className="text-lg">★</span>}
    </div>
    <h4 className="text-base font-semibold text-gray-900">{title}</h4>
    {desc && <p className="mt-1 text-sm text-gray-600">{desc}</p>}
  </div>
);

const Section = ({ title, subtitle, children, id }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
        {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
      </div>
      <div className="hidden gap-2 sm:flex">
        <a href="#counselor" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Talk to Counselor
        </a>
      </div>
    </div>
    {children}
  </section>
);

export default function MBACoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500  text-white font-bold">MBA</div>
            <span className="hidden text-sm font-medium text-gray-700 sm:inline">Course Guide</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            <a href="#overview" className="hover:text-indigo-600">Overview</a>
            <a href="#specializations" className="hover:text-indigo-600">Specializations</a>
            <a href="#eligibility" className="hover:text-indigo-600">Eligibility</a>
            <a href="#curriculum" className="hover:text-indigo-600">Curriculum</a>
            <a href="#institutes" className="hover:text-indigo-600">Top Institutes</a>
            <a href="#careers" className="hover:text-indigo-600">Careers</a>
            <a href="#faqs" className="hover:text-indigo-600">FAQs</a>
          </nav>
          <a href="#brochure" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
            Download Brochure
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Management & Leadership
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              MBA — Master of Business Administration
            </h1>
            <p className="mt-3 text-gray-700">
              A postgraduate program designed to accelerate careers in leadership, strategy, finance, marketing, operations, and analytics with immersive industry exposure.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Duration" value="2 years" highlight />
              <Stat label="Avg Fees" value="₹4–25 Lakh total (varies widely)" />
              <Stat label="Mode" value="Full-time / Executive / Online" />
              <Stat label="Level" value="Postgraduate" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#counselor" className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                Talk to Counselor
              </a>
              <a href="#brochure" className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black">
                Download Brochure
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-100 blur-2xl"></div>
              <h3 className="text-lg font-semibold text-gray-900">Key Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
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
      <Section
        id="specializations"
        title="Specializations"
        subtitle="Tailor the MBA to a target leadership track."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Marketing" desc="Brand, growth, product marketing" />
          <Card title="Finance" desc="Corporate finance, IB, markets" />
          <Card title="Human Resources" desc="People strategy & analytics" />
          <Card title="Operations" desc="Supply chain & quality" />
          <Card title="Business Analytics" desc="Data, ML, decision modeling" />
          <Card title="Strategy & Consulting" desc="Corporate & advisory roles" />
          <Card title="Entrepreneurship" desc="Venture creation & scaling" />
          <Card title="Information Systems" desc="Tech management & product" />
        </div>
      </Section>

      {/* Eligibility & Admission */}
      <Section
        id="eligibility"
        title="Eligibility & Admission"
        subtitle="Check degree requirements, tests, and timelines."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Eligibility</h4>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>- Bachelor’s degree (any discipline) with minimum aggregate as per institute</li>
              <li>- Work experience preferred for Executive MBA</li>
              <li>- English proficiency and WES/NACES evaluation (for some international applicants)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Entrance & Selection</h4>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>- Exams: CAT, XAT, GMAT, GRE, MAT, CMAT (varies by college)</li>
              <li>- Shortlisting via test score; rounds may include GD/PI/WAT</li>
              <li>- Application windows often Sep–Jan; institute-specific deadlines</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Application Guide */}
      <Section
        id="application-guide"
        title="Application Guide"
        subtitle="A quick overview of the application stages."
      >
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
      <Section
        id="curriculum"
        title="Curriculum Snapshot"
        subtitle="Foundations, core management, electives, and capstone."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Term 1–2 (Foundations)</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Accounting & Finance</li>
              <li>- Marketing Management</li>
              <li>- Quantitative Methods</li>
              <li>- Micro/Macroeconomics</li>
              <li>- Organizational Behaviour</li>
              <li>- Business Communication</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Term 3–4 (Core)</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Corporate Finance</li>
              <li>- Operations & Supply Chain</li>
              <li>- Business Analytics & DSS</li>
              <li>- Strategy</li>
              <li>- Business Law & Ethics</li>
              <li>- Summer Internship</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Term 5–6 (Electives & Capstone)</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
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
      <Section
        id="institutes"
        title="Top Institutes"
        subtitle="Popular MBA colleges and universities."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="IIM Ahmedabad" desc="Flagship PGP/MBA" />
          <Card title="IIM Bangalore" desc="PGP, EPGP" />
          <Card title="IIM Calcutta" desc="Finance & analytics strengths" />
          <Card title="ISB (PGP)" desc="1‑year MBA equivalent" />
          <Card title="XLRI Jamshedpur" desc="HRM & BM" />
          <Card title="SPJIMR Mumbai" desc="General & specializations" />
          <Card title="FMS Delhi" desc="High ROI" />
          <Card title="NMIMS / Symbiosis / MDI" desc="Well‑known programs" />
        </div>
      </Section>

      {/* Careers */}
      <Section
        id="careers"
        title="Career Opportunities"
        subtitle="Leadership tracks across industries and functions."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Roles</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Product/Brand Manager</li>
              <li>- Consultant (Strategy/Operations/Tech)</li>
              <li>- Investment/Corporate Banking, Equity Research</li>
              <li>- Supply Chain/Operations Manager</li>
              <li>- HR Business Partner/People Analytics</li>
              <li>- Business/Data Analyst, PM</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Pathways</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Pre‑MBA experience boosts placements</li>
              <li>- Internships often convert to PPOs</li>
              <li>- Global roles via exchange/alumni networks</li>
              <li>- Certifications: CFA/FRM, Lean Six Sigma, PM, Analytics</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Scholarships & Abroad */}
      <Section
        id="scholarships"
        title="Scholarships & Global Options"
        subtitle="Merit/need‑based aid, assistantships, and exchanges."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Scholarships</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Institute merit/need‑based scholarships</li>
              <li>- Corporate/CSR and alumni‑funded awards</li>
              <li>- Government category‑based schemes</li>
              <li>- Research/TA/RA assistantships (select institutes)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Global Exposure</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Exchange programs & dual degrees</li>
              <li>- Study treks and global immersion</li>
              <li>- Company projects with international partners</li>
              <li>- IELTS/TOEFL for select pathways</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section
        id="faqs"
        title="FAQs"
        subtitle="Quick answers to common MBA questions."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">Is work experience mandatory?</h4>
            <p className="mt-1 text-sm text-gray-700">Not for all programs; Executive MBAs usually require 3–5+ years.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">What is the typical duration?</h4>
            <p className="mt-1 text-sm text-gray-700">Full‑time MBAs are generally 2 years; some programs are 1 year.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">Which exams are accepted?</h4>
            <p className="mt-1 text-sm text-gray-700">CAT, XAT, GMAT, GRE, CMAT, MAT depending on the institute.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">Are placements guaranteed?</h4>
            <p className="mt-1 text-sm text-gray-700">No institute can guarantee; robust assistance and alumni support are typical.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section id="apply" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-white shadow-md">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
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
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-600 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} MBA Course Guide</p>
          <div className="flex items-center gap-4">
            <a href="#brochure" className="hover:text-indigo-600">Brochure</a>
            <a href="#counselor" className="hover:text-indigo-600">Counselor</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
