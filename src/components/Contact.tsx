import React from 'react';

const ContactPage = () => {
  return (
    <main className="w-full bg-black py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg p-8 md:p-12 space-y-8 mx-auto">
     
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black">Get in Touch</h2>
          <p className="mt-4 text-lg text-black">
            Id love to hear from you Whether youre interested in working together or just want to say hi
            feel free to reach out using the form below
          </p>
        </div>

        {/* Contact Form */}
        <form className="mt-8 space-y-6" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div className="flex flex-col">
              <label htmlFor="name" className="text-white text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                placeholder="Your Name"
                required
              />
            </div>

          
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col mt-4">
            <label htmlFor="message" className="text-white text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="p-3 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-lg transition-all hover:bg-black focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>

        
        <div className="mt-12 text-center text-black">
          <p className="text-sm">You can also reach me through these accounts</p>
          <div className="mt-4 flex justify-center space-x-8">
            <a href="mailto:someone@example.com" className="text-black hover:text-indigo-500 transition font-extrabold">
              
            </a>
            <a href="tel:+1234567890" className="text-black hover:text-indigo-500 transition font-extrabold">
             
              Phone
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-black hover:text-indigo-500 transition font-extrabold">
              
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
