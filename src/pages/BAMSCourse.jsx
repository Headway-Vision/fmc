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
        <a href="#apply" className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
          Apply Now
        </a>
        <a href="#counselor" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Talk to Counselor
        </a>
      </div>
    </div>
    {children}
  </section>
);

export default function BAMSCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">BAMS</div>
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
              Ayurveda & Integrative Medicine
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              BAMS — Bachelor of Ayurvedic Medicine and Surgery
            </h1>
            <p className="mt-3 text-gray-700">
              A professional undergraduate program in Ayurveda combining classical Ayurvedic sciences with modern medicine, clinical training, and internship.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Duration" value="5.5 years (incl. 1-year internship)" highlight />
              <Stat label="Avg Fees" value="₹50k–3 Lakh/year (varies)" />
              <Stat label="Mode" value="Full-time" />
              <Stat label="Level" value="Undergraduate (Professional)" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#apply" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700">
                Apply Now
              </a>
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
                <li>- Classical texts (Samhitas) with modern integration</li>
                <li>- Hospital postings and clinical exposure</li>
                <li>- Herbal pharmacopeia and formulation</li>
                <li>- Community health and preventive care</li>
              </ul>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Stat label="Internship" value="Compulsory 12 months" />
                <Stat label="Regulation" value="NCISM norms" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations / Kriya */}
      <Section
        id="specializations"
        title="Key Branches & Focus Areas"
        subtitle="Core Ayurvedic disciplines and applied domains."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Kayachikitsa" desc="Internal medicine" />
          <Card title="Shalya Tantra" desc="Surgery" />
          <Card title="Shalakya Tantra" desc="ENT & Ophthalmology" />
          <Card title="Kaumarbhritya" desc="Pediatrics" />
          <Card title="Prasuti & Strirog" desc="Obstetrics & Gynecology" />
          <Card title="Panchakarma" desc="Detox & therapies" />
          <Card title="Dravyaguna" desc="Materia medica & herbs" />
          <Card title="Rasashastra & Bhaishajya Kalpana" desc="Pharmaceutics" />
        </div>
      </Section>

      {/* Eligibility & Admission */}
      <Section
        id="eligibility"
        title="Eligibility & Admission"
        subtitle="NEET-based admissions as per regulatory guidelines."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Eligibility</h4>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>- 10+2 (PCB) from a recognized board with minimum aggregate as per norms</li>
              <li>- NEET-UG qualification mandatory for most seats</li>
              <li>- Age and category relaxations as per government policy</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Admission & Counseling</h4>
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li>- Central/State/Deemed university counseling processes</li>
              <li>- All India Quota and State Quota seat distribution</li>
              <li>- Document verification and medical fitness</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Application Guide */}
      <Section
        id="application-guide"
        title="Application Guide"
        subtitle="Steps from test registration to joining the program."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="1. Register NEET" desc="Apply for NEET-UG" />
          <Card title="2. Appear & Qualify" desc="Meet cut-offs" />
          <Card title="3. Counseling" desc="Choice filling & locking" />
          <Card title="4. Allotment" desc="Seat allocation" />
          <Card title="5. Verification" desc="Docs & admission formalities" />
          <Card title="6. Report" desc="Join institute & orientation" />
        </div>
      </Section>

      {/* Curriculum */}
      <Section
        id="curriculum"
        title="Curriculum Snapshot"
        subtitle="Pre-clinical, para-clinical, clinical, and internship."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Year 1 (Pre‑Clinical)</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Sanskrit & Ayurveda Itihas</li>
              <li>- Padartha Vigyan & Ayurveda Siddhant</li>
              <li>- Rachana Sharir (Anatomy)</li>
              <li>- Kriya Sharir (Physiology)</li>
              <li>- Maulik Siddhant</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Year 2 (Para‑Clinical)</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Dravyaguna Vigyan</li>
              <li>- Rasashastra & Bhaishajya Kalpana</li>
              <li>- Roga Nidana & Vikriti Vigyan (Pathology)</li>
              <li>- Agada Tantra (Toxicology)</li>
              <li>- Swasthavritta & Yoga</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Year 3 (Clinical + Internship)</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Kayachikitsa, Panchakarma</li>
              <li>- Shalya & Shalakya</li>
              <li>- Kaumarbhritya, Prasuti & Strirog</li>
              <li>- Research methodology & community medicine</li>
              <li>- 1‑year compulsory rotating internship</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Top Institutes */}
      <Section
        id="institutes"
        title="Top Institutes"
        subtitle="Reputed colleges and universities offering BAMS."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="BHU IMS (Varanasi)" desc="Institute of Medical Sciences" />
          <Card title="Gujarat Ayurved University (Jamnagar)" desc="IPGT&RA legacy" />
          <Card title="Tilak Ayurved Mahavidyalaya (Pune)" desc="Clinical focus" />
          <Card title="National Institute of Ayurveda (Jaipur)" desc="Deemed to be Univ." />
          <Card title="AYUSH Colleges (State Govt.)" desc="Across India" />
          <Card title="KLE Ayurvedic Medical College" desc="Belagavi" />
          <Card title="Sri Sri College of Ayurvedic Science" desc="Bengaluru" />
          <Card title="Amrita / Manipal (AYUSH)" desc="Private universities" />
        </div>
      </Section>

      {/* Careers */}
      <Section
        id="careers"
        title="Career Opportunities"
        subtitle="Clinical practice, research, pharma, wellness, and public health."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Roles</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Ayurvedic Medical Officer / Physician</li>
              <li>- Junior Resident / Clinical Assistant</li>
              <li>- Panchakarma Specialist / Therapist Supervisor</li>
              <li>- Research Associate (AYUSH/Pharma)</li>
              <li>- Ayurveda Consultant (Wellness/Resorts/Telehealth)</li>
              <li>- Manufacturing & QA (Herbal/AYUSH)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Pathways & Upskilling</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- PG: MD/MS Ayurveda specializations</li>
              <li>- Fellowships: Panchakarma, Ksharsutra, Integrative Oncology</li>
              <li>- Public health & research (MPH, PhD)</li>
              <li>- Entrepreneurship: clinics, pharmacies, wellness centers</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Scholarships & Abroad */}
      <Section
        id="scholarships"
        title="Scholarships & Global Options"
        subtitle="Government schemes, institute aid, and international exposure."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Scholarships</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Central/State government scholarships</li>
              <li>- Institute merit/need-based aid</li>
              <li>- Category-based fee concessions as per policy</li>
              <li>- Private/CSR-funded awards</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Global Exposure</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>- Exchange & observerships (select institutes)</li>
              <li>- International wellness & spa industry roles</li>
              <li>- Research collaborations (AYUSH/Herbal)</li>
              <li>- Country-specific practice regulations apply</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section
        id="faqs"
        title="FAQs"
        subtitle="Quick answers to common BAMS questions."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">Is NEET mandatory for BAMS?</h4>
            <p className="mt-1 text-sm text-gray-700">Yes, NEET-UG qualification is generally required for admission.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">What is the total duration?</h4>
            <p className="mt-1 text-sm text-gray-700">5.5 years including a compulsory 1-year rotating internship.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">Can BAMS graduates practice?</h4>
            <p className="mt-1 text-sm text-gray-700">Practice is regulated by state medical councils as per AYUSH/NCISM norms.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h4 className="font-semibold text-gray-900">Are there lateral entries?</h4>
            <p className="mt-1 text-sm text-gray-700">Not typical; admissions follow counseling and regulatory guidelines.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section id="apply" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-white shadow-md">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Pursue a career in Ayurveda with BAMS</h3>
              <p className="mt-1 text-white/90">Apply or connect with a counselor to understand admission, counseling, and curricula.</p>
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
          <p>© {new Date().getFullYear()} BAMS Course Guide</p>
          <div className="flex items-center gap-4">
            <a href="#brochure" className="hover:text-indigo-600">Brochure</a>
            <a href="#counselor" className="hover:text-indigo-600">Counselor</a>
            <a href="#apply" className="hover:text-indigo-600">Apply</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
