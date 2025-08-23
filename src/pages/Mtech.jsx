import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Wallet,
  School,
  Cpu,
  Cog,
  Building,
  Brain,
  Zap,
  GraduationCap,
  FileCheck,
  BookOpen,
  ChevronDown,
  University,
  Briefcase,
  Award,
  HelpCircle,
  Download,
  PhoneCall,
} from "lucide-react";

export default function HeroSection() {
  const [openSpec, setOpenSpec] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const specializations = [
    {
      name: "Computer Science (CSE)",
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      details: [
        "Focus on software development, algorithms, databases",
        "Covers AI, ML, Cloud Computing",
        "Prepares for roles in IT & R&D sectors",
      ],
    },
    {
      name: "Mechanical Engineering (ME)",
      icon: <Cog className="w-8 h-8 text-red-500" />,
      details: [
        "Core subjects: Thermodynamics, Robotics",
        "Industry-focused on manufacturing & design",
        "High demand in automobile & aerospace sectors",
      ],
    },
    {
      name: "Civil Engineering",
      icon: <Building className="w-8 h-8 text-green-600" />,
      details: [
        "Structural design, Geotechnical, Construction tech",
        "Focus on infrastructure development",
        "Careers in govt, PSUs, construction firms",
      ],
    },
    {
      name: "AI & Data Science",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      details: [
        "Machine learning, Deep learning, Big Data",
        "Research + Industry-based roles",
        "High-paying opportunities worldwide",
      ],
    },
    {
      name: "Electrical & Electronics (EEE)",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      details: [
        "Power systems, Microelectronics, Signal processing",
        "Opportunities in core industries & startups",
        "Global scope in renewable energy & automation",
      ],
    },
  ];

  const institutes = [
    { name: "IIT Delhi", link: "https://home.iitd.ac.in/" },
    { name: "IIT Bombay", link: "https://www.iitb.ac.in/" },
    { name: "BITS Pilani", link: "https://www.bits-pilani.ac.in/" },
    { name: "Amity University", link: "https://www.amity.edu/" },
  ];

 const [openFaq, setOpenFaq] = useState(null);

const faqs = [
  { question: "Duration of M.Tech?", answer: "2 Years" },
  { question: "Can I do M.Tech after B.Tech?", answer: "Yes, M.Tech is a postgraduate course for B.Tech graduates." },
  { question: "Is GATE mandatory for M.Tech?", answer: "Most top institutes require GATE, but some private universities also accept merit or other exams." },
  { question: "What are the job opportunities after M.Tech?", answer: "R&D Engineer, Software Architect, Data Scientist, University Lecturer, Core Engineering roles." },
  { question: "Can I pursue M.Tech part-time?", answer: "Yes, some institutes offer part-time and executive M.Tech programs for working professionals." },
];


  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            M.Tech (Masters of Technology)
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Advance your engineering career with a 2-year program that focuses
            on innovation, research, and specialization in cutting-edge fields.
          </p>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-300" />
              <div>
                <p className="font-semibold">Duration</p>
                <p className="text-sm text-gray-200">2 Years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wallet className="w-8 h-8 text-green-300" />
              <div>
                <p className="font-semibold">Avg Fees</p>
                <p className="text-sm text-gray-200">₹2 – 5 Lakh</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <School className="w-8 h-8 text-pink-300" />
              <div>
                <p className="font-semibold">Mode</p>
                <p className="text-sm text-gray-200">Full-time</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
            alt="M.Tech Students"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>

{/* ✅ Specializations Accordion in 2 Columns */}
<div className="max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl font-bold text-center mb-10">
    Specializations Offered
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {specializations.map((spec, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer"
        onClick={() => setOpenSpec(openSpec === index ? null : index)}
      >
        {/* Card Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {spec.icon}
            <h3 className="text-lg font-semibold">{spec.name}</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 transform transition-transform ${
              openSpec === index ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expanded Content */}
        {openSpec === index && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 list-disc list-inside text-gray-700 space-y-2"
          >
            {spec.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    ))}
  </div>
</div>

{/* ✅ Top Institutes Table */}
<div className="max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl font-bold text-center mb-10">Top Institutes</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="py-3 px-6 text-left">Institute Name</th>
          <th className="py-3 px-6 text-left">Location</th>
          <th className="py-3 px-6 text-center">Website</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {institutes.map((inst, idx) => (
          <tr
            key={idx}
            className="border-b hover:bg-gray-100 transition"
          >
            <td className="py-3 px-6 font-medium">{inst.name}</td>
            <td className="py-3 px-6">
              {inst.name.includes("Delhi")
                ? "Delhi"
                : inst.name.includes("Bombay")
                ? "Mumbai"
                : inst.name.includes("Pilani")
                ? "Rajasthan"
                : "Noida"}
            </td>
            <td className="py-3 px-6 text-center">
              <a
                href={inst.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Visit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      {/* ✅ Career Opportunities */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Career Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <Briefcase className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p>Avg Salary: ₹6 LPA</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <Briefcase className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-semibold">Data Science Engineer</h3>
            <p>Avg Salary: ₹9.5 LPA</p>
          </div>
        </div>
      </div>

      {/* ✅ Scholarships */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Scholarships & Financial Aid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <Award className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold">Govt Schemes</h3>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <Award className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold">Private Scholarships</h3>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
            <Award className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold">Abroad Options</h3>
          </div>
        </div>
      </div>

    {/* ✅ FAQs Accordion */}
<div className="max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
  <div className="space-y-6">
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-800 p-6 rounded-2xl shadow-md cursor-pointer"
        onClick={() => setOpenFaq(openFaq === index ? null : index)}
      >
        {/* Question */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-lg">{faq.question}</h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 transform transition-transform ${
              openFaq === index ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Answer */}
        {openFaq === index && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4 }}
            className="mt-3 text-gray-700"
          >
            {faq.answer}
          </motion.p>
        )}
      </motion.div>
    ))}
  </div>
</div>


      {/* ✅ Call to Action Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Take the Next Step</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-500 flex items-center gap-2">
            Apply Now
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-600 flex items-center gap-2">
            <PhoneCall className="w-5 h-5" /> Talk to Counselor
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 flex items-center gap-2">
            <Download className="w-5 h-5" /> Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
