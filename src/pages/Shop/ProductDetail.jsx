import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "../../api/pocketbase";
import { getPbImage } from "../../utills/getPbImage";
import LoadingSpinner from "../../components/Loading";

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

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!productData) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center m-auto">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <section className="w-full h-auto flex justify-between gap-9 m-auto">
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
        <article className="sticky w-[380px] h-screen top-0 flex flex-col gap-10 justify-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">{productData.title}</h2>
            <p>{productData.price.toLocaleString()}원</p>
          </div>
          <div className="flex flex-col gap-6 text-sm">
            <div className="flex flex-col gap-2">
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
            </div>

            {selectedSize && (
              <>
                <div className="w-full flex items-center justify-between text-xs">
                  <label htmlFor="quantity" className="w-full">
                    {productData.title}
                  </label>
                  <div className="w-1/2 flex">
                    <button
                      onClick={decrementQuantity}
                      className="px-2 py-1 bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      min="1"
                      className="w-full text-center"
                    />
                    <button
                      onClick={incrementQuantity}
                      className="px-2 py-1 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <p className="w-full text-end">
                    {totalPrice.toLocaleString()}원
                  </p>
                </div>

                <div className="flex justify-between border-t border-black pt-4">
                  <h2>총 상품금액 : </h2> <p>{totalPrice.toLocaleString()}원</p>
                </div>
              </>
            )}
            <div className="bg-purple-100">장바구니 구매하기</div>
          </div>
        </article>
      </section>
      <section>dd</section>
    </>
  );
}

export default ProductDetail;
