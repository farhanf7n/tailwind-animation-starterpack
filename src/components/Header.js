"use client";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" w-full flex justify-center">
      <div className="flex flex-col w-full mx-auto max-w-[600px] gap-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="logo" className="w-5 h-auto" />
            <p className="font-semibold">Tailwind Animations Starter Pack</p>
          </div>
          <a
            href="https://www.linkedin.com/in/farhan-ahmed-1999/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
