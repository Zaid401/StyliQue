

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

        <footer class="bg-gray-900">
          <div class="mx-auto max-w-7xl py-2 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div class="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3  ">
              <a href="https://www.facebook.com/" target='blank' class="text-white hover:text-gray-200">
                <span class="sr-only">Facebook</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd" />
                </svg>
              </a>

              <a href="https://x.com/?lang=en" target='blank' class="text-white hover:text-gray-200">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              
            </div>
            <div class="mt-8  md:order-1 md:mt-0 ">
              <p class="text-center text-base text-white">
                &copy; 2025 StyliQue Hair Saloon. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default Footer