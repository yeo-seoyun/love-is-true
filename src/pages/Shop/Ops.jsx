import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductCard from "../../components/molecule/ProductCard";

function Ops() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("product_luv")
          .getFullList({ sort: "-created" });
        setProducts(response);
        const opsProducts = response.filter(
          (product) => product.category === "ops"
        );
        setVisibleProducts(opsProducts);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯: ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-7">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Ops;
