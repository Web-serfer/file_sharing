import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Buttons } from "./Buttons";



const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <Navbar />
          <Buttons />
        </div>
      </div>
    </header>
  );
};

export default Header;
