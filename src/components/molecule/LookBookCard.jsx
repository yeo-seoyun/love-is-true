import { Link } from "react-router-dom";
import { getPbImage } from "../../utills/getPbImage";

function LookbookCard({ product }) {
  return (
    <>
      <Link to="/" className="m-auto">
        <div className="flex flex-col gap-2">
          <img
            src={getPbImage(product.collectionId, product.id, product.photo)}
            alt={product.title}
          />
          <div className="flex flex-col items-center text-sm">
            <h3 className="text-lg">{product.title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default LookbookCard;
