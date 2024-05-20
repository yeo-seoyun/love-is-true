import { Link } from "react-router-dom";
import logo from "/assets/logo.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const openCategoryModal = () => setCategoryModalOpen(true);
  const closeCategoryModal = () => setCategoryModalOpen(false);

  const handleLinkClick = (e) => {
    closeCategoryModal();
  };

  return (
    <>
      <header className="fixed top-0 px-12 sm:px-6 py-6 z-50">
        <Link to="/">
          <img src={logo} alt="러브이즈트루" className="w-32 md:w-20 sm:w-12" />
        </Link>
      </header>

      <button
        className="lg:hidden w-[1.813rem] h-[1.563rem] bg-contain fixed top-0 right-1 px-8 py-6 z-50"
        onClick={openCategoryModal}
      >
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
      {isCategoryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black-100 bg-opacity-85 text-white flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col items-center justify-center space-y-5 text-xl">
            <Link
              to="/about"
              className="hover:text-black hover:line-through transition-all"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/shop"
              className="hover:text-black hover:line-through transition-all"
              onClick={handleLinkClick}
            >
              Shop
            </Link>
            <Link
              to="/lookbook"
              className="hover:text-black hover:line-through transition-all"
              onClick={handleLinkClick}
            >
              LookBook
            </Link>
            <Link
              to="/login"
              className="hover:text-black hover:line-through transition-all"
              onClick={handleLinkClick}
            >
              Login
            </Link>
            <Link
              to="/"
              className="hover:text-black hover:line-through transition-all"
              onClick={handleLinkClick}
            >
              My Page
            </Link>
            <Link
              to="/"
              className="hover:text-black hover:line-through transition-all"
              onClick={handleLinkClick}
            >
              Community
            </Link>
          </div>
          <div
            className="flex items-center justify-center gap-3 mt-12"
            onClick={closeCategoryModal}
          >
            <h2 className="text-2xl">CLOSE</h2>
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </div>
        </div>
      )}

      <nav className="fixed top-0 right-1 px-12 py-6 flex flex-col gap-3 hover:text-gray-500 z-50 sm:hidden md:hidden">
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
            to="/lookbook"
            className="hover:text-black hover:line-through transition-all"
          >
            LookBook
          </Link>
        </div>
        <div className="flex flex-col items-end">
          <Link
            to="/login"
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
          <Link
            to="/"
            className="hover:text-black hover:line-through transition-all"
          >
            Community
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
