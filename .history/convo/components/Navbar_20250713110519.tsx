import MenuIcon from "../public/menu-bar-icon.svg";

export const Navbar = () => {
  return (
    <div className="w-full bg-black px-6 py-4 flex items-center justify-between">
      <Image
        src="/12737599_coffee_cup_beverage_food_drink_icon.png"
        alt="logo"
        width={48}
        height={48}
      />
      <MenuIcon className="w-12 h-12 text-white" />
    </div>
  );
};
