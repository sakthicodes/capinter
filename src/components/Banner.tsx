import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-screen ms-5 pt-10 flex flex-col gap-30 sm:h-full xl:gap-0 lgl:flex-row items-center font-titleFont "
    >
      <div className="w-full lgl:w-[60%]">
        <LeftBanner />
      </div>

      {/* Right Banner - 40% */}
      <div className="w-full lgl:w-[40%]">
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;
