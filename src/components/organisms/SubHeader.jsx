import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SubHeader() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/shop":
        setTitle("SHOP");
        break;
      case "/about":
        setTitle("ABOUT");
        break;
      case "/lookbook":
        setTitle("LOOKBOOK");
        break;
      default:
        setTitle("HOME");
    }
  }, [location]);

  return (
    <>
      <div className="w-full h-[10vh] flex items-center justify-center">
        <h1 className="text-lg">{title}</h1>
      </div>
    </>
  );
}

export default SubHeader;
