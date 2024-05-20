import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductCard from "../../components/molecule/ProductCard";

function Best() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("product_luv")
          .getFullList({ sort: "-created" });
        setProducts(response);
        updateVisibleProducts(response);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯: ", error);
      }
    };
    fetchProducts();
  }, []);

  const updateVisibleProducts = (allProducts, query) => {
    const filteredProducts = query
      ? allProducts.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : allProducts;
    setVisibleProducts(filteredProducts.slice(0, 8));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-7 md:grid-cols-2 sm:grid-cols-1">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Best;
