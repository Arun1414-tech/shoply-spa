import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div className="container" style={{ marginTop: "30px", display: "flex", gap: "30px", flexWrap: "wrap" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "300px", objectFit: "contain", flex: "1 1 300px" }}
      />
      <div style={{ flex: "2 1 400px" }}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold", fontSize: "18px" }}>${product.price}</p>
        <Link to="/products" style={{ color: "#007bff" }}>Back to Products</Link>
      </div>
    </div>
  );
}

export default ProductDetail;
