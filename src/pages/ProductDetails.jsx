import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/product";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const foundProduct = getProductById(id);

  //   if (!foundProduct) {
  //     navigate("/");
  //     return;
  //   }

  //   setProduct(foundProduct);
  // }, [id, navigate]);

  const product = getProductById(Number(id));

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
