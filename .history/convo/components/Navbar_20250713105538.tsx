import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container">
      <Image
        src="/12737599_coffee_cup_beverage_food_drink_icon.png"
        alt="logo"
        width={60} 
        height={60} // Set your desired height
      />
    </div>
  );
};
