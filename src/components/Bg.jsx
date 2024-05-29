import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Bg = () => {
  return (
    <div id="Home">
      <img
        className="w-full h-screen object-cover object-left  "
        src="https://images.unsplash.com/photo-1458442310124-dde6edb43d10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50 ">
        <div className="flex flex-col justify-center items-center mt-[25rem] lg:mt-[30rem]">
          <h1 className="sm:text-7xl text-6xl font-bold text-white">
            {" "}
            I'm Anubhab Paul{" "}
          </h1>
          <h2 className=" flex sm:text-5xl mt-4 text-2xl text-white">
            {" "}
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className=" flex justify-between pt-6 max-w-[200px] w-full text-white gap-2 ">
            <FaFacebookF className="cursor-pointer hover:bg-slate-600 p-2 duration-300 ease-in-out rounded-lg" size={50} />
            <FaLinkedinIn className="cursor-pointer p-2 hover:bg-slate-600 duration-300 ease-in-out rounded-lg" size={50} />
            <FaInstagram className="cursor-pointer p-2 hover:bg-slate-600 duration-300 ease-in-out rounded-lg" size={50} />
            <FaTwitter className="cursor-pointer p-2 hover:bg-slate-600 duration-300 ease-in-out rounded-lg" size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bg;
