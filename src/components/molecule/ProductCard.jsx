import { Link } from "react-router-dom";
import { getPbImage } from "../../utills/getPbImage";

function ProductCard({ product }) {
  return (
    <>
      <Link to="/" className="m-auto">
        <div className="flex flex-col gap-2">
          <img
            src={getPbImage(product.collectionId, product.id, product.photo)}
            alt={product.title}
          />
          <div className="flex flex-col items-center text-sm">
            <h3>{product.title}</h3>
            <p>{product.price}원</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
