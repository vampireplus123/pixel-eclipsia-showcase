
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PixelButton from '../components/PixelButton';
import { Gamepad, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // In a real application, you would send the form data to your backend here
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  React.useEffect(() => {
    document.title = "Contact - Eclipsia Game Studio";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="pixel-text text-2xl md:text-3xl text-white mb-8">CONTACT US</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="text-eclipsia-cyan h-8 w-8" />
                </div>
                <h3 className="pixel-text-alt text-lg text-white mb-2">EMAIL US</h3>
                <p className="text-gray-300">info@eclipsia.studio</p>
              </div>
              
              <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue text-center">
                <div className="flex justify-center mb-4">
                  <Gamepad className="text-eclipsia-yellow h-8 w-8" />
                </div>
                <h3 className="pixel-text-alt text-lg text-white mb-2">FOLLOW US</h3>
                <p className="text-gray-300">@EclipsiaGames</p>
              </div>
              
              <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue text-center">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="text-eclipsia-pink h-8 w-8" />
                </div>
                <h3 className="pixel-text-alt text-lg text-white mb-2">DISCORD</h3>
                <p className="text-gray-300">Join our community</p>
              </div>
            </div>
            
            <div className="pixel-borders border-eclipsia-purple p-6 bg-gradient-to-br from-eclipsia-deep-blue to-eclipsia-dark-blue">
              <h2 className="pixel-text text-xl text-white mb-6">GET IN TOUCH</h2>
              
              {formSubmitted ? (
                <div className="text-center p-6">
                  <h3 className="pixel-text text-lg text-eclipsia-cyan mb-4">MESSAGE SENT!</h3>
                  <p className="text-gray-300 mb-4">
                    Thanks for reaching out! We'll get back to you as soon as possible.
                  </p>
                  <div className="w-16 h-16 mx-auto bg-eclipsia-purple/20 rounded-full flex items-center justify-center animate-pulse-pixel">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block pixel-text-alt text-white mb-2">NAME</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-eclipsia-deep-blue text-white border-2 border-eclipsia-purple focus:border-eclipsia-cyan outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block pixel-text-alt text-white mb-2">EMAIL</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-eclipsia-deep-blue text-white border-2 border-eclipsia-purple focus:border-eclipsia-cyan outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block pixel-text-alt text-white mb-2">SUBJECT</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-eclipsia-deep-blue text-white border-2 border-eclipsia-purple focus:border-eclipsia-cyan outline-none"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block pixel-text-alt text-white mb-2">MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full p-3 bg-eclipsia-deep-blue text-white border-2 border-eclipsia-purple focus:border-eclipsia-cyan outline-none resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <PixelButton type="submit" color="cyan" size="lg">
                      Send Message
                    </PixelButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
