// UniversityDashboard.jsx
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSun,
  faMoon,
  faChartBar,
  faInfoCircle,
  faEnvelope,
  faCog,
  faUniversity,
  faBookOpen,
  faUsers,
  faCalendarAlt,
  faStar,
  faDownload,
  faPlus,
  faEdit,
  faTrash,
  faReply
} from "@fortawesome/free-solid-svg-icons";
import "./UniversityDashboard.css";

/* applyTheme toggles CSS variables for dark/light mode */
const applyTheme = (darkMode) => {
  const root = document.documentElement;
  if (darkMode) {
    root.classList.add("dark");
    root.style.setProperty("--background-color", "#0f1724");
    root.style.setProperty("--text-color", "#e6eef8");
    root.style.setProperty("--sidebar-bg", "#0b1220");
    root.style.setProperty("--navbar-bg", "linear-gradient(90deg,#071028,#0b1430)");
    root.style.setProperty("--content-bg", "#07102a");
    root.style.setProperty("--dropdown-bg", "#07102a");
    root.style.setProperty("--accent", "#2dd4bf");
    root.style.setProperty("--shadow", "0 6px 18px rgba(2,6,23,0.6)");
  } else {
    root.classList.remove("dark");
    root.style.setProperty("--background-color", "#f8fafc");
    root.style.setProperty("--text-color", "#0f1724");
    root.style.setProperty("--sidebar-bg", "#ffffff");
    root.style.setProperty("--navbar-bg", "linear-gradient(90deg,#ffffff,#f1f5f9)");
    root.style.setProperty("--content-bg", "#ffffff");
    root.style.setProperty("--dropdown-bg", "#ffffff");
    root.style.setProperty("--accent", "#2563eb");
    root.style.setProperty("--shadow", "0 6px 18px rgba(15,23,42,0.08)");
  }
};

/* --- Helper small components --- */
const Badge = ({ children }) => <span className="badge">{children}</span>;

