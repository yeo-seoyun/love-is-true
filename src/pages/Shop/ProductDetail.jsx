import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "../../api/pocketbase";
import { getPbImage } from "../../utills/getPbImage";
import LoadingSpinner from "../../components/Loading";
import ReviewSection from "../../components/molecule/ReviewSection";
import QASection from "../../components/molecule/QASection";
import SideBar from "../../components/molecule/SideBar";

function ProductDetail() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await pb.collection("product_luv").getOne(productId);
        setProductData(product);
      } catch (error) {
        console.error("상품을 가져오지 못했습니다.🤯:", error);
      }
    }
    fetchProduct();
  }, [productId]);

  if (!productData) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center m-auto">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-24">
      <section className="w-full h-auto flex justify-between gap-9 m-auto sm:flex-col">
        <article className="w-full space-y-3">
          <img
            src={getPbImage(
              productData.collectionId,
              productData.id,
              productData.photo
            )}
            alt={productData.title}
          />
          <img
            src={getPbImage(
              productData.collectionId,
              productData.id,
              productData.description
            )}
            alt={productData.title}
          />
        </article>
        <SideBar productData={productData} />
      </section>

      <section className="w-full h-auto flex flex-col justify-between gap-9 m-auto">
        <ReviewSection />
        <div className="border" />
        <QASection />
      </section>
    </div>
  );
}

export default ProductDetail;
