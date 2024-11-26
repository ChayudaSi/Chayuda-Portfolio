function Header() {
  return (
    <div className="bg-gray-800 text-white shadow-xl h-[50px] flex items-center shadow-sm mx-auto fixed top-0 left-0 w-full z-50  mx-auto px-4 flex-wrap">
      <h2 className="font-black text-sm sm:text-base md:text-lg font-black">
        About{" "}
        <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          Chayuda
        </span>
      </h2>
      <div className="grow">
        <div className="flex justify-center gap-2 md:gap-8 font-bold sm:text-left">
          <a href="#home" className="duration-100 hover:underline transition">
            Home
          </a>
          <a href="#about" className="duration-100 hover:underline transition">
            About
          </a>
          <a href="#education" className="duration-100 hover:underline transition">
            Education
          </a>
          <a href="#experience" className="duration-100 hover:underline transition">
            Experience
          </a>
          <a href="#activity" className="duration-100 hover:underline transition">
            Activity
          </a>
          <a href="#skills" className="duration-100 hover:underline transition">
            Skills
          </a>
          <a href="#contact" className="duration-100 hover:underline transition">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
