import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://backend-project-production-b12f.up.railway.app/post");
      console.log("DATA:", res.data);
      setPosts(res.data.post);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const container = {
    minHeight: "100vh",
    padding: "90px 30px",
    background: "#0f2027",
    color: "#fff",
  };

  const header = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const card = {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "15px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
    cursor: "pointer",
  };

  const image = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  };

  const caption = {
    padding: "10px",
    fontSize: "14px",
    color: "#ccc",
  };

  const emptyStyle = {
    textAlign: "center",
    marginTop: "50px",
    color: "#aaa",
  };

  return (
    <div style={container}>
      <h1 style={header}>📸 Your Posts</h1>

      {loading ? (
        <p style={emptyStyle}>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p style={emptyStyle}>No posts yet 😢</p>
      ) : (
        <div style={grid}>
          {posts.map((post, i) => (
            <div
              key={i}
              style={card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img src={post.image} alt="post" style={image} />
              <div style={caption}>{post.caption}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPosts;