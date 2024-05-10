import { useEffect, useState } from "react";
import pb from "../../api/pocketbase";
import ProductCard from "../../components/molecule/ProductCard";
import LoadingSpinner from "../../components/Loading";

function Top() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("product_luv")
          .getFullList({ sort: "-created" });
        setProducts(response);
        const filteredProducts = response.filter(
          (product) => product.category === "top"
        );
        setVisibleProducts(filteredProducts);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center m-auto">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-7">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Top;
