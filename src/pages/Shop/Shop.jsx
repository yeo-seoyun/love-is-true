import { Outlet, useLocation } from "react-router-dom";
import Category from "../../components/molecule/Category";

function Shop() {
  const location = useLocation();
  const shouldShowCategory = !location.pathname.includes("/detail");

  return (
    <>
      <section>
        {shouldShowCategory && (
          <Category
            links={[
              { label: "BEST", path: "/shop", options: { replace: true } },
              { label: "OUTER", path: "/shop/outer" },
              { label: "TOP", path: "/shop/top" },
              { label: "OPS", path: "/shop/ops" },
              { label: "BOTTOM", path: "/shop/bottom" },
              { label: "ACC", path: "/shop/acc" },
            ]}
          />
        )}
      </section>
      <article className="max-w-[70%] m-auto pb-28 md:max-w-[80%]">
        <Outlet />
      </article>
    </>
  );
}

export default Shop;
