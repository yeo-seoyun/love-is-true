import { Link } from "react-router-dom";
import { getPbImage } from "../../utills/getPbImage";

function ProductCard({ product }) {
  return (
    <>
      <Link to="/" className="bg-blue-100">
        <div>
          <img
            src={getPbImage(product.collectionId, product.id, product.photo)}
            alt={product.title}
          />
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
