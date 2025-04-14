import React, { useState } from 'react';
import Bottom from '../../../Pages/Bottom/Bottom';
import Navbar from '../../../Navbar/Navbar';

const EventRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    event: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 py-8">
        <div className="w-full max-w-2xl bg-[#1e293b] rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Event Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className="text-white mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-1">College/University</label>
              <input
                type="text"
                name="college"
                placeholder="MMMUT"
                value={formData.college}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-1">Course/Branch</label>
              <input
                type="text"
                name="course"
                placeholder="B.Tech IT"
                value={formData.course}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-1">Year of Study</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              >
                <option value="">Select</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-white mb-1">Select Event</label>
              <select
                name="event"
                value={formData.event}
                onChange={handleChange}
                className="bg-[#334155] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              >
                <option value="">Choose</option>
                <option value="quiz_python_aptitude">Quiz (Python & Aptitude)</option>
                <option value="codebugger">Codebugger</option>
                <optgroup label="Technocratos">
                  <option value="technocratos_dance">• Dance (Solo)</option>
                  <option value="technocratos_dance-g">• Dance (Group)</option>
                  <option value="technocratos_singing">• Singing (Solo)</option>
                  <option value="technocratos_singing-g">• Singing (Group)</option>
                  <option value="technocratos_openmic">• Open Mic</option>
                  <option value="technocratos_drama">• Drama</option>
                  <option value="technocratos_craft">• Craft making</option>
                  <option value="technocratos_paperdance">• Paper dance</option>
                  <option value="technocratos_fashion">• Fashion show</option>
                  <option value="technocratos_sketching">• Sketching</option>
                  <option value="technocratos_mehendi">• Mehendi</option>
                </optgroup>
                <option value="framefiesta">Framefiesta / Multimedia Presentation</option>
                <option value="expert_talk">Expert Talk</option>
                <option value="tech_meme_war">Tech Meme War / Gaming Competition</option>
                <option value="blind_coding">Blind Coding / Code The Canva</option>
                <option value="idea_thon">Idea-thon / Code-Sprint & Prize Distribution</option>
                <option value="formal_event">Formal Event</option>
                <option value="byteburst">ByteBurst</option>
                <option value="programming_workshop">Programming Workshop</option>
                <option value="battle_of_minds">Battle Of Minds (Chess)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default EventRegister;
