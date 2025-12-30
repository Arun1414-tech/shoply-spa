import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#2575fc",
        color: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Welcome to Shoply
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "600px",
          marginBottom: "40px",
          lineHeight: "1.6",
        }}
      >
      Discover products. Explore details. Shop smarter
      </p>

      <Link
        to="/products"
        style={{
          padding: "14px 28px",
          backgroundColor: "#ffffff",
          color: "#2575fc",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        Browse Products
      </Link>
    </div>
  );
}

export default Home;
