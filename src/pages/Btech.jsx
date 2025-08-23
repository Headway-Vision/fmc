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
  FileCheck,
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  HelpCircle,
  ChevronDown,
  Download,
  PhoneCall,
} from "lucide-react";

export default function HeroSection() {
  const [openSpec, setOpenSpec] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showInstitutes, setShowInstitutes] = useState(false);

  const specializations = [
    {
      name: "Computer Science (CSE)",
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      details: ["Programming", "Software Engineering", "AI & ML", "Cyber Security"],
    },
    {
      name: "Mechanical Engineering",
      icon: <Cog className="w-8 h-8 text-red-500" />,
      details: ["Thermodynamics", "Robotics", "CAD/CAM", "Production"],
    },
    {
      name: "Civil Engineering",
      icon: <Building className="w-8 h-8 text-green-600" />,
      details: ["Structural Engg", "Construction", "Transportation", "Surveying"],
    },
    {
      name: "AI & Data Science",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      details: ["Machine Learning", "Deep Learning", "Data Analytics", "Big Data"],
    },
    {
      name: "Electrical & Electronics (EEE)",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      details: ["Power Systems", "Control Systems", "Electronics", "Embedded Systems"],
    },
  ];

  const institutes = [
    { name: "IIT Delhi", link: "https://home.iitd.ac.in/" },
    { name: "IIT Bombay", link: "https://www.iitb.ac.in/" },
    { name: "BITS Pilani", link: "https://www.bits-pilani.ac.in/" },
    { name: "Amity University", link: "https://www.amity.edu/" },
  ];

  const faqs = [
    { question: "Duration of B.Tech?", answer: "4 Years" },
    { question: "Can I do B.Tech after diploma?", answer: "Yes, through Lateral Entry (direct 2nd year)." },
    { question: "Which entrance exams are accepted?", answer: "JEE Main, JEE Advanced, CUET, and state-level exams." },
    { question: "What is the average starting salary after B.Tech?", answer: "Between ₹3.5 LPA to ₹10 LPA depending on branch and company." },
    { question: "Is internship mandatory during B.Tech?", answer: "Yes, most universities include internships in the curriculum." },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">B.Tech (Bachelor of Technology)</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Kickstart your engineering career with a 4-year comprehensive program designed to build strong foundations in technology and innovation.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-300" />
              <div>
                <p className="font-semibold">Duration</p>
                <p className="text-sm text-gray-200">4 Years</p>
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
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80" alt="B.Tech Students" className="rounded-2xl shadow-2xl" />
        </motion.div>
      </div>

      {/* ✅ Specializations */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Specializations Offered</h2>
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
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {spec.icon}
                  <h3 className="text-lg font-semibold">{spec.name}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openSpec === index ? "rotate-180" : ""}`} />
              </div>
              {/* Expanded */}
              {openSpec === index && (
                <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.4 }} className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                  {spec.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Eligibility & Admission */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl">
          <div className="flex items-center gap-3 mb-4"><GraduationCap className="w-8 h-8 text-blue-600" /><h3 className="text-xl font-semibold">Eligibility</h3></div>
          <p className="text-gray-700">• 12th PCM (Physics, Chemistry, Mathematics)<br />• Entrance Exams: JEE, CUET</p>
        </motion.div>
        <motion.div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl">
          <div className="flex items-center gap-3 mb-4"><FileCheck className="w-8 h-8 text-green-600" /><h3 className="text-xl font-semibold">Admission</h3></div>
          <p className="text-gray-700">• Entrance / Merit based<br />• Deadlines & Application Guide</p>
        </motion.div>
      </div>

      {/* Curriculum */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><BookOpen className="w-8 h-8 text-indigo-600 mb-3" /><h3 className="text-xl font-semibold mb-2">1st Year</h3><p>Physics, Chemistry, Math, Basic Engg</p></motion.div>
          <motion.div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><BookOpen className="w-8 h-8 text-indigo-600 mb-3" /><h3 className="text-xl font-semibold mb-2">2nd Year</h3><p>Core Engineering Subjects</p></motion.div>
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


      {/* Career */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Career Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><Briefcase className="w-8 h-8 text-blue-600 mb-3" /><h3 className="text-xl font-semibold">Software Engineer</h3><p>Avg Salary: ₹6 LPA</p></div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><Briefcase className="w-8 h-8 text-green-600 mb-3" /><h3 className="text-xl font-semibold">Civil Engineer</h3><p>Avg Salary: ₹4.5 LPA</p></div>
        </div>
      </div>

      {/* Scholarships */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">Scholarships & Financial Aid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-blue-600 mb-3" /><h3 className="text-lg font-semibold">Govt Schemes</h3></div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-green-600 mb-3" /><h3 className="text-lg font-semibold">Private Scholarships</h3></div>
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"><Award className="w-8 h-8 text-purple-600 mb-3" /><h3 className="text-lg font-semibold">Abroad Options</h3></div>
        </div>
      </div>

      {/* ✅ FAQs Accordion */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-md cursor-pointer"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
              </div>
              {openFaq === index && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.4 }} className="mt-3 text-gray-700">
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Take the Next Step</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-500 flex items-center gap-2">Apply Now</button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-600 flex items-center gap-2"><PhoneCall className="w-5 h-5" /> Talk to Counselor</button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 flex items-center gap-2"><Download className="w-5 h-5" /> Download Brochure</button>
        </div>
      </div>
    </section>
  );
}
