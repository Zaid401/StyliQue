import React from 'react'

function Testimonials() {
  return (
    <>

    <div id='test' className='pt-[80px]'>
      <h1 className=' text-3xl font-extrabold text-gray-900 text-center'> WHAT OUR CLIENTS SAYS</h1>
    </div>
   
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          {/* <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="images/avatar-1.avif"> */}
          <img src="images/avatar-1.avif" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="" />
          
          <p className="leading-relaxed">"I had a great shave at the salon. The barber was skilled and provided a very clean and precise shave. Very satisfied with the service."</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">RAJ KUMAR </h2>
          <p className="text-gray-500">Shaving </p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
                   <img src="images/avatar-6.avif" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="" />

         
          <p className="leading-relaxed">"The beard trim was great. The barber was very skilled and gave my beard a clean and stylish look. I will definitely return for regular trims."</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Fardeen Mansuri</h2>
          <p className="text-gray-500">Breard Trim </p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
                  
                  <img src="images/avatar-3.avif" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="" />

          <p className="leading-relaxed">"I had a fantastic experience at the salon! My stylist was friendly and gave me the perfect haircut. I will definitely be coming back."</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Pushpa</h2>
          <p className="text-gray-500">Hair Cut</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Testimonials