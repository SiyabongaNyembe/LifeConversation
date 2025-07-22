import "../app/globals.css";
export const Banner = () => {
  return (
    <div className="w-full">
      {/* <div className="py-4 text-center bg-[linear-gradient(to_right,_rgba(13,13,13,0.85),_rgba(255,215,0,0.9),_rgba(218,165,32,0.9),_rgba(13,13,13,0.85))]"> */}
        <p className="text-2xl font-bold  text-black">
          <span className="hidden sm:inline">
            Grow beyond your expectations -
          </span>

          <a href="#" className="underline underline-offset-4 ">
            Tap into the Limitless
          </a>
        </p>
      </div>
    </div>
  );
};
