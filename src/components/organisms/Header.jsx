import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

function Header() {
  return (
    <>
      <header className="w-full fixed top-0 px-12 py-6 flex justify-between items-start">
        <img src={logo} alt="러브이즈트루" className="w-36" />
        <nav className="flex flex-col gap-3">
          <div className="flex flex-col items-end">
            <Link to="/">About</Link>
            <Link to="/">Shop</Link>
            <Link to="/">LookBook</Link>
          </div>
          <div className="flex flex-col items-end">
            <Link to="/">Community</Link>
            <Link to="/">Login</Link>
            <Link to="/">My Page</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
