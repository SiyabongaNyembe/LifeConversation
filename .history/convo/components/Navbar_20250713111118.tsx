import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container flex items-center justify-between bg-black w-full">
      <Image
        src="/12737599_coffee_cup_beverage_food_drink_icon.png"
        alt="logo"
        width={48}
        height={48}
      />
      <Image
        src="/menu-bar-icon.svg"
        alt="menu"
        width={48}
        height={48}
        
      />
    </div>
  );
};
