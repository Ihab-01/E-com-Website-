import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-3 text-slate-400 text-sm">
              We'd love to hear from you. Fill out the form or reach out to us through our channels.
            </p>
          </div>

          <div className="mt-12">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Follow us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white text-slate-300 transition-all duration-300 transform hover:scale-110"><FaFacebook /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white text-slate-300 transition-all duration-300 transform hover:scale-110"><FaTwitter /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white text-slate-300 transition-all duration-300 transform hover:scale-110"><FaInstagram /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white text-slate-300 transition-all duration-300 transform hover:scale-110"><FaLinkedin /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-indigo-600 hover:text-white text-slate-300 transition-all duration-300 transform hover:scale-110"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center space-y-2">
              <h3 className="font-bold text-lg">Thank You!</h3>
              <p className="text-sm">Your message has been sent successfully. We'll reply soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Enter your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Enter your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-slate-900 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;