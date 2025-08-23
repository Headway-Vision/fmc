import React from "react";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/university-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-purple-900/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Our University
          </h1>
          <p className="text-lg md:text-xl">
            Empowering students to achieve academic excellence and personal growth
          </p>
        </div>
      </section>

      {/* University Overview */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 text-center">
          Our Mission & Vision
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
          Our university is committed to providing world-class education, fostering
          innovative thinking, and nurturing the next generation of leaders. We believe
          in holistic development, research excellence, and creating opportunities for
          every student to thrive in a dynamic global environment.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                World-Class Faculty
              </h3>
              <p className="text-gray-700">
                Learn from experienced educators and industry leaders who are committed
                to student success.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                Modern Facilities
              </h3>
              <p className="text-gray-700">
                Our campus features state-of-the-art labs, libraries, and sports facilities
                to support learning and development.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                Vibrant Community
              </h3>
              <p className="text-gray-700">
                Join a diverse community of students, clubs, and organizations that
                inspire collaboration and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty / Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8 text-center">
          Meet Our Faculty
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Example Faculty Card */}
          {[
            { name: "Dr. Priya Sharma", role: "Head of Computer Science", img: "/images.jpeg" },
            { name: "Dr. Rajesh Kumar", role: "Professor of Physics", img: "/images.jpeg" },
            { name: "Dr. Anjali Mehta", role: "Dean of Humanities", img: "/images.jpeg" },
            { name: "Dr. Sameer Verma", role: "Professor of Mathematics", img: "/images.jpeg" },
          ].map((faculty, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center"
            >
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{faculty.name}</h3>
                <p className="text-gray-500 text-sm">{faculty.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 py-12 mt-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Join Our University?
        </h2>
        <p className="mb-6">
          Explore programs, scholarships, and campus life to start your academic journey.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition">
          Apply Now
        </button>
      </section>

      <Footer />
    </div>
  );
}