function Modal({ show, onClose, title, children }) {
  if (!show) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{title}</h4>
          <button className="btn-link" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

/* small CSV exporter */
const exportCSV = (filename, rows) => {
  if (!rows.length) return;
  const header = Object.keys(rows[0]);
  const csv = [header.join(",")]
    .concat(rows.map(r => header.map(h => `"${String(r[h] ?? "").replace(/"/g,'""')}"`).join(",")))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

/* Simple inline charts (SVG) */
function BarChart({ data = [], width = 280, height = 120 }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d.value)) || 1;
  const barW = width / data.length;
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      {data.map((d, i) => {
        const h = (d.value / max) * (height - 20);
        return (
          <g key={i}>
            <rect
              x={i * barW + 6}
              y={height - h - 18}
              width={barW - 12}
              height={h}
              rx="4"
              className="chart-bar"
            />
            <text x={i * barW + barW / 2} y={height - 4} textAnchor="middle" className="chart-label">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function LineChart({ data = [], width = 320, height = 120 }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d.value)) || 1;
  const step = width / (data.length - 1 || 1);
  const points = data.map((d, i) => `${i * step},${height - (d.value / max) * (height - 24) - 12}`).join(" ");
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <polyline points={points} fill="none" className="chart-line" strokeWidth="2" />
      {data.map((d, i) => {
        const x = i * step;
        const y = height - (d.value / max) * (height - 24) - 12;
        return <circle key={i} cx={x} cy={y} r="3" className="chart-dot" />;
      })}
    </svg>
  );
}

/* --- Seed/sample data --- */
const seedProfile = {
  name: "Oceanview University",
  type: "Private",
  year: 1998,
  accreditation: "NAAC A+",
  address: "12 Marina Drive, Coastal City",
  email: "info@oceanview.edu",
  phone: "+91-9876543210",
  website: "https://oceanview.edu",
  about:
    "A modern university focused on technology, arts and real-world learning. We offer strong industry ties and research opportunities.",
  facilities: ["Hostel", "Library", "Labs", "Sports Complex", "Cafeteria"],
  images: []
};

const seedCourses = [
  { id: "c1", name: "B.Tech Computer Science", duration: "4 yrs", seats: 120, fees: "₹1,40,000/yr", eligibility: "12th PCM", description: "CS fundamentals & modern topics", dept: "Engineering" },
  { id: "c2", name: "BBA", duration: "3 yrs", seats: 60, fees: "₹60,000/yr", eligibility: "12th", description: "Business and management basics", dept: "Management" }
];

const seedStudents = [
  { id: "s1", name: "Aman Singh", email: "aman@example.com", course: "B.Tech CS", status: "Applied", city: "Delhi", appliedOn: "2025-07-20" },
  { id: "s2", name: "Neha Roy", email: "neha@example.com", course: "BBA", status: "Accepted", city: "Kolkata", appliedOn: "2025-06-11" }
];

const seedEvents = [
  { id: "e1", title: "Open Day 2025", date: "2025-09-10", venue: "Auditorium", type: "Offline", attendees: 120 },
  { id: "e2", title: "AI Webinar", date: "2025-08-25", venue: "Zoom", type: "Online", attendees: 320 }
];

const seedReviews = [
  { id: "r1", student: "Riya", rating: 4.5, text: "Great campus and faculty!", date: "2025-05-12", reply: null },
  { id: "r2", student: "Kabir", rating: 3.8, text: "Good courses but hostel needs improvement.", date: "2025-03-04", reply: "Thanks for the feedback — we're working on it." }
];

/* ---------------- Main Component ---------------- */
function UniversityDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [activePage, setActivePage] = useState("Overview");
  const dropdownRef = useRef(null);

  // Data
  const [profile, setProfile] = useState(seedProfile);
  const [courses, setCourses] = useState(seedCourses);
  const [students, setStudents] = useState(seedStudents);
  const [events, setEvents] = useState(seedEvents);
  const [reviews, setReviews] = useState(seedReviews);

  // UI state
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showProfilePreview, setShowProfilePreview] = useState(false);

  useEffect(() => applyTheme(darkMode), [darkMode]);

  // click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* --- Handlers for CRUD operations --- */
  function addOrUpdateCourse(form) {
    if (form.id) {
      setCourses(prev => prev.map(c => (c.id === form.id ? form : c)));
    } else {
      setCourses(prev => [{ ...form, id: `c${Date.now()}` }, ...prev]);
    }
    setShowCourseModal(false);
    setEditingCourse(null);
  }

  function removeCourse(id) {
    if (!window.confirm("Delete this course?")) return;
    setCourses(prev => prev.filter(c => c.id !== id));
  }

  function addOrUpdateEvent(form) {
    if (form.id) {
      setEvents(prev => prev.map(e => (e.id === form.id ? form : e)));
    } else {
      setEvents(prev => [{ ...form, id: `e${Date.now()}` }, ...prev]);
    }
    setShowEventModal(false);
    setEditingEvent(null);
  }

  function removeEvent(id) {
    if (!window.confirm("Delete this event?")) return;
    setEvents(prev => prev.filter(e => e.id !== id));
  }

  function changeApplicationStatus(id, status) {
    setStudents(prev => prev.map(s => (s.id === id ? { ...s, status } : s)));
  }

  function replyToReview(id, reply) {
    setReviews(prev => prev.map(r => (r.id === id ? { ...r, reply } : r)));
  }

  /* ---- Simple analytics helpers ---- */
  const monthlyGrowth = [
    { label: "Mar", value: 12 },
    { label: "Apr", value: 22 },
    { label: "May", value: 36 },
    { label: "Jun", value: 55 },
    { label: "Jul", value: 80 },
    { label: "Aug", value: 92 }
  ];

  const coursePopularity = courses.map(c => ({ label: c.name.split(" ")[0], value: Math.max(5, Math.floor(Math.random() * 150)) }));

  /* ---- Render pages ---- */
  const renderOverview = () => (
    <>
      <div className="grid dashboard-grid">
        <div className="card">
          <div className="card-head">
            <h3>Total Students</h3>
            <Badge>{students.length}</Badge>
          </div>
          <p className="muted">Registered & Applicants</p>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Courses</h3>
            <Badge>{courses.length}</Badge>
          </div>
          <p className="muted">Active Programs</p>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Upcoming Events</h3>
            <Badge>{events.length}</Badge>
          </div>
          <p className="muted">Next 90 days</p>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Avg Rating</h3>
            <Badge>{(reviews.reduce((s, r) => s + r.rating, 0) / Math.max(1, reviews.length)).toFixed(1)}</Badge>
          </div>
          <p className="muted">Based on student reviews</p>
        </div>
      </div>

      <div className="grid dashboard-grid">
        <div className="card large">
          <div className="card-head">
            <h3>Student Growth</h3>
            <span className="muted">Last 6 months</span>
          </div>
          <LineChart data={monthlyGrowth} width={420} height={140} />
        </div>

        <div className="card large">
          <div className="card-head">
            <h3>Course Popularity</h3>
            <span className="muted">Sample enrollments</span>
          </div>
          <BarChart data={coursePopularity} width={320} height={140} />
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="card-head">
            <h3>Recent Applications</h3>
            <button className="btn-small" onClick={() => exportCSV("students.csv", students)}>
              <FontAwesomeIcon icon={faDownload} /> Export CSV
            </button>
          </div>
          <div className="list">
            {students.slice(0, 5).map(s => (
              <div className="list-item" key={s.id}>
                <div>
                  <strong>{s.name}</strong> <div className="muted small">{s.city} • {s.appliedOn}</div>
                </div>
                <div className="list-actions">
                  <Badge>{s.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Events Coming Up</h3>
            <button className="btn-small" onClick={() => { setEditingEvent(null); setShowEventModal(true); }}>
              <FontAwesomeIcon icon={faPlus} /> New Event
            </button>
          </div>
          <div className="list">
            {events.map(e => (
              <div className="list-item" key={e.id}>
                <div>
                  <strong>{e.title}</strong> <div className="muted small">{e.date} • {e.venue}</div>
                </div>
                <div className="list-actions">
                  <Badge>{e.attendees} attendees</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderProfile = () => {
    const [formState, setFormState] = useState(profile);
    useEffect(() => setFormState(profile), [profile]);

    function handleSubmit(e) {
      e.preventDefault();
      setProfile(formState);
      alert("Profile updated");
    }

    return (
      <>
        <div className="card">
          <div className="card-head">
            <h3>University Profile</h3>
            <div>
              <button className="btn" onClick={() => setShowProfilePreview(true)}>Preview</button>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Name
                <input value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
              </label>
              <label>
                Type
                <input value={formState.type} onChange={(e) => setFormState({ ...formState, type: e.target.value })} />
              </label>
              <label>
                Established Year
                <input type="number" value={formState.year} onChange={(e) => setFormState({ ...formState, year: e.target.value })} />
              </label>
              <label>
                Accreditation
                <input value={formState.accreditation} onChange={(e) => setFormState({ ...formState, accreditation: e.target.value })} />
              </label>
              <label>
                Address
                <input value={formState.address} onChange={(e) => setFormState({ ...formState, address: e.target.value })} />
              </label>
              <label>
                Email
                <input value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
              </label>
              <label>
                Phone
                <input value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
              </label>
              <label>
                Website
                <input value={formState.website} onChange={(e) => setFormState({ ...formState, website: e.target.value })} />
              </label>
              <label className="full">
                About
                <textarea value={formState.about} onChange={(e) => setFormState({ ...formState, about: e.target.value })} />
              </label>
              <label className="full">
                Facilities (comma separated)
                <input value={formState.facilities.join(", ")} onChange={(e) => setFormState({ ...formState, facilities: e.target.value.split(",").map(x=>x.trim()) })} />
              </label>
            </div>
            <div className="form-actions">
              <button className="btn" type="submit">Save Profile</button>
              <button type="button" className="btn-outline" onClick={() => setFormState(profile)}>Reset</button>
            </div>
          </form>
        </div>

        <Modal show={showProfilePreview} onClose={() => setShowProfilePreview(false)} title="Profile Preview">
          <div className="preview">
            <div className="preview-head">
              <img src="https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg" alt="logo" className="preview-logo" />
              <div>
                <h3>{profile.name}</h3>
                <div className="muted">{profile.type} • Established {profile.year} • {profile.accreditation}</div>
                <div className="muted">{profile.address}</div>
                <div className="muted">{profile.email} • {profile.phone}</div>
              </div>
            </div>
            <p>{profile.about}</p>
            <div>
              <strong>Facilities</strong>
              <div className="chip-row">
                {profile.facilities.map((f, i) => <span className="chip" key={i}>{f}</span>)}
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  };

  const renderCourses = () => (
    <>
      <div className="card">
        <div className="card-head">
          <h3>Courses</h3>
          <div>
            <button className="btn" onClick={() => { setEditingCourse(null); setShowCourseModal(true); }}>
              <FontAwesomeIcon icon={faPlus} /> Add Course
            </button>
          </div>
        </div>

        <div className="table">
          <div className="table-row table-head">
            <div>Course</div><div>Dept</div><div>Duration</div><div>Seats</div><div>Fees</div><div></div>
          </div>
          {courses.map(c => (
            <div className="table-row" key={c.id}>
              <div><strong>{c.name}</strong><div className="muted small">{c.description}</div></div>
              <div>{c.dept}</div>
              <div>{c.duration}</div>
              <div>{c.seats}</div>
              <div className="muted">{c.fees}</div>
              <div className="table-actions">
                <button className="btn-small" onClick={() => { setEditingCourse(c); setShowCourseModal(true); }}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="btn-small danger" onClick={() => removeCourse(c.id)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showCourseModal} onClose={() => { setShowCourseModal(false); setEditingCourse(null); }} title={editingCourse ? "Edit Course" : "Add Course"}>
        <CourseForm initial={editingCourse} onSave={addOrUpdateCourse} onCancel={() => setShowCourseModal(false)} />
      </Modal>
    </>
  );

  const renderStudents = () => (
    <div className="card">
      <div className="card-head">
        <h3>Students & Applications</h3>
        <div>
          <button className="btn" onClick={() => exportCSV("students.csv", students)}><FontAwesomeIcon icon={faDownload} /> Export</button>
        </div>
      </div>

      <div className="table">
        <div className="table-row table-head">
          <div>Name</div><div>Course</div><div>City</div><div>Applied</div><div>Status</div><div></div>
        </div>

        {students.map(s => (
          <div className="table-row" key={s.id}>
            <div><strong>{s.name}</strong><div className="muted small">{s.email}</div></div>
            <div>{s.course}</div>
            <div>{s.city}</div>
            <div className="muted small">{s.appliedOn}</div>
            <div><Badge>{s.status}</Badge></div>
            <div className="table-actions">
              {s.status !== "Accepted" && <button className="btn-small" onClick={() => changeApplicationStatus(s.id, "Accepted")}>Accept</button>}
              {s.status !== "Rejected" && <button className="btn-small danger" onClick={() => changeApplicationStatus(s.id, "Rejected")}>Reject</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <>
      <div className="card">
        <div className="card-head">
          <h3>Events & News</h3>
          <div>
            <button className="btn" onClick={() => { setEditingEvent(null); setShowEventModal(true); }}><FontAwesomeIcon icon={faPlus} /> New</button>
          </div>
        </div>

        <div className="list">
          {events.map(e => (
            <div className="list-item" key={e.id}>
              <div>
                <strong>{e.title}</strong>
                <div className="muted small">{e.date} • {e.venue} • {e.type}</div>
              </div>
              <div className="list-actions">
                <Badge>{e.attendees}</Badge>
                <div className="table-actions">
                  <button className="btn-small" onClick={() => { setEditingEvent(e); setShowEventModal(true); }}><FontAwesomeIcon icon={faEdit} /></button>
                  <button className="btn-small danger" onClick={() => removeEvent(e.id)}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showEventModal} onClose={() => { setShowEventModal(false); setEditingEvent(null); }} title={editingEvent ? "Edit Event" : "Add Event"}>
        <EventForm initial={editingEvent} onSave={addOrUpdateEvent} onCancel={() => { setShowEventModal(false); setEditingEvent(null); }} />
      </Modal>
    </>
  );

  const renderAnalytics = () => (
    <div className="grid dashboard-grid">
      <div className="card">
        <div className="card-head">
          <h3>Visitor & Application Trends</h3>
          <span className="muted">Interactive overview</span>
        </div>
        <LineChart data={monthlyGrowth} width={420} height={140} />
      </div>

      <div className="card">
        <div className="card-head">
          <h3>Top Courses</h3>
          <span className="muted">Based on sample enrollments</span>
        </div>
        <BarChart data={coursePopularity} width={320} height={140} />
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="card">
      <div className="card-head">
        <h3>Reviews & Feedback</h3>
      </div>
      <div className="list">
        {reviews.map(r => (
          <div className="list-item" key={r.id}>
            <div>
              <strong>{r.student}</strong>
              <div className="muted small">{r.date} • <FontAwesomeIcon icon={faStar} /> {r.rating}</div>
              <div>{r.text}</div>
              {r.reply && <div className="reply muted small">Reply: {r.reply}</div>}
            </div>
            <div className="table-actions">
              <ReplyBox review={r} onReply={(text) => replyToReview(r.id, text)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="card">
      <div className="card-head">
        <h3>Settings & Admin</h3>
      </div>
      <div className="form">
        <label>
          Role Management (example)
          <select>
            <option>Owner</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </label>
        <label>
          Subscription plan
          <input value="Free" readOnly />
        </label>
        <div className="form-actions">
          <button className="btn">Save Settings</button>
        </div>
      </div>
    </div>
  );

  /* --- Page mapping --- */
  const pages = {
    Overview: renderOverview,
    Profile: renderProfile,
    Courses: renderCourses,
    Students: renderStudents,
    Events: renderEvents,
    Analytics: renderAnalytics,
    Reviews: renderReviews,
    Settings: renderSettings
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <button className="toggle-button" onClick={() => setShowSidebar(s => !s)}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </button>
          <div className="logo-container" onClick={() => setActivePage("Overview")}>
            <img
              src="https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg"
              alt="logo"
              className="logo-image"
            />
            <div className="logo-text">Oceanview University</div>
          </div>
        </div>

        <div className="nav-right">
          <div className="user-controls">
            <button className="theme-toggle" onClick={() => setDarkMode(d => !d)}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <div className="dropdown" ref={dropdownRef}>
              <button className="user-button" onClick={() => setShowUserDropdown(s => !s)}>
                <FontAwesomeIcon icon={faUser} />
              </button>
              {showUserDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <p className="dropdown-text">Logged in as</p>
                    <p className="dropdown-email">admin@oceanview.edu</p>
                  </div>
                  <button className="dropdown-item">My Profile</button>
                  <button className="dropdown-item">Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main layout */}
      <div className="main-content">
        <aside className={`sidebar ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}>
          <div className="sidebar-content">
            <ul className="sidebar-list">
              <li><SidebarItem icon={faInfoCircle} label="Overview" active={activePage === "Overview"} onClick={() => setActivePage("Overview")} /></li>
              <li><SidebarItem icon={faUniversity} label="Profile" active={activePage === "Profile"} onClick={() => setActivePage("Profile")} /></li>
              <li><SidebarItem icon={faBookOpen} label="Courses" active={activePage === "Courses"} onClick={() => setActivePage("Courses")} /></li>
              <li><SidebarItem icon={faUsers} label="Students" active={activePage === "Students"} onClick={() => setActivePage("Students")} /></li>
              <li><SidebarItem icon={faCalendarAlt} label="Events" active={activePage === "Events"} onClick={() => setActivePage("Events")} /></li>
              <li><SidebarItem icon={faChartBar} label="Analytics" active={activePage === "Analytics"} onClick={() => setActivePage("Analytics")} /></li>
              <li><SidebarItem icon={faStar} label="Reviews" active={activePage === "Reviews"} onClick={() => setActivePage("Reviews")} /></li>
              <li><SidebarItem icon={faCog} label="Settings" active={activePage === "Settings"} onClick={() => setActivePage("Settings")} /></li>
            </ul>
          </div>
        </aside>

        <main className="content">
          <h1 className="content-title">{activePage}</h1>
          <div className="content-area">
            {pages[activePage] ? pages[activePage]() : <p>Not implemented</p>}
          </div>
        </main>
      </div>
    </div>
  );
}

/* --- smaller components used above --- */
function SidebarItem({ icon, label, onClick, active }) {
  return (
    <button className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="sidebar-icon" /> <span>{label}</span>
    </button>
  );
}

/* Course form */
function CourseForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ?? { name: "", duration: "", seats: 0, fees: "", eligibility: "", description: "", dept: "" });
  useEffect(() => setForm(initial ?? { name: "", duration: "", seats: 0, fees: "", eligibility: "", description: "", dept: "" }), [initial]);

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ ...form, id: form.id ?? initial?.id }); }}>
      <label>Course name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
      <label>Department<input value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })} /></label>
      <label>Duration<input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} /></label>
      <label>Seats<input type="number" value={form.seats} onChange={(e) => setForm({ ...form, seats: e.target.value })} /></label>
      <label>Fees<input value={form.fees} onChange={(e) => setForm({ ...form, fees: e.target.value })} /></label>
      <label>Eligibility<input value={form.eligibility} onChange={(e) => setForm({ ...form, eligibility: e.target.value })} /></label>
      <label className="full">Description<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></label>
      <div className="form-actions">
        <button className="btn" type="submit">Save</button>
        <button type="button" className="btn-outline" onClick={() => onCancel()}>Cancel</button>
      </div>
    </form>
  );
}

/* Event form */
function EventForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ?? { title: "", date: "", venue: "", type: "Offline", attendees: 0 });
  useEffect(() => setForm(initial ?? { title: "", date: "", venue: "", type: "Offline", attendees: 0 }), [initial]);

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ ...form, id: form.id ?? initial?.id }); }}>
      <label>Title<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></label>
      <label>Date<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
      <label>Venue<input value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} /></label>
      <label>Type
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option>Offline</option>
          <option>Online</option>
        </select>
      </label>
      <label>Attendees<input type="number" value={form.attendees} onChange={(e) => setForm({ ...form, attendees: e.target.value })} /></label>
      <div className="form-actions">
        <button className="btn" type="submit">Save Event</button>
        <button type="button" className="btn-outline" onClick={() => onCancel()}>Cancel</button>
      </div>
    </form>
  );
}

/* Reply box for reviews */
function ReplyBox({ review, onReply }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(review.reply ?? "");
  return (
    <div>
      <button className="btn-small" onClick={() => setOpen(o => !o)}><FontAwesomeIcon icon={faReply} /></button>
      {open && (
        <div className="reply-box">
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a reply..." />
          <div className="form-actions">
            <button className="btn" onClick={() => { onReply(text); setOpen(false); }}>Send</button>
            <button className="btn-outline" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UniversityDashboard;
