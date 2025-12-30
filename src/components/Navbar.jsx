import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#c0973eff",
              color: "#fff",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            S
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#2575fc",
            }}
          >
            Shoply
          </span>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "500",
              color: isActive ? "#2575fc" : "#333",
              borderBottom: isActive ? "2px solid #2575fc" : "none",
              paddingBottom: "4px",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            style={({ isActive }) => ({
              textDecoration: "none",
              fontWeight: "500",
              color: isActive ? "#2575fc" : "#333",
              borderBottom: isActive ? "2px solid #2575fc" : "none",
              paddingBottom: "4px",
            })}
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
