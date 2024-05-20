import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Loading";

function SideBar({ productData }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!productData) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center m-auto">
        <LoadingSpinner />
      </div>
    );
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = Math.max(1, Number(event.target.value));
    setQuantity(value);
  };

  const totalPrice = productData.price * quantity;

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <article className="sticky w-[380px] h-screen top-0 flex flex-col gap-10 justify-center sm:w-[280px] sm:h-[50vh]">
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
            className="bg-gray-300 px-1 py-3"
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
                  className="px-2 py-1 bg-gray-300"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="w-full text-center"
                  aria-label="Quantity"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-2 py-1 bg-gray-300"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <p className="w-full text-end">{totalPrice.toLocaleString()}원</p>
            </div>

            <div className="flex justify-between border-t border-black pt-4">
              <h2>총 상품금액 : </h2> <p>{totalPrice.toLocaleString()}원</p>
            </div>
          </>
        )}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between pb-1 border-b border-black-100">
            <Link to="/" className="hover:text-gray-100">
              BUY NOW
            </Link>
            <Link to="/" className="hover:text-gray-100">
              ADD TO CART
            </Link>
            <Link to="/" className="hover:text-gray-100">
              WISH LIST
            </Link>
          </div>
          <div className="font-Nanum flex items-center justify-between gap-1">
            <p className="text-[10px] flex flex-col">
              <span className="font-bold text-green-100 text-xs -mb-1">
                NAVER
              </span>
              <span className="-mb-2">네이버ID로 간편구매</span>
              <span>네이버페이</span>
            </p>
            <Link
              to=""
              className="w-[127px] h-[37px] bg-naver bg-contain bg-no-repeat bg-center bg-green-100 rounded-sm border"
              aria-label="네이버페이 구매"
            ></Link>
            <Link to="" className="w-[37px] h-[37px] border p-2 text-center">
              찜
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SideBar;
