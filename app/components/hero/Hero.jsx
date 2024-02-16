"use client"

import HeroButtons from "./HeroButtons";
import HeroTitle from "./HeroTitle";
import HeroDescr from "./HeroDescr";

const Banner = () => {
  return (
    <section className="bg-gray-50 flex items-center justify-center h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          {/* ==== HeroTitle ==== */}
          <HeroTitle />

          {/* ==== Hero descripion ==== */}          
          <HeroDescr />            

          {/* ==== Buttons ==== */}
          <HeroButtons />
        </div>
      </div>
    </section>
  );
};

export default Banner;
