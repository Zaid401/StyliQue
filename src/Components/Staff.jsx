import React from 'react'

function Staff() {
    return (
        <>

                    
            <div id='staff' className='pt-[50px]'>
            <h1  className=' text-3xl font-extrabold pt-[50px] text-gray-900 bg-gray-100 text-center'> OUR STAFF</h1>

            </div>

            <div  className="flex items-center justify-center flex-col sm:flex-row gap-4 p-4 min-h-screen bg-gray-100  ">

                <a  className="group relative block bg-black rounded-lg overflow-hidden cursor-pointer">
                    <img
                        alt=""
                        src="images/staff.jpg"
                        className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">- COLORIST</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">Sophia Monroe</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                   Sophia Monroe is a skilled colourist known for her creativity and precision. Her expert touch transforms every hairstyle into a vibrant work of art, leaving clients truly impressed.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a  className="group relative block bg-black rounded-lg overflow-hidden cursor-pointer">
                    <img
                        alt=""
                        src="images/staff2.jpg"
                        className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">- STYLER</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">Lily Carte</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                    Lily Carte is a skilled hair styler known for her creative touch and modern techniques. Her stylish makeovers and warm personality leave clients feeling confident and refreshed every time.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a  className="group relative block bg-black rounded-lg overflow-hidden cursor-pointer">
                    <img
                        alt=""
                        src="images/staff3.jpg"
                        className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">- BEAUTICIAN</p>

                        <p className="text-xl font-bold text-white sm:text-2xl">Emma Delgado</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">

                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className="text-sm text-white">
                                    Emma Delgado is a talented beautician with a passion for enhancing natural beauty. Her gentle touch, expertise in skincare, and attention to detail make every client feel pampered and radiant.
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Staff