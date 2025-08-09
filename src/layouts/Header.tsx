import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" container">
      <div className="absolute z-10 mx-auto w-full h-[100px] border-b-1 border-[#9b9a84] content-center">
        <div className="flex items-center justify-between px-8 py-4 bg-transparent  top-0">
          <div className="flex items-center space-x-2">
            <div className=" rounded-full p-2">
              <span role="img" aria-label="logo">
                🧠
              </span>
            </div>
            <h1 className="text-xl font-bold text-white">MindBalance</h1>
          </div>
          <ul className="flex space-x-10 text-white">
            <li className="hover:text-[#9b9a84] cursor-pointer">Home</li>
            <li className="hover:text-[#9b9a84] cursor-pointer">About Us</li>
            <li className="hover:text-[#9b9a84] cursor-pointer">Services</li>
            <li className="hover:text-[#9b9a84] cursor-pointer">Blog</li>
            <li className="hover:text-[#9b9a84] cursor-pointer">Contact Us</li>
          </ul>
          <Button className="bg-[#9b9a84] text-white p-5 rounded-md font-semibold hover:bg-black">
            <NavLink to="/login">Book An Appointment</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
