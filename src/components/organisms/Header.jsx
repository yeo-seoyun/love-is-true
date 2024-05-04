import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

function Header() {
  return (
    <>
      <header className="w-full fixed top-0 px-12 py-6 flex justify-between items-start">
        <Link to="/">
          <img src={logo} alt="러브이즈트루" className="w-32" />
        </Link>
        <nav className="flex flex-col gap-3 hover:text-gray-500">
          <div className="flex flex-col items-end">
            <Link
              to="/about"
              className="hover:text-black hover:line-through transition-all"
            >
              About
            </Link>
            <Link
              to="/shop"
              className="hover:text-black hover:line-through transition-all"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="hover:text-black hover:line-through transition-all"
            >
              LookBook
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <Link
              to="/"
              className="hover:text-black hover:line-through transition-all"
            >
              Community
            </Link>
            <Link
              to="/"
              className="hover:text-black hover:line-through transition-all"
            >
              Login
            </Link>
            <Link
              to="/"
              className="hover:text-black hover:line-through transition-all"
            >
              My Page
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
