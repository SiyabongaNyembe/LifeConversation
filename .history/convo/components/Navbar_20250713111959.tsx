import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-black px-6 py-4">
      <Image
        src="/12737599_coffee_cup_beverage_food_drink_icon.png"
        alt="logo"
        width={48}
        height={48}
      />
      <
      <Image
        src="/64px-Hamburger-menu_-_Delapouite_-_white_-_game-icons.svg.png"
        alt="menu"
        width={48}
        height={48}
      />
    </div>
  );
};
