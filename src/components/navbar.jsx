import alienSVG from "../assets/alien-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white">
      <div className="flex items-center">
        <img className="w-8" src={alienSVG} alt="Brand logo" />
        <span className="text-3xl font-bold ml-2">ALIEN QR</span>
      </div>
    </nav>
  );
};

export default Navbar;
