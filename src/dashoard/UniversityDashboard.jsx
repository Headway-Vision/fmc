// UniversityDashboard.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSun,
  faMoon,
  faChartBar,
  faInfoCircle,
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

/* ---------------- Utilities ---------------- */
const exportCSV = (filename, rows) => {
  if (!rows || !rows.length) return;
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

/* ---------------- Seed/sample data ---------------- */
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

// seedStudents extended with registration-like fields
const seedStudents = [
  {
    id: "s1",
    name: "Aman Singh",
    email: "aman@example.com",
    course: "B.Tech CS",
    status: "Applied",
    city: "Delhi",
    appliedOn: "2025-07-20",
    dob: "2006-02-14",
    gender: "Male",
    phone: "+91-9876543210",
    address: "House 5, Sector 12, Delhi",
    previousEducation: "High School - CBSE (88%)",
    documents: [
      { id: "d1", type: "ID Proof", url: "https://via.placeholder.com/400x250.png?text=ID+Proof", verified: false },
      { id: "d2", type: "Transcript", url: "https://via.placeholder.com/400x250.png?text=Transcript", verified: false }
    ],
    payment: { status: "Pending", amountDue: 500, receipts: [] },
    notes: "",
    statusHistory: [{ status: "Applied", at: "2025-07-20", by: "system" }]
  },
  {
    id: "s2",
    name: "Neha Roy",
    email: "neha@example.com",
    course: "BBA",
    status: "Accepted",
    city: "Kolkata",
    appliedOn: "2025-06-11",
    dob: "2005-09-01",
    gender: "Female",
    phone: "+91-9988776655",
    address: "Flat 10, Park Street, Kolkata",
    previousEducation: "High School - ISC (91%)",
    documents: [
      { id: "d3", type: "ID Proof", url: "https://via.placeholder.com/400x250.png?text=ID+Proof", verified: true },
      { id: "d4", type: "Transcript", url: "https://via.placeholder.com/400x250.png?text=Transcript", verified: true }
    ],
    payment: { status: "Paid", amountDue: 0, receipts: [{ id: "r1", url: "https://via.placeholder.com/200x120.png?text=Receipt" }] },
    notes: "Scholarship applied",
    statusHistory: [{ status: "Applied", at: "2025-06-11", by: "system" }, { status: "Accepted", at: "2025-06-20", by: "admin" }]
  }
];

const seedEvents = [
  { id: "e1", title: "Open Day 2025", date: "2025-09-10", venue: "Auditorium", type: "Offline", attendees: 120 },
  { id: "e2", title: "AI Webinar", date: "2025-08-25", venue: "Zoom", type: "Online", attendees: 320 }
];

const seedReviews = [
  { id: "r1", student: "Riya", rating: 4.5, text: "Great campus and faculty!", date: "2025-05-12", reply: null },
  { id: "r2", student: "Kabir", rating: 3.8, text: "Good courses but hostel needs improvement.", date: "2025-03-04", reply: "Thanks for the feedback — we're working on it." }
];

/* ---------------- Small components ---------------- */
const Badge = ({ children }) => <span className="badge">{children}</span>;

function Modal({ show, onClose, title, children }) {
  const escListener = useRef(null);

  useEffect(() => {
    if (!show) return;
    escListener.current = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", escListener.current);
    return () => document.removeEventListener("keydown", escListener.current);
  }, [show, onClose]);

  if (!show) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{title}</h4>
          <button className="btn-link" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

/* Tiny inline charts (SVG) kept simple and deterministic */
function BarChart({ data = [], width = 280, height = 120 }) {
  if (!data.length) return null;
  const max = Math.max(...data.map(d => d.value)) || 1;
  const barW = width / data.length;
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden>
      {data.map((d, i) => {
        const h = (d.value / max) * (height - 24);
        return (
          <g key={i}>
            <rect x={i * barW + 6} y={height - h - 18} width={barW - 12} height={h} rx="4" className="chart-bar" />
            <text x={i * barW + barW / 2} y={height - 4} textAnchor="middle" className="chart-label">{d.label}</text>
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
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden>
      <polyline points={points} fill="none" className="chart-line" strokeWidth="2" />
      {data.map((d, i) => {
        const x = i * step;
        const y = height - (d.value / max) * (height - 24) - 12;
        return <circle key={i} cx={x} cy={y} r="3" className="chart-dot" />;
      })}
    </svg>
  );
}

/* Reply box for reviews (keeps local state inside component) */
function ReplyBox({ review, onReply }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(review.reply ?? "");
  useEffect(() => setText(review.reply ?? ""), [review.reply]);
  return (
    <div>
      <button className="btn-small" onClick={() => setOpen(o => !o)} aria-expanded={open}><FontAwesomeIcon icon={faReply} /></button>
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

/* CourseForm and EventForm remain isolated components (valid hooks usage) */
function CourseForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ?? { name: "", duration: "", seats: 0, fees: "", eligibility: "", description: "", dept: "" });
  useEffect(() => setForm(initial ?? { name: "", duration: "", seats: 0, fees: "", eligibility: "", description: "", dept: "" }), [initial]);
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave({ ...form, id: form.id ?? initial?.id }); }}>
      <label>Course name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
      <label>Department<input value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })} /></label>
      <label>Duration<input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} /></label>
      <label>Seats<input type="number" value={form.seats} onChange={(e) => setForm({ ...form, seats: Number(e.target.value) })} /></label>
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
      <label>Attendees<input type="number" value={form.attendees} onChange={(e) => setForm({ ...form, attendees: Number(e.target.value) })} /></label>
      <div className="form-actions">
        <button className="btn" type="submit">Save Event</button>
        <button type="button" className="btn-outline" onClick={() => onCancel()}>Cancel</button>
      </div>
    </form>
  );
}

