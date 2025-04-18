import Link from "next/link";

import { ImLinkedin } from "react-icons/im";

import { RxGithubLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Arup_Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#education" className="cursor-pointer">
              Education
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#Contacts" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex">
            <Link href="https://github.com/Arup53">
              <span className="text-4xl text-gray-200">
                <RxGithubLogo />
              </span>
            </Link>
          </div>
          <div className="flex">
            <Link href="https://www.linkedin.com/in/arup-kumar-howlader/">
              <span className="text-4xl text-gray-200">
                <ImLinkedin />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
