import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
      url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    perspective: "1200px",
    overflow: "hidden"
  };

  const cardStyle = {
    padding: "50px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    textAlign: "center",
    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    transition: "transform 0.4s ease",
    maxWidth: "500px"
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "12px 25px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s"
  };

  const secondaryBtn = {
    ...buttonStyle,
    background: "transparent",
    border: "1px solid #fff",
    marginLeft: "10px"
  };

  return (
    <div style={containerStyle}>
      
      {/* Glass Card */}
      <div
        style={cardStyle}
        onMouseMove={(e) => {
          const x = (window.innerWidth / 2 - e.clientX) / 30;
          const y = (window.innerHeight / 2 - e.clientY) / 30;
          e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Welcome to Your_Blogs
        </h1>

        <p style={{ color: "#ddd", marginBottom: "20px" }}>
          Reduce food wastage. Earn rewards. Build a better future.
        </p>

        <div>
         <button
  onClick={() => navigate("/createpost")}
  style={{
    padding: "12px 25px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(45deg, #00c6ff, #0072ff)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px"
  }}
>
  Get Started 🚀
</button>

          <button
            style={secondaryBtn}
            onMouseOver={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "transparent")
            }
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Floating Glow Effect */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(0, 198, 255, 0.2)",
          borderRadius: "50%",
          filter: "blur(100px)",
          top: "10%",
          left: "20%"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(0, 114, 255, 0.2)",
          borderRadius: "50%",
          filter: "blur(100px)",
          bottom: "10%",
          right: "20%"
        }}
      />

    </div>
  );
};

export default Home;