/* Profile form extracted as a standalone component to avoid hooks in render functions */
function ProfileForm({ profile, onSave, onPreview }) {
  const [formState, setFormState] = useState(profile);
  useEffect(() => setFormState(profile), [profile]);

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formState);
  }

  return (
    <>
      <div className="card">
        <div className="card-head">
          <h3>University Profile</h3>
          <div>
            <button className="btn" onClick={onPreview}>Preview</button>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Name<input value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} /></label>
            <label>Type<input value={formState.type} onChange={(e) => setFormState({ ...formState, type: e.target.value })} /></label>
            <label>Established Year<input type="number" value={formState.year} onChange={(e) => setFormState({ ...formState, year: Number(e.target.value) })} /></label>
            <label>Accreditation<input value={formState.accreditation} onChange={(e) => setFormState({ ...formState, accreditation: e.target.value })} /></label>
            <label>Address<input value={formState.address} onChange={(e) => setFormState({ ...formState, address: e.target.value })} /></label>
            <label>Email<input value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} /></label>
            <label>Phone<input value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} /></label>
            <label>Website<input value={formState.website} onChange={(e) => setFormState({ ...formState, website: e.target.value })} /></label>
            <label className="full">About<textarea value={formState.about} onChange={(e) => setFormState({ ...formState, about: e.target.value })} /></label>
            <label className="full">Facilities (comma separated)
              <input value={formState.facilities.join(", ")} onChange={(e) => setFormState({ ...formState, facilities: e.target.value.split(",").map(x => x.trim()) })} />
            </label>
          </div>
          <div className="form-actions">
            <button className="btn" type="submit">Save Profile</button>
            <button type="button" className="btn-outline" onClick={() => setFormState(profile)}>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

/* Sidebar item */
function SidebarItem({ icon, label, onClick, active }) {
  return (
    <button className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick} aria-current={active ? "page" : undefined}>
      <FontAwesomeIcon icon={icon} className="sidebar-icon" /> <span>{label}</span>
    </button>
  );
}

