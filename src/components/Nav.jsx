function Header() {
  return (
    <div className="bg-gray-800 text-white shadow-xl h-[50px] flex items-center shadow-sm mx-auto fixed top-0 left-0 w-full z-50 px-4 flex-wrap">
      <div>
        <a href="#home" className="duration-100 transition flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 1 16 16"
            fill="currentColor"
            className="size-6 mr-2"
          >
            <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
          </svg>
          <h2 className="font-black text-s sm:text-base md:text-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              Chayuda
            </span>
          </h2>
        </a>
      </div>

      <div className="grow">
        <div className="flex justify-center gap-2 md:gap-8 font-bold sm:text-left">
          <a href="#about" className="duration-100 hover:underline transition">
            About
          </a>
          <a
            href="#education"
            className="duration-100 hover:underline transition"
          >
            Education
          </a>
          <a
            href="#experience"
            className="duration-100 hover:underline transition"
          >
            Experience
          </a>
          <a
            href="#activity"
            className="duration-100 hover:underline transition"
          >
            Activity
          </a>
          <a href="#skills" className="duration-100 hover:underline transition">
            Skills
          </a>
          <a
            href="#contact"
            className="duration-100 hover:underline transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
