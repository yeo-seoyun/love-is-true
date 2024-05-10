import { useEffect, useState } from "react";
import LookbookCard from "../../components/molecule/LookBookCard";
import pb from "../../api/pocketbase";

function Lookbook() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await pb
          .collection("lookbook_luv")
          .getFullList({ sort: "-created" });
        setProducts(response);
      } catch (error) {
        console.error("상품을 불러올 수 없습니다.🤯🤯: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-[1440px] py-28 m-auto grid grid-cols-3 gap-10">
        {products.map((product) => (
          <LookbookCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Lookbook;
