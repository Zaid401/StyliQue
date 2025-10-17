
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react'

function Footer() {
  return (
    <div>


      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p className="mt-4 text-lg text-gray-500">Find us easily through the Google Map location shown below.</p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.0231453699057!2d75.84193675!3d25.1341258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84e580d95819%3A0xb0687999f899483!2sMahaveer%20Nagar%203%2C%20Mahaveer%20Nagar-I%2C%20Mahaveer%20Nagar%20Housing%20Board%20Colony%2C%20Mahaveer%20Nagar%2C%20Kota%2C%20Rajasthan%20324005!5e0!3m2!1sen!2sin!4v1759761672060!5m2!1sen!2sin"
                  width="100%" height="350" style={{ border: 0, loading: "lazy" }}></iframe>
              </div>

              
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">Mahaveer Nagar 3rd, KOTA</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: styliquesaloon@gmail.com</p>
                    <p className="mt-1 text-gray-600">Phone: +91 8302654527</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer 2 */}

        <footer className="bg-gray-100 text-gray-800 py-6 mt-16 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-1 flex flex-col md:flex-row justify-between  items-center">
        {/* Left Side */}
        <p className="text-sm">
          {new Date().getFullYear()} <span className="font-semibold text-[15px] ">designed and developed by <a href="https://www.instagram.com/_zaid_401/?hl=en " className="text-blue-700 hover:underline">Zaid ♥</a>  </span>
        </p>

        
        {/* Right Side - Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/_zaid_401/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300 cursor-pointer" />
          </a>

          <a
            href="https://github.com/zaid401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-700 transition duration-300 cursor-pointer" />
          </a>

          <a
            href="https://linkedin.com/in/zaid401"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
      </section>
    </div>
  )
}

export default Footer