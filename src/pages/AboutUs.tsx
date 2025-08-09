

function AboutUs() {
  return (
    <div>
      <section className="px-8 md:px-16 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start space-x-5">
        
          <div className="space-y-6">
            <div className="bg-[#dfdfdf] shadow-md rounded-2xl p-4 w-1/2 h-[150px] text-[16px]">
                <div className="mb-2 text-[#868571] text-[20px]">★★★★★</div>
                <p className="text-gray-600">Customer Review <strong>30,000</strong></p>
              <div className="flex mt-4 items-center space-x-2">
                <img src="" alt="client1" className="w-8 h-8 rounded-full object-cover" />
                <img src="" alt="client2" className="w-8 h-8 rounded-full object-cover" />
                <img src="" alt="client3" className="w-8 h-8 rounded-full object-cover" />
                <img src="" alt="client4" className="w-8 h-8 rounded-full object-cover" />
                <span className="bg-olive-500 text-white text-xs px-2 py-1 rounded-full">30K</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="./about-img-1.jpg" alt="therapy" className="rounded-xl h-[430px] w-[230px] object-cover" />
              <div className="relative">
                <div className="w-[50px] h-[100px] bg-white absolute top-0 left-0">

                </div>
                <img src="./about-img-2.jpg" alt="counseling" className="rounded-xl w-full h-auto object-cover" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[18px] text-[#9b9a84] tracking-wide mb-2">ABOUT US</p>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
              Guiding minds, healing hearts, finding peace
            </h3>
            <p className="text-gray-600 mb-6">
              At our mental therapy and counseling center, we are dedicated to guiding
              individuals on a journey toward inner peace and resilience..
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold mb-1">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  Our vision is to create a world where mental wellness is accessible,
                  stigma-free, and empowering, enabling individuals to lead.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Our Mission</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Provide Compassionate Care</li>
                  <li>Promote Mental Wellness</li>
                  <li>Encourage Lifelong Healing</li>
                </ul>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-olive-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-olive-700">
                Learn More
              </button>
              <button className="border border-gray-500 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default AboutUs
