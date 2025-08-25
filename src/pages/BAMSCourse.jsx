import React from "react";
import "./BAMSCourse.css";

const Stat = ({ label, value, highlight = false }) => (
  <div className="stat-container">
    <span className="stat-label">{label}</span>
    <span className={`stat-value ${highlight ? "stat-highlight" : ""}`}>
      {value}
    </span>
  </div>
);

const Card = ({ title, desc, icon }) => (
  <div className="card-container">
    <div className="card-icon">
      {icon ?? <span className="card-icon-fallback">★</span>}
    </div>
    <h4 className="card-title">{title}</h4>
    {desc && <p className="card-desc">{desc}</p>}
  </div>
);

const Section = ({ title, subtitle, children, id }) => (
  <section id={id} className="section-container">
    <div className="section-header">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      <div className="section-buttons">
        <a href="#apply" className="section-apply-button">
          Apply Now
        </a>
        <a href="#counselor" className="section-counselor-button">
          Talk to Counselor
        </a>
      </div>
    </div>
    {children}
  </section>
);

export default function BAMSCoursePage() {
  return (
    <div className="page-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="navbar-logo-icon" aria-label="BAMS logo">BAMS</div>
            <span className="navbar-logo-text">Course Guide</span>
          </div>
          <nav className="navbar-links" aria-label="Primary">
            <a href="#overview" className="navbar-link">Overview</a>
            <a href="#specializations" className="navbar-link">Specializations</a>
            <a href="#eligibility" className="navbar-link">Eligibility</a>
            <a href="#curriculum" className="navbar-link">Curriculum</a>
            <a href="#institutes" className="navbar-link">Top Institutes</a>
            <a href="#careers" className="navbar-link">Careers</a>
            <a href="#faqs" className="navbar-link">FAQs</a>
          </nav>
          <a href="#brochure" className="navbar-brochure-button">
            Download Brochure
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              Ayurveda & Integrative Medicine
            </div>
            <h1 className="hero-title">
              BAMS — Bachelor of Ayurvedic Medicine and Surgery
            </h1>
            <p className="hero-description">
              A professional undergraduate program in Ayurveda combining classical Ayurvedic sciences with modern medicine, clinical training, and internship.
            </p>

            <div className="hero-stats">
              <Stat label="Duration" value="5.5 years (incl. 1-year internship)" highlight />
              <Stat label="Avg Fees" value="₹50k–3 Lakh/year (varies)" />
              <Stat label="Mode" value="Full-time" />
              <Stat label="Level" value="Undergraduate (Professional)" />
            </div>

            <div className="hero-buttons">
              <a href="#apply" className="hero-apply-button">
                Apply Now
              </a>
              <a href="#counselor" className="hero-counselor-button">
                Talk to Counselor
              </a>
              <a href="#brochure" className="hero-brochure-button">
                Download Brochure
              </a>
            </div>
          </div>

          <div className="hero-highlights">
            <div className="highlights-container">
              <div className="highlights-background" aria-hidden="true"></div>
              <h3 className="highlights-title">Key Highlights</h3>
              <ul className="highlights-list">
                <li>Classical texts (Samhitas) with modern integration</li>
                <li>Hospital postings and clinical exposure</li>
                <li>Herbal pharmacopeia and formulation</li>
                <li>Community health and preventive care</li>
              </ul>
              <div className="highlights-stats">
                <Stat label="Internship" value="Compulsory 12 months" />
                <Stat label="Regulation" value="NCISM norms" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <Section
        id="specializations"
        title="Key Branches & Focus Areas"
        subtitle="Core Ayurvedic disciplines and applied domains."
      >
        <div className="specializations-grid">
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
        <div className="eligibility-grid">
          <div className="eligibility-card">
            <h4 className="eligibility-title">Eligibility</h4>
            <ul className="eligibility-list">
              <li>10+2 (PCB) from a recognized board with minimum aggregate as per norms</li>
              <li>NEET-UG qualification mandatory for most seats</li>
              <li>Age and category relaxations as per government policy</li>
            </ul>
          </div>
          <div className="eligibility-card">
            <h4 className="eligibility-title">Admission & Counseling</h4>
            <ul className="eligibility-list">
              <li>Central/State/Deemed university counseling processes</li>
              <li>All India Quota and State Quota seat distribution</li>
              <li>Document verification and medical fitness</li>
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
        <div className="application-grid">
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
        <div className="curriculum-grid">
          <div className="curriculum-card">
            <h4 className="curriculum-title">Year 1 (Pre-Clinical)</h4>
            <ul className="curriculum-list">
              <li>Sanskrit & Ayurveda Itihas</li>
              <li>Padartha Vigyan & Ayurveda Siddhant</li>
              <li>Rachana Sharir (Anatomy)</li>
              <li>Kriya Sharir (Physiology)</li>
              <li>Maulik Siddhant</li>
            </ul>
          </div>
          <div className="curriculum-card">
            <h4 className="curriculum-title">Year 2 (Para-Clinical)</h4>
            <ul className="curriculum-list">
              <li>Dravyaguna Vigyan</li>
              <li>Rasashastra & Bhaishajya Kalpana</li>
              <li>Roga Nidana & Vikriti Vigyan (Pathology)</li>
              <li>Agada Tantra (Toxicology)</li>
              <li>Swasthavritta & Yoga</li>
            </ul>
          </div>
          <div className="curriculum-card">
            <h4 className="curriculum-title">Year 3 (Clinical + Internship)</h4>
            <ul className="curriculum-list">
              <li>Kayachikitsa, Panchakarma</li>
              <li>Shalya & Shalakya</li>
              <li>Kaumarbhritya, Prasuti & Strirog</li>
              <li>Research methodology & community medicine</li>
              <li>1-year compulsory rotating internship</li>
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
        <div className="institutes-grid">
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
        <div className="careers-grid">
          <div className="careers-card">
            <h4 className="careers-title">Roles</h4>
            <ul className="careers-list">
              <li>Ayurvedic Medical Officer / Physician</li>
              <li>Junior Resident / Clinical Assistant</li>
              <li>Panchakarma Specialist / Therapist Supervisor</li>
              <li>Research Associate (AYUSH/Pharma)</li>
              <li>Ayurveda Consultant (Wellness/Resorts/Telehealth)</li>
              <li>Manufacturing & QA (Herbal/AYUSH)</li>
            </ul>
          </div>
          <div className="careers-card">
            <h4 className="careers-title">Pathways & Upskilling</h4>
            <ul className="careers-list">
              <li>PG: MD/MS Ayurveda specializations</li>
              <li>Fellowships: Panchakarma, Ksharsutra, Integrative Oncology</li>
              <li>Public health & research (MPH, PhD)</li>
              <li>Entrepreneurship: clinics, pharmacies, wellness centers</li>
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
        <div className="scholarships-grid">
          <div className="scholarships-card">
            <h4 className="scholarships-title">Scholarships</h4>
            <ul className="scholarships-list">
              <li>Central/State government scholarships</li>
              <li>Institute merit/need-based aid</li>
              <li>Category-based fee concessions as per policy</li>
              <li>Private/CSR-funded awards</li>
            </ul>
          </div>
          <div className="scholarships-card">
            <h4 className="scholarships-title">Global Exposure</h4>
            <ul className="scholarships-list">
              <li>Exchange & observerships (select institutes)</li>
              <li>International wellness & spa industry roles</li>
              <li>Research collaborations (AYUSH/Herbal)</li>
              <li>Country-specific practice regulations apply</li>
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
        <div className="faqs-grid">
          <div className="faq-item">
            <h4 className="faq-title">Is NEET mandatory for BAMS?</h4>
            <p className="faq-answer">Yes, NEET-UG qualification is generally required for admission.</p>
          </div>
          <div className="faq-item">
            <h4 className="faq-title">What is the total duration?</h4>
            <p className="faq-answer">5.5 years including a compulsory 1-year rotating internship.</p>
          </div>
          <div className="faq-item">
            <h4 className="faq-title">Can BAMS graduates practice?</h4>
            <p className="faq-answer">Practice is regulated by state medical councils as per AYUSH/NCISM norms.</p>
          </div>
          <div className="faq-item">
            <h4 className="faq-title">Are there lateral entries?</h4>
            <p className="faq-answer">Not typical; admissions follow counseling and regulatory guidelines.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section id="apply" className="cta-section">
        <div className="cta-container">
          <div className="cta-background" aria-hidden="true"></div>
          <div className="cta-grid">
            <div className="cta-content">
              <h3 className="cta-title">Pursue a career in Ayurveda with BAMS</h3>
              <p className="cta-description">Apply or connect with a counselor to understand admission, counseling, and curricula.</p>
            </div>
            <div className="cta-buttons">
              <a href="#counselor" className="cta-counselor-button">
                Talk to Counselor
              </a>
              <a href="#apply-form" className="cta-apply-button">
                Start Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} BAMS Course Guide</p>
          <div className="footer-links">
            <a href="#brochure" className="footer-link">Brochure</a>
            <a href="#counselor" className="footer-link">Counselor</a>
            <a href="#apply" className="footer-link">Apply</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
