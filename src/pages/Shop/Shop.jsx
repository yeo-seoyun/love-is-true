import { Outlet } from "react-router-dom";
import Category from "../../components/molecule/Category";

function Shop() {
  return (
    <>
      <section>
        <Category
          links={[
            {
              label: "BEST",
              path: "/shop",
              options: { replace: true },
            },
            { label: "OUTER", path: "/shop/outer" },
            { label: "TOP", path: "/shop/top" },
            { label: "OPS", path: "/shop/ops" },
            { label: "BOTTOM", path: "/shop/bottom" },
            { label: "ACC", path: "/shop/acc" },
          ]}
        />
      </section>
      <article className="bg-pink-100 mx-48 m-auto">
        <Outlet />
      </article>
    </>
  );
}

export default Shop;
