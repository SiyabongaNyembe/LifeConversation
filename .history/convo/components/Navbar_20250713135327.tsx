import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-black px-6 py-4 ">
      <div className="relative">
        <div className="absolute w-full top-1 bottom-0 bg-[linear-gradient(to_right,rgba(255,243,176,0.2),_rgba(255,215,0,0.2),_rgba(218,165,32,0.2),_rgba(13,13,13,0.2))]"></div>
        <Image
          src="/12737599_coffee_cup_beverage_food_drink_icon.png"
          alt="logo"
          width={48}
          height={48}
          className="relative"
        />
      </div>

      <div className="sm:hidden">
        <Image
          src="/64px-Hamburger-menu_-_Delapouite_-_white_-_game-icons.svg.png"
          alt="menu"
          width={48}
          height={48}
        />
      </div>
      <div></div>
      <nav className="flex gap-10 ">
        <a
          href="#"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          About
        </a>
        <a
          href="#"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Seminars
        </a>
        <a
          href="#"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Store
        </a>
        <a
          href="#"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Library
        </a>
        <a
          href="#"
          className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
};
