
import React from 'react'
import { Link } from 'react-scroll'

function AboutUs() {
    return (
        <>
            <div id='about' className='pt-[80px] pb-[-50px]'>
                <h1 className=' text-3xl font-extrabold text-gray-900 text-center '> ABOUT</h1>
            </div>

            <div id="about" className="w-full max-w-[1100px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Section */}
                    <div>
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight">
                            WELCOME TO <br /> STYLIQYUE HAIR SALOON
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div>
                        <p className="font-semibold text-gray-700 text-sm sm:text-base leading-relaxed">
                            Welcome to STYLIQYUE HAIR SALOON, where beauty and luxury converge. Our expert stylists are committed to enhancing your unique style with personalized care. Whether it's a chic haircut, vibrant color, or a relaxing spa treatment, we ensure every visit leaves you refreshed and confident. Step into our modern space, and let us pamper you with top-notch service and premium products. Your beauty is our passion.
                        </p>

                        <div className="mt-5">
                            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
                               <Link to="staff" smooth duration={500} >Our Stylist</Link>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs












