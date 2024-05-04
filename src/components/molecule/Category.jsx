import { useLocation, useNavigate } from "react-router-dom";

function Category({ links }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="max-w-[1440px] py-4 m-auto flex items-center justify-center text-sm">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          const buttonClasses = isActive ? "text-black-100" : "text-gray-400";

          return (
            <button
              type="button"
              onClick={() => navigate(link.path, link.options)}
              className={`${buttonClasses} px-3 py-1 rounded sm:text-sm`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Category;
