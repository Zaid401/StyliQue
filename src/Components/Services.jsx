import React from 'react'
import { Router } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';


function Services() {
  return (
    <>
      <div id='services' className='pt-[80px] pb-[-50px]'>
        <h1 className=' text-3xl font-extrabold text-gray-900 text-center '> OUR SERVICES</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 p-8">
        {/* Service 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="images/hair.jpg"
            alt="Haircut & Styling"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Haircut & Styling</h3>
            <p className="text-gray-600 mb-3">
              Trendy haircuts & professional styling for a fresh look.
            </p>
            <p className="text-lg font-semibold mb-4">From ₹99</p>
            <RouterLink to="/book">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </RouterLink>

          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="images/shaving2.jpg"
            alt="Beard Grooming"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Beard Grooming</h3>
            <p className="text-gray-600 mb-3">
              Luxury trims & sharp beard styles for the perfect look.
            </p>
            <p className="text-lg font-semibold mb-4">From ₹100</p>

             <RouterLink to="/book">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </RouterLink>

          </div>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="images/facial.jpg"
            alt="Facial & Skincare"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Facial & Skincare</h3>
            <p className="text-gray-600 mb-3">
              Glow, relax & rejuvenate with our premium facial treatments.
            </p>
            <p className="text-lg font-semibold mb-4">From ₹250</p>
             <RouterLink to="/book">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </RouterLink>

          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 p-8">
        {/* Service 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="images/keratin.jpg"
            alt="Haircut & Styling"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Keratin Services</h3>
            <p className="text-gray-600 mb-3">
              Smooth, shiny & frizz-free hair with our professional keratin treatment.
            </p>
            <p className="text-lg font-semibold mb-4">From ₹500</p>
             <RouterLink to="/book">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </RouterLink>
          </div>
        </div>

        {/* Service 5 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="images/spa.jpg"
            alt="Beard Grooming"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Massage & Spa</h3>
            <p className="text-gray-600 mb-3">
              Calming massages designed to refresh your mind, body & soul.
            </p>
            <p className="text-lg font-semibold mb-4">From ₹299</p>
             <RouterLink to="/book">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </RouterLink>
          </div>
        </div>

        {/* Service 6 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
          <img
            src="images/female.jpg"
            alt="Facial & Skincare"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Hair Color & Highlights</h3>
            <p className="text-gray-600 mb-3">
              Shiny, long-lasting colors that bring out your personality.
            </p>
            <p className="text-lg font-semibold mb-4">From ₹399</p>
             <RouterLink to="/book">
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Book Now
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services