/* ---------------- Main Component ---------------- */
export default function UniversityDashboard() {
  // UI states
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem("uv:darkMode") === "1"; } catch { return false; }
  });
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

  // modals & editing
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showProfilePreview, setShowProfilePreview] = useState(false);

  // New: student detail modal & selection
  const [selectedStudentIds, setSelectedStudentIds] = useState([]); // for bulk actions
  const [studentSearch, setStudentSearch] = useState("");
  const [studentFilterProgram, setStudentFilterProgram] = useState("All");
  const [studentFilterStatus, setStudentFilterStatus] = useState("All");
  const [detailStudent, setDetailStudent] = useState(null); // student object shown in modal
  const [showStudentDetailModal, setShowStudentDetailModal] = useState(false);

  /* apply theme by toggling .dark on document.documentElement – CSS reads .dark */
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
    try { localStorage.setItem("uv:darkMode", darkMode ? "1" : "0"); } catch {}
  }, [darkMode]);

  // click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowUserDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // CRUD handlers for courses/events (unchanged)
  function addOrUpdateCourse(form) {
    if (form.id) setCourses(prev => prev.map(c => (c.id === form.id ? form : c)));
    else setCourses(prev => [{ ...form, id: `c${Date.now()}` }, ...prev]);
    setShowCourseModal(false); setEditingCourse(null);
  }
  function removeCourse(id) { if (!window.confirm("Delete this course?")) return; setCourses(prev => prev.filter(c => c.id !== id)); }

  function addOrUpdateEvent(form) {
    if (form.id) setEvents(prev => prev.map(e => (e.id === form.id ? form : e)));
    else setEvents(prev => [{ ...form, id: `e${Date.now()}` }, ...prev]);
    setShowEventModal(false); setEditingEvent(null);
  }
  function removeEvent(id) { if (!window.confirm("Delete this event?")) return; setEvents(prev => prev.filter(e => e.id !== id)); }

  // Student-related handlers
  function changeApplicationStatus(id, status, by = "admin") {
    setStudents(prev => prev.map(s => s.id === id ? {
      ...s,
      status,
      statusHistory: [...(s.statusHistory||[]), { status, at: new Date().toISOString().slice(0,10), by }]
    } : s));
  }

  function replyToReview(id, reply) { setReviews(prev => prev.map(r => (r.id === id ? { ...r, reply } : r))); }

  // Document verification
  function verifyDocument(studentId, docId, verified = true) {
    setStudents(prev => prev.map(s => {
      if (s.id !== studentId) return s;
      return { ...s, documents: (s.documents || []).map(d => d.id === docId ? { ...d, verified } : d) };
    }));
  }

  // Assign student to a course (on approval)
  function assignCourseToStudent(studentId, courseName) {
    setStudents(prev => prev.map(s => s.id === studentId ? { ...s, course: courseName } : s));
  }

  // Payment marking (simple)
  function markPayment(studentId, paymentObj) {
    setStudents(prev => prev.map(s => s.id === studentId ? { ...s, payment: { ...(s.payment||{}), ...paymentObj } } : s));
  }

  // Bulk actions
  function toggleSelectStudent(id) {
    setSelectedStudentIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }
  function selectAllVisible(visibleIds) {
    setSelectedStudentIds(prev => {
      const all = new Set(prev);
      visibleIds.forEach(id => all.add(id));
      return Array.from(all);
    });
  }
  function clearSelection() { setSelectedStudentIds([]); }

  function bulkApprove() {
    if (!selectedStudentIds.length) return alert("Select at least one student.");
    if (!window.confirm(`Approve ${selectedStudentIds.length} application(s)?`)) return;
    setStudents(prev => prev.map(s => selectedStudentIds.includes(s.id) ? {
      ...s,
      status: "Accepted",
      statusHistory: [...(s.statusHistory||[]), { status: "Accepted", at: new Date().toISOString().slice(0,10), by: "admin" }]
    } : s));
    clearSelection();
  }
  function bulkReject() {
    if (!selectedStudentIds.length) return alert("Select at least one student.");
    const reason = window.prompt("Reason for rejection (optional):");
    setStudents(prev => prev.map(s => selectedStudentIds.includes(s.id) ? {
      ...s,
      status: "Rejected",
      notes: reason ? `${(s.notes||"")} Rejection reason: ${reason}` : s.notes,
      statusHistory: [...(s.statusHistory||[]), { status: "Rejected", at: new Date().toISOString().slice(0,10), by: "admin" }]
    } : s));
    clearSelection();
  }

  // Export selected students
  function exportSelectedCSV() {
    if (!selectedStudentIds.length) return alert("Select students to export.");
    const rows = students.filter(s => selectedStudentIds.includes(s.id)).map(s => ({
      id: s.id, name: s.name, email: s.email, course: s.course, status: s.status, city: s.city, appliedOn: s.appliedOn
    }));
    exportCSV("selected_students.csv", rows);
  }

  // Open student detail modal
  function openStudentDetail(id) {
    const s = students.find(x => x.id === id);
    if (!s) return;
    setDetailStudent(s);
    setShowStudentDetailModal(true);
  }

  // Save student edits from detail modal
  function saveStudentDetail(updated) {
    setStudents(prev => prev.map(s => s.id === updated.id ? updated : s));
    setShowStudentDetailModal(false);
    setDetailStudent(null);
  }

  // deterministic analytics (memoized)
  const monthlyGrowth = useMemo(() => [
    { label: "Mar", value: 12 },
    { label: "Apr", value: 22 },
    { label: "May", value: 36 },
    { label: "Jun", value: 55 },
    { label: "Jul", value: 80 },
    { label: "Aug", value: 92 }
  ], []);

  const coursePopularity = useMemo(() => {
    return courses.map((c, i) => ({ label: c.name.split(" ")[0], value: Math.max(5, Math.round((c.seats || 30) * (1 + (i * 0.05)))) }));
  }, [courses]);

  /* Pages (each returns JSX) */
  const Overview = () => (
    <>
      <div className="grid dashboard-grid">
        <div className="card">
          <div className="card-head"><h3>Total Students</h3><Badge>{students.length}</Badge></div>
          <p className="muted">Registered & Applicants</p>
        </div>
        <div className="card">
          <div className="card-head"><h3>Courses</h3><Badge>{courses.length}</Badge></div>
          <p className="muted">Active Programs</p>
        </div>
        <div className="card">
          <div className="card-head"><h3>Upcoming Events</h3><Badge>{events.length}</Badge></div>
          <p className="muted">Next 90 days</p>
        </div>
        <div className="card">
          <div className="card-head"><h3>Avg Rating</h3><Badge>{(reviews.reduce((s, r) => s + r.rating, 0) / Math.max(1, reviews.length)).toFixed(1)}</Badge></div>
          <p className="muted">Based on student reviews</p>
        </div>
      </div>

      <div className="grid dashboard-grid">
        <div className="card large">
          <div className="card-head"><h3>Student increse</h3><span className="muted">Last 6 months</span></div>
          <LineChart data={monthlyGrowth} width={420} height={140} />
        </div>

        <div className="card large">
          <div className="card-head"><h3>Course Popularity</h3><span className="muted">By seats</span></div>
          <BarChart data={coursePopularity} width={320} height={140} />
        </div>
      </div>
    </>
  );

  const ProfilePage = () => (
    <>
      <ProfileForm profile={profile} onSave={(p) => { setProfile(p); alert("Profile updated"); }} onPreview={() => setShowProfilePreview(true)} />
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
          <div><strong>Facilities</strong>
            <div className="chip-row">{profile.facilities.map((f, i) => <span className="chip" key={i}>{f}</span>)}</div>
          </div>
        </div>
      </Modal>
    </>
  );

  /* ---------------- Students page (enhanced) ---------------- */
  const StudentsPage = () => {
    // derive program list for filter
    const programs = useMemo(() => ["All", ...Array.from(new Set(students.map(s => s.course)))], [students]);

    // visible students after search & filters
    const visibleStudents = students.filter(s => {
      if (studentFilterProgram !== "All" && s.course !== studentFilterProgram) return false;
      if (studentFilterStatus !== "All" && s.status !== studentFilterStatus) return false;
      if (!studentSearch) return true;
      const q = studentSearch.toLowerCase();
      return (s.name + " " + s.email + " " + (s.city||"") + " " + (s.course||"")).toLowerCase().includes(q);
    });

    const visibleIds = visibleStudents.map(s => s.id);

    return (
      <div className="card">
        <div className="card-head">
          <h3>Students & Applications</h3>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input placeholder="Search name / email / city" value={studentSearch} onChange={(e) => setStudentSearch(e.target.value)} />
            <select value={studentFilterProgram} onChange={(e) => setStudentFilterProgram(e.target.value)}>
              {programs.map(p => <option key={p}>{p}</option>)}
            </select>
            <select value={studentFilterStatus} onChange={(e) => setStudentFilterStatus(e.target.value)}>
              <option>All</option>
              <option>Applied</option>
              <option>Under Review</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </select>

            <button className="btn-small" onClick={() => selectAllVisible(visibleIds)}>Select All Visible</button>
            <button className="btn-small" onClick={clearSelection}>Clear</button>
            <button className="btn" onClick={exportSelectedCSV}><FontAwesomeIcon icon={faDownload} /> Export Selected</button>
          </div>
        </div>

        <div style={{ marginBottom: 8, display: "flex", gap: 8 }}>
          <button className="btn" onClick={bulkApprove}>Bulk Approve</button>
          <button className="btn-small danger" onClick={bulkReject}>Bulk Reject</button>
        </div>

        <div className="table" role="table" aria-label="Students table">
          <div className="table-row table-head" role="row">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" checked={visibleIds.length > 0 && visibleIds.every(id => selectedStudentIds.includes(id))} onChange={(e) => {
                if (e.target.checked) selectAllVisible(visibleIds); else {
                  // remove visible ids from selection
                  setSelectedStudentIds(prev => prev.filter(id => !visibleIds.includes(id)));
                }
              }} />
              Name
            </div>
            <div>Course</div><div>City</div><div>Applied</div><div>Status</div><div></div>
          </div>

          {visibleStudents.map(s => (
            <div className="table-row" key={s.id} role="row">
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input type="checkbox" checked={selectedStudentIds.includes(s.id)} onChange={() => toggleSelectStudent(s.id)} />
                <div onClick={() => openStudentDetail(s.id)} style={{ cursor: "pointer" }}>
                  <strong>{s.name}</strong>
                  <div className="muted small">{s.email}</div>
                </div>
              </div>

              <div>{s.course}</div>
              <div>{s.city}</div>
              <div className="muted small">{s.appliedOn}</div>
              <div><Badge>{s.status}</Badge></div>
              <div className="table-actions">
                {s.status !== "Accepted" && <button className="btn-small" onClick={() => changeApplicationStatus(s.id, "Accepted")}>Accept</button>}
                {s.status !== "Rejected" && <button className="btn-small danger" onClick={() => changeApplicationStatus(s.id, "Rejected")}>Reject</button>}
                <button className="btn-small" onClick={() => openStudentDetail(s.id)}>View</button>
              </div>
            </div>
          ))}
        </div>

        {/* Student Detail Modal */}
        <Modal show={showStudentDetailModal} onClose={() => { setShowStudentDetailModal(false); setDetailStudent(null); }} title={detailStudent ? `Applicant: ${detailStudent.name}` : "Applicant"}>
          {detailStudent && <StudentDetail
            student={detailStudent}
            courses={courses}
            onClose={() => { setShowStudentDetailModal(false); setDetailStudent(null); }}
            onSave={saveStudentDetail}
            onVerifyDoc={verifyDocument}
            onAssignCourse={assignCourseToStudent}
            onMarkPayment={markPayment}
            onChangeStatus={(status) => changeApplicationStatus(detailStudent.id, status)}
          />}
        </Modal>
      </div>
    );
  };

  /* StudentDetail subcomponent (inline) */
  function StudentDetail({ student, onClose, onSave, courses, onVerifyDoc, onAssignCourse, onMarkPayment, onChangeStatus }) {
    const [form, setForm] = useState(student);
    useEffect(() => setForm(student), [student]);

    function save() {
      onSave(form);
    }

    function handleVerify(docId, verified) {
      onVerifyDoc(form.id, docId, verified);
      setForm(prev => ({ ...prev, documents: prev.documents.map(d => d.id === docId ? { ...d, verified } : d) }));
    }

    function handleAssign(courseName) {
      onAssignCourse(form.id, courseName);
      setForm(prev => ({ ...prev, course: courseName }));
    }

    function handleMarkPayment(obj) {
      onMarkPayment(form.id, obj);
      setForm(prev => ({ ...prev, payment: { ...(prev.payment||{}), ...obj } }));
    }

    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <h4>Personal</h4>
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Phone:</strong> <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></p>
            <p><strong>DOB:</strong> <input type="date" value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} /></p>
            <p><strong>Gender:</strong>
              <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
                <option>Male</option><option>Female</option><option>Other</option>
              </select>
            </p>
            <p><strong>Address:</strong> <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} /></p>
          </div>

          <div>
            <h4>Academic</h4>
            <p><strong>Applied Program:</strong>
              <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}>
                {courses.map(c => <option key={c.id}>{c.name}</option>)}
              </select>
            </p>
            <p><strong>Previous Education:</strong> <textarea value={form.previousEducation} onChange={(e) => setForm({ ...form, previousEducation: e.target.value })} /></p>
            <p><strong>Application Status:</strong> <Badge>{form.status}</Badge></p>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn" onClick={() => { onChangeStatus("Accepted"); setForm(prev => ({ ...prev, status: "Accepted" })); }}>Accept</button>
              <button className="btn-small danger" onClick={() => { onChangeStatus("Rejected"); setForm(prev => ({ ...prev, status: "Rejected" })); }}>Reject</button>
            </div>
          </div>
        </div>

        <hr />

        <h4>Documents</h4>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {(form.documents || []).map(doc => (
            <div key={doc.id} style={{ border: "1px solid rgba(0,0,0,0.06)", padding: 8, borderRadius: 8, width: 200 }}>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{doc.type}</div>
              <img src={doc.url} alt={doc.type} style={{ width: "100%", height: 100, objectFit: "cover", borderRadius: 6 }} />
              <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
                <button className="btn-small" onClick={() => handleVerify(doc.id, true)}>Verify</button>
                <button className="btn-small danger" onClick={() => handleVerify(doc.id, false)}>Reject</button>
                <div style={{ marginLeft: "auto", alignSelf: "center" }}>{doc.verified ? <Badge>Verified</Badge> : <span className="muted small">Not verified</span>}</div>
              </div>
            </div>
          ))}
        </div>

        <hr />
        <h4>Payments</h4>
        <p><strong>Status:</strong> {form.payment?.status || "N/A"} • <strong>Due:</strong> {form.payment?.amountDue ?? 0}</p>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn" onClick={() => handleMarkPayment({ status: "Paid", amountDue: 0 })}>Mark Paid</button>
          <button className="btn-small" onClick={() => handleMarkPayment({ status: "Pending" })}>Mark Pending</button>
          <button className="btn-small" onClick={() => {
            const url = window.prompt("Receipt URL (for demo):");
            if (url) handleMarkPayment({ receipts: [...(form.payment?.receipts || []), { id: `r${Date.now()}`, url }] , status: "Paid", amountDue: 0});
          }}>Attach Receipt</button>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {(form.payment?.receipts || []).map(r => <a key={r.id} href={r.url} target="_blank" rel="noreferrer" className="btn-small">Receipt</a>)}
        </div>

        <hr />
        <h4>Admin Notes</h4>
        <textarea value={form.notes || ""} onChange={(e) => setForm({ ...form, notes: e.target.value })} />

        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>
          <button className="btn" onClick={save}>Save</button>
          <button className="btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  const CoursesPage = () => (
    <>
      <div className="card">
        <div className="card-head"><h3>Courses</h3>
          <div><button className="btn" onClick={() => { setEditingCourse(null); setShowCourseModal(true); }}><FontAwesomeIcon icon={faPlus} /> Add Course</button></div>
        </div>

        <div className="table">
          <div className="table-row table-head"><div>Course</div><div>Dept</div><div>Duration</div><div>Seats</div><div>Fees</div><div></div></div>
          {courses.map(c => (
            <div className="table-row" key={c.id}>
              <div><strong>{c.name}</strong><div className="muted small">{c.description}</div></div>
              <div>{c.dept}</div><div>{c.duration}</div><div>{c.seats}</div><div className="muted">{c.fees}</div>
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

  const EventsPage = () => (
    <>
      <div className="card">
        <div className="card-head"><h3>Events & News</h3>
          <div><button className="btn" onClick={() => { setEditingEvent(null); setShowEventModal(true); }}><FontAwesomeIcon icon={faPlus} /> New</button></div>
        </div>

        <div className="list">{events.map(e => (
          <div className="list-item" key={e.id}>
            <div><strong>{e.title}</strong><div className="muted small">{e.date} • {e.venue} • {e.type}</div></div>
            <div className="list-actions">
              <Badge>{e.attendees}</Badge>
              <div className="table-actions">
                <button className="btn-small" onClick={() => { setEditingEvent(e); setShowEventModal(true); }}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="btn-small danger" onClick={() => removeEvent(e.id)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
          </div>
        ))}</div>
      </div>

      <Modal show={showEventModal} onClose={() => { setShowEventModal(false); setEditingEvent(null); }} title={editingEvent ? "Edit Event" : "Add Event"}>
        <EventForm initial={editingEvent} onSave={addOrUpdateEvent} onCancel={() => { setShowEventModal(false); setEditingEvent(null); }} />
      </Modal>
    </>
  );

  const AnalyticsPage = () => (
    <div className="grid dashboard-grid">
      <div className="card"><div className="card-head"><h3>Visitor & Application Trends</h3><span className="muted">Interactive overview</span></div><LineChart data={monthlyGrowth} width={420} height={140} /></div>
      <div className="card"><div className="card-head"><h3>Top Courses</h3><span className="muted">Based on seats</span></div><BarChart data={coursePopularity} width={320} height={140} /></div>
    </div>
  );

  const ReviewsPage = () => (
    <div className="card">
      <div className="card-head"><h3>Reviews & Feedback</h3></div>
      <div className="list">{reviews.map(r => (
        <div className="list-item" key={r.id}>
          <div>
            <strong>{r.student}</strong>
            <div className="muted small">{r.date} • <FontAwesomeIcon icon={faStar} /> {r.rating}</div>
            <div>{r.text}</div>
            {r.reply && <div className="reply muted small">Reply: {r.reply}</div>}
          </div>
          <div className="table-actions"><ReplyBox review={r} onReply={(text) => replyToReview(r.id, text)} /></div>
        </div>
      ))}</div>
    </div>
  );

  const SettingsPage = () => (
    <div className="card">
      <div className="card-head"><h3>Settings & Admin</h3></div>
      <div className="form">
        <label>
          Theme
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn-small" onClick={() => setDarkMode(false)} aria-pressed={!darkMode}><FontAwesomeIcon icon={faSun} /> Light</button>
            <button className="btn-small" onClick={() => setDarkMode(true)} aria-pressed={darkMode}><FontAwesomeIcon icon={faMoon} /> Dark</button>
          </div>
        </label>
        <label>
          Role Management
          <select defaultValue="Admin">
            <option>Owner</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </label>
        <label>Subscription plan<input value="Free" readOnly /></label>
        <div className="form-actions"><button className="btn">Save Settings</button></div>
      </div>
    </div>
  );

  const pages = {
    Overview: Overview,
    Profile: ProfilePage,
    Courses: CoursesPage,
    Students: StudentsPage,
    Events: EventsPage,
    Analytics: AnalyticsPage,
    Reviews: ReviewsPage,
    Settings: SettingsPage
  };

  /* Main render */
  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-left">
          <button className="toggle-button" onClick={() => setShowSidebar(s => !s)} aria-label="Toggle sidebar"><FontAwesomeIcon icon={faBars} /></button>
          <div className="logo-container" onClick={() => setActivePage("Overview")} role="button" tabIndex={0}>
            <img src="https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg" alt="logo" className="logo-image" />
            <div className="logo-text">Oceanview University</div>
          </div>
        </div>

        <div className="nav-right">
          <div className="user-controls">
            <button className="theme-toggle" onClick={() => setDarkMode(d => !d)} aria-label="Toggle theme">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <div className="dropdown" ref={dropdownRef}>
              <button className="user-button" onClick={() => setShowUserDropdown(s => !s)} aria-haspopup="true"><FontAwesomeIcon icon={faUser} /></button>
              {showUserDropdown && (
                <div className="dropdown-menu" role="menu">
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
          <div className="content-area">{pages[activePage] ? pages[activePage]() : <p>Not implemented</p>}</div>
        </main>
      </div>
    </div>
  );
}
