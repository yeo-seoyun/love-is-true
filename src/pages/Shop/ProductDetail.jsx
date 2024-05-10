import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "../../api/pocketbase";
import { getPbImage } from "../../utills/getPbImage";

function ProductDetail() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

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

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const totalPrice = productData?.price * quantity;

  if (!productData) {
    return <div>로딩 중...</div>;
  }

  return (
    <section className="flex h-auto relative">
      <article className="space-y-3">
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
          className="w-full"
        />
      </article>
      <article className="fixed w-[35%] max-w-[350px] h-screen top-0 right-[12%] flex flex-col justify-center">
        <div className="bg-pink-100">
          <h2>{productData.title}</h2>
          <p>{productData.price}원</p>
        </div>
        <div className="flex flex-col gap-2 text-black-200">
          <h2>SIZE</h2>
          <select
            name="size"
            id="size"
            className="bg-gray-100 px-1 py-3"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            <option value="" disabled>
              SELECT
            </option>
            {productData.size.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          {selectedSize && (
            <>
              <div className="w-full flex items-center justify-between bg-purple-300">
                <label htmlFor="quantity" className="w-full">
                  {productData.title}
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                  className="w-1/2"
                />
                <p className="w-full text-end">
                  {totalPrice.toLocaleString()}원
                </p>
              </div>
              <div className="flex justify-between">
                <h2>총 상품금액 : </h2> <p>{totalPrice.toLocaleString()}원</p>
              </div>
            </>
          )}
        </div>
      </article>
    </section>
  );
}

export default ProductDetail;
