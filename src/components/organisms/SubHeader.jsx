import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SubHeader() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (location.pathname.startsWith("/shop")) {
      setTitle("SHOP");
    } else if (location.pathname.startsWith("/about")) {
      setTitle("ABOUT");
    } else if (location.pathname.startsWith("/lookbook")) {
      setTitle("LOOKBOOK");
    } else {
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
