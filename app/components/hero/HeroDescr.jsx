import { TypeAnimation } from "react-type-animation";

const HeroDescr = () => {
  return (
    <p className="mt-4 md:text-md/relaxed text-gray-500"> 
    <TypeAnimation
      sequence={[
        "Drag and drop your file directly on our cloud and share it with your  friends secuarely with password and send it on email",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
    </p>
  );
};

export default HeroDescr;
