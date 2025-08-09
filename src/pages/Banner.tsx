function Banner() {
  return (
    <div>
      <div className="h-full bg-gradient-to-br from-gray-400 to-gray-200">
        {/* Hero Section */}
        <section
          className="p-20 h-[800px] relative  bg-cover bg-center"
          style={{ backgroundImage: "url('./hero-bg-1.jpg')" }}
        >
          <div className="absolute flex flex-col justify-center px-8 md:px-16 w-full h-full bg-gradient-to-b from-gray-900/70 via-black/30 to-gray-900/70 top-0 left-0">
            <div className="max-w-[500px] py-20 mt-20">
              <p className="text-[18px] font-semibold text-white">
                WELCOME TO HIPNO
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight py-4">
                Join Our Team Of Caring Professionals
              </h2>
              <p className="text-white mb-6 text-[18px] ">
                Are you passionate about helping others on their mental health
                journey? Join our dedicated team of compassionate professionals.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-[#9b9a84] text-white p-5 rounded-md font-semibold hover:bg-black">
                  Get Started Today
                </button>
              </div>
            </div>
            <div className="mt-10 hidden md:block border-amber-50 border-t-[1px] w-full">
            <ul className="flex items-center justify-between px-10 pb-6 pt-14 font-semibold text-white">
              <li className="hover:text-[#9b9a84] cursor-pointer">
                Individual Counselling
              </li>
              <li className="hover:text-[#9b9a84] cursor-pointer">
                Couple Counselling
              </li>
              <li className="hover:text-[#9b9a84] cursor-pointer">
                Child Counselling
              </li>
              <li className="hover:text-[#9b9a84] cursor-pointer">
                Family Counselling
              </li>
            </ul>
          </div>
          </div>

          
        </section>
      </div>
    </div>
  );
}

export default Banner